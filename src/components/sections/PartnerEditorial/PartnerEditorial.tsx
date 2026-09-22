"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  pillersAR,
  pillersBN,
  pillersEN,
  pillersES,
} from "@/constants/partnership-pillers";
import type { Locale } from "@/i18n/config";
import styles from "./PartnerEditorial.module.scss";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  locale: Locale;
  translations: Record<string, string>;
};

const pillarsByLocale = {
  en: pillersEN,
  bn: pillersBN,
  ar: pillersAR,
  es: pillersES,
};

export default function PartnerEditorial({ locale, translations: t }: Props) {
  const pageRef = useRef<HTMLElement | null>(null);
  const pillars = pillarsByLocale[locale];

  useLayoutEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .fromTo(
          "[data-partner-hero-copy]",
          { y: 48, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
        )
        .fromTo(
          "[data-partner-hero-image]",
          { scale: 1.08, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.15 },
          "-=0.65",
        )
        .fromTo(
          "[data-partner-hero-line]",
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.8 },
          "-=0.55",
        );

      gsap.utils
        .toArray<HTMLElement>("[data-partner-reveal]")
        .forEach((item) => {
          gsap.fromTo(
            item,
            { y: 48, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 84%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-pillar-card]")
        .forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 56, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              delay: index * 0.05,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

      gsap.to("[data-partner-orbit]", {
        rotate: 360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className={styles.page}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy} data-partner-hero-copy>
            <div className={styles.rail}>
              <span>01</span>
              <span>{t["Partner With Us"]}</span>
            </div>

            <p className={styles.kicker}>{t["Why Partner With Jionex Des"]}</p>
            <h1>{t["Why Partner With Jionex"]}</h1>

            <div className={styles.heroBottom}>
              <span className={styles.heroNote}>JIONEX / PARTNERSHIP</span>
              <Link
                href={`/${locale}/contact`}
                className={styles.circleLink}
                aria-label={t["Schedule a Free Consultation"]}
              >
                <FiArrowDownRight />
              </Link>
            </div>
            <span className={styles.heroLine} data-partner-hero-line />
          </div>

          <div className={styles.heroVisual} data-partner-hero-image>
            <Image
              src="/images/partnerBanner.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className={styles.heroOverlay} />
            <div className={styles.heroStamp}>JIONEX / 01</div>
            <div className={styles.orbit} data-partner-orbit aria-hidden="true">
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pillarsSection} data-partner-reveal>
        <div className={styles.sectionRail}>
          <span>02</span>
          <span>{t["Our Partnership Pillars"]}</span>
        </div>

        <div className={styles.sectionIntro}>
          <div>
            <span className={styles.eyebrow}>
              {t["Our Partnership Pillars"]}
            </span>
            <h2>{t["Our Partnership Pillars"]}</h2>
          </div>
          <p>{t["Why Partner With Jionex Des"]}</p>
        </div>

        <div className={styles.pillarGrid}>
          {pillars.map((pillar, index) => (
            <article
              className={styles.pillarCard}
              data-pillar-card
              key={pillar.id}
            >
              <div className={styles.pillarImage}>
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 25vw"
                />
                <span className={styles.pillarNumber}>0{index + 1}</span>
              </div>
              <div className={styles.pillarBody}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <span className={styles.cardArrow} aria-hidden="true">
                  <FiArrowUpRight />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.statementSection} data-partner-reveal>
        <div className={styles.sectionRail}>
          <span>03</span>
          <span>{t["Ready to Transform Together"]}</span>
        </div>
        <div className={styles.statementGrid}>
          <span className={styles.eyebrow}>JIONEX</span>
          <h2>{t["Ready to Transform Together"]}</h2>
          <p>{t["Ready to Transform Together Des"]}</p>
          <Link href={`/${locale}/contact`} className={styles.textLink}>
            <span>{t["Contact us today"]}</span>
            <FiArrowUpRight />
          </Link>
        </div>
      </section>

      <section className={styles.ctaSection} data-partner-reveal>
        <div className={styles.ctaInner}>
          <div>
            <span className={styles.eyebrow}>{t["Partner With Us"]}</span>
            <h2>{t["Schedule a Free Consultation"]}</h2>
          </div>
          <Link href={`/${locale}/contact`} className={styles.ctaButton}>
            <span>{t["Schedule a Free Consultation"]}</span>
            <FiArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
