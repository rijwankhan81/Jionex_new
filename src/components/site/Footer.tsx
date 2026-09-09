import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {
  navTreeAR,
  navTreeBN,
  navTreeEN,
  navTreeES,
} from "@/constants/navTree";
import { officeLocationsEN } from "@/constants/officeAddress";
import styles from "./Footer.module.scss";

type Locale = "en" | "bn" | "ar" | "es";

type FooterProps = {
  locale: Locale;
  mainBranchLabel: string;
  subBranchesLabel: string;
  plannedBranchesLabel: string;
  quickLinksLabel: string;
  allRightsReservedLabel: string;
  privacyPolicyLabel: string;
  termsLabel: string;
};

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/167EkUBgYz/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jionexit?igsh=MTIzZzZjZ3p3bWxpbQ==",
    icon: FaInstagram,
  },
  {
    label: "X",
    href: "https://x.com/JIONEXIT",
    icon: BsTwitterX,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/jionex/",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@jionex-b6n?si=1AzueVi2OT7b5ekI",
    icon: FaYoutube,
  },
];

const navTrees = {
  en: navTreeEN,
  bn: navTreeBN,
  ar: navTreeAR,
  es: navTreeES,
} as const;

export default function Footer({
  locale,
  mainBranchLabel,
  subBranchesLabel,
  plannedBranchesLabel,
  quickLinksLabel,
  allRightsReservedLabel,
  privacyPolicyLabel,
  termsLabel,
}: FooterProps) {
  const navTree = navTrees[locale];

  const companyChildren =
    navTree.find((item) => item.id === "company")?.children ?? [];

  const mainItems = navTree.filter((item) => item.id !== "company");

  const localizedHref = (href: string) => {
    if (href.startsWith("http") || href.startsWith("#")) return href;
    if (href === "/") return `/${locale}`;
    return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
  };

  const visibleMainBranches = officeLocationsEN.slice(1, 3);
  const plannedBranches = officeLocationsEN.slice(3, 7);

  return (
    <footer className={styles.footer} dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.topLine}>
          <span>JIONEX</span>
          <span>TECHNOLOGY / INNOVATION / IMPACT</span>
        </div>

        <div className={styles.grid}>
          <section className={`${styles.column} ${styles.brandColumn}`}>
            <Link href={`/${locale}`} className={styles.logo}>
              <Image
                src="/images/jionex_logo_white.png"
                alt="Jionex"
                width={250}
                height={80}
              />
            </Link>

            <div className={styles.branchBlock}>
              <h2>{mainBranchLabel}</h2>

              {officeLocationsEN.slice(0, 1).map((office) => (
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mainAddress}
                  key={office.city}
                >
                  <div className={styles.country}>
                    <Image
                      src={office.flag}
                      alt={office.country}
                      width={50}
                      height={30}
                    />
                    <span>
                      {office.city}, {office.country}
                    </span>
                  </div>
                  <strong>{office.company}</strong>
                  <p>{office.address}</p>
                </a>
              ))}
            </div>

            <div className={styles.social}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </section>

          <section className={styles.column}>
            <h2>{subBranchesLabel}</h2>

            <div className={styles.branchList}>
              {visibleMainBranches.map((office) => (
                <a
                  key={office.city}
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.branch}
                >
                  <Image
                    src={office.flag}
                    alt={office.country}
                    width={50}
                    height={30}
                  />
                  <span>
                    <small>{office.office}</small>
                    {office.city}, {office.country}
                  </span>
                  <b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>

            <h2 className={styles.plannedTitle}>{plannedBranchesLabel}</h2>

            <div className={styles.plannedGrid}>
              {plannedBranches.map((office) => (
                <span key={office.city} className={styles.planned}>
                  <Image
                    src={office.flag}
                    alt={office.country}
                    width={40}
                    height={24}
                  />
                  <span>{office.city}</span>
                </span>
              ))}
            </div>
          </section>

          <section className={styles.column}>
            <h2>{quickLinksLabel}</h2>

            <nav className={styles.menu} aria-label={quickLinksLabel}>
              {companyChildren.map((item) =>
                item.link ? (
                  <Link key={item.id} href={localizedHref(item.link)}>
                    <span>{item.title}</span>
                    <b aria-hidden="true">↗</b>
                  </Link>
                ) : null,
              )}

              {mainItems.map((item) =>
                item.link ? (
                  <Link key={item.id} href={localizedHref(item.link)}>
                    <span>{item.title}</span>
                    <b aria-hidden="true">↗</b>
                  </Link>
                ) : null,
              )}
            </nav>
          </section>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Jionex. {allRightsReservedLabel}
          </p>

          <div>
            <Link href={`/${locale}/policy`}>{privacyPolicyLabel}</Link>
            <Link href={`/${locale}/terms-and-conditions`}>{termsLabel}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
