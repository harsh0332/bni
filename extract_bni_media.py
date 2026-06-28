#!/usr/bin/env python3
"""
BNI INDORE WEBSITE MEDIA EXTRACTOR
==================================
Downloads every image, video, logo and media-embed link from
https://bni-indore.in into one organized folder on YOUR laptop.

What it does:
  - Visits the homepage + all main subpages (and auto-discovers internal pages)
  - Pulls media from <img>, <source>, <video>, <link icon>, srcset, lazy-load
    attributes (data-src) and CSS background-image rules
  - Collects YouTube / Vimeo / video embed LINKS into a text file
  - Sorts everything into images/ , videos/ , other/
  - Skips duplicates, logs everything

Author: built for Harsh (KliqCraft) for the BNI Dreamers website rebuild.
"""

import os
import re
import time
import hashlib
from urllib.parse import urljoin, urlparse

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("\n[!] Missing libraries. Run this first:\n")
    print("    pip install requests beautifulsoup4\n")
    raise SystemExit(1)

# ----------------------------- CONFIG -----------------------------
BASE = "https://bni-indore.in"

SEED_PAGES = [
    "https://bni-indore.in/en-IN/index",
    "https://bni-indore.in/en-IN/about",
    "https://bni-indore.in/en-IN/howtojoin",
    "https://bni-indore.in/en-IN/findachapter",
    "https://bni-indore.in/en-IN/contactus",
]

OUT_DIR = "bni-indore-assets"
MAX_PAGES = 30          # safety cap so it never runs away
CRAWL_INTERNAL = True   # auto-discover other same-domain pages

IMG_EXT = {".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp", ".ico", ".avif"}
VID_EXT = {".mp4", ".webm", ".mov", ".m4v", ".ogv", ".avi", ".mkv"}

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/124.0 Safari/537.36"
}
# ------------------------------------------------------------------

DIRS = {
    "images": os.path.join(OUT_DIR, "images"),
    "videos": os.path.join(OUT_DIR, "videos"),
    "other":  os.path.join(OUT_DIR, "other"),
}

session = requests.Session()
session.headers.update(HEADERS)

found_media = set()      # absolute URLs of files to download
embed_links = set()      # youtube / vimeo / external video links
visited_pages = set()
log_lines = []


def log(msg):
    print(msg)
    log_lines.append(msg)


def make_dirs():
    for d in DIRS.values():
        os.makedirs(d, exist_ok=True)


def is_same_domain(url):
    return urlparse(url).netloc in ("", urlparse(BASE).netloc)


def categorize(url):
    path = urlparse(url).path.lower()
    ext = os.path.splitext(path)[1]
    if ext in IMG_EXT:
        return "images"
    if ext in VID_EXT:
        return "videos"
    return "other"


def safe_filename(url):
    """Build a clean local filename; add short hash to avoid collisions."""
    path = urlparse(url).path
    name = os.path.basename(path) or "file"
    name = re.sub(r"[^A-Za-z0-9._-]", "_", name)
    if "." not in name:
        name += ".bin"
    short = hashlib.md5(url.encode()).hexdigest()[:6]
    root, ext = os.path.splitext(name)
    return f"{root}_{short}{ext}"


