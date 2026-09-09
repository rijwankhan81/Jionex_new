import type { Metadata } from "next";
import { promises as fs } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";

import { localeMeta, locales, type Locale } from "@/i18n/config";

import SiteShell from "@/components/site/SiteShell";
import SiteHeader from "@/components/site/SiteHeader";
import Footer from "@/components/site/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) return {};

  return {
    title: `Jionex — ${localeMeta[locale as Locale].label}`,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const current = locale as Locale;

  // Load current language translations
  const commonPath = path.join(
    process.cwd(),
    "public",
    "locales",
    current,
    "common.json",
  );

  const common = JSON.parse(await fs.readFile(commonPath, "utf8")) as Record<
    string,
    string
  >;

  return (
    <div lang={current} dir={localeMeta[current].dir} data-locale={current}>
      <SiteShell>
        <SiteHeader locale={current} />

        {children}

        <Footer
          locale={current}
          mainBranchLabel={common["Main Branch"] ?? "Main Branch"}
          subBranchesLabel={common["Sub Branches"] ?? "Sub Branches"}
          plannedBranchesLabel={
            common["Planned Branches"] ?? "Planned Branches"
          }
          quickLinksLabel={common["Quick Links"] ?? "Quick Links"}
          allRightsReservedLabel={
            common["All rights reserved"] ?? "All rights reserved"
          }
          privacyPolicyLabel={common["Privacy Policy"] ?? "Privacy Policy"}
          termsLabel={common["Terms of Service"] ?? "Terms of Service"}
        />
      </SiteShell>
    </div>
  );
}
