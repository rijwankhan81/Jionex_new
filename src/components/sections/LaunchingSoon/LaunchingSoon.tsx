"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./LaunchingSoon.module.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type LaunchingItem = {
  id: number;
  title: string;
  image: string;
  url: string;
  description: string;
};

type LaunchingSoonProps = {
  title: string;
  items: LaunchingItem[];
};

export default function LaunchingSoon({ title, items }: LaunchingSoonProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const intro = section.querySelector("[data-launching-intro]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-launching-card]");

      if (intro) {
        gsap.from(intro, {
          y: 45,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        });
      }

      gsap.from(cards, {
        y: 70,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [items]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro} data-launching-intro>
          <span className={styles.eyebrow}>JIONEX / NEXT</span>
          <h2>{title}</h2>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <article className={styles.card} data-launching-card key={item.id}>
              <div className={styles.visual}>
                <div className={styles.visualGlow} />
                <div className={styles.imageFrame}>
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>

                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className={styles.content}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <a
                  className={styles.visit}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Visit</span>
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
