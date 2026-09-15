"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { FiArrowDownRight, FiArrowUpRight, FiPlus } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Locale } from "@/i18n/config";
import { techAR, techBN, techEN, techES } from "@/constants/technologies";
import { abilitiesAR, abilitiesBN, abilitiesEN, abilitiesES } from "@/constants/abilities";
import { businessSolutionsAR, businessSolutionsBN, businessSolutionsEN, businessSolutionsES } from "@/constants/solutions";
import { productsAR, productsBN, productsEN, productsES } from "@/constants/products";
import { projectsAR, projectsBN, projectsEN, projectsES } from "@/constants/projects";
import { companyValuesAR, companyValuesBN, companyValuesEN, companyValuesES } from "@/constants/companyValues";
import { servicesDataAR, servicesDataBN, servicesDataEN, servicesDataES } from "@/constants/serviceData";
import { clients } from "@/constants/clients";
import Hero from "./Hero/Hero";
import styles from "./HomeEditorial.module.scss";

gsap.registerPlugin(ScrollTrigger);

type Props = { locale: Locale; translations: Record<string, string> };

const serviceKeys = [
  "Software Development", "IT Infrastructure Services", "Cybersecurity Solutions",
  "Digital Transformation", "Managed IT Services", "CloudComputing",
  "Data Analytics and Business Intelligence", "Emerging Technologies", "Digital Marketing",
];
const serviceDescriptionKeys = [
  "Software Development Des", "IT Infrastructure Services Des", "Cybersecurity Solutions Des",
  "Digital Transformation Des", "Managed IT Services Des", "Cloud Computing Des",
  "Data Analytics and Business Intelligence Des", "Emerging Technologies Des", "Digital Marketing Des",
];

function splitTitle(value: string, className: string) {
  return value.split(/\s+/).map((word, index) => (
    <span className={className} key={`${word}-${index}`}><span data-title-word>{word}</span></span>
  ));
}

