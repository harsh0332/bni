import type { Metadata } from "next";
import { ContactClient } from "@/components/pages/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | BNI Dreamers Indore",
  description: "Get in touch with BNI Dreamers Indore. Find meeting details, our venue at Hotel Sayaji, social coordinates, and send us business inquiries.",
  openGraph: {
    title: "Contact Us | BNI Dreamers Indore",
    description: "Get in touch with BNI Dreamers Indore.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
