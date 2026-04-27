"use client";

import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowToUse } from "@/components/HowToUse";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { useLanguage } from "@/lib/useLanguage";

type PageClientProps = {
  version: string;
  downloadUrl: string;
};

export function PageClient({ version, downloadUrl }: PageClientProps) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main className="flex-1">
        <Hero t={t} version={version} downloadUrl={downloadUrl} />
        <HowToUse t={t} />
        <Pricing t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
