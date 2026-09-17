import { promises as fs } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";

import TeamEditorial from "@/components/sections/TeamEditorial/TeamEditorial";
import { locales, type Locale } from "@/i18n/config";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;

  const commonPath = path.join(
    process.cwd(),
    "public",
    "locales",
    currentLocale,
    "common.json",
  );

  const common = JSON.parse(await fs.readFile(commonPath, "utf8")) as Record<
    string,
    string
  >;

  return <TeamEditorial locale={currentLocale} translations={common} />;
}
