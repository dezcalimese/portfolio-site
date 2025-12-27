import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import LayoutClient from "@/components/layout-client";

export const metadata = {
  title: "Dez Calimese | Full-Stack Blockchain Developer",
  description:
    "Dez Calimese is a full-stack blockchain developer with 4 years of experience building decentralized applications and web interfaces.",
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
