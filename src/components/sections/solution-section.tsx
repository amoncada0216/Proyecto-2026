"use client";

import {
  ArrowRight,
  Flame,
  Layers3,
  Volume2,
  Waves,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import { SiteShell } from "@/components/layout/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { SnapSection } from "./snap-section";

type SolutionSectionProps = {
  onNavigate: (href: string) => (event: MouseEvent<HTMLAnchorElement>) => void;
};

const benefitKeys = ["benefit1", "benefit2", "benefit3", "benefit4"] as const;
const supportKeys = ["heatBarrier", "moistureBarrier", "vaporBarrier", "acousticAid"] as const;
const supportIcons = [Flame, Waves, Layers3, Volume2] as const;

export function SolutionSection({ onNavigate }: SolutionSectionProps) {
  const t = useTranslations("ScrollSnap.sections.section2");
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setHasEntered(true);
      return;
    }

    const element = sectionRef.current;
    if (!element) {
      return;
    }

    const scrollRoot = element.closest("main");
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry?.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      {
        root: scrollRoot instanceof HTMLElement ? scrollRoot : null,
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [reduceMotion]);

  const leftCardTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.82, ease: [0.22, 1, 0.36, 1] as const };

  const rightCardTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <SnapSection id="solution" tone="about">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(8,11,122,0.1),transparent_30%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-[18%] h-52 w-52 rounded-full bg-white/26 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[22%] h-60 w-60 rounded-full bg-primary/8 blur-3xl"
      />

      <SiteShell className="relative flex h-full items-center py-24 sm:py-28">
        <div
          ref={sectionRef}
          className="grid w-full gap-8 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)] lg:items-stretch xl:gap-10"
        >
          <div className="h-full">
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -180,
                      y: 26,
                      scale: 0.97,
                      filter: "blur(10px)",
                    }
              }
              animate={
                hasEntered || reduceMotion
                  ? {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }
                  : undefined
              }
              transition={leftCardTransition}
              className="flex h-full flex-col rounded-[2rem] border border-border/70 bg-background-elevated/78 p-6 shadow-panel backdrop-blur-xl lg:p-7"
            >
              <h2 className="max-w-[36rem] text-[2.6rem] font-semibold leading-[0.93] tracking-[-0.058em] text-foreground sm:text-[3rem] xl:text-[3.35rem]">
                {t("title")}
              </h2>

              <div className="mt-5 max-w-[38rem] space-y-4 text-[0.98rem] leading-7 text-foreground/82">
                <p>{t("problem")}</p>
                <p>{t("product")}</p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {benefitKeys.map((key, index) => (
                  <div
                    key={key}
                    className="rounded-[1.35rem] border border-border/70 bg-surface/72 p-4 shadow-soft"
                  >
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-primary/68">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-[0.95rem] font-semibold tracking-[-0.02em] text-foreground">
                      {t(`${key}.title`)}
                    </p>
                    <p className="mt-1 text-[0.84rem] leading-6 text-foreground/66">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <p className="text-[0.78rem] font-medium uppercase tracking-[0.22em] text-foreground-soft/66">
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
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 180,
                      y: 26,
                      scale: 0.97,
                      filter: "blur(10px)",
                    }
              }
              animate={
                hasEntered || reduceMotion
                  ? {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }
                  : undefined
              }
              transition={rightCardTransition}
              className="flex h-full flex-col rounded-[2.1rem] border border-border/70 bg-white/92 p-5 shadow-panel lg:p-6"
            >
              <h3 className="text-[1.18rem] font-semibold tracking-[-0.03em] text-foreground">
                {t("comparisonEyebrow")}
              </h3>

              <div className="mt-4 min-h-[18rem] overflow-hidden rounded-[1.7rem] border border-border/80 bg-[linear-gradient(180deg,#ffffff_0%,#f7f9ff_100%)] shadow-soft sm:min-h-[21rem] lg:min-h-[22rem]">
                <div className="relative h-full w-full overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-1/2 border-r border-border/60 bg-[linear-gradient(180deg,rgba(231,241,255,0.92)_0%,rgba(248,251,255,0.96)_100%)]" />
                  <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(180deg,rgba(247,248,251,0.98)_0%,rgba(255,255,255,0.98)_100%)]" />
                  <div className="pointer-events-none absolute inset-x-[28%] top-[9%] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,193,71,0.5)_0%,rgba(255,193,71,0.22)_45%,transparent_72%)] blur-2xl" />
                  <div className="absolute inset-4 rounded-[1.2rem] border border-dashed border-border/45" />
                  <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
                    <div className="rounded-full border border-border/70 bg-white/92 px-4 py-2 shadow-soft">
                      <span className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-foreground-soft/68">
                        {t("diagramPlaceholder")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.35rem] border border-primary/12 bg-primary/4 p-4">
                  <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-primary/82">
                    {t("comparisonWithLabel")}
                  </p>
                  <p className="mt-1.5 text-[0.86rem] leading-6 text-foreground/72">
                    {t("comparisonWithText")}
                  </p>
                </div>

                <div className="rounded-[1.35rem] border border-border/70 bg-surface-quiet/52 p-4">
                  <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-foreground/74">
                    {t("comparisonWithoutLabel")}
                  </p>
                  <p className="mt-1.5 text-[0.86rem] leading-6 text-foreground/72">
                    {t("comparisonWithoutText")}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {supportKeys.map((key, index) => {
                  const Icon = supportIcons[index];

                  return (
                    <div
                      key={key}
                      className="rounded-[1.25rem] border border-border/70 bg-background/72 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-primary/6 p-2 text-primary/70">
                          <Icon className="size-4" aria-hidden />
                        </div>
                        <div>
                          <p className="text-[0.84rem] font-semibold tracking-[-0.01em] text-foreground">
                            {t(`${key}.title`)}
                          </p>
                          <p className="mt-1 text-[0.78rem] leading-5 text-foreground-soft/72">
                            {t(`${key}.subtitle`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </SiteShell>
    </SnapSection>
  );
}
