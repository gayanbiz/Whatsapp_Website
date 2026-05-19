"use client";

import Image from "next/image";

type HeroProps = {
  t: Function;
  version: string;
};

function textOrFallback(t: Function, key: string, fallback: string): string {
  try {
    const value = t?.(key);
    return typeof value === "string" && value.trim().length > 0 ? value : fallback;
  } catch {
    return fallback;
  }
}

export function Hero({ t, version }: HeroProps) {
  const badgeText = textOrFallback(t, "hero.badge", "WhatsApp Print Manager");
  const headline = textOrFallback(
    t,
    "hero.headline",
    "Print Whatsapp customer files fast.",
  );
  const subheadline = textOrFallback(
    t,
    "hero.subheadline",
    "A Windows desktop app for bookshops and print shops to download and print files received via WhatsApp.",
  );

  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(37,211,102,0.28),transparent_70%),linear-gradient(160deg,#07130F_0%,#0A1A16_40%,#101316_100%)] px-4 pb-20 pt-20 text-white sm:px-6 lg:px-8 lg:pt-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.12em] text-emerald-100 uppercase backdrop-blur">
          <span aria-hidden="true">✦</span>
          {badgeText}
        </span>

        <h1
          className="mt-6 text-center text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {headline}
        </h1>

        <p className="mt-5 max-w-2xl text-center text-base leading-relaxed text-white/75 sm:text-lg">
          {subheadline}
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-xs text-white/70 shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:flex-row sm:gap-4">
          <span className="text-[0.65rem] uppercase tracking-[0.28em] text-white/50">
            Powered by
          </span>
          <Image
            src="/branding/biz-software-solutions.png"
            alt="BIZ Software Solutions logo"
            width={320}
            height={320}
            loading="eager"
            className="h-16 w-auto sm:h-20"
          />
          <span className="text-sm font-semibold tracking-wide text-white/85">
            BIZ Software Solutions
          </span>
        </div>

        <div className="mt-12 w-full max-w-5xl rounded-3xl border border-white/10 bg-[#0E1116]/85 p-3 shadow-2xl shadow-black/45 backdrop-blur-md sm:p-5">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0D12]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/3 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
              <span className="ml-3 text-xs text-white/50">WA Print Manager Dashboard</span>
            </div>

            <div className="grid min-h-80 grid-cols-12 gap-0">
              <aside className="col-span-3 border-r border-white/10 bg-white/2 p-4">
                <div className="h-9 w-full rounded-lg bg-emerald-400/20" />
                <div className="mt-4 space-y-2">
                  <div className="h-7 w-full rounded-md bg-white/5" />
                  <div className="h-7 w-11/12 rounded-md bg-white/5" />
                  <div className="h-7 w-10/12 rounded-md bg-white/5" />
                  <div className="h-7 w-full rounded-md bg-white/5" />
                </div>
              </aside>

              <div className="col-span-5 border-r border-white/10 p-4">
                <div className="mb-3 h-8 w-2/3 rounded-md bg-white/6" />
                <div className="space-y-2">
                  <div className="rounded-xl border border-white/10 bg-white/3 p-3">
                    <div className="h-3 w-2/5 rounded bg-emerald-300/45" />
                    <div className="mt-2 h-2.5 w-full rounded bg-white/15" />
                    <div className="mt-1.5 h-2.5 w-10/12 rounded bg-white/10" />
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/3 p-3">
                    <div className="h-3 w-1/3 rounded bg-emerald-300/35" />
                    <div className="mt-2 h-2.5 w-full rounded bg-white/15" />
                    <div className="mt-1.5 h-2.5 w-9/12 rounded bg-white/10" />
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/3 p-3">
                    <div className="h-3 w-1/2 rounded bg-emerald-300/30" />
                    <div className="mt-2 h-2.5 w-full rounded bg-white/15" />
                    <div className="mt-1.5 h-2.5 w-8/12 rounded bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="col-span-4 p-4">
                <div className="h-8 w-1/2 rounded-md bg-white/6" />
                <div className="mt-3 rounded-xl border border-emerald-300/20 bg-emerald-400/10 p-3">
                  <div className="h-3 w-2/3 rounded bg-emerald-200/50" />
                  <div className="mt-2 h-2.5 w-full rounded bg-white/20" />
                  <div className="mt-1.5 h-2.5 w-3/4 rounded bg-white/15" />
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-9 rounded-lg bg-white/6" />
                  <div className="h-9 rounded-lg bg-white/6" />
                  <div className="h-10 rounded-lg bg-[#25D366]/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
