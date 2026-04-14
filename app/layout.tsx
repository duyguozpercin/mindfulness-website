import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: {
    default: "Mindful Moments",
    template: "%s | Mindful Moments",
  },
  description:
    "Mindfulness and compassion resources for teachers, parents, and adults.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}