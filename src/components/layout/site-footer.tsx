import { useTranslations } from "next-intl";

import { siteConfig } from "@/lib/constants";
import { SiteShell } from "@/components/layout/site-shell";

export function SiteFooter() {
  const t = useTranslations("Footer");

  return (
    <footer id="next-step" className="pb-6 pt-6 sm:pb-10">
      <SiteShell>
        <div className="rounded-[2rem] border border-border/70 bg-surface/80 p-6 shadow-soft backdrop-blur-xl sm:p-8">
          <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_22rem] sm:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {siteConfig.name}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-foreground sm:text-base">
                {t("status")}
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {t("nextStepLabel")}
              </p>
              <p className="mt-3 text-sm leading-7 text-foreground">
                {t("nextStepValue")}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-border/70 pt-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>{t("legal")}</p>
            <p>{new Date().getFullYear()}</p>
          </div>
        </div>
      </SiteShell>
    </footer>
  );
}
