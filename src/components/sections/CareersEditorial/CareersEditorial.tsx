"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { jobDataAR, jobDataBN, jobDataEN, jobDataES } from "@/constants/jobs";
import type { Locale } from "@/i18n/config";
import styles from "./CareersEditorial.module.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type CareersEditorialProps = {
  locale: Locale;
  translations: Record<string, string>;
};

const jobsByLocale = {
  en: jobDataEN,
  bn: jobDataBN,
  ar: jobDataAR,
  es: jobDataES,
} as const;

export default function CareersEditorial({
  locale,
  translations: t,
}: CareersEditorialProps) {
  const pageRef = useRef<HTMLElement>(null);
  const [fileName, setFileName] = useState("");

  const jobs = jobsByLocale[locale];

  useLayoutEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      const heroCopy = pageRef.current?.querySelector<HTMLElement>(
        "[data-career-hero-copy]",
      );
      const heroImage = pageRef.current?.querySelector<HTMLElement>(
        "[data-career-hero-image]",
      );

      if (heroCopy) {
        gsap.fromTo(
          heroCopy.querySelectorAll("[data-career-intro]"),
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
          },
        );
      }

      if (heroImage) {
        gsap.fromTo(
          heroImage,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.1,
            delay: 0.12,
            ease: "power4.inOut",
          },
        );
      }

      gsap.utils
        .toArray<HTMLElement>("[data-career-reveal]")
        .forEach((item) => {
          gsap.fromTo(
            item,
            { y: 42, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.72,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 86%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-job-card]")
        .forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 34, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.62,
              delay: index * 0.04,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                once: true,
              },
            },
          );
        });
    }, pageRef);

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
          <div className={styles.heroCopy} data-career-hero-copy>
            <div className={styles.rail} data-career-intro>
              <span>01</span>
              <span>{t["Careers"]}</span>
            </div>

            <p className={styles.kicker} data-career-intro>
              {t["Hire Banner H3"]}
            </p>

            <h1 data-career-intro>
              {t["Hire Banner H1"]} <em>{t["Hire Banner H2"]}</em>
            </h1>

            <p className={styles.heroDescription} data-career-intro>
              {t["Hire Banner Des"]}
            </p>

            <div className={styles.heroBottom} data-career-intro>
              <span>JIONEX / CAREERS</span>
              <a
                href="#openings"
                className={styles.circleLink}
                aria-label={t["Explore Current Openings"]}
              >
                ↓
              </a>
            </div>
          </div>

          <div className={styles.heroVisual} data-career-hero-image>
            <Image
              src="/images/hireBanner.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className={styles.heroOverlay} />
            <span className={styles.heroStamp}>JIONEX / 01</span>
          </div>
        </div>
      </section>

      <section id="openings" className={styles.openings} data-career-reveal>
        <div className={styles.sectionRail}>
          <span>02</span>
          <span>{t["Explore Current Openings"]}</span>
        </div>

        <div className={styles.sectionIntro}>
          <div>
            <span className={styles.eyebrow}>{t["Careers"]}</span>
            <h2>{t["Explore Current Openings"]}</h2>
          </div>
          <p>{t["Explore Current Openings Des"]}</p>
        </div>

        <div className={styles.jobsGrid}>
          {jobs.map((job) => (
            <article key={job.id} className={styles.jobCard} data-job-card>
              <div className={styles.jobTop}>
                <span className={styles.jobNumber}>
                  {String(job.id).padStart(2, "0")}
                </span>
                <span className={styles.jobIcon}>{job.icon}</span>
              </div>

              <div className={styles.jobContent}>
                <div className={styles.jobTitleRow}>
                  <h3>{job.title}</h3>
                  <Link href="#apply" className={styles.applyLink}>
                    {t["Apply Now"]} <span>↗</span>
                  </Link>
                </div>

                <p>{job.description}</p>

                <ul className={styles.jobMeta}>
                  <li>{job.location}</li>
                  <li>{job.type}</li>
                  <li>{job.experience}</li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.growth} data-career-reveal>
        <div className={styles.growthImage}>
          <Image
            src="/images/grow.jpeg"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>

        <div className={styles.growthCopy}>
          <div className={styles.sectionRail}>
            <span>03</span>
            <span>{t["Opportunities for Growth"]}</span>
          </div>
          <span className={styles.eyebrow}>
            {t["Opportunities for Growth"]}
          </span>
          <h2>{t["Opportunities for Growth"]}</h2>
          <p>{t["Opportunities for Growth Des"]}</p>
        </div>
      </section>

      <section id="apply" className={styles.applySection} data-career-reveal>
        <div className={styles.sectionRail}>
          <span>04</span>
          <span>{t["Join Us"]}</span>
        </div>

        <div className={styles.applyHeader}>
          <span className={styles.eyebrow}>{t["Join Us"]}</span>
          <h2>
            <span>{t["Join Us"]}</span> {t["and Make an Impact"]}
          </h2>
          <p>{t["Join Us Des"]}</p>
        </div>

        <form
          className={styles.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <div className={styles.formRow}>
            <label>
              <span>{t["Your Name"]} *</span>
              <input type="text" required />
            </label>
            <label>
              <span>{t["Your E-mail"]} *</span>
              <input type="email" required />
            </label>
          </div>

          <div className={styles.formRow}>
            <label>
              <span>{t["Phone Number"]} *</span>
              <input type="tel" required />
            </label>
            <label>
              <span>{t["Upload Your CV"]} *</span>
              <span className={styles.fileField}>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={(event) =>
                    setFileName(event.target.files?.[0]?.name ?? "")
                  }
                />
                <span>{fileName || t["Attach File"]}</span>
                <MdOutlineAttachFile aria-hidden="true" />
              </span>
            </label>
          </div>

          <label>
            <span>{t["Message"]}</span>
            <textarea rows={6} />
          </label>

          <div className={styles.formFooter}>
            <span>{t["Careers"]} / JIONEX</span>
            <button type="submit">
              {t["Submit"]} <span>↗</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
