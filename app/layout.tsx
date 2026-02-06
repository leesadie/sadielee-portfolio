import type { Metadata } from "next";
import "./globals.css";

import { font_body } from "./fonts";

export const metadata: Metadata = {
  title: "Sadie Lee",
  description: "Building and evaluating AI/ML systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font_body.className}
      >
        {children}
      </body>
    </html>
  );
}
