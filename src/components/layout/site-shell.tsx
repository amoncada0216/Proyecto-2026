import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SiteShellProps = HTMLAttributes<HTMLDivElement>;

export function SiteShell({ className, ...props }: SiteShellProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1728px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24",
        className,
      )}
      {...props}
    />
  );
}
