import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { I18nProviderClient } from "@/locales/client";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  display: "swap",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI SDK Image Generator",
  description: "An open-source AI image generator using the AI SDK by Vercel",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <I18nProviderClient locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </I18nProviderClient>
        <Analytics />
      </body>
    </html>
  );
}
