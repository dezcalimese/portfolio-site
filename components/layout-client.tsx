"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "@/context/active-section-context";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ActiveSectionContextProvider>
      <Header />
      {children}
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0e0e0d",
            color: "#ebe8e1",
            borderRadius: 0,
            fontSize: "0.8125rem",
          },
        }}
      />
    </ActiveSectionContextProvider>
  );
}
