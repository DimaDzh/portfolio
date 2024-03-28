import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/common/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import HeaderBar from "./components/Header/HeaderBar";
import { fetchAPI, fetchSWRData } from "./utils/fetch-api";
import HireMeBtn from "./components/common/Buttons/HireMeBtn";
import TransitionEffect from "./components/common/TransitionEffect";
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
  const response = await fetchSWRData("/api/menus?populate=*");
  const { data } = response.data[0].attributes.items;

  return data.map(({ attributes }: any) => {
    const slug = attributes.title.toLocaleLowerCase();

    return slug;
  });
};

async function getGlobal() {
  try {
    const response = await fetchSWRData("/api/global?populate=*");

    return response;
  } catch (error) {
    console.error(error);
  }
}
async function getMenus(locale: string): Promise<any> {
  const path = `/menus`;

  const urlParamsObject = {
    nested: true,
    populate: "*",
  };

  const result = await fetchAPI(path, urlParamsObject, {}, locale);

  return result.data;
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const globalInfo = await getGlobal();
  const menusList = await getMenus(params.lang);

  const localMenu = params.lang === "ua" ? menusList[1] : menusList[0];

  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="D4ZbfYfHQmGJG_bt5GLI15BCa0pSGFGdtT-qR7b7ksI"
      />
      <Analytics />
      <GoogleAnalytics measurementId="G-KGRLDV8Z5M" />
      <body className={`${inter.className} scroll-smooth`}>
        <HeaderBar data={globalInfo.data} menus={localMenu} />
        {/* <TransitionEffect /> */}
        <main>{children}</main>
        <HireMeBtn />
      </body>
    </html>
  );
}
