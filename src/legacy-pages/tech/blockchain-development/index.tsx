import Head from "next/head";
import { Footer } from "../../../layout/footer";

import Faq from "../../../modules/faq";
import Expertise from "../../../modules/expertise";
import Contactmod from "../../../modules/contact";
import Partners from "../../../modules/partners";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styles from "../tech.module.scss";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { blockchainTools } from "../../../constants/tech/blockchain";
import useHasMounted from "../../../hooks/useHasMounted";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // load your namespace
    },
  };
}

export default function Blockchain({ ...props }) {
  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <>
      <Head>
        <title>
          Blockchain Integration Services – Secure & Scalable Solutions | Jionex
        </title>
        <meta
          name="description"
          content="Explore Jionex's blockchain development services, delivering secure and scalable blockchain solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="blockchain development, secure blockchain solutions, scalable blockchain services, Jionex blockchain, smart contracts, decentralized applications"
        />
        <meta
          property="og:title"
          content="Blockchain Development Services – Secure & Scalable Solutions | Jionex"
        />
        <meta
          property="og:description"
          content="Discover how Jionex delivers blockchain development services that ensure secure and scalable solutions for your business applications."
        />
        <meta
          property="og:url"
          content="https://www.jionex.com/tech/blockchain-development"
        />
      </Head>

      <main className={`${styles.main} ${styles.blockchain}`}>
        <section className={styles.banner}>
          <Container>
            <ul className={styles.breadcrumb}>
              <li>
                <Link href="/">{t("Home")}</Link>
              </li>
              <li>
                <MdArrowForwardIos />
              </li>
              <li>
                <Link href="/services">{t("Services")}</Link>
              </li>
              <li>
                <MdArrowForwardIos />
              </li>
              <li>
                <Link href="#">{t("Blockchain Integration")}</Link>
              </li>
            </ul>
            <div className={styles.content}>
              <h1>{t("Trust by Design. Integrity by Technology")}</h1>
              <p>{t("Trust by Design. Integrity by Technology Des")}</p>
            </div>
          </Container>
        </section>

        <section className={styles.techImage}>
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.btnWrapper}>
                <Link href="#">
                  {t("Consult Our Blockchain Integration Team")}
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.skills}>
          <Container>
            <div className={styles.head}>
              <h2>
                {t("Blockchain Integration Team with Specific Skill Set")}
              </h2>
            </div>
            <div className={styles.wrapper}>
              {blockchainTools.map((tech, index) => (
                <div className={styles.skill} key={index}>
                  {/* <NextImage src={tech.image} alt={tech.name} /> */}
                  <div className={styles.icon}>{tech.icon}</div>
                  <h3 className="fs24N text_black">{tech.name}</h3>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <Partners />
      </main>

      <Faq />
      <Expertise />
      <Contactmod />
      <Footer />
    </>
  );
}
