"use client";

type HeroProps = {
  t: Function;
  version: string;
  downloadUrl: string;
};

function textOrFallback(t: Function, key: string, fallback: string): string {
  try {
    const value = t?.(key);
    return typeof value === "string" && value.trim().length > 0 ? value : fallback;
  } catch {
    return fallback;
  }
}

export function Hero({ t, version, downloadUrl }: HeroProps) {
  const badgeText = textOrFallback(t, "hero.badge", "WhatsApp Print Manager");
  const headline = textOrFallback(
    t,
    "hero.headline",
    "Manage and print your WhatsApp chats with speed and clarity",
  );
  const subheadline = textOrFallback(
    t,
    "hero.subheadline",
    "Prepare printable chat records in seconds with professional layouts and reliable export options.",
  );
  const downloadLabel = textOrFallback(
    t,
    "hero.downloadBtn",
    "Download for Windows",
  );
  const freeTrialNote = textOrFallback(t, "hero.freeTrialNote", "7-day free trial");

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

        <div className="mt-9 flex flex-col items-center gap-3">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-7 py-4 text-base font-semibold text-[#062313] shadow-[0_14px_35px_rgba(37,211,102,0.3)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(37,211,102,0.42)] active:translate-y-0"
          >
            <span>⬇ {downloadLabel} - v{version}</span>
          </a>
          <p className="text-sm text-white/65">
            {freeTrialNote} · Windows 10/11
          </p>
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
