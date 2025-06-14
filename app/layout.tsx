import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "crossing field ✨",
  description: "Zenny Personal Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
