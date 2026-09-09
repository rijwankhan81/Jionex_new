import { notFound } from "next/navigation";
import { promises as fs } from "node:fs";
import path from "node:path";
import {
  abilitiesAR,
  abilitiesBN,
  abilitiesEN,
  abilitiesES,
} from "@/constants/abilities";
import {
  businessSolutionsAR,
  businessSolutionsBN,
  businessSolutionsEN,
  businessSolutionsES,
} from "@/constants/solutions";
import { locales, type Locale } from "@/i18n/config";
import Hero from "@/components/sections/Hero/Hero";
import AbilitiesGrid from "@/components/sections/AbilitiesGrid/AbilitiesGrid";
import BusinessSolutions from "@/components/sections/BusinessSolutions/BusinessSolutions";
import PortfolioShowcase from "@/components/sections/PortfolioShowcase/PortfolioShowcase";
import {
  projectsAR,
  projectsBN,
  projectsEN,
  projectsES,
} from "@/constants/projects";
import ServicesShowcase from "@/components/sections/ServicesShowcase/ServicesShowcase";
import {
  servicesAR,
  servicesBN,
  servicesEN,
  servicesES,
} from "@/constants/services";
import LaunchingSoon from "@/components/sections/LaunchingSoon/LaunchingSoon";
import {
  launchingEN,
  launchingBN,
  launchingAR,
  launchingES,
} from "@/constants/launching";
import ContactShowcase from "@/components/sections/ContactShowcase/ContactShowcase";

export default async function HomePage({
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

  const abilitiesByLocale = {
    en: abilitiesEN,
    bn: abilitiesBN,
    ar: abilitiesAR,
    es: abilitiesES,
  } as const;

  const solutionsByLocale = {
    en: businessSolutionsEN,
    bn: businessSolutionsBN,
    ar: businessSolutionsAR,
    es: businessSolutionsES,
  } as const;

  const projectsByLocale = {
    en: projectsEN,
    bn: projectsBN,
    ar: projectsAR,
    es: projectsES,
  } as const;
  const portfolioItems = projectsByLocale[current].flatMap(
    (group) => group.items,
  );

  const servicesByLocale = {
    en: servicesEN,
    bn: servicesBN,
    ar: servicesAR,
    es: servicesES,
  } as const;

  const launchingByLocale = {
    en: launchingEN,
    bn: launchingBN,
    ar: launchingAR,
    es: launchingES,
  } as const;
  return (
    <main>
      <Hero
        locale={current}
        heading={common.homeBannerHeading}
        description={common.homeBannerDes}
        primaryLabel={common["Let's get started"]}
        secondaryLabel={common["View Products"]}
      />

      <AbilitiesGrid
        locale={current}
        title={common["Our Abilities"] ?? "Our Abilities"}
        description={common["Our Abilities Des"] ?? ""}
        abilities={abilitiesByLocale[current]}
      />

      <BusinessSolutions
        locale={current}
        title={
          common["Comprehensive Business Solutions"] ??
          "Comprehensive Business Solutions"
        }
        items={solutionsByLocale[current]}
      />

      <PortfolioShowcase
        locale={current}
        title={common["Our Products"] ?? "Our Products"}
        items={portfolioItems}
      />
      <LaunchingSoon
        title={common["Launching Soon"] ?? "Launching Soon"}
        items={launchingByLocale[current]}
      />
      <ServicesShowcase
        title={common["Services"] ?? "Services"}
        services={servicesByLocale[current]}
      />
      <ContactShowcase
        heading={common["Contact H"] ?? ""}
        description={common["Contact H Des"] ?? ""}
        scheduleLabel={common["Schedule a meeting"] ?? ""}
        callLabel={common["Call us Now"] ?? ""}
        quoteLabel={common["Request a Quote"] ?? ""}
        buttonLabel={common["Contact us Now"] ?? ""}
        locale={current}
      />
    </main>
  );
}
