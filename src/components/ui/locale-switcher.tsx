"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const localeFlags = {
  es: {
    alt: "Colombian flag",
    src: "/colombia.svg",
  },
  en: {
    alt: "Australian flag",
    src: "/australia.svg",
  },
} as const;

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-surface/80 p-1 shadow-soft backdrop-blur-xl">
      <span className="sr-only">{t("label")}</span>
      {routing.locales.map((nextLocale) => {
        const isActive = nextLocale === locale;
        const flag = localeFlags[nextLocale];

        return (
          <button
            key={nextLocale}
            type="button"
            aria-pressed={isActive}
            aria-label={t(`options.${nextLocale}`)}
            disabled={isPending && !isActive}
            className={cn(
              "inline-flex min-w-12 cursor-pointer items-center gap-2 rounded-full px-2.5 py-1.5 text-[11px] font-semibold tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-primary/6 hover:text-foreground",
            )}
            onClick={() => {
              if (isActive) {
                return;
              }

              startTransition(() => {
                router.replace(pathname, { locale: nextLocale, scroll: false });
              });
            }}
          >
            <span className="overflow-hidden rounded-full">
              <Image
                src={flag.src}
                alt={flag.alt}
                width={16}
                height={16}
                className="size-4 object-cover"
              />
            </span>
            {t(`options.${nextLocale}`)}
          </button>
        );
      })}
    </div>
  );
}
