import Footer from "@/components/Footer";
import IndigenousEngagement from "@/components/IndigenousEngagement";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indigenous Engagement Strategy | Platinum Track Services",
  description:
    "Learn how Platinum Track Services partners with Indigenous communities through leadership, employment, business development, and community relations guided by our Seven Generations Vision Plan.",
};

export default function IndigenousEngagementPage() {
  return (
    <>
      <Navbar />
      <IndigenousEngagement />
      <Footer />
    </>
  );
}
