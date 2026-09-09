import Link from "next/link";
import styles from "./footer.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import NextImage from "../../hooks/NextImage";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { officeLocationsEN } from "../../constants/officeAddress";
import {
  navTreeBN,
  navTreeAR,
  navTreeES,
  navTreeEN,
} from "../../constants/navTree";

function Footer() {
  const { locale, pathname } = useRouter();
  const { t } = useTranslation();

  const isActive = (link: string) => pathname === link;

  // Determine nav tree by language
  const getNavTree = () => {
    switch (locale) {
      case "bn":
        return navTreeBN;
      case "ar":
        return navTreeAR;
      case "es":
        return navTreeES;
      default:
        return navTreeEN;
    }
  };

  const navTree = getNavTree();

  // Filter to exclude top-level items: company, technologies, services
  const filteredNavItems = navTree.filter(
    (item) => !["company"].includes(item.id)
  );

  // Get only the children of "company" (skip the parent)
  const companyChildren =
    navTree.find((item) => item.id === "company")?.children || [];

  return (
    <>
      <footer className={styles.footer}>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col xl={4} md={6}>
              <div className={`${styles.wrapper} ${styles.one}`}>
                <div className={styles.logo}>
                  <Link href="/">
                    <NextImage
                      src="/images/jionex_logo_white.png"
                      alt={"Jionex"}
                    />
                  </Link>
                </div>
                <h2>{t("Main Branch")}</h2>
                {officeLocationsEN.slice(0, 1).map((office, index) => (
                  <div className={styles.address} key={index}>
                    <div className={styles.country}>
                      <NextImage src={office.flag} alt={office.country} />
                      <h4>
                        {office.city}, {office.country}
                      </h4>
                    </div>
                    <h5>{office.company}</h5>
                    <div className={styles.location}>
                      <a
                        href={office.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {office.address}
                      </a>
                    </div>
                    {/* <div className={styles.contactNumber}>
                      <h4>{t("Contact")}:</h4>
                      <a href={`tel:${office.contact}`}>{office.contact}</a>
                    </div> */}
                  </div>
                ))}
                <div className={styles.social}>
                  <ul>
                    <li>
                      <Link
                        href="https://www.facebook.com/share/167EkUBgYz/"
                        target="_blank"
                      >
                        <FaFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/jionexit?igsh=MTIzZzZjZ3p3bWxpbQ=="
                        target="_blank"
                      >
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://x.com/JIONEXIT" target="_blank">
                        <BsTwitterX />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/jionex/"
                        target="_blank"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://youtube.com/@jionex-b6n?si=1AzueVi2OT7b5ekI"
                        target="_blank"
                      >
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={5} md={6}>
              <div className={`${styles.wrapper} ${styles.branches}`}>
                <h2>{t("Sub Branches")}</h2>
                {officeLocationsEN.slice(1, 3).map((office, index) => (
                  <div className={styles.address} key={index}>
                    <div className={styles.country}>
                      <NextImage src={office.flag} alt={office.country} />

                      <h4>{office.city},</h4>
                      <h4>{office.country}</h4>
                    </div>
                    {/* <h5>{office.company}</h5>
                    <div className={styles.location}>
                      <a
                        href={office.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {office.address}
                      </a>
                    </div>
                    <div className={styles.contactNumber}>
                      <h4>{t("Contact")}:</h4>
                      <a href={`tel:${office.contact}`}>{office.contact}</a>
                    </div> */}
                  </div>
                ))}
                <div className={styles.setlightBranches}>
                  <h2>{t("Planned Branches")}</h2>
                  {officeLocationsEN.slice(3, 7).map((office, index) => (
                    <div className={styles.address} key={index}>
                      <div className={styles.country}>
                        <NextImage src={office.flag} alt={office.country} />

                        <h4>{office.city},</h4>
                        <h4>{office.country}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col xl={3} md={6}>
              <div className={styles.wrapper}>
                <h2>{t("Quick Links")}</h2>
                <ul className={styles.menu}>
                  {/* Render company children */}
                  {companyChildren.map((child) => (
                    <li key={child.id}>
                      <Link
                        href={child.link}
                        className={isActive(child.link) ? styles.active : ""}
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                  {/* Render all main items */}
                  {filteredNavItems.map((item) => {
                    if (item.link) {
                      return (
                        <li key={item.id}>
                          <Link
                            href={item.link}
                            className={isActive(item.link) ? styles.active : ""}
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </Col>
            {/* <Col xl={3} md={6}>
              <div className={styles.wrapper}>
                <h2>{t("Our Technology Stack")}</h2>
                <ul className={styles.menu}>
                  {services.map((service) => (
                    <li key={service.id}>
                      <Link
                        className={isActive(service.link) ? styles.active : ""}
                        href={service.link}
                      >
                        {t(service.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col> */}
          </Row>
          <div className={styles.copyright}>
            <h2>© 2024 Jionex. {t("All rights reserved")}</h2>

            <ul>
              <li>
                <Link href="/policy">{t("Privacy Policy")}</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">
                  {t("Terms of Service")}
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}
export { Footer };
