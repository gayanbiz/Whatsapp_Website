type FooterProps = {
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

export function Footer({ t }: FooterProps) {
  const rights = getText(t, "footer.rights", "All rights reserved.");
  const contact = getText(t, "footer.contact", "Contact");

  return (
    <footer className="bg-[#111111] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-4 text-sm sm:grid-cols-3">
        <div className="flex items-center justify-center gap-2 sm:justify-start">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-xs font-bold text-[#0b2a17]">
            WA
          </span>
          <span className="font-medium tracking-wide">WA Print Manager</span>
        </div>

        <p className="text-center text-white/75">
          © {new Date().getFullYear()} {rights}
        </p>

        <div className="flex flex-col items-center gap-2 text-sm sm:items-end sm:justify-self-end">
          <a
            href="mailto:support@waprintmanager.com"
            className="font-medium text-white/85 transition-colors hover:text-[#25D366]"
          >
            {contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
