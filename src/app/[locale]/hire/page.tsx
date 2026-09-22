import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { promises as fs } from "node:fs";
import path from "node:path";
import { locales, type Locale } from "@/i18n/config";
import CareersEditorial from "@/components/sections/CareersEditorial/CareersEditorial";

async function getTranslations(locale: Locale) {
  return JSON.parse(
    await fs.readFile(
      path.join(process.cwd(), "public", "locales", locale, "common.json"),
      "utf8",
    ),
  ) as Record<string, string>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};

  const current = locale as Locale;
  const common = await getTranslations(current);

  return {
    title: `${common["Careers"]} — Jionex`,
    description: common["Hire Banner Des"],
    alternates: { canonical: `/${current}/hire` },
  };
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const current = locale as Locale;
  const common = await getTranslations(current);

  return <CareersEditorial locale={current} translations={common} />;
}
