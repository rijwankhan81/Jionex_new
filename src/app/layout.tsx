import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jionex — Technology Expertise",
  description: "Jionex digital experience rebuild.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
