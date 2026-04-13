"use client";

import { useTranslations } from "next-intl";

import { SiteShell } from "@/components/layout/site-shell";

import { SnapSection } from "./snap-section";

export function ContactSection() {
  const t = useTranslations("ScrollSnap.sections.section4");

  return (
    <SnapSection id="contact" tone="contact" isLast>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_30%)]"
      />

      <SiteShell className="relative flex h-full items-center py-24 sm:py-28">
        <div className="max-w-[67.2rem]">
          <p className="text-sm font-medium uppercase tracking-[0.32em] opacity-70">
            {t("eyebrow")}
          </p>
          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 opacity-80 sm:text-lg">
            {t("description")}
          </p>
        </div>
      </SiteShell>
    </SnapSection>
  );
}
