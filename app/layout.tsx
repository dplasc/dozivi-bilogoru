import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DOŽIVI BILOGORU",
  description: "Digitalna putovnica Bilogore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {/* header prostor kasnije */}
        {children}
        <footer className="border-t py-4 text-center text-sm text-muted-foreground">
          DOŽIVI BILOGORU · Digitalna putovnica Bilogore
        </footer>
      </body>
    </html>
  );
}
