import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "CV",
  description: "CV of Dzharty Dmytro. You can download CV from page",
};

export default async function LayoutRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="container">{children}</section>;
}
