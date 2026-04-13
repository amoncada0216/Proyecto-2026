"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";

function subscribe() {
  return () => undefined;
}

export function ThemeToggle() {
  const t = useTranslations("ThemeToggle");
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) {
    return (
      <span
        aria-hidden
        className="block size-9 rounded-full border border-border/70 bg-surface/80"
      />
    );
  }

  const isDark = resolvedTheme === "dark";
  const label = isDark ? t("toLight") : t("toDark");

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      className="size-9 rounded-full border border-border/70 bg-surface/80 shadow-soft backdrop-blur-xl"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <SunMedium className="size-3.5" aria-hidden />
      ) : (
        <MoonStar className="size-3.5" aria-hidden />
      )}
    </Button>
  );
}
