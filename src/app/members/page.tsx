import type { Metadata } from "next";
import { MembersClient } from "@/components/pages/MembersClient";

export const metadata: Metadata = {
  title: "Member Directory | BNI Dreamers Indore",
  description: "Secure category exclusivity for your industry. Review our current chapter roster of elite professionals in Indore, Madhya Pradesh.",
  openGraph: {
    title: "Member Directory | BNI Dreamers Indore",
    description: "Review our current chapter roster of elite professionals in Indore.",
  },
};

export default function MembersPage() {
  return <MembersClient />;
}