def collect_from_page(url):
    """Fetch a page, harvest media URLs + embed links + internal page links."""
    try:
        r = session.get(url, timeout=20)
        r.raise_for_status()
    except Exception as e:
        log(f"[skip page] {url}  ({e})")
        return []

    soup = BeautifulSoup(r.text, "html.parser")
    internal_pages = []

    # --- <img> : src, data-src, data-original, srcset ---
    for img in soup.find_all("img"):
        for attr in ("src", "data-src", "data-original", "data-lazy"):
            v = img.get(attr)
            if v:
                found_media.add(urljoin(url, v))
        srcset = img.get("srcset")
        if srcset:
            for part in srcset.split(","):
                u = part.strip().split(" ")[0]
                if u:
                    found_media.add(urljoin(url, u))

    # --- <source> inside <picture>/<video> ---
    for src in soup.find_all("source"):
        v = src.get("src")
        if v:
            found_media.add(urljoin(url, v))
        srcset = src.get("srcset")
        if srcset:
            for part in srcset.split(","):
                u = part.strip().split(" ")[0]
                if u:
                    found_media.add(urljoin(url, u))

    # --- <video> src + poster ---
    for vid in soup.find_all("video"):
        for attr in ("src", "poster"):
            v = vid.get(attr)
            if v:
                found_media.add(urljoin(url, v))

    # --- favicon / link icons ---
    for link in soup.find_all("link"):
        rel = " ".join(link.get("rel", [])).lower()
        if "icon" in rel or "image" in rel:
            v = link.get("href")
            if v:
                found_media.add(urljoin(url, v))

    # --- CSS background-image in <style> blocks and inline style="" ---
    css_blob = " ".join(s.get_text() for s in soup.find_all("style"))
    for tag in soup.find_all(style=True):
        css_blob += " " + tag["style"]
    for m in re.findall(r'url\(([\'"]?)(.*?)\1\)', css_blob):
        u = m[1].strip()
        if u and not u.startswith("data:"):
            found_media.add(urljoin(url, u))

    # --- video embeds: iframe + anchor links ---
    for iframe in soup.find_all("iframe"):
        v = iframe.get("src")
        if v and any(k in v.lower() for k in ("youtube", "youtu.be", "vimeo")):
            embed_links.add(urljoin(url, v))
    for a in soup.find_all("a", href=True):
        href = a["href"]
        if any(k in href.lower() for k in ("youtube", "youtu.be", "vimeo")):
            embed_links.add(urljoin(url, href))

    # --- discover internal pages to crawl next ---
    if CRAWL_INTERNAL:
        for a in soup.find_all("a", href=True):
            link = urljoin(url, a["href"])
            link = link.split("#")[0]
            if is_same_domain(link) and link.startswith("http") and link not in visited_pages:
                internal_pages.append(link)

    return internal_pages


def download(url):
    folder_key = categorize(url)
    dest_dir = DIRS[folder_key]
    fname = safe_filename(url)
    dest = os.path.join(dest_dir, fname)
    if os.path.exists(dest):
        return
    try:
        r = session.get(url, timeout=30, stream=True)
        r.raise_for_status()
        with open(dest, "wb") as f:
            for chunk in r.iter_content(8192):
                f.write(chunk)
        log(f"[saved] {folder_key}/{fname}")
    except Exception as e:
        log(f"[fail ] {url}  ({e})")


def main():
    print("\n=== BNI Indore Media Extractor ===\n")
    make_dirs()

    # 1) crawl pages
    queue = list(SEED_PAGES)
    while queue and len(visited_pages) < MAX_PAGES:
        page = queue.pop(0)
        if page in visited_pages:
            continue
        visited_pages.add(page)
        log(f"[page ] {page}")
        new_pages = collect_from_page(page)
        for p in new_pages:
            if p not in visited_pages and p not in queue:
                queue.append(p)
        time.sleep(0.4)  # be polite

    log(f"\nPages scanned : {len(visited_pages)}")
    log(f"Media files    : {len(found_media)}")
    log(f"Video links    : {len(embed_links)}\n")

    # 2) download media
    for i, url in enumerate(sorted(found_media), 1):
        download(url)

    # 3) save video/embed links
    links_path = os.path.join(OUT_DIR, "video-links.txt")
    with open(links_path, "w", encoding="utf-8") as f:
        if embed_links:
            for l in sorted(embed_links):
                f.write(l + "\n")
        else:
            f.write("No YouTube/Vimeo embed links found on the site.\n")

    # 4) save log
    with open(os.path.join(OUT_DIR, "download-log.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(log_lines))

    print("\n========================================")
    print(f"DONE. Everything saved inside the folder:  {OUT_DIR}/")
    print("  - images/         all photos & logos")
    print("  - videos/         any video files")
    print("  - other/          svg / misc assets")
    print("  - video-links.txt YouTube/Vimeo links (if any)")
    print("  - download-log.txt full report")
    print("========================================\n")


if __name__ == "__main__":
    main()
