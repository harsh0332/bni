import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BNI Dreamers Indore",
    short_name: "BNI Dreamers",
    description: "Indore's premier professional networking and business referral chapter of elite entrepreneurs.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#CF2030",
    icons: [
      {
        src: "/images/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
