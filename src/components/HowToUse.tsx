"use client";

type HowToUseStep = {
  title: string;
  description: string;
};

type HowToUseProps = {
  t: Function;
};

const fallbackSteps: HowToUseStep[] = [
  {
    title: "Install the application",
    description:
      "Download WhatsApp Print Manager and complete the setup on your computer.",
  },
  {
    title: "Open WhatsApp Web and log in",
    description:
      "Go to web.whatsapp.com, scan the QR code, and connect your account.",
  },
  {
    title: "Select the chat you want to print",
    description:
      "Choose any personal or group conversation from your chat list.",
  },
  {
    title: "Choose print layout and settings",
    description:
      "Set paper size, date range, and formatting before generating output.",
  },
  {
    title: "Click Print or Export as PDF",
    description:
      "Print directly to your printer or save the conversation as a PDF file.",
  },
];

function getText(t: Function, key: string, fallback: string): string {
  try {
    const value = t?.(key);
    return typeof value === "string" && value.trim().length > 0 ? value : fallback;
  } catch {
    return fallback;
  }
}

function getSteps(t: Function): HowToUseStep[] {
  try {
    const value = t?.("howToUse.steps");

    if (Array.isArray(value)) {
      const valid = value.filter(
        (item): item is HowToUseStep =>
          typeof item?.title === "string" && typeof item?.description === "string",
      );
      if (valid.length === 5) {
        return valid;
      }
    }

    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) {
          const valid = parsed.filter(
            (item): item is HowToUseStep =>
              typeof item?.title === "string" &&
              typeof item?.description === "string",
          );
          if (valid.length === 5) {
            return valid;
          }
        }
      } catch {
        return fallbackSteps;
      }
    }
  } catch {
    return fallbackSteps;
  }

  return fallbackSteps;
}

export function HowToUse({ t }: HowToUseProps) {
  const title = getText(t, "howToUse.title", "How to Use");
  const subtitle = getText(
    t,
    "howToUse.subtitle",
    "Follow these five quick steps to print WhatsApp chats.",
  );
  const steps = getSteps(t);
  const bottomNote = getText(t, "howToUse.screenshotsNote", "Screenshots coming soon");

  return (
    <section id="howToUse" className="scroll-mt-28 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">{subtitle}</p>
        </div>

        <div className="relative mt-12 space-y-12 md:space-y-14">
          <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-px bg-emerald-200 md:block" />

          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isRightAligned = index % 2 === 1;

            return (
              <article key={stepNumber} className="relative">
                <div className="mb-4 flex items-center gap-3 md:absolute md:left-0 md:top-6 md:mb-0 md:z-10">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-300 bg-emerald-50 text-sm font-bold text-emerald-700">
                    {stepNumber}
                  </span>
                </div>

                <div
                  className={
                    "grid gap-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm md:ml-14 md:grid-cols-2 md:items-center md:p-7 " +
                    (isRightAligned ? "" : "")
                  }
                >
                  <div className={isRightAligned ? "md:order-2" : "md:order-1"}>
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {step.description}
                    </p>
                  </div>

                  <div className={isRightAligned ? "md:order-1" : "md:order-2"}>
                    <div className="mx-auto flex h-60 w-full max-w-100 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white text-sm font-medium tracking-wide text-slate-500">
                      [ Screenshot ]
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm font-medium text-slate-500">{bottomNote}</p>
      </div>
    </section>
  );
}
