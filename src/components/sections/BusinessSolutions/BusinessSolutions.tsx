"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Locale } from "@/i18n/config";
import styles from "./BusinessSolutions.module.scss";

gsap.registerPlugin(ScrollTrigger);

export type BusinessSolution = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  locale: Locale;
  title: string;
  items: BusinessSolution[];
};

export default function BusinessSolutions({ locale, title, items }: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || !items.length) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector<HTMLElement>("[data-heading]");
      const cards = gsap.utils.toArray<HTMLElement>(
        "[data-solution-card]",
        section,
      );

      gsap.set(heading, {
        y: 45,
        autoAlpha: 0,
      });

      gsap.set(cards, {
        y: 55,
        autoAlpha: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(heading, {
        y: 0,
        autoAlpha: 1,
        duration: 0.75,
        ease: "power3.out",
      });

      tl.to(
        cards,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.35",
      );
    }, section);

    return () => ctx.revert();
  }, [items.length]);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      data-locale={locale}
      aria-labelledby="business-solutions-title"
    >
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.heading} data-heading>
          <span className={styles.kicker}>
            <i />
            JIONEX
          </span>

          <h2 id="business-solutions-title">{title}</h2>
        </header>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className={styles.card}
              data-solution-card
            >
              <img
                className={styles.image}
                src={item.image}
                alt=""
                aria-hidden="true"
                loading={index < 2 ? "eager" : "lazy"}
                draggable={false}
              />

              <div className={styles.overlay} />

              <div className={styles.cardTop}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>↗</span>
              </div>

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
