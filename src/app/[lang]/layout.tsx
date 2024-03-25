import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/common/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import HeaderBar from "./components/Header/HeaderBar";
import { fetchAPI, fetchSWRData } from "./utils/fetch-api";
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

export const generateStaticParams = async () => {
  const response = await fetchAPI("/api/menus", {
    nested: true,
    populate: "*",
  });
  const { data } = response.data[0].attributes.items;

  return data.map(({ attributes }: any) => {
    const slug = attributes.title.toLocaleLowerCase();

    return slug;
  });
};

async function getGlobal() {
  try {
    const response = await fetchAPI("/api/global", { populate: "*" });

    return response;
  } catch (error) {
    console.error(error);
  }
}
async function getMenus() {
  try {
    const response = await fetchAPI("/api/menus", { populate: "*" });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalInfo = await getGlobal();
  const menusList = await getMenus();

  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="D4ZbfYfHQmGJG_bt5GLI15BCa0pSGFGdtT-qR7b7ksI"
      />
      <Analytics />
      <GoogleAnalytics measurementId="G-KGRLDV8Z5M" />
      <body className={`${inter.className} scroll-smooth `}>
        <HeaderBar data={globalInfo.data} menus={menusList.data} />
        <main>{children}</main>
      </body>
    </html>
  );
}
