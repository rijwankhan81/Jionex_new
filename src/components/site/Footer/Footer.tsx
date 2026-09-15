import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { navTreeAR, navTreeBN, navTreeEN, navTreeES } from "@/constants/navTree";
import { officeLocationsEN } from "@/constants/officeAddress";
import styles from "./Footer.module.scss";

export type FooterProps = {
  locale: "en" | "bn" | "ar" | "es";
  translations: Record<string, string>;
};

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/share/167EkUBgYz/", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/jionexit?igsh=MTIzZzZjZ3p3bWxpbQ==", icon: FaInstagram },
  { label: "X", href: "https://x.com/JIONEXIT", icon: BsTwitterX },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/jionex/", icon: FaLinkedinIn },
  { label: "YouTube", href: "https://youtube.com/@jionex-b6n?si=1AzueVi2OT7b5ekI", icon: FaYoutube },
];

const navTrees = { en: navTreeEN, bn: navTreeBN, ar: navTreeAR, es: navTreeES } as const;

export default function Footer({ locale, translations }: FooterProps) {
  const t = (key: string) => translations[key] ?? key;
  const navTree = navTrees[locale];
  const companyChildren = navTree.find((item) => item.id === "company")?.children ?? [];
  const mainItems = navTree.filter((item) => item.id !== "company");
  const localizedHref = (href: string) => {
    if (href.startsWith("http") || href.startsWith("#")) return href;
    if (href === "/") return `/${locale}`;
    return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
  };
  const subBranches = officeLocationsEN.slice(1, 3);
  const plannedBranches = officeLocationsEN.slice(3, 7);

  return (
    <footer className={styles.footer} dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <div className={styles.topLine}><span>JIONEX</span><span>TECHNOLOGY / INNOVATION / IMPACT</span></div>

        <div className={styles.grid}>
          <section className={`${styles.column} ${styles.brandColumn}`}>
            <Link href={`/${locale}`} className={styles.logo}>
              <Image src="/images/jionex_logo_white.png" alt="Jionex" width={250} height={80} />
            </Link>

            <div className={styles.branchBlock}>
              <h2>{t("Main Branch")}</h2>
              {officeLocationsEN.slice(0, 1).map((office) => (
                <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className={styles.mainAddress} key={office.city}>
                  <div className={styles.country}><Image src={office.flag} alt={office.country} width={50} height={30} /><span>{office.city}, {office.country}</span></div>
                  <strong>{office.company}</strong><p>{office.address}</p>
                </a>
              ))}
            </div>

            <div className={styles.social}>
              {socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon /></a>)}
            </div>
          </section>

          <section className={styles.column}>
            <h2>{t("Sub Branches")}</h2>
            <div className={styles.branchList}>
              {subBranches.map((office) => (
                <a key={office.city} href={office.mapLink} target="_blank" rel="noopener noreferrer" className={styles.branch}>
                  <Image src={office.flag} alt={office.country} width={50} height={30} />
                  <span><small>{office.office}</small>{office.city}, {office.country}</span><b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
            <h2 className={styles.plannedTitle}>{t("Planned Branches")}</h2>
            <div className={styles.branchList}>
              {plannedBranches.map((office) => (
                <a key={office.city} href={office.mapLink} target="_blank" rel="noopener noreferrer" className={styles.branch}>
                  <Image src={office.flag} alt={office.country} width={50} height={30} />
                  <span><small>{office.office}</small>{office.city}, {office.country}</span><b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          </section>

          <section className={styles.column}>
            <h2>{t("Quick Links")}</h2>
            <nav className={styles.footerLinks}>
              {companyChildren.map((item) => <Link key={item.id} href={localizedHref(item.link ?? "#")}>{item.title}<span>↗</span></Link>)}
              {mainItems.map((item) => <Link key={item.id} href={localizedHref(item.link ?? "#")}>{item.title}<span>↗</span></Link>)}
            </nav>
          </section>
        </div>

        <div className={styles.bottomLine}>
          <span>© Jionex — {t("All rights reserved")}</span>
          <div><Link href={`/${locale}/policy`}>{t("Privacy Policy")}</Link><Link href={`/${locale}/terms-and-conditions`}>{t("Terms of Service")}</Link></div>
        </div>
      </div>
    </footer>
  );
}
