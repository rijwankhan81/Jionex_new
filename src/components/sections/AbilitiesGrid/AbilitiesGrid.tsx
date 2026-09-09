"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Locale } from "@/i18n/config";
import styles from "./AbilitiesGrid.module.scss";

gsap.registerPlugin(ScrollTrigger);

export type Ability = {
  id: number;
  title: string;
  image: string;
};

type Props = {
  locale: Locale;
  title: string;
  description: string;
  abilities: Ability[];
};

export default function AbilitiesGrid({
  locale,
  title,
  description,
  abilities,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cardsWrap = cardsRef.current;

    if (!section || !cardsWrap || abilities.length < 2) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 801px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]", cardsWrap);

      /*
       * Deliberately simple:
       * - left content never moves
       * - images never scale/rotate
       * - only the right cards slide/fade
       * - cards stay in their own layer, so there is no transform tearing
       */
      gsap.set(cards, {
        autoAlpha: 0,
        x: 70,
        y: 0,
        scale: 1,
        rotate: 0,
        force3D: false,
      });

      gsap.set(cards[0], {
        autoAlpha: 1,
        x: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${abilities.length * 75}%`,
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) {
          tl.to({}, { duration: 0.7 });
          return;
        }

        const previous = cards[index - 1];

        // Previous card exits to the left.
        tl.to(previous, {
          autoAlpha: 0,
          x: -70,
          duration: 0.45,
          ease: "power2.inOut",
        });

        // New card enters from the right.
        tl.fromTo(
          card,
          {
            autoAlpha: 0,
            x: 70,
          },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          "<0.05",
        );

        // Keep the current card on screen before the next change.
        tl.to({}, { duration: 0.65 });
      });

      const refresh = () => ScrollTrigger.refresh();
      requestAnimationFrame(refresh);

      return () => {
        window.removeEventListener("load", refresh);
      };
    });

    mm.add("(max-width: 800px)", () => {
      // Mobile: normal document flow + simple reveal.
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]", cardsWrap);

      gsap.set(cards, { autoAlpha: 1, clearProps: "transform" });

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 35 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    });

    return () => mm.revert();
  }, [abilities.length]);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      data-locale={locale}
      aria-labelledby="abilities-title"
    >
      <div className={styles.ambient} aria-hidden="true" />

      <div className={styles.inner}>
        {/* LEFT: stays completely static while cards change */}
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span>01</span>
            <i />
            <span>JIONEX / CAPABILITIES</span>
          </div>

          <h2 id="abilities-title">{title}</h2>

          <p>{description}</p>

          <div className={styles.scrollHint}>
            <span>SCROLL TO DISCOVER</span>
          </div>
        </div>

        {/* RIGHT: only this area changes on scroll */}
        <div className={styles.cardsViewport}>
          <div ref={cardsRef} className={styles.cards}>
            {abilities.map((ability, index) => (
              <article
                key={ability.id}
                className={styles.card}
                data-card
                style={{ zIndex: index + 1 }}
              >
                <img
                  className={styles.image}
                  src={ability.image}
                  alt=""
                  aria-hidden="true"
                  loading={index === 0 ? "eager" : "lazy"}
                  draggable={false}
                />

                <div className={styles.overlay} />

                <div className={styles.cardContent}>
                  <span className={styles.number}>
                    {String(ability.id).padStart(2, "0")}
                  </span>

                  <h3>{ability.title}</h3>

                  <span className={styles.arrow}>↗</span>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.counter} aria-hidden="true">
            <span>CAPABILITIES</span>
            <i />
            <span>JIONEX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
