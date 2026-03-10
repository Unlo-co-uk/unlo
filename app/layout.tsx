import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unlo — Unlock what you own",
  description: "See your car's value and accessible equity instantly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
