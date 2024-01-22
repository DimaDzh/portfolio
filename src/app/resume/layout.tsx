import { Metadata } from "next/types";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: "Dzharty_Dmytro_CV",
    description: "CV Front-end developer",
  };
}

export default async function LayoutRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="container">{children}</section>;
}
