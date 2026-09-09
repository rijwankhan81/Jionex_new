"use client";

import { useLayoutEffect, useRef } from "react";
import type { Locale } from "@/i18n/config";
import styles from "./PortfolioShowcase.module.scss";

export type PortfolioItem = {
  id: number;
  name: string;
  image: string;
  about: string | null;
  slug: string;
};

type Props = {
  locale: Locale;
  title: string;
  items: PortfolioItem[];
};

export default function PortfolioShowcase({ locale, title, items }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;

    if (!section || !stage || !viewport || !track) return;

    if (window.matchMedia("(max-width: 700px)").matches) {
      section.style.height = "";
      track.style.transform = "";
      return;
    }

    let sectionTop = 0;
    let scrollDistance = 0;
    let sectionScrollLength = 0;
    let raf = 0;

    const measure = () => {
      // Reset first so scrollWidth is always measured from the natural layout.
      track.style.transform = "translate3d(0, 0, 0)";

      const viewportWidth = viewport.clientWidth;
      scrollDistance = Math.max(0, track.scrollWidth - viewportWidth);

      /*
       * The section itself becomes the scroll timeline.
       * While the stage is sticky, document scrolling is converted
       * directly into horizontal movement.
       */
      sectionScrollLength = Math.max(
        window.innerHeight * 1.6,
        scrollDistance * 1.15,
      );

      section.style.height = `${window.innerHeight + sectionScrollLength}px`;

      const rect = section.getBoundingClientRect();
      sectionTop = rect.top + window.scrollY;

      render();
    };

    const render = () => {
      raf = 0;

      const localScroll = window.scrollY - sectionTop;
      const progressValue = Math.min(
        1,
        Math.max(0, localScroll / sectionScrollLength),
      );

      const x = -scrollDistance * progressValue;

      track.style.transform = `translate3d(${x}px, 0, 0)`;

      if (progress) {
        progress.style.transform = `scaleX(${progressValue})`;
      }
    };

    const requestRender = () => {
      if (!raf) {
        raf = window.requestAnimationFrame(render);
      }
    };

    const refresh = () => {
      measure();
    };

    const initial = window.requestAnimationFrame(refresh);

    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", refresh);

    const images = Array.from(section.querySelectorAll("img"));

    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener("load", refresh, { once: true });
      }
    });

    return () => {
      window.cancelAnimationFrame(initial);
      if (raf) window.cancelAnimationFrame(raf);

      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", refresh);

      images.forEach((image) => {
        image.removeEventListener("load", refresh);
      });

      section.style.height = "";
      track.style.transform = "";
    };
  }, [items.length]);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      data-locale={locale}
      aria-labelledby="portfolio-title"
    >
      <div ref={stageRef} className={styles.stage}>
        <div className={styles.background} aria-hidden="true" />

        <div className={styles.container}>
          <header className={styles.intro}>
            <span className={styles.index}>04</span>

            <div>
              <span className={styles.eyebrow}>JIONEX</span>
              <h2 id="portfolio-title">{title}</h2>
            </div>

            <span className={styles.counter}>
              {String(items.length).padStart(2, "0")}
            </span>
          </header>
        </div>

        <div ref={viewportRef} className={styles.viewport}>
          <div ref={trackRef} className={styles.track}>
            {items.map((item, index) => (
              <article key={`${item.id}-${item.name}`} className={styles.card}>
                <a
                  href={item.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  <div className={styles.imageWrap}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.image}
                      loading={index < 3 ? "eager" : "lazy"}
                      draggable={false}
                    />
                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className={styles.cardInner}>
                    <h3>{item.name}</h3>
                    {item.about && <p>{item.about}</p>}
                    <span className={styles.arrow} aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.progress} aria-hidden="true">
          <span ref={progressRef} />
        </div>
      </div>
    </section>
  );
}
