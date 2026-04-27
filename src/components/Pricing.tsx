"use client";

type PricingProps = {
  t: Function;
};

function getText(t: Function, key: string, fallback: string): string {
  try {
    const value = t?.(key);
    return typeof value === "string" && value.trim().length > 0 ? value : fallback;
  } catch {
    return fallback;
  }
}

function getFeatures(t: Function, fallback: string[]): string[] {
  try {
    const value = t?.("pricing.plan.features");

    if (Array.isArray(value)) {
      const valid = value.filter((item): item is string => typeof item === "string");
      if (valid.length >= 5) {
        return valid.slice(0, 5);
      }
    }

    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) {
          const valid = parsed.filter((item): item is string => typeof item === "string");
          if (valid.length >= 5) {
            return valid.slice(0, 5);
          }
        }
      } catch {
        return fallback;
      }
    }
  } catch {
    return fallback;
  }

  return fallback;
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5 text-[#25D366]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeOpacity="0.35" />
      <path
        d="M6 10.4L8.4 12.8L14 7.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Pricing({ t }: PricingProps) {
  const planName = getText(t, "pricing.plan.name", "Annual Plan");
  const isSinhala = /[\u0D80-\u0DFF]/.test(planName);

  const title = getText(t, "pricing.title", isSinhala ? "මිල ගණන්" : "Pricing");
  const subtitle = getText(
    t,
    "pricing.subtitle",
    isSinhala
      ? "සරල වාර්ෂික සැලැස්මක් සමඟ සියලුම ප්‍රධාන විශේෂාංග ලබාගන්න"
      : "Get all core features with one simple annual plan",
  );
  const badge = getText(
    t,
    "pricing.plan.popular",
    isSinhala ? "ජනප්‍රියම සැලැස්ම" : "Most Popular",
  );
  const price = getText(t, "pricing.plan.price", "LKR 4,800");
  const period = getText(t, "pricing.plan.period", isSinhala ? "වසරකට" : "per year");
  const cta = getText(t, "pricing.plan.cta", isSinhala ? "ආරම්භ කරන්න" : "Get Started");
  const note = getText(
    t,
    "pricing.secureNote",
    isSinhala
      ? "ආරක්ෂිත ගෙවීම · ඕනෑම වේලාවක අවලංගු කරන්න"
      : "Secure payment · Cancel anytime",
  );

  const featureFallback = isSinhala
    ? [
        "අසීමිත චැට් මුද්‍රණය",
        "අභිරුචි මුද්‍රණ ආකෘති සහ පිටු සැකසුම්",
        "PDF ලෙස අපනයනය",
        "ඉක්මන් සහ ස්ථාවර ක්‍රියාකාරීත්වය",
        "අඛණ්ඩ යාවත්කාලීන සහ සහාය",
      ]
    : [
        "Unlimited chat printing",
        "Custom print layouts and page settings",
        "Export as PDF",
        "Fast and reliable performance",
        "Ongoing updates and support",
      ];

  const features = getFeatures(t, featureFallback);

  return (
    <section id="pricing" className="scroll-mt-28 bg-slate-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">{subtitle}</p>
        </div>

        <div className="mt-10 flex justify-center">
          <article className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{planName}</h3>
                <p className="mt-4 flex items-end gap-2 text-slate-900">
                  <span className="text-5xl font-bold leading-none">{price}</span>
                  <span className="pb-1 text-base text-slate-500">{period}</span>
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-[#25D366]/14 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700">
                {badge}
              </span>
            </div>

            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/94XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-5 py-3.5 text-base font-semibold text-[#062313] transition hover:brightness-95"
            >
              {cta}
            </a>

            <p className="mt-4 text-center text-sm text-slate-500">{note}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
