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
import { backendTech } from "../../../constants/tech/backEnd";
import useHasMounted from "../../../hooks/useHasMounted";

export default function Backend({ ...props }) {
  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <>
      <Head>
        <title>
          Backend Development Services – Scalable & Secure Solutions | Jionex
        </title>
        <meta
          name="description"
          content="Explore Jionex's backend development services, delivering scalable and secure solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="backend development services, scalable backend solutions, secure backend development, API development, server-side programming, database integration, Jionex backend services"
        />
        <meta
          property="og:title"
          content="Backend Development Services – Scalable & Secure Solutions | Jionex"
        />
        <meta
          property="og:description"
          content="Discover how Jionex delivers backend development services that ensure scalability and security for your applications."
        />
        <meta
          property="og:url"
          content="https://www.jionex.com/tech/backend-development"
        />
      </Head>

      <main className={`${styles.main} ${styles.backend}`}>
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
                <Link href="#">{t("Backend Development")}</Link>
              </li>
            </ul>
            <div className={styles.content}>
              <h1>
                {t("Leading")} <span>{t("Backend Development")}</span>{" "}
                {t("Firm")}
              </h1>
              <p>
                {t(
                  "Power your applications with reliable, scalable, and secure backend systems. At Jionex, we specialize in backend technologies like Node.js, PHP, Python, and .NET to ensure seamless database integration, API development, and business logic execution."
                )}
              </p>
            </div>
          </Container>
        </section>

        <section className={styles.techImage}>
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.btnWrapper}>
                <Link href="#">{t("Consult Our Backend Team")}</Link>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.skills}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Deploy Backend Team with Specific Skill Set")}</h2>
            </div>
            <div className={styles.wrapper}>
              {backendTech.map((tech, index) => (
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

        <ProjectDetails selectedProjectId={13} />
      </main>
      <Faq />
      <Expertise />
      <Contactmod />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // load your namespace
    },
  };
}
