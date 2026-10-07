import "./globals.css";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import LayoutClient from "@/components/layout-client";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dez Calimese | Applied AI & Blockchain Engineer",
  description:
    "Dez Calimese is an applied AI and blockchain engineer with 5 years of experience building agent-driven products, integrating third-party AI and crypto infrastructure, and auditing production-grade DeFi protocols across EVM and Solana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="theme-light">
      <body
        className={`${serif.variable} ${sans.variable} ${GeistMono.variable} font-sans`}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
