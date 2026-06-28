# BNI Dreamers Indore - Project Handoff Guide

This handoff guide describes the assets, settings, deployment procedures, and file paths required to finalize the marketing website.

---

## 1. PHOTOS TO COLLECT (Replace Placeholders)
The client must provide the following high-resolution assets to replace placeholders:
1. **Chapter Group Portrait**: A landscape image for the homepage intro/hero section representing the 40+ members.
2. **Real Meeting Photos**: Dynamic, professional pictures showing members networking, presenting, and passing referrals.
3. **Executive Officer Headshots**: Clean, professional portraits (aspect ratio 1:1) for the leadership team:
   - Shreyas Bhokardankar (President)
   - Priyanka Bhatia (Vice President)
   - Dushyant Mangal (Secretary / Treasurer)
   - Sumit Bohare (Membership Coordinator)
4. **Member Roster Photos**: Headshot portraits for directory cards (aspect ratio 5:4) to replace the gradient place-holding avatars.
5. **Venue Photo**: Hotel Sayaji exterior or lobby breakfast/banquet layout to replace placeholders.

*Save these files inside `public/images/` and update references in `src/lib/assets.ts` or in page components.*

---

## 2. DETAILS TO FILL (Variables & Integrations)
Complete or replace the following placeholders currently in the codebase (marked with `// TODO` comments):
1. **WhatsApp & Phone Details**:
   - Update BNI WhatsApp wa.me redirect numbers in `src/app/join/page.tsx` (currently `91XXXXXXXXXX`).
   - Confirm and replace dummy executive officer phone numbers in `src/components/pages/LeadershipClient.tsx` (currently `+91 99999 99999`).
   - Update official contact number and support email (`info@bnidreamers.in`) in `src/components/pages/ContactClient.tsx`.
2. **Form Destination Integration**:
   - Both `/join` (visitor seat reservation) and `/contact` (general query) forms run on client-side React state.
   - You must wire these form submissions to a real email delivery service (e.g. EmailJS, Resend), a CRM endpoint, or a WhatsApp API dispatching service. Check comments in `src/components/pages/JoinClient.tsx` and `src/components/pages/ContactClient.tsx`.
3. **Roster Directory Updates**:
   - Check and add the complete roster list (40+ business owners) in `src/components/pages/MembersClient.tsx` to replace the initial featured list.
4. **Guest Fees Validation**:
   - Confirm if the default indicative guest fee structure (₹800–₹900) for breakfast at Hotel Sayaji matches the latest Indore regional parameters.

---

## 3. HOW TO DEPLOY (Pushing to Vercel)
Deploying this Next.js project to Vercel is straightforward:

### Method A: Vercel GitHub Integration (Recommended)
1. Commit and push the project files to a private/public GitHub repository.
2. Log into your dashboard on [Vercel](https://vercel.com).
3. Click **Add New** -> **Project** and import your repository.
4. Vercel automatically detects Next.js configurations. Keep default build and environment settings.
5. Click **Deploy**. Vercel will build and assign you a free production URL (e.g., `bni-dreamers.vercel.app`). You can bind your custom domain (e.g. `bnidreamers.in`) inside settings.

### Method B: Vercel CLI (Command Line)
1. Run `npm install -g vercel` to install the CLI.
2. Navigate to the project root and run the command `vercel`.
3. Link your project to your Vercel account by responding to prompts.
4. Deploy to production using the command `vercel --prod`.

---

## 4. WHERE TO EDIT (Content & Assets Map)
Refer to the following map to modify copy or styles:
- **Global Design Tokens**: Managed in `tailwind.config.ts` (defining `brand-red`, `brand-red-dark`, `brand-maroon`, etc.).
- **Asset Mappings**: Managed in `src/lib/assets.ts` (assigning image links and SVGs).
- **Homepage Sections**: Located under `src/components/home/` (`Hero.tsx`, `Benefits.tsx`, `StatsStrip.tsx`, etc.).
- **Subpage Contents**:
  - About: `src/app/about/page.tsx`
  - Meetings: `src/app/meetings/page.tsx`
  - Leadership: `src/components/pages/LeadershipClient.tsx` and `src/app/leadership/page.tsx`
  - Members: `src/components/pages/MembersClient.tsx` and `src/app/members/page.tsx`
  - Join Form: `src/components/pages/JoinClient.tsx` and `src/app/join/page.tsx`
  - Contact Form: `src/components/pages/ContactClient.tsx` and `src/app/contact/page.tsx`
