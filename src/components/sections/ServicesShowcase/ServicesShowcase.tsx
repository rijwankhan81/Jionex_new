"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ServicesShowcase.module.scss";

gsap.registerPlugin(ScrollTrigger);

type ServiceItem = {
  id: number;
  title: string;
  des: string;
  icon?: React.ReactNode;
  link?: string;
};

type ServicesShowcaseProps = {
  title: string;
  services: ServiceItem[];
};

export default function ServicesShowcase({
  title,
  services,
}: ServicesShowcaseProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector<HTMLElement>(
        "[data-services-heading]",
      );
      const cards = gsap.utils.toArray<HTMLElement>("[data-service-card]");

      if (heading) {
        gsap.fromTo(
          heading,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 84%",
              once: true,
            },
          },
        );
      }

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: (index % 2) * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="services-title"
    >
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.intro} data-services-heading>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>{String(services.length).padStart(2, "0")}</span>
          </div>

          <div className={styles.headingRow}>
            <h2 id="services-title">{title}</h2>
            <span className={styles.headingMark} aria-hidden="true">
              ↘
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const card = (
              <article
                key={service.id}
                className={styles.card}
                data-service-card
                style={{ "--card-index": index } as React.CSSProperties}
              >
                <div className={styles.cardTop}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.icon}>{service.icon}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3>{service.title}</h3>
                  <p>{service.des}</p>
                </div>

                <div className={styles.cardBottom}>
                  <span className={styles.explore}>Explore</span>
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </div>
              </article>
            );

            return service.link ? (
              <a
                key={`link-${service.id}`}
                href={service.link}
                className={styles.cardLink}
                aria-label={service.title}
              >
                {card}
              </a>
            ) : (
              card
            );
          })}
        </div>
      </div>
    </section>
  );
}
