"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import gsap from "gsap";
import { localeMeta, locales, type Locale } from "@/i18n/config";
import {
  navTreeAR,
  navTreeBN,
  navTreeEN,
  navTreeES,
  type NavItem,
} from "@/constants/navTree";
import { techAR, techBN, techEN, techES } from "@/constants/technologies";
import {
  servicesAR,
  servicesBN,
  servicesEN,
  servicesES,
} from "@/constants/services";
import styles from "./SiteHeader.module.scss";

type HeaderProps = { locale: Locale };
type DynamicType = "technologies" | "services";

type DynamicItem = {
  id: string | number;
  title: string;
  link: string;
};

const navByLocale: Record<Locale, NavItem[]> = {
  en: navTreeEN,
  bn: navTreeBN,
  ar: navTreeAR,
  es: navTreeES,
};

const techByLocale: Record<Locale, DynamicItem[]> = {
  en: techEN,
  bn: techBN,
  ar: techAR,
  es: techES,
};

const servicesByLocale: Record<Locale, DynamicItem[]> = {
  en: servicesEN,
  bn: servicesBN,
  ar: servicesAR,
  es: servicesES,
};

function withLocale(locale: Locale, link?: string) {
  if (!link || link === "#") return `/${locale}`;
  if (/^https?:\/\//i.test(link)) return link;
  return `/${locale}${link.startsWith("/") ? link : `/${link}`}`;
}

function isExternal(link: string) {
  return /^https?:\/\//i.test(link);
}

export default function SiteHeader({ locale }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [languageOpen, setLanguageOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLAnchorElement[]>([]);
  const detailRef = useRef<HTMLDivElement>(null);
  const detailTitleRef = useRef<HTMLHeadingElement>(null);
  const detailItemsRef = useRef<HTMLAnchorElement[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  const navTree = navByLocale[locale];
  const localizedPath = pathname?.split("/").slice(2).join("/") || "";
  const activeItem = useMemo(
    () => navTree.find((item) => item.id === activeId) ?? null,
    [activeId, navTree],
  );

  const getChildren = (item: NavItem): DynamicItem[] => {
    if (item.dynamic === "technologies") return techByLocale[locale];
    if (item.dynamic === "services") return servicesByLocale[locale];
    return (item.children ?? []).map((child) => ({
      id: child.id,
      title: child.title,
      link: child.link ?? "#",
    }));
  };

  const hasChildren = (item: NavItem) =>
    Boolean(item.children?.length || item.dynamic);

  useLayoutEffect(() => {
    if (!panelRef.current) return;

    gsap.set(panelRef.current, { clipPath: "inset(0 0 100% 0)" });
    gsap.set(navItemsRef.current, { y: 42, opacity: 0 });
    gsap.set(detailRef.current, { x: 36, opacity: 0 });
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (!open) {
      root.style.removeProperty("overflow");
      body.style.removeProperty("position");
      body.style.removeProperty("top");
      body.style.removeProperty("left");
      body.style.removeProperty("right");
      body.style.removeProperty("width");
      body.style.removeProperty("overflow");
      return;
    }

    // Lock the real document position. This also prevents Lenis/native
    // scrolling from moving the page while the navigation overlay is open.
    const scrollY = window.scrollY;

    root.style.overflow = "hidden";

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      root.style.removeProperty("overflow");
      body.style.removeProperty("position");
      body.style.removeProperty("top");
      body.style.removeProperty("left");
      body.style.removeProperty("right");
      body.style.removeProperty("width");
      body.style.removeProperty("overflow");

      window.scrollTo({
        top: scrollY,
        left: 0,
        behavior: "auto",
      });
    };
  }, [open]);

  useEffect(() => {
    const savedScroll = sessionStorage.getItem("jionex-language-scroll");

    if (!savedScroll) return;

    sessionStorage.removeItem("jionex-language-scroll");

    const scrollY = Number(savedScroll);
    if (!Number.isFinite(scrollY)) return;

    const restoreScroll = () => {
      window.scrollTo({
        top: scrollY,
        left: 0,
        behavior: "auto",
      });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(restoreScroll);
    });
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!languageRef.current) return;
      if (!languageRef.current.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (open) setOpen(false);
        if (languageOpen) setLanguageOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, languageOpen]);

  useEffect(() => {
    if (!open) return;

    const current = navTree.find(
      (item) => withLocale(locale, item.link) === pathname,
    );
    if (current && hasChildren(current)) setActiveId(current.id);
  }, [locale, navTree, open, pathname]);

  useLayoutEffect(() => {
    if (!panelRef.current) return;

    timelineRef.current?.kill();
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    timelineRef.current = tl;

    if (open) {
      tl.to(panelRef.current, {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.72,
        ease: "power4.inOut",
      })
        .to(
          navItemsRef.current,
          { y: 0, opacity: 1, duration: 0.62, stagger: 0.055 },
          "-=0.34",
        )
        .to(detailRef.current, { x: 0, opacity: 1, duration: 0.62 }, "-=0.46");
    } else {
      tl.to(detailRef.current, { x: 24, opacity: 0, duration: 0.2 })
        .to(
          navItemsRef.current,
          { y: 22, opacity: 0, duration: 0.18, stagger: 0.015 },
          "<",
        )
        .to(panelRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.5,
          ease: "power3.inOut",
        });
    }

    return () => {
      tl.kill();
    };
  }, [open]);

  useLayoutEffect(() => {
    if (!open || !detailRef.current) return;

    const children = detailItemsRef.current;
    gsap.fromTo(
      children,
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.42, stagger: 0.035, ease: "power3.out" },
    );
  }, [activeId, open]);

  const openMenu = () => {
    setOpen((value) => !value);
    if (!open && !activeId) setActiveId(navTree[0]?.id ?? null);
  };

  const handleNavClick = () => {
    setOpen(false);
    setActiveId(null);
  };

  const handleMenuItem = (item: NavItem) => {
    if (hasChildren(item)) setActiveId(item.id);
  };

  return (
    <header ref={headerRef} className={styles.header} data-open={open}>
      <div className={styles.headerBar}>
        <Link
          className={styles.logo}
          href={`/${locale}`}
          aria-label="Jionex home"
          onClick={handleNavClick}
        >
          <Image
            src="/images/jionex_logo.png"
            alt="Jionex"
            width={230}
            height={82}
            priority
            className={styles.logoImage}
          />
        </Link>

        <div className={styles.controls}>
          <div
            ref={languageRef}
            className={styles.languages}
            aria-label="Language selector"
          >
            <button
              type="button"
              className={styles.languageTrigger}
              aria-expanded={languageOpen}
              aria-haspopup="menu"
              onClick={() => setLanguageOpen((value) => !value)}
            >
              <span>{localeMeta[locale].nativeLabel}</span>
              <ChevronRight
                className={`${styles.languageChevron} ${languageOpen ? styles.languageChevronOpen : ""}`}
                size={15}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </button>

            <div
              className={`${styles.languageMenu} ${languageOpen ? styles.languageMenuOpen : ""}`}
              role="menu"
              aria-hidden={!languageOpen}
            >
              {locales.map((item) => (
                <Link
                  key={item}
                  href={`/${item}${localizedPath ? `/${localizedPath}` : ""}`}
                  className={`${styles.language} ${item === locale ? styles.activeLanguage : ""}`}
                  aria-current={item === locale ? "page" : undefined}
                  role="menuitem"
                  tabIndex={languageOpen ? 0 : -1}
                  onClick={() => {
                    sessionStorage.setItem(
                      "jionex-language-scroll",
                      String(window.scrollY),
                    );
                    setLanguageOpen(false);
                    setOpen(false);
                  }}
                >
                  <span>{localeMeta[item].nativeLabel}</span>
                  {item === locale && (
                    <span className={styles.languageCheck} aria-hidden="true">
                      ✓
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={styles.menuButton}
            onClick={openMenu}
            aria-expanded={open}
            aria-controls="jionex-navigation"
          >
            <span className={styles.menuLabel}>{open ? "CLOSE" : "MENU"}</span>
            <span className={styles.menuIcon} aria-hidden="true">
              {open ? (
                <X size={20} strokeWidth={1.5} />
              ) : (
                <Menu size={20} strokeWidth={1.5} />
              )}
            </span>
          </button>
        </div>
      </div>

      <div
        id="jionex-navigation"
        ref={panelRef}
        className={styles.overlay}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className={styles.signal} aria-hidden="true">
          <span className={styles.signalRing} />
          <span className={styles.signalRing} />
          <span className={styles.signalCore} />
        </div>

        <div className={styles.overlayInner}>
          <div className={styles.menuColumn}>
            <div className={styles.menuMeta}>
              <span>0{navTree.length}</span>
              <span>{localeMeta[locale].label}</span>
            </div>

            <nav className={styles.primaryNav} aria-label="Primary navigation">
              {navTree.map((item, index) => {
                const target = withLocale(locale, item.link);
                const external = isExternal(target);
                const selected = activeId === item.id;

                return (
                  <div key={item.id} className={styles.primaryItem}>
                    <Link
                      ref={(node) => {
                        if (node) navItemsRef.current[index] = node;
                      }}
                      href={target}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className={`${styles.primaryLink} ${selected ? styles.selected : ""}`}
                      onMouseEnter={() => handleMenuItem(item)}
                      onFocus={() => handleMenuItem(item)}
                      onClick={(event) => {
                        if (hasChildren(item)) {
                          event.preventDefault();
                          setActiveId(item.id);
                          return;
                        }

                        handleNavClick();
                      }}
                    >
                      <span className={styles.index}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.title}>{item.title}</span>
                      {hasChildren(item) && (
                        <ChevronRight
                          className={styles.chevron}
                          size={22}
                          strokeWidth={1.25}
                        />
                      )}
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>

          <aside
            ref={detailRef}
            className={styles.detailColumn}
            aria-live="polite"
          >
            {activeItem && hasChildren(activeItem) ? (
              <>
                <div className={styles.detailHead}>
                  <span className={styles.detailKicker}>
                    {activeItem.title}
                  </span>
                  <Link
                    href={withLocale(locale, activeItem.link)}
                    className={styles.viewAll}
                    onClick={handleNavClick}
                  >
                    <span>{activeItem.title}</span>
                    <ArrowUpRight size={16} strokeWidth={1.25} />
                  </Link>
                </div>

                <h2 ref={detailTitleRef} className={styles.detailTitle}>
                  {activeItem.title}
                </h2>

                <div className={styles.detailList}>
                  {getChildren(activeItem).map((child, index) => (
                    <Link
                      key={child.id}
                      href={withLocale(locale, child.link)}
                      className={styles.detailItem}
                      onClick={handleNavClick}
                      ref={(node) => {
                        if (node) detailItemsRef.current[index] = node;
                      }}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{child.title}</strong>
                      <ArrowUpRight size={15} strokeWidth={1.2} />
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className={styles.detailEmpty}>
                <span className={styles.detailKicker}>{activeItem?.title}</span>
                <div className={styles.emptyLine} />
              </div>
            )}
          </aside>
        </div>
      </div>
    </header>
  );
}
