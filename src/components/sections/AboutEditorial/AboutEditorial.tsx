"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  companyValuesAR,
  companyValuesBN,
  companyValuesEN,
  companyValuesES,
} from "@/constants/companyValues";

import styles from "./AboutEditorial.module.scss";

gsap.registerPlugin(ScrollTrigger);

type Locale = "en" | "bn" | "ar" | "es";

type Props = {
  locale: Locale;
  translations: Record<string, string>;
};

const valuesByLocale = {
  en: companyValuesEN,
  bn: companyValuesBN,
  ar: companyValuesAR,
  es: companyValuesES,
};

export default function AboutEditorial({ locale, translations: t }: Props) {
  const rootRef = useRef<HTMLElement>(null);

  const values = valuesByLocale[locale];

  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-about-hero]", {
        y: 55,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.utils.toArray<HTMLElement>("[data-about-reveal]").forEach((item) => {
        gsap.from(item, {
          y: 42,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 86%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-about-image]").forEach((item) => {
        gsap.fromTo(
          item,
          { scale: 1.12 },
          {
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              once: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={rootRef}
      className={styles.page}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.rail}>
            <span>01</span>
            <span>{t["About Banner H"]}</span>
          </div>

          <div className={styles.heroGrid} data-about-hero>
            <h1>{t["About Banner H2"]}</h1>

            <div className={styles.heroCopy}>
              <p className={styles.heroLead}>{t["About Banner Des"]}</p>

              <p>{t["About Banner Des Two"]}</p>

              <p>{t["About Banner Des Three"]}</p>

              <span className={styles.scroll}>{t["Scroll to explore"]} ↓</span>
            </div>
          </div>

          {/* <div className={styles.heroImage} data-about-image>
            <Image
              src="/images/ab1.jpg"
              alt="Jionex"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 78vw"
            />

            <div className={styles.imageCaption}>JIONEX / 2016 — PRESENT</div>
          </div> */}
        </div>
      </section>

      {/* STORY */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.rail}>
            <span>02</span>
            <span>{t["Story H"]}</span>
          </div>

          <div className={styles.storyGrid} data-about-reveal>
            <h2>{t["Story H"]}</h2>

            <div>
              <p className={styles.largeCopy}>{t["Story Des"]}</p>

              <div className={styles.storyRule} />

              <p>{t["We started Des 1"]}</p>

              <p>{t["We started Des 2"]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className={styles.missionVision}>
        <div className={styles.container}>
          <div className={styles.rail}>
            <span>03</span>
            <span>{t["Innovate Forward"]}</span>
          </div>

          <div className={styles.mvGrid}>
            <article className={styles.mvCard} data-about-reveal>
              <div className={styles.mvNumber}>01 /</div>

              <h2>{t["Our mission"]}</h2>

              <p>{t["Our mission Des"]}</p>

              <div className={styles.mvImage} data-about-image>
                <Image
                  src="/images/mission.jpg"
                  alt={t["Our mission"]}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </article>

            <article className={styles.mvCard} data-about-reveal>
              <div className={styles.mvNumber}>02 /</div>

              <h2>{t["Our Vission"]}</h2>

              <p>{t["Our Vission Des"]}</p>

              <div className={styles.mvImage} data-about-image>
                <Image
                  src="/images/vision.jpg"
                  alt={t["Our Vission"]}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
      <section className={styles.origin}>
        <div className={styles.container}>
          <div className={styles.originGrid} data-about-reveal>
            <div className={styles.rail}>
              <span>04</span>
              <span>{t["We started"]}</span>
            </div>

            <div>
              <h2>{t["We started"]}</h2>

              <p>{t["We started Des 3"]}</p>

              <div className={styles.founder}>
                <span>{t["Sakawat Jisan"]}</span>
                <small>{t["Founder & CEO"]}</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.rail}>
            <span>05</span>
            <span>{t["Values"]}</span>
          </div>

          <div className={styles.valuesHead} data-about-reveal>
            <h2>{t["Values"]}</h2>

            <p>{t["Values Des"]}</p>
          </div>

          <div className={styles.valueGrid}>
            {values.map((value, index) => (
              <article
                key={value.title}
                className={styles.valueCard}
                data-about-reveal
              >
                <div className={styles.valueTop}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <span>JIONEX</span>
                </div>

                <div className={styles.valueContent}>
                  <div className={styles.valueImage} data-about-image>
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                    />
                  </div>

                  <div className={styles.valueText}>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.rail}>
            <span>06</span>
            <span>{t["Have any questions"]}</span>
          </div>

          <div className={styles.ctaGrid} data-about-reveal>
            <h2>{t["Have any questions"]}</h2>

            <div>
              <p>{t["Let’s Talk Des"]}</p>

              <Link href={`/${locale}/contact`} className={styles.ctaLink}>
                {t["Contact"]}
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
