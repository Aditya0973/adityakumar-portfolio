import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Aditya Kumar - UI/UX Designer Portfolio",
  description: "Aditya Kumar — UI/UX designer focused on building clean, intuitive digital products for web and mobile, combining usability, visual clarity, and purposeful design.",
  icons: {
    icon: "https://framerusercontent.com/images/ufOc2IY8vYV9YEQuVbYGIRBmtpA.jpg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#e9e6e2] text-black selection:bg-[#4a5d4e] selection:text-[#e5e2de] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
