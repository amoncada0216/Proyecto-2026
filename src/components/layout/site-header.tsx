"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import type { MouseEvent } from "react";

import { SiteShell } from "@/components/layout/site-shell";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { type NavLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  activeHref: string;
  links: readonly NavLink[];
  onNavigate: (href: string) => (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function SiteHeader({ activeHref, links, onNavigate }: SiteHeaderProps) {
  const t = useTranslations("ScrollSnap.nav");

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-4">
        <SiteShell>
          <div className="flex items-center justify-between gap-3 rounded-full border border-border/70 bg-surface/84 px-4 py-3 shadow-soft backdrop-blur-xl">
            <a
              href="#home"
              onClick={onNavigate("#home")}
              className="flex min-w-0 items-center rounded-full focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Image
                src="/antiblaze.svg"
                alt={t("brandAlt")}
                width={150}
                height={42}
                priority
                className="h-10 w-auto"
              />
            </a>

            <nav
              aria-label={t("label")}
              className="hidden items-center gap-1 rounded-full border border-border/60 bg-background/64 p-1 md:flex"
            >
              {links.map((link) => {
                const isActive = activeHref === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onNavigate(link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {t(link.label)}
                  </a>
                );
              })}
            </nav>

            <a
              href="#contact"
              onClick={onNavigate("#contact")}
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-[12px] font-semibold uppercase tracking-[0.24em] text-background transition-opacity focus-visible:ring-2 focus-visible:ring-ring hover:opacity-90"
            >
              {t("quoteCta")}
            </a>
          </div>
        </SiteShell>
      </header>

      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <div className="flex items-center gap-2 rounded-[1.75rem] border border-border/70 bg-surface/85 p-2 shadow-panel backdrop-blur-xl">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
