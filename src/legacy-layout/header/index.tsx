import Head from "next/head";
import styles from "./Header.module.scss";
import { Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { IoIosArrowDown } from "react-icons/io";
import NextImage from "../../hooks/NextImage";
import LanguageSwitcher from "../../modules/languageSwitch";
import { useTranslation } from "next-i18next";
import { techEN, techBN, techAR, techES } from "../../constants/technologies";
import {
  servicesEN,
  servicesBN,
  servicesAR,
  servicesES,
} from "../../constants/services";
import useHasMounted from "../../hooks/useHasMounted";
import {
  NavItem,
  navTreeAR,
  navTreeBN,
  navTreeEN,
  navTreeES,
} from "../../constants/navTree";

export default function Header() {
  const { i18n } = useTranslation("common");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleRouteChange = () => {
      setShowMenu(false);
      setOpenDropdown(null); // optional
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
        setOpenDropdown(null);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const hasMounted = useHasMounted();
  if (!hasMounted) return null;

  const toggleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const isActive = (path: string) => router.pathname === path;

  // Get language-specific dynamic data
  const lang = i18n.language;
  const tech =
    { en: techEN, bn: techBN, ar: techAR, es: techES }[lang] || techEN;
  const services =
    { en: servicesEN, bn: servicesBN, ar: servicesAR, es: servicesES }[lang] ||
    servicesEN;
  const navTree =
    { en: navTreeEN, bn: navTreeBN, ar: navTreeAR, es: navTreeES }[lang] ||
    navTreeEN;

  const getDynamicChildren = (type: "technologies" | "services") => {
    const data = type === "technologies" ? tech : services;
    return data.map((item) => ({
      id: item.id,
      title: item.title,
      link: item.link,
    }));
  };

  const renderNavItem = (item: NavItem) => {
    const hasDropdown = item.dropdown || item.children || item.dynamic;
    const children = item.dynamic
      ? getDynamicChildren(item.dynamic)
      : item.children;

    if (hasDropdown && children) {
      return (
        <li
          key={item.id}
          className={`${styles.navItem} ${styles.dropdownMenu}`}
        >
          <Link href={item.link || "#"} className={styles.navLink}>
            {item.title}
          </Link>
          <span
            className={styles.arrow}
            onClick={() => toggleDropdown(item.id)}
          >
            <IoIosArrowDown />
          </span>
          <div
            className={`${styles.servicesWrapper} ${
              openDropdown === item.id ? styles.dropShow : ""
            }`}
          >
            {children.map((child) => (
              <div className={styles.service} key={child.id}>
                <Link
                  className={`${
                    isActive(child.link || "") ? styles.active : ""
                  } ${styles.subNavLink}`}
                  href={child.link || "#"}
                >
                  <h3 className={styles.name}>{child.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </li>
      );
    }

    return (
      <li key={item.id} className={styles.navItem}>
        <Link
          className={`${isActive(item.link || "") ? styles.active : ""} ${
            styles.navLink
          }`}
          href={item.link || "#"}
        >
          {item.title}
        </Link>
      </li>
    );
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/jionex_logo_fav.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <header id="header" className={`${styles.header} `}>
        <Container>
          <div className={styles.headWrapper}>
            <div className={styles.logo}>
              <Link href="/">
                <NextImage src="/images/jionex_logo.png" alt="Jionex" />
              </Link>
            </div>

            <div className={styles.menuParent} ref={menuRef}>
              <div className={`${showMenu ? styles.show : ""} ${styles.menu}`}>
                <ul className={styles.ul}>{navTree.map(renderNavItem)}</ul>
              </div>

              <div className={styles.languageSelector}>
                <div
                  className={styles.hamMenu}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <GiHamburgerMenu />
                </div>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
