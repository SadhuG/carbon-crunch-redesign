import type { Metadata } from "next";
import { Cairo, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carbon Crunch-Redesign",
  description: "Alternate Design for Carbon Crunch Internship Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${cairo.variable} bg-primary-green-bg font-cairo antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
