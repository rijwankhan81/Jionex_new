"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { FiArrowUpRight, FiChevronRight, FiMenu, FiX } from "react-icons/fi";
import { localeMeta, locales, type Locale } from "@/i18n/config";
import { navTreeAR, navTreeBN, navTreeEN, navTreeES, type NavItem } from "@/constants/navTree";
import { techAR, techBN, techEN, techES } from "@/constants/technologies";
import { servicesAR, servicesBN, servicesEN, servicesES } from "@/constants/services";
import styles from "./SiteHeader.module.scss";

type Props = {
  locale: Locale;
  translations: Record<string, string>;
};

type DynamicItem = { id: string | number; title: string; link: string };

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

export default function SiteHeader({ locale, translations }: Props) {
  const pathname = usePathname();
  const t = (key: string) => translations[key] ?? key;
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

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

  const hasChildren = (item: NavItem) => Boolean(item.children?.length || item.dynamic);

  const closeMenu = () => {
    setOpen(false);
    setActiveId(null);
  };

  return (
    <header
      className={styles.header}
      data-open={open}
      onMouseLeave={() => setActiveId(null)}
    >
      <div className={styles.headerBar}>
        <Link className={styles.logo} href={`/${locale}`} aria-label="Jionex home" onClick={closeMenu}>
          <Image
            src="/images/jionex_logo.png"
            alt="Jionex"
            width={230}
            height={82}
            priority
            className={styles.logoImage}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navTree.map((item, index) => {
            const target = withLocale(locale, item.link);
            return (
              <Link
                key={item.id}
                href={target}
                onMouseEnter={() => hasChildren(item) && setActiveId(item.id)}
                onClick={() => hasChildren(item) && setActiveId(item.id)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.title}
                {hasChildren(item) && <FiChevronRight aria-hidden="true" />}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <div className={styles.languages} aria-label="Language selector">
            {locales.map((item) => (
              <Link
                key={item}
                href={`/${item}${localizedPath ? `/${localizedPath}` : ""}`}
                className={item === locale ? styles.activeLanguage : undefined}
                aria-current={item === locale ? "page" : undefined}
              >
                {localeMeta[item].nativeLabel}
              </Link>
            ))}
          </div>

          <Link className={styles.contactButton} href={`/${locale}/contact`} onClick={closeMenu}>
            <span>{t("Contact Us")}</span>
            <FiArrowUpRight aria-hidden="true" />
          </Link>

          <button
            className={styles.menuButton}
            type="button"
            aria-expanded={open}
            aria-controls="jx-navigation"
            onClick={() => {
              setOpen((value) => !value);
              if (open) setActiveId(null);
              else setActiveId(navTree[0]?.id ?? null);
            }}
          >
            {open ? <FiX /> : <FiMenu />}
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      <div className={styles.desktopDropdown} aria-hidden={!activeItem}>
        {activeItem && hasChildren(activeItem) && (
          <div className={styles.dropdownInner}>
            <div className={styles.dropdownHeading}>
              <span>{String(navTree.findIndex((item) => item.id === activeItem.id) + 1).padStart(2, "0")}</span>
              <strong>{activeItem.title}</strong>
              <Link href={withLocale(locale, activeItem.link)} onClick={closeMenu}>
                {t("View all")}
                <FiArrowUpRight />
              </Link>
            </div>
            <div className={styles.dropdownItems}>
              {getChildren(activeItem).slice(0, 8).map((child) => {
                const href = withLocale(locale, child.link);
                const external = isExternal(href);
                return (
                  <Link
                    key={child.id}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    onClick={closeMenu}
                  >
                    <span>{child.title}</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div id="jx-navigation" className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`} data-lenis-prevent aria-hidden={!open}>
        <div className={styles.mobileMenuInner}>
          <div className={styles.mobileKicker}>
            <span>JIONEX</span>
            <span>{localeMeta[locale].label}</span>
          </div>

          <div className={styles.mobileLanguages} aria-label="Language selector">
            <span>{t("Language")}</span>
            <div className={styles.mobileLanguageList}>
              {locales.map((item) => (
                <Link
                  key={item}
                  href={`/${item}${localizedPath ? `/${localizedPath}` : ""}`}
                  className={item === locale ? styles.activeLanguage : undefined}
                  aria-current={item === locale ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {localeMeta[item].nativeLabel}
                </Link>
              ))}
            </div>
          </div>

          {navTree.map((item, index) => {
            const target = withLocale(locale, item.link);
            const children = hasChildren(item) ? getChildren(item) : [];
            return (
              <div key={item.id} className={styles.mobileGroup}>
                <Link href={target} onClick={closeMenu}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.title}</strong>
                  {hasChildren(item) ? <FiChevronRight aria-hidden="true" /> : <FiArrowUpRight aria-hidden="true" />}
                </Link>
                {hasChildren(item) && (
                  <div className={styles.mobileChildren}>
                    {children.slice(0, 8).map((child) => (
                      <Link key={child.id} href={withLocale(locale, child.link)} onClick={closeMenu}>
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
