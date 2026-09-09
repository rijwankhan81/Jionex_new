"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import type { Locale } from "@/i18n/config";
import styles from "./Hero.module.scss";

type HeroProps = {
  locale: Locale;
  heading: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export default function Hero({
  locale,
  heading,
  description,
  primaryLabel,
  secondaryLabel,
}: HeroProps) {
  const rootRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const visual = visualRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const grid = gridRef.current;

    if (!root || !visual || !content || !image || !grid) return;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(
        "[data-hero-word]",
        content,
      );
      const elements = gsap.utils.toArray<HTMLElement>(
        "[data-hero-fade]",
        content,
      );

      // Make sure nothing can remain hidden if a trigger is delayed.
      gsap.set(words, {
        yPercent: 110,
        opacity: 0,
        visibility: "visible",
      });
      gsap.set(elements, {
        y: 30,
        opacity: 0,
        visibility: "visible",
      });
      gsap.set(image, {
        scale: 1.08,
        opacity: 0.35,
        visibility: "visible",
      });
      gsap.set(visual, {
        opacity: 0.35,
        visibility: "visible",
      });

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .to(
          image,
          {
            scale: 1,
            opacity: 1,
            duration: 1.35,
            ease: "power3.out",
          },
          0,
        )
        .to(
          visual,
          {
            opacity: 1,
            duration: 1,
          },
          0.1,
        )
        .to(
          words,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.055,
          },
          0.28,
        )
        .to(
          elements,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.1,
          },
          0.62,
        );

      // No scroll pinning here. The hero stays in the normal document flow
      // so the next section arrives immediately after the hero viewport.
      // The content is intentionally not transformed/faded by scroll.
      // Only the entrance animation above runs when the hero loads.

      const onPointerMove = (event: PointerEvent) => {
        if (window.innerWidth < 900) return;

        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;

        gsap.to(visual, {
          x: x * 26,
          y: y * 18,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
        });

        gsap.to(grid, {
          x: x * -10,
          y: y * -7,
          duration: 1,
          ease: "power3.out",
          overwrite: true,
        });
      };

      const onPointerLeave = () => {
        gsap.to([visual, grid], {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
        });
      };

      root.addEventListener("pointermove", onPointerMove, { passive: true });
      root.addEventListener("pointerleave", onPointerLeave);

      return () => {
        root.removeEventListener("pointermove", onPointerMove);
        root.removeEventListener("pointerleave", onPointerLeave);
      };
    }, root);

    return () => ctx.revert();
  }, []);

  const words = heading.trim().split(/\s+/);

  return (
    <section ref={rootRef} className={styles.hero}>
      <div className={styles.background} aria-hidden="true">
        <div ref={imageRef} className={styles.backgroundImage} />
        <div className={styles.backgroundOverlay} />
        <div ref={gridRef} className={styles.backgroundGrid} />
      </div>

      <div ref={visualRef} className={styles.visual} aria-hidden="true">
        <div className={`${styles.orbit} ${styles.orbitA}`} />
        <div className={`${styles.orbit} ${styles.orbitB}`} />
        <div className={`${styles.orbit} ${styles.orbitC}`} />
        <div className={styles.core}>
          <span />
        </div>
        <span className={`${styles.node} ${styles.nodeA}`} />
        <span className={`${styles.node} ${styles.nodeB}`} />
        <span className={`${styles.node} ${styles.nodeC}`} />
        <span className={`${styles.node} ${styles.nodeD}`} />
      </div>

      <div className={styles.topMeta} data-hero-fade>
        <span>JIONEX</span>
        <span className={styles.metaLine} />
        <span>TECHNOLOGY EXPERTISE</span>
      </div>

      <div ref={contentRef} className={styles.content}>
        <p className={styles.eyebrow} data-hero-fade>
          DIGITAL SYSTEMS / 01
        </p>

        <h1 className={styles.heading} aria-label={heading}>
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={styles.wordMask}
              aria-hidden="true"
            >
              <span data-hero-word>{word}</span>
            </span>
          ))}
        </h1>

        <div className={styles.rule} data-hero-fade />

        <p className={styles.description} data-hero-fade>
          {description}
        </p>

        <div className={styles.actions} data-hero-fade>
          <Link className={styles.primaryAction} href={`/${locale}/contact`}>
            <span>{primaryLabel}</span>
            <b aria-hidden="true">↗</b>
          </Link>

          <Link className={styles.secondaryAction} href={`/${locale}/products`}>
            <span>{secondaryLabel}</span>
            <b aria-hidden="true">↗</b>
          </Link>
        </div>
      </div>

      <div className={styles.bottomMeta} data-hero-fade aria-hidden="true">
        <span>01 — 04</span>
        <span className={styles.scrollIndicator}>
          <i />
        </span>
        <span>SCROLL</span>
      </div>
    </section>
  );
}
