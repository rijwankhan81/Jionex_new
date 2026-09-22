"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useLayoutEffect, useRef, useState } from "react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { officeLocationsEN } from "@/constants/officeAddress";
import type { Locale } from "@/i18n/config";
import styles from "./ContactEditorial.module.scss";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  locale: Locale;
  translations: Record<string, string>;
};

const locationGroups = [
  {
    label: "Main Branch",
    locations: officeLocationsEN.filter(
      (office) => office.office === "Main Branch",
    ),
  },
  {
    label: "Sub Branches",
    locations: officeLocationsEN.filter(
      (office) => office.office === "Sub Branch",
    ),
  },
  {
    label: "Planned Branches",
    locations: officeLocationsEN.filter(
      (office) => office.office === "Planned Branch",
    ),
  },
];

export default function ContactEditorial({ locale, translations: t }: Props) {
  const pageRef = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);

  useLayoutEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-contact-hero]",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.1 },
      );

      gsap.fromTo(
        "[data-contact-hero-image]",
        { scale: 1.08, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.25,
          ease: "power3.out",
          delay: 0.2,
        },
      );

      gsap.utils
        .toArray<HTMLElement>("[data-contact-reveal]")
        .forEach((item) => {
          gsap.fromTo(
            item,
            { y: 45, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: { trigger: item, start: "top 84%", once: true },
            },
          );
        });

      gsap.to("[data-contact-orbit]", {
        rotate: 360,
        duration: 22,
        ease: "none",
        repeat: -1,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = String(data.get("subject") || "Jionex enquiry");
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Budget: ${data.get("budget") || ""}`,
      "",
      String(data.get("message") || ""),
    ].join("\\n");

    window.location.href = `mailto:contact@jionex.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <main
      ref={pageRef}
      className={styles.page}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy} data-contact-hero>
            <div className={styles.rail}>
              <span>01</span>
              <span>{t["Contact Us"]}</span>
            </div>
            <p className={styles.kicker}>{t["Contact Banner Des"]}</p>
            <h1>{t["Contact Us"]}</h1>
            <div className={styles.heroBottom}>
              <p>{t["Let’s Talk Des"]}</p>
              <a
                href="#enquiry"
                className={styles.circleLink}
                aria-label={t["Contact us Now"]}
              >
                <FiArrowDownRight />
              </a>
            </div>
          </div>

          <div className={styles.heroVisual} data-contact-hero-image>
            <Image
              src="/images/contactBanner.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className={styles.heroOverlay} />
            <div className={styles.heroStamp}>JIONEX / 01</div>
            <div className={styles.orbit} data-contact-orbit aria-hidden="true">
              <span />
            </div>
          </div>
        </div>
      </section>

      <section
        id="enquiry"
        className={styles.enquirySection}
        data-contact-reveal
      >
        <div className={styles.sectionRail}>
          <span>02</span>
          <span>{t["Send Us Your Querry"]}</span>
        </div>
        <div className={styles.enquiryGrid}>
          <div className={styles.enquiryIntro}>
            <span className={styles.eyebrow}>{t["Let’s Talk"]}</span>
            <h2>{t["Contact H"]}</h2>
            <p>{t["Contact H Des"]}</p>
            <div className={styles.contactDirect}>
              <a href="mailto:contact@jionex.com">
                <FiMail /> <span>contact@jionex.com</span>
              </a>
              <a href="tel:+971569258166">
                <FiPhone /> <span>+971569258166</span>
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={submit}>
            <div className={styles.formRow}>
              <label>
                <span>{t["Full name"]}</span>
                <input
                  name="name"
                  required
                  placeholder={t["Enter Full Name"]}
                />
              </label>
              <label>
                <span>{t["Email"]}</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t["Enter Email Address"]}
                />
              </label>
            </div>
            <div className={styles.formRow}>
              <label>
                <span>{t["Phone"]}</span>
                <input name="phone" placeholder={t["Enter Contact Number"]} />
              </label>
              <label>
                <span>{t["Budget"]}</span>
                <input name="budget" placeholder="$" />
              </label>
            </div>
            <label>
              <span>{t["Message"]}</span>
              <textarea
                name="message"
                required
                rows={6}
                placeholder={t["Message"]}
              />
            </label>
            <div className={styles.formFooter}>
              <p>{t["Agreement"]}</p>
              <button type="submit" className={styles.submit}>
                {sent ? "✓" : t["Submit"]}
                <FiArrowUpRight />
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className={styles.optionsSection} data-contact-reveal>
        <div className={styles.sectionRail}>
          <span>03</span>
          <span>{t["Schedule a Consultation"]}</span>
        </div>
        <div className={styles.optionsGrid}>
          {[
            ["/images/contactimg1.png", t["Schedule a meeting"], "#enquiry"],
            ["/images/contactimg2.png", t["Call us Now"], "tel:+971569258166"],
            ["/images/contactimg3.png", t["Request a Quote"], "#enquiry"],
          ].map(([image, label, href], index) => (
            <Link
              href={href}
              className={`${styles.optionCard} ${index === 0 ? styles.optionAccent : ""}`}
              key={label}
            >
              <div className={styles.optionImage}>
                <Image src={image} alt="" width={54} height={54} />
              </div>
              <span>{label}</span>
              <FiArrowUpRight />
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.locationsSection} data-contact-reveal>
        <div className={styles.sectionRail}>
          <span>04</span>
          <span>{t["We are Around the Globe"]}</span>
        </div>
        <div className={styles.locationsIntro}>
          <h2>{t["We are Around the Globe"]}</h2>
          <p>{t["Contact Banner Des"]}</p>
        </div>
        <div className={styles.locationsGroups}>
          {locationGroups.map((group) => (
            <div className={styles.locationGroup} key={group.label}>
              <div className={styles.groupTitle}>{group.label}</div>
              <div className={styles.locationList}>
                {group.locations.map((office) => (
                  <article
                    className={styles.locationCard}
                    key={`${office.country}-${office.city}`}
                  >
                    <div className={styles.locationImage}>
                      <Image
                        src={office.image}
                        alt={office.country}
                        fill
                        sizes="(max-width: 700px) 100vw, 28vw"
                      />
                    </div>
                    <div className={styles.locationMeta}>
                      <div className={styles.locationName}>
                        <span>{office.country}</span>
                        <Image
                          src={office.flag}
                          alt=""
                          width={34}
                          height={22}
                        />
                      </div>
                      <strong>{office.city}</strong>
                      <span>{office.office}</span>
                      <p>{office.address}</p>
                      <div className={styles.locationActions}>
                        <a
                          href={office.mapLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiMapPin /> Map
                        </a>
                        <a
                          href={`tel:${office.contact.replace(/[^+\d]/g, "")}`}
                        >
                          <FiPhone /> {office.contact}
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} data-contact-reveal>
        <div>
          <span className={styles.eyebrow}>JIONEX</span>
          <h2>{t["Contact us today"]}</h2>
        </div>
        <Link href="#enquiry" className={styles.ctaArrow}>
          <FiArrowDownRight />
        </Link>
      </section>
    </main>
  );
}
