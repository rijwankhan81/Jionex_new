import Head from "next/head";
import { Footer } from "../../../layout/footer";

import Faq from "../../../modules/faq";
import Expertise from "../../../modules/expertise";
import Contactmod from "../../../modules/contact";
import Partners from "../../../modules/partners";
import ProjectDetails from "../../../modules/projects";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styles from "../tech.module.scss";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { arSolutions } from "../../../constants/tech/ars";
import useHasMounted from "../../../hooks/useHasMounted";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // load your namespace
    },
  };
}

export default function Services1({ ...props }) {
  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <>
      <Head>
        <title>
          Augmented Reality Development Services – Immersive Solutions | Jionex
        </title>
        <meta
          name="description"
          content="Explore Jionex's augmented reality development services, delivering immersive and interactive AR solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="augmented reality development, AR solutions, immersive experiences, interactive AR, Jionex AR services"
        />
        <meta
          property="og:title"
          content="Augmented Reality Development Services – Immersive Solutions | Jionex"
        />
        <meta
          property="og:description"
          content="Discover how Jionex delivers augmented reality development services that ensure immersive and interactive solutions for your business applications."
        />
        <meta
          property="og:url"
          content="https://www.jionex.com/tech/augmented-reality"
        />
      </Head>

      <main className={`${styles.main} ${styles.ars}`}>
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
                <Link href="/technologies">{t("Technologies")}</Link>
              </li>
              <li>
                <MdArrowForwardIos />
              </li>
              <li>
                <Link href="#">{t("Augmented Reality")}</Link>
              </li>
            </ul>
            <div className={styles.content}>
              <h1>
                {t("Leading")} <span>{t("Augmented Reality")}</span> {t("Firm")}
              </h1>
              <p>{t("Aug Banner Des")}</p>
            </div>
          </Container>
        </section>

        <section className={styles.techImage}>
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.btnWrapper}>
                <Link href="#">{t("Consult Our Augmented Reality Team")}</Link>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.skills}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Aug Skill")}</h2>
            </div>
            <div className={styles.wrapper}>
              {arSolutions.map((tech, index) => (
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

        <ProjectDetails selectedProjectId={4} />
      </main>

      <Faq />
      <Expertise />
      <Contactmod />
      <Footer />
    </>
  );
}
