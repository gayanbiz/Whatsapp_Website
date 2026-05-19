"use client";

import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowToUse } from "@/components/HowToUse";
import { Pricing } from "@/components/Pricing";
import { DownloadCTA } from "@/components/DownloadCTA";
import { useLanguage } from "@/lib/useLanguage";

type PageClientProps = {
  version: string;
  downloadUrl: string;
};

export function PageClient({ version, downloadUrl }: PageClientProps) {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col text-slate-900">
      <main className="flex-1">
        <Hero t={t} version={version} />
        <HowToUse t={t} />
        <Pricing t={t} downloadUrl={downloadUrl} />
        <DownloadCTA t={t} version={version} downloadUrl={downloadUrl} />
      </main>
      <Footer t={t} />
    </div>
  );
}
