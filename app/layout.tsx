import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/site-layout";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});


export const metadata = {
  title: {
    default: "Mindful Moments",
    template: "%s | Mindful Moments",
  },
  description:
    "Mindfulness and compassion resources for teachers, parents, and adults.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${lora.variable}`}>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}