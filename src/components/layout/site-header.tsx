"use client";

import { House } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { MouseEvent } from "react";

import { SiteShell } from "@/components/layout/site-shell";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { withBasePath } from "@/lib/base-path";
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-white">
        <SiteShell>
          <div className="flex min-h-[4.5rem] items-center justify-between gap-6">
            <a
              href="#home"
              onClick={onNavigate("#home")}
              className="inline-flex shrink-0 items-center rounded-md focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Image
                src={withBasePath("/antiblaze.svg")}
                alt={t("brandAlt")}
                width={128}
                height={28}
                priority
                className="h-8 w-auto"
              />
            </a>

            <nav
              aria-label={t("label")}
              className="hidden flex-1 items-center justify-center gap-7 md:flex lg:gap-9 xl:gap-11"
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
                      "relative inline-flex items-center gap-2 py-1.5 text-[0.86rem] font-semibold tracking-[0.015em] text-foreground-soft transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "text-primary after:absolute after:inset-x-0 after:-bottom-[0.18rem] after:h-0.5 after:rounded-full after:bg-primary"
                        : "hover:text-primary",
                    )}
                  >
                    {link.id === "home" ? (
                      <House className="size-3.25" aria-hidden />
                    ) : null}
                    {t(link.label)}
                  </a>
                );
              })}
            </nav>

            <a
              href="#contact"
              onClick={onNavigate("#contact")}
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring hover:bg-primary-strong"
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
