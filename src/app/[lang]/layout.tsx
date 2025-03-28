import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/common/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import HeaderBar from "./components/Header/HeaderBar";
import { ViewTransitions } from "next-view-transitions";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Portfolio of Dzharty Dmytro: Projects, Skills, and Contacts",
    template: "%s | Dzharty Dmytro",
  },
  description:
    "Explore the portfolio of Dzharty Dmytro, a skilled front-end developer showcasing own projects and designs",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <meta
          name="google-site-verification"
          content="D4ZbfYfHQmGJG_bt5GLI15BCa0pSGFGdtT-qR7b7ksI"
        />
        <Analytics />
        <GoogleAnalytics measurementId="G-KGRLDV8Z5M" />
        <body className={`${inter.className} `}>
          <HeaderBar />
          <main>
            <>{children}</>
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
