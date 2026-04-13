import type { Metadata } from "next";
import "./globals.css";
import SiteLayout from "@/components/site-layout";

export const metadata: Metadata = {
  title: "Mindful Moments",
  description: "Mindfulness and compassion resources for teachers, parents, and adults.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}