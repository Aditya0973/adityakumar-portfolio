import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/context/ThemeContext";

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
      <body className="min-h-screen bg-[#e9e6e2] text-black antialiased selection:bg-[#4a5d4e] selection:text-[#e5e2de]">
        <ThemeProvider>
          <div className="flex min-h-screen">
            {/* Desktop Fixed Left Sidebar */}
            <Sidebar />

            {/* Main Content Area (offset on desktop by sidebar width) */}
            <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
              <main className="flex-1">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
