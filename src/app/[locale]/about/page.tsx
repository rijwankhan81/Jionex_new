import { notFound } from "next/navigation";
import { promises as fs } from "node:fs";
import path from "node:path";
import { locales, type Locale } from "@/i18n/config";
import AboutEditorial from "@/components/sections/AboutEditorial/AboutEditorial";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const current = locale as Locale;

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

  return <AboutEditorial locale={current} translations={common} />;
}
