import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AGAP2IT | Quel que soit le défi, nous sommes prêts",
  description: "IT for Business & Collaborateur Centrique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${rajdhani.variable} antialiased dark`}
    >
      <body className="min-h-screen bg-[#020205] text-white font-sans selection:bg-accent-primary/30 selection:text-white flex flex-col relative overflow-x-hidden">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
