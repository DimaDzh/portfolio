import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderLayout from "./components/Header/HeaderLayout";
import GoogleAnalytics from "./components/common/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Dzharty Dmytro Front-end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics measurementId="G-KGRLDV8Z5M" />
      <body className={`${inter.className} scroll-smooth `}>
        <HeaderLayout />
        <main>{children}</main>
      </body>
    </html>
  );
}
