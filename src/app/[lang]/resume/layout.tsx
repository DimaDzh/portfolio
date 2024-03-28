import { Metadata } from "next/types";
import React from "react";
import TransitionEffect from "../components/common/TransitionEffect";

export const metadata: Metadata = {
  title: "Curriculum Vitae (CV)",
  description:
    "Download Dzharty Dmytro's CV - Professional Resume and Portfolio",
};

export default async function LayoutRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container">
      <TransitionEffect />
      {children}
    </section>
  );
}
