import type { Metadata } from "next";
import { JoinClient } from "@/components/pages/JoinClient";

export const metadata: Metadata = {
  title: "Get Invited | Visit BNI Dreamers Indore",
  description: "Request an invitation to visit the BNI Dreamers chapter in Indore this Wednesday. Meet 40+ local business owners and grow your professional referrals.",
  openGraph: {
    title: "Get Invited | Visit BNI Dreamers Indore",
    description: "Request an invitation to visit the BNI Dreamers chapter in Indore this Wednesday.",
  },
};

export default function JoinPage() {
  return <JoinClient />;
}
