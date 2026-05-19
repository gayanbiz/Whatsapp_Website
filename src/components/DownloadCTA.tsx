"use client";

type DownloadCTAProps = {
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

export function DownloadCTA({ t, version, downloadUrl }: DownloadCTAProps) {
  const downloadLabel = textOrFallback(
    t,
    "hero.downloadBtn",
    "Download for Windows",
  );
  const freeTrialNote = textOrFallback(t, "hero.freeTrialNote", "7-day free trial");
  const ctaHeading = textOrFallback(
    t,
    "downloadCta.heading",
    "Ready to print WhatsApp chats?",
  );
  const ctaSubtext = textOrFallback(
    t,
    "downloadCta.subtext",
    "Download the app now and optimize your printing workflow.",
  );

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-emerald-950 px-6 py-16 text-center text-white shadow-xl sm:px-12 sm:py-20 lg:p-20">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {ctaHeading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-emerald-100/90">
          {ctaSubtext}
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-8 py-4 text-lg font-semibold text-[#062313] shadow-[0_14px_35px_rgba(37,211,102,0.3)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(37,211,102,0.42)] active:translate-y-0"
          >
            <span>⬇ {downloadLabel} - v{version}</span>
          </a>
          <p className="text-sm font-medium tracking-wide text-emerald-200/70">
            {freeTrialNote} · Windows 10/11
          </p>
        </div>
      </div>
    </section>
  );
}