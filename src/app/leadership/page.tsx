import type { Metadata } from "next";
import { LeadershipClient } from "@/components/pages/LeadershipClient";

export const metadata: Metadata = {
  title: "Leadership Team | BNI Dreamers Indore",
  description: "Meet the executive officers leading the BNI Dreamers chapter in Indore, M.P. Learn how they maintain chapter accountability and refer business.",
  openGraph: {
    title: "Leadership Team | BNI Dreamers Indore",
    description: "Meet the executive officers leading the BNI Dreamers chapter in Indore, M.P.",
  },
};

export default function LeadershipPage() {
  return <LeadershipClient />;
}
