"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  boardOfDirectors,
  advisoryBoard,
  executiveLeadership,
  technicalOpsTeam,
} from "@/constants/team-members";

import styles from "./TeamEditorial.module.scss";

gsap.registerPlugin(ScrollTrigger);

type Locale = "en" | "bn" | "ar" | "es";

type Member = {
  id: number;
  name: string;
  image: string;
  alt: string;
  description: string | null;
  position: string;
};

type Props = {
  locale: Locale;
  translations: Record<string, string>;
};

const groups = [
  {
    key: "Board of Directors",
    members: boardOfDirectors,
  },
  {
    key: "Advisory Board",
    members: advisoryBoard,
  },
  {
    key: "Executive Leadership",
    members: executiveLeadership,
  },
  {
    key: "Technical & Ops Team",
    members: technicalOpsTeam,
  },
];

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <article className={styles.member} data-member>
      <div className={styles.memberTop}>
        <span>{String(index + 1).padStart(2, "0")}</span>

        <span>JIONEX</span>
      </div>

      <div className={styles.photo} data-member-image>
        <Image
          src={member.image}
          alt={member.alt || member.name}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />

        <div className={styles.photoOverlay}>
          <span>VIEW / PROFILE</span>
          <span>↗</span>
        </div>
      </div>

      <div className={styles.memberInfo}>
        <h3>{member.name}</h3>

        <p>{member.position}</p>
      </div>
    </article>
  );
}

export default function TeamEditorial({ locale, translations: t }: Props) {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-team-hero]", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.utils
        .toArray<HTMLElement>("[data-team-section]")
        .forEach((section) => {
          gsap.from(section, {
            y: 45,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 84%",
              once: true,
            },
          });
        });

      gsap.utils.toArray<HTMLElement>("[data-member]").forEach((member) => {
        const image = member.querySelector("[data-member-image]");

        if (image) {
          gsap.from(image, {
            scale: 1.08,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: member,
              start: "top 90%",
              once: true,
            },
          });
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={rootRef}
      className={styles.page}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.rail}>
            <span>01</span>
            <span>{t["Behind the Vision"]}</span>
          </div>

          <div className={styles.heroGrid} data-team-hero>
            <h1>{t["Behind the Vision"]}</h1>

            <div className={styles.heroCopy}>
              <p>{t["Behind the Vision Des"]}</p>

              <div className={styles.heroMeta}>
                <span>JIONEX</span>
                <span>PEOPLE / IDEAS / IMPACT</span>
              </div>
            </div>
          </div>

          <div className={styles.heroStatement}>
            <span className={styles.statementNumber}>01</span>

            <p>{t["Team Idea"]}</p>
          </div>
        </div>
      </section>

      {/* PEOPLE */}
      <section className={styles.people}>
        <div className={styles.container}>
          <div className={styles.peopleIntro}>
            <div className={styles.rail}>
              <span>02</span>
              <span>{t["Team"]}</span>
            </div>

            <h2>{t["Team"]}</h2>
          </div>

          {groups.map((group, groupIndex) => (
            <section
              key={group.key}
              className={styles.teamGroup}
              data-team-section
            >
              <div className={styles.groupHeader}>
                <span>{String(groupIndex + 1).padStart(2, "0")} /</span>

                <h3>{t[group.key]}</h3>

                <span>{String(group.members.length).padStart(2, "0")}</span>
              </div>

              <div className={styles.memberGrid}>
                {group.members.map((member, index) => (
                  <MemberCard key={member.id} member={member} index={index} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.rail}>
            <span>03</span>
            <span>{t["Contact"]}</span>
          </div>

          <div className={styles.ctaGrid} data-team-section>
            <h2>{t["Team Idea"]}</h2>

            <div>
              <p>{t["Behind the Vision Des"]}</p>

              <Link href={`/${locale}/contact`} className={styles.ctaLink}>
                {t["Contact us Now"]}
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
