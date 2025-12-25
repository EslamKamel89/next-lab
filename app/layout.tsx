import BackgroundSvg from "@/components/Layout/BackgroundSvg";
import Header from "@/components/Layout/Header";
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
  title: "Foodies 🍉🍉",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-[Quicksand]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative m-0 bg-[radial-gradient(#282c34,#282c34)]`}
      >
        <BackgroundSvg />
        <Header />
        <main className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
