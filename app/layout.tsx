import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import LayoutClient from "@/components/layout-client";

export const metadata = {
  title: "Dez Calimese | Blockchain Security Engineer",
  description:
    "Dez Calimese is a blockchain security engineer and full-stack builder with 5 years of experience auditing and shipping production-grade DeFi infrastructure across EVM and Solana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans text-swiss-text relative pt-28 sm:pt-36`}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
