"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import type { MouseEvent } from "react";

import { SiteShell } from "@/components/layout/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { SnapSection } from "./snap-section";

type SolutionSectionProps = {
  onNavigate: (href: string) => (event: MouseEvent<HTMLAnchorElement>) => void;
};

const benefitKeys = ["benefit1", "benefit2", "benefit3", "benefit4"] as const;
const supportKeys = ["heatBarrier", "moistureBarrier", "vaporBarrier", "acousticAid"] as const;

export function SolutionSection({ onNavigate }: SolutionSectionProps) {
  const t = useTranslations("ScrollSnap.sections.section2");

  return (
    <SnapSection id="solution" tone="about">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(8,11,122,0.1),transparent_30%)]"
      />

      <SiteShell className="relative flex h-full items-center py-24 sm:py-28">
        <div className="grid w-full gap-7 md:grid-cols-[minmax(0,1.12fr)_minmax(19rem,0.88fr)] md:items-center lg:gap-10">
          <div className="max-w-[46rem]">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-foreground-soft/72">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 max-w-[40rem] text-[2.6rem] font-semibold leading-[0.94] tracking-[-0.055em] text-foreground sm:text-[3rem] lg:text-[3.45rem]">
              {t("title")}
            </h2>

            <p className="mt-5 max-w-[38rem] text-[0.97rem] leading-7 text-foreground/82 lg:text-[1rem]">
              {t("problemLine1")}
              <br />
              {t("problemLine2")}
            </p>

            <div className="mt-6 space-y-3 text-[0.94rem] leading-7 text-foreground/80">
              <p>{t("product")}</p>
              <p>{t("howItWorks")}</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefitKeys.map((key) => (
                <div
                  key={key}
                  className="rounded-[1.4rem] border border-border/70 bg-surface/72 p-4 shadow-soft backdrop-blur-sm"
                >
                  <p className="text-[0.9rem] font-semibold tracking-[-0.02em] text-foreground">
                    {t(`${key}.title`)}
                  </p>
                  <p className="mt-1.5 text-[0.85rem] leading-6 text-foreground/72">
                    {t(`${key}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-[39rem] text-[0.92rem] leading-7 text-foreground/78">
              {t("support")}
            </p>

            <div className="mt-5">
              <p className="text-[0.78rem] font-medium uppercase tracking-[0.22em] text-foreground-soft/68">
                {t("ctaSupport")}
              </p>
              <a
                href="#contact"
                onClick={onNavigate("#contact")}
                className={cn(
                  buttonVariants({ variant: "primary" }),
                  "mt-3 h-11 px-6 text-[0.76rem] font-semibold uppercase tracking-[0.2em]",
                )}
              >
                {t("ctaLabel")}
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-border/70 bg-background-elevated/82 p-5 shadow-panel backdrop-blur-xl lg:p-6">
              <div className="rounded-[1.55rem] border border-border/70 bg-surface-quiet/72 p-4 lg:p-5">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-foreground-soft/68">
                  {t("comparisonEyebrow")}
                </p>
                <h3 className="mt-3 text-[1.4rem] font-semibold leading-tight tracking-[-0.04em] text-foreground lg:text-[1.55rem]">
                  {t("comparisonTitle")}
                </h3>
                <p className="mt-2 text-[0.84rem] leading-6 text-foreground/74">
                  {t("comparisonDescription")}
                </p>

                <div className="mt-4 overflow-hidden rounded-[1.55rem] border border-border/70 bg-background/72">
                  <div className="grid grid-cols-2 border-b border-border/70">
                    <div className="bg-[linear-gradient(180deg,rgba(188,223,255,0.45)_0%,rgba(239,247,255,0.88)_100%)] px-4 py-3">
                      <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-primary/78">
                        {t("comparisonWithLabel")}
                      </p>
                      <p className="mt-1 text-[0.8rem] leading-5 text-foreground/68">
                        {t("comparisonWithText")}
                      </p>
                    </div>
                    <div className="bg-[linear-gradient(180deg,rgba(255,225,122,0.42)_0%,rgba(255,244,211,0.9)_100%)] px-4 py-3">
                      <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-foreground/72">
                        {t("comparisonWithoutLabel")}
                      </p>
                      <p className="mt-1 text-[0.8rem] leading-5 text-foreground/68">
                        {t("comparisonWithoutText")}
                      </p>
                    </div>
                  </div>

                  <div className="grid aspect-[4/3] grid-cols-2">
                    <div className="border-r border-border/60 bg-[linear-gradient(180deg,rgba(221,238,255,0.95)_0%,rgba(239,247,255,0.86)_100%)]" />
                    <div className="bg-[linear-gradient(180deg,rgba(255,239,170,0.95)_0%,rgba(255,246,220,0.86)_100%)]" />
                  </div>
                  <div className="border-t border-border/70 px-4 py-3">
                    <p className="text-[0.76rem] uppercase tracking-[0.2em] text-foreground-soft/62">
                      {t("diagramPlaceholder")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {supportKeys.map((key) => (
                  <span
                    key={key}
                    className="inline-flex items-center rounded-full border border-border/70 bg-surface px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground-soft/76"
                  >
                    {t(key)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SiteShell>
    </SnapSection>
  );
}
