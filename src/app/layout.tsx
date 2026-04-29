import type { Metadata } from "next";
import { Inter, Noto_Sans_Sinhala } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sinhalaFont = Noto_Sans_Sinhala({
  variable: "--font-sinhala",
  subsets: ["sinhala"],
  display: "swap",
});

const englishFont = Inter({
  variable: "--font-english",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Whatsapp Print Manager",
  description:
    "The easiest way to print and manage your WhatsApp chats. Download free for Windows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="si"
      className={`${sinhalaFont.variable} ${englishFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script id="cleanup-gr-attrs" strategy="beforeInteractive">
          {`document.body?.removeAttribute("data-new-gr-c-s-check-loaded");document.body?.removeAttribute("data-gr-ext-installed");`}
        </Script>
        {children}
      </body>
    </html>
  );
}
