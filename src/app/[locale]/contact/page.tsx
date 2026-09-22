import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { promises as fs } from "node:fs";
import path from "node:path";
import { locales, type Locale } from "@/i18n/config";
import ContactEditorial from "@/components/sections/ContactEditorial/ContactEditorial";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};

  const current = locale as Locale;
  const common = JSON.parse(
    await fs.readFile(
      path.join(process.cwd(), "public", "locales", current, "common.json"),
      "utf8",
    ),
  ) as Record<string, string>;

  return {
    title: `${common["Contact Us"]} — Jionex`,
    description: common["Contact Banner Des"],
    alternates: { canonical: `/${current}/contact` },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const current = locale as Locale;
  const common = JSON.parse(
    await fs.readFile(
      path.join(process.cwd(), "public", "locales", current, "common.json"),
      "utf8",
    ),
  ) as Record<string, string>;

  return <ContactEditorial locale={current} translations={common} />;
}
