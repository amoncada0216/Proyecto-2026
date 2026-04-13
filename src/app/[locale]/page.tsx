import { use } from "react";
import { setRequestLocale } from "next-intl/server";

import { ScrollSnapPage } from "@/components/sections/scroll-snap-page";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return <ScrollSnapPage />;
}
