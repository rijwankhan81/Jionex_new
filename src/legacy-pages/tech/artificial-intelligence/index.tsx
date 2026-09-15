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
import { aiTools } from "../../../constants/tech/ai";
import useHasMounted from "../../../hooks/useHasMounted";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // load your namespace
    },
  };
}

export default function AI({ ...props }) {
  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <>
      <Head>
        <title>
          Artificial Intelligence Development – Transformative AI Solutions |
          Jionex
        </title>
        <meta
          name="description"
          content="Explore Jionex's AI development services, delivering transformative artificial intelligence solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="artificial intelligence development, AI solutions, machine learning, data-driven insights, Jionex AI services"
        />
        <meta
          property="og:title"
          content="Artificial Intelligence Development – Transformative AI Solutions | Jionex"
        />
        <meta
          property="og:description"
          content="Discover how Jionex delivers AI development services that ensure transformative and data-driven solutions for your business applications."
        />
        <meta
          property="og:url"
          content="https://www.jionex.com/tech/artificial-intelligence"
        />
      </Head>

      <main className={`${styles.main} ${styles.ai}`}>
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
                <Link href="#">{t("Artificial Intelligence")}</Link>
              </li>
            </ul>
            <div className={styles.content}>
              <h1>
                {t("Leading")} <span>{t("Artificial Intelligence")}</span>{" "}
                {t("Firm")}
              </h1>
              <p>
                {t(
                  "Transform your business with smart, AI-powered solutions from Jionex. We develop intelligent systems using machine learning, natural language processing, and computer vision to automate workflows, analyze data, and deliver predictive insights."
                )}
              </p>
            </div>
          </Container>
        </section>

        <section className={styles.techImage}>
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.btnWrapper}>
                <Link href="#">
                  {t("Consult Our Artificial Intelligence Team")}
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.skills}>
          <Container>
            <div className={styles.head}>
              <h2>
                {t(
                  "Deploy Artificial Intelligence Team with Specific Skill Set"
                )}
              </h2>
            </div>
            <div className={styles.wrapper}>
              {aiTools.map((tech, index) => (
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

        <ProjectDetails selectedProjectId={14} />
      </main>

      <Faq />
      <Expertise />
      <Contactmod />
      <Footer />
    </>
  );
}
