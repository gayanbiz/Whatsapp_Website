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
    title: "Sign in with WhatsApp Linked Devices using a QR code.",
    description:
      "Open the app, scan the QR code with your phone's WhatsApp Linked Devices feature, and connect securely.",
  },
  {
    title: "View unread chats and file attachments quickly.",
    description:
      "The app automatically syncs your WhatsApp chats, highlighting conversations with new messages and media files.",
  },
  {
    title: "Batch download files and print in one flow.",
    description:
      "As soon as you open a chat, the unread files in it are automatically downloaded and selected.",
  },
  {
    title: "The ability to open files with any application you want",
    description:
      "If you want to open a file with an application instead of printing it, simply right-click the file and choose 'Open with'.",
  },
  {
    title: "Ability to open only selected files from file explorer",
    description:
      "If you want to open only a few files from a chat, you can find them in the file explorer and open them directly without going through the app.",
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
                    {index === 0 ? (
                      <img
                        src="/howto-1.png"
                        alt="WhatsApp Print Manager screenshot"
                        className="mx-auto h-60 w-full max-w-100 rounded-xl border-2 border-slate-200 object-cover"
                      />
                    ) : index === 1 ? (
                      <img
                        src="/howto-2.webp"
                        alt="WhatsApp Print Manager inbox screenshot"
                        className="mx-auto h-60 w-full max-w-100 rounded-xl border-2 border-slate-200 object-cover"
                      />
                    ) : index === 2 ? (
                      <img
                        src="/howto-3.jpg"
                        alt="WhatsApp Print Manager batch download screenshot"
                        className="mx-auto h-60 w-full max-w-100 rounded-xl border-2 border-slate-200 object-cover"
                      />
                    ) : index === 3 ? (
                      <img
                        src="/howto-4.png"
                        alt="WhatsApp Print Manager open with screenshot"
                        className="mx-auto h-60 w-full max-w-100 rounded-xl border-2 border-slate-200 object-cover"
                      />
                    ) : index === 4 ? (
                      <img
                        src="/howto-5.jpg"
                        alt="WhatsApp Print Manager file explorer screenshot"
                        className="mx-auto h-60 w-full max-w-100 rounded-xl border-2 border-slate-200 object-cover"
                      />
                    ) : (
                      <div className="mx-auto flex h-60 w-full max-w-100 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white text-sm font-medium tracking-wide text-slate-500">
                        [ Screenshot ]
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
