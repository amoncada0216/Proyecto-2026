"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteShell } from "@/components/layout/site-shell";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

const sectionThemes = [
  "bg-[linear-gradient(180deg,#f7efe8_0%,#efe0d2_100%)]",
  "bg-[linear-gradient(180deg,#efe0d2_0%,#e2c9b4_100%)]",
  "bg-[linear-gradient(180deg,#dfc0a7_0%,#cd9f82_100%)]",
  "bg-[linear-gradient(180deg,#c58d6b_0%,#9e684b_100%)] text-white",
] as const;

function SnapSection({
  id,
  index,
  isLast,
}: {
  id: string;
  index: number;
  isLast: boolean;
}) {
  const t = useTranslations("ScrollSnap.sections");
  const key = `section${index + 1}` as const;
  const HeadingTag = index === 0 ? "h1" : "h2";

  return (
    <section
      id={id}
      className={cn(
        "relative flex w-full items-center overflow-hidden snap-start",
        isLast ? "min-h-screen" : "h-screen snap-always",
        sectionThemes[index],
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.14),transparent_30%)]"
      />

      <SiteShell className="relative flex h-full items-center py-24 sm:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.32em] opacity-70">
            {t(`${key}.eyebrow`)}
          </p>
          <HeadingTag className="mt-6 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
            {t(`${key}.title`)}
          </HeadingTag>
          <p className="mt-6 max-w-2xl text-base leading-8 opacity-80 sm:text-lg">
            {t(`${key}.description`)}
          </p>
        </div>
      </SiteShell>
    </section>
  );
}

export function ScrollSnapPage() {
  const scrollRef = useRef<HTMLElement | null>(null);
  const [activeHref, setActiveHref] = useState<string>(navLinks[0].href);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) {
      return;
    }

    const sections = navLinks
      .map((link) => scrollContainer.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      {
        root: scrollContainer,
        threshold: 0.4,
        rootMargin: "-80px 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) {
      return;
    }

    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    const target = scrollContainer.querySelector<HTMLElement>(hash);
    if (!target) {
      return;
    }

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }, []);

  function handleNavigate(href: string) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      const scrollContainer = scrollRef.current;
      const target = scrollContainer?.querySelector<HTMLElement>(href);

      if (!target) {
        return;
      }

      setActiveHref(href);
      window.history.replaceState(null, "", href);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }

  return (
    <>
      <SiteHeader
        activeHref={activeHref}
        links={navLinks}
        onNavigate={handleNavigate}
      />

      <main
        ref={scrollRef}
        className="no-scrollbar h-screen overflow-y-scroll overscroll-none snap-y snap-mandatory scroll-smooth"
      >
        {navLinks.map((link, index) => (
          <SnapSection
            key={link.id}
            id={link.id}
            index={index}
            isLast={index === navLinks.length - 1}
          />
        ))}
      </main>
    </>
  );
}
