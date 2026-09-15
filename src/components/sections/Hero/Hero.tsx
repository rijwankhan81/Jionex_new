"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.scss";

type Props = {
  locale: string;
  heading: string;
  description: string;
  startLabel: string;
  productsLabel: string;
};

export default function Hero({
  locale,
  heading,
  description,
  startLabel,
  productsLabel,
}: Props) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .from("[data-hero-kicker]", {
          y: 16,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          "[data-hero-line]",
          {
            yPercent: 105,
            opacity: 0,
            duration: 0.75,
            stagger: 0.07,
          },
          "-=0.25",
        )
        .from(
          "[data-hero-description]",
          {
            y: 14,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.35",
        )
        .from(
          "[data-hero-actions]",
          {
            y: 12,
            opacity: 0,
            duration: 0.45,
          },
          "-=0.28",
        )
        .from(
          "[data-hero-visual]",
          {
            x: 32,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.65",
        );

      gsap.to("[data-hero-orbit]", {
        rotate: 360,
        duration: 26,
        repeat: -1,
        ease: "none",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const path = (segment: string) => `/${locale}/${segment}`;

  return (
    <section ref={rootRef} className={styles.hero}>
      <div className={styles.rule} aria-hidden="true" />

      <div className={styles.grid}>
        <div className={styles.copy}>
          <div className={styles.kicker} data-hero-kicker>
            <span>01</span>
            <i />
            <span>JIONEX</span>
          </div>

          <h1 aria-label={heading}>
            {heading.split(" ").map((word, index) => (
              <span
                key={`${word}-${index}`}
                className={styles.headingWord}
                data-hero-line
              >
                {word}
              </span>
            ))}
          </h1>

          <p className={styles.description} data-hero-description>
            {description}
          </p>

          <div className={styles.actions} data-hero-actions>
            <Link href={path("contact")} className={styles.primary}>
              <span>{startLabel}</span>
              <FiArrowUpRight />
            </Link>

            <Link href={path("products")} className={styles.secondary}>
              <span>{productsLabel}</span>
              <FiArrowUpRight />
            </Link>
          </div>
        </div>

        <div className={styles.visualWrap} data-hero-visual>
          <div className={styles.visualMeta}>
            <span>01</span>
            <span>JIONEX</span>
          </div>

          <div className={styles.visual}>
            <Image
              src="/images/home-banner.png"
              alt=""
              fill
              priority
              sizes="(max-width: 820px) 100vw, 50vw"
              className={styles.image}
            />

            <div className={styles.tint} />

            <div className={styles.orbit} data-hero-orbit aria-hidden="true">
              <span />
              <span />
            </div>

            <div className={styles.imageLabel} aria-hidden="true">
              <span>JIONEX</span>
              <span>01</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom} aria-hidden="true">
        <span>01</span>
        <i />
        <span>01 / 01</span>
      </div>
    </section>
  );
}