export default function HomeEditorial({ locale, translations }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const [faqOpen, setFaqOpen] = useState(0);
  const t = (key: string) => translations[key] ?? key;
  const path = (segment: string) => `/${locale}/${segment}`;

  const data = useMemo(() => {
    const byLocale = <T,>(en: T, bn: T, ar: T, es: T) => locale === "bn" ? bn : locale === "ar" ? ar : locale === "es" ? es : en;
    return {
      technologies: byLocale(techEN, techBN, techAR, techES),
      abilities: byLocale(abilitiesEN, abilitiesBN, abilitiesAR, abilitiesES),
      solutions: byLocale(businessSolutionsEN, businessSolutionsBN, businessSolutionsAR, businessSolutionsES),
      products: byLocale(productsEN, productsBN, productsAR, productsES),
      projects: byLocale(projectsEN, projectsBN, projectsAR, projectsES),
      values: byLocale(companyValuesEN, companyValuesBN, companyValuesAR, companyValuesES),
      serviceGroups: byLocale(servicesDataEN, servicesDataBN, servicesDataAR, servicesDataES),
    };
  }, [locale]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
        gsap.fromTo(item, { y: 38, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 88%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-rail]").forEach((rail) => {
        const parts = Array.from(rail.querySelectorAll<HTMLElement>("i"));

        parts.forEach((part, index) => {
          const finalText = part.textContent ?? "";
          const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*+";
          const state = { progress: 0 };

          gsap.set(part, { yPercent: 110, opacity: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: rail,
              start: "top 88%",
              once: true,
            },
          });

          tl.to(part, {
            yPercent: 0,
            opacity: 1,
            duration: 0.55,
            delay: index * 0.08,
            ease: "power3.out",
          }, 0)
          .to(state, {
            progress: finalText.length,
            duration: 0.75,
            delay: index * 0.08,
            ease: "none",
            onUpdate: () => {
              const resolved = Math.floor(state.progress);
              part.textContent = finalText
                .split("")
                .map((char, charIndex) => {
                  if (char === " ") return " ";
                  if (charIndex < resolved) return char;
                  return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");
            },
            onComplete: () => {
              part.textContent = finalText;
            },
          }, 0);
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-title]").forEach((title) => {
        gsap.fromTo(title.querySelectorAll("[data-title-word]"), { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .7, stagger: .045, ease: "power3.out", scrollTrigger: { trigger: title, start: "top 86%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((image) => {
        gsap.fromTo(image, { scale: 1.12 }, { scale: 1, ease: "none", scrollTrigger: { trigger: image.parentElement, start: "top bottom", end: "bottom top", scrub: .7 } });
      });
      gsap.utils.toArray<HTMLElement>("[data-marquee]").forEach((row) => {
        gsap.to(row, { xPercent: -18, duration: 18, repeat: -1, ease: "none" });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const allProjects = data.projects.flatMap((group) => group.items);
  const featuredProjects = allProjects.slice(0, 8);
  const featuredProducts = data.products;
  const faqItems = [1, 2, 3, 4];

  return (
    <main ref={rootRef} className={styles.page}>
      <Hero locale={locale} heading={t("homeBannerHeading")} description={t("homeBannerDes")} startLabel={t("Let's get started")} productsLabel={t("View Products")} />

      <section className={`${styles.manifesto} ${styles.section}`} id="about">
        <div className={styles.rail} data-rail><span><i>02</i></span><span><i>{t("Why Jionex")}</i></span></div>
        <div className={styles.manifestoGrid}>
          <div data-reveal><p className={styles.eyebrow}>JIONEX / GLOBAL IT</p><h2 data-title>{splitTitle(t("Why Jionex"), styles.word)}</h2></div>
          <div className={styles.manifestoCopy} data-reveal><p>{t("Our Portfolio Des")}</p><Link href={path("about")} className={styles.textLink}>{t("About Us")} <FiArrowUpRight /></Link></div>
        </div>
        <div className={styles.reasonGrid}>
          {[1,2,3,4].map((item) => <article key={item} className={styles.reason}><span>0{item}</span><p>{t(`Why C${item}`)}</p><FiArrowUpRight /></article>)}
        </div>
      </section>

      <section className={`${styles.servicesSection} ${styles.section}`} id="services">
        <div className={styles.sectionHead}><div className={styles.rail} data-rail><span><i>03</i></span><span><i>{t("Services we offer")}</i></span></div><h2>{splitTitle(t("Services we offer"), styles.word)}</h2></div>
        <div className={styles.serviceCards}>
          {serviceKeys.map((key, index) => <Link href={path("services")} className={styles.serviceCard} key={key} data-service-card style={{ zIndex: index + 1 }}>
            <span className={styles.cardNo}>S/{String(index+1).padStart(2,"0")}</span><div className={styles.serviceMain}><h3>{t(key)}</h3><p>{t(serviceDescriptionKeys[index])}</p></div><span className={styles.circleArrow}><FiArrowUpRight /></span>
          </Link>)}
        </div>
      </section>

      <section className={`${styles.solutionsSection} ${styles.section}`}>
        <div className={styles.sectionHead}><div className={styles.rail} data-rail><span><i>04</i></span><span><i>{t("Our Products")}</i></span></div><h2 data-title>{splitTitle(t("Our Products"), styles.word)}</h2></div>
        <div className={styles.solutionGrid}>
          {data.solutions.map((item, index) => <article className={styles.solutionCard} key={item.title} data-reveal><div className={styles.solutionImage}><Image src={item.image} alt={item.title} fill sizes="(max-width: 800px) 100vw, 50vw" data-parallax /></div><div className={styles.solutionMeta}><span>0{index+1}</span><h3>{item.title}</h3><p>{item.description}</p></div></article>)}
        </div>
      </section>

      <section className={`${styles.workSection} ${styles.section}`} id="portfolio">
        <div className={styles.workHead}>
          <div className={styles.rail} data-rail><span><i>05</i></span><span><i>{t("Our Portfolio")}</i></span></div>
          <div><p className={styles.eyebrow}>JIONEX / SELECTED WORK</p><h2 data-title>{splitTitle(t("Our Portfolio"), styles.word)}</h2><p>{t("Our Portfolio Des")}</p></div>
        </div>
        <div className={styles.portfolioShowcase}>
          {featuredProjects.slice(0, 3).map((project, index) => {
            const external = project.slug.startsWith("http");
            return <Link href={external ? project.slug : path("projects")} className={`${styles.portfolioFeature} ${index === 0 ? styles.portfolioFeatureLarge : ""}`} key={`${project.name}-${index}`} data-reveal target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
              <div className={styles.portfolioFeatureImage}><Image src={project.image} alt={project.name} fill sizes="(max-width: 800px) 100vw, 66vw" data-parallax /><span className={styles.portfolioOverlayNo}>0{index + 1}</span><span className={styles.portfolioOverlayName}>{project.name}</span></div>
              <div className={styles.portfolioFeatureMeta}><div><span>{project.name}</span><p>{project.about}</p></div><FiArrowUpRight /></div>
            </Link>;
          })}
        </div>
        <div className={styles.portfolioGrid}>
          {featuredProjects.slice(3).map((project, index) => {
            const external = project.slug.startsWith("http");
            return <Link href={external ? project.slug : path("projects")} className={styles.portfolioMini} key={`${project.name}-${index + 3}`} data-reveal target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
              <div className={styles.portfolioMiniImage}><Image src={project.image} alt={project.name} fill sizes="(max-width: 800px) 100vw, 33vw" data-parallax /></div>
              <div className={styles.portfolioMiniMeta}><span>0{index + 4}</span><h3>{project.name}</h3><FiArrowUpRight /></div>
            </Link>;
          })}
        </div>
        <Link href={path("projects")} className={styles.bigLink}>{t("See All")} <FiArrowUpRight /></Link>
      </section>

      <section className={`${styles.productsSection} ${styles.section}`} id="products">
        <div className={styles.productsIntro}><div className={styles.rail} data-rail><span><i>06</i></span><span><i>{t("Products")}</i></span></div><div><p className={styles.eyebrow}>{t("Products Banner Sub Title")}</p><h2 data-title>{splitTitle(t("Products Banner Title"), styles.word)}</h2><p className={styles.lead}>{t("Products Banner Des")}</p></div></div>
        <div className={styles.productShowcase}>
          {featuredProducts.map((product, index) => <Link href={path("products")} className={`${styles.productCard} ${index === 0 ? styles.productCardFeatured : ""}`} key={product.id} data-reveal>
            <div className={styles.productCardImage}><Image src={product.image} alt={product.title} fill sizes="(max-width: 800px) 100vw, 50vw" data-parallax /><span>0{index + 1}</span><FiArrowUpRight /></div>
            <div className={styles.productCardBody}><p>{product.subtitle}</p><h3>{product.title}</h3><span>{product.tagline}</span></div>
          </Link>)}
        </div>
        <Link href={path("products")} className={styles.bigLink}>{t("See All")} <FiArrowUpRight /></Link>
      </section>

      <section className={`${styles.industriesSection} ${styles.section}`}>
        <div className={styles.industryHead}><div className={styles.rail} data-rail><span><i>07</i></span><span><i>{t("Industries")}</i></span></div><div><h2 data-title>{splitTitle(t("Industries We Covered"), styles.word)}</h2></div></div>
        <div className={styles.industryGroups}>
          {data.serviceGroups.map((group, index) => <article key={group.category} className={styles.industryRow} data-reveal><span>0{index+1}</span><div><h3>{group.category}</h3><p>{group.description}</p><div className={styles.industryTags}>{group.items.map((item) => <span key={item.title}>{item.title}</span>)}</div></div></article>)}
        </div>
      </section>

      <section className={`${styles.expertiseSection} ${styles.section}`} id="technology">
        <div className={styles.rail} data-rail><span><i>08</i></span><span><i>{t("Our Technology Stack")}</i></span></div>
        <div className={styles.expertiseGrid}><div data-reveal><h2 data-title>{splitTitle(t("Our Technology Stack"), styles.word)}</h2><p className={styles.lead}>{t("Technologies We Use Des")}</p></div><div className={styles.techList}>{data.technologies.slice(0,8).map((item,index)=><Link href={path("technologies")} key={item.title} className={styles.techRow} data-reveal><span>0{index+1}</span><div><h3>{item.title}</h3><p>{item.des}</p></div><FiArrowUpRight /></Link>)}</div></div>
        <div className={styles.marquee} aria-hidden="true"><div data-marquee>{data.technologies.map((item) => <span key={item.title}>{item.title} <i>✦</i></span>)}</div></div>
      </section>

      <section className={`${styles.abilitySection} ${styles.section}`}>
        <div className={styles.sectionHead}><div className={styles.rail} data-rail><span><i>09</i></span><span><i>{t("Exp")}</i></span></div><h2 data-title>{splitTitle(t("Exp"), styles.word)}</h2></div>
        <div className={styles.abilityGrid}>{data.abilities.map((item,index)=><article key={item.id} className={styles.abilityCard} data-reveal><div className={styles.abilityImage}><Image src={item.image} alt={item.title} fill sizes="(max-width: 800px) 50vw, 25vw" /></div><div><span>0{index+1}</span><h3>{item.title}</h3></div></article>)}</div>
      </section>

      <section className={`${styles.valuesSection} ${styles.section}`}>
        <div className={styles.valuesHead}><div className={styles.rail} data-rail><span><i>10</i></span><span><i>{t("Values")}</i></span></div><div><h2 data-title>{splitTitle(t("Values"), styles.word)}</h2><p>{t("Values Des")}</p></div></div>
        <div className={styles.valuesList}>{data.values.map((value,index)=><article className={styles.valueRow} key={value.title} data-reveal><span>0{index+1}</span><h3>{value.title}</h3><p>{value.description}</p><Image src={value.image} alt="" width={90} height={90} /></article>)}</div>
      </section>

      <section className={`${styles.clientsSection} ${styles.section}`}>
        <div className={styles.clientsHead}><div className={styles.rail} data-rail><span><i>11</i></span><span><i>{t("Clients")}</i></span></div><div><h2 data-title>{splitTitle(t("Clients Banner Title"), styles.word)}</h2><p>{t("Clients Banner Des")}</p></div></div>
        <div className={styles.clientGrid}>{clients.map((client,index)=><div className={styles.clientCard} key={client.id} data-reveal><span>0{String(index+1).padStart(2,"0")}</span><div>{client.name}</div><small>{client.country}</small></div>)}</div>
      </section>

      <section className={`${styles.faqSection} ${styles.section}`}>
        <div className={styles.rail} data-rail><span><i>12</i></span><span><i>{t("FAQ")}</i></span></div>
        <div className={styles.faqGrid}><div data-reveal><h2 data-title>{splitTitle(t("FAQ"), styles.word)}</h2><p>{t("FAQ Des")}</p></div><div className={styles.faqList}>{faqItems.map((item,index)=><button key={item} className={`${styles.faqItem} ${faqOpen===index ? styles.faqOpen : ""}`} onClick={()=>setFaqOpen(faqOpen===index ? -1 : index)}><span>0{index+1}</span><div><strong>{t(`FAQ H${item}`)}</strong>{faqOpen===index && <p>{t(`FAQ H${item} Des`)}</p>}</div><FiPlus /></button>)}</div></div>
      </section>

      <section className={styles.finalCta} id="contact" data-reveal>
        <div className={styles.ctaNumber}>13 / CONTACT</div>
        <h2 data-title>{splitTitle(t("Contact H"), styles.word)}</h2>
        <p>{t("Contact H Des")}</p>
        <Link href={path("contact")} className={styles.ctaButton}>{t("Request a Quote")} <FiArrowDownRight /></Link>
      </section>
    </main>
  );
}
