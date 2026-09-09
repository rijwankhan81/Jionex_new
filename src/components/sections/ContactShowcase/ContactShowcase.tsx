"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ContactShowcase.module.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ContactShowcaseProps = {
  heading: string;
  description: string;
  scheduleLabel: string;
  callLabel: string;
  quoteLabel: string;
  buttonLabel: string;
  locale?: string;
};

export default function ContactShowcase({
  heading,
  description,
  scheduleLabel,
  callLabel,
  quoteLabel,
  buttonLabel,
  locale,
}: ContactShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const visual = section.querySelector("[data-contact-visual]");
      const content = section.querySelector("[data-contact-content]");
      const options = gsap.utils.toArray<HTMLElement>("[data-contact-option]");

      gsap.from(visual, {
        x: -70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      gsap.from(content, {
        x: 70,
        opacity: 0,
        duration: 1,
        delay: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      gsap.from(options, {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        delay: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        <div className={styles.visual} data-contact-visual>
          <div className={`${styles.orbit} ${styles.orbitA}`} />
          <div className={`${styles.orbit} ${styles.orbitB}`} />
          <div className={`${styles.orbit} ${styles.orbitC}`} />

          <div className={styles.imageWrap}>
            <Image
              src="/images/contact.png"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>

          <div className={styles.visualLabel}>JIONEX</div>
        </div>

        <div className={styles.content} data-contact-content>
          <span className={styles.eyebrow}>LET&apos;S CONNECT</span>

          <h2>{heading}</h2>
          <p className={styles.description}>{description}</p>

          <div className={styles.options}>
            <div
              className={`${styles.option} ${styles.optionPrimary}`}
              data-contact-option
            >
              <Image
                src="/images/contactimg1.png"
                width={54}
                height={54}
                alt=""
              />
              <span>{scheduleLabel}</span>
            </div>

            <div className={styles.option} data-contact-option>
              <Image
                src="/images/contactimg2.png"
                width={54}
                height={54}
                alt=""
              />
              <span>{callLabel}</span>
            </div>

            <div className={styles.option} data-contact-option>
              <Image
                src="/images/contactimg3.png"
                width={54}
                height={54}
                alt=""
              />
              <span>{quoteLabel}</span>
            </div>
          </div>

          <Link href={`/${locale ?? "en"}/contact`} className={styles.button}>
            <span>{buttonLabel}</span>
            <span className={styles.buttonArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
