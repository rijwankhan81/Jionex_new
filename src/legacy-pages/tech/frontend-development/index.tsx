import Head from "next/head";
import { Footer } from "../../../layout/footer";

import Faq from "../../../modules/faq";
import Expertise from "../../../modules/expertise";
import Contactmod from "../../../modules/contact";
import Partners from "../../../modules/partners";
import ProjectDetails from "../../../modules/projects";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { frontEndTechnologies } from "../../../constants/tech/frontEndTechnologies";
import styles from "../tech.module.scss";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
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
          Frontend Development Services – Building Responsive & Scalable Web
          Interfaces | Jionex
        </title>
        <meta
          name="description"
          content="Discover Jionex's frontend development services, crafting responsive and scalable web interfaces using modern technologies to enhance user experience."
        />
        <meta
          name="keywords"
          content="frontend development services, responsive web design, scalable web interfaces, HTML5, CSS3, JavaScript, React, Angular, Vue.js, user experience, web development company"
        />
        <meta
          property="og:title"
          content="Frontend Development Services – Building Responsive & Scalable Web Interfaces | Jionex"
        />
        <meta
          property="og:description"
          content="Explore Jionex's frontend development services, creating responsive and scalable web interfaces to enhance user experience."
        />
        <meta
          property="og:url"
          content="https://www.jionex.com/tech/frontend-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className={`${styles.main} ${styles.frontend}`}>
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
                <Link href="#">{t("Frontend Development")}</Link>
              </li>
            </ul>
            <div className={styles.content}>
              <h1>
                {t("Leading")} <span>{t("Frontend Development")}</span>{" "}
                {t("Firm")}
              </h1>
              <p>{t("Front Banner Des")}</p>
            </div>
          </Container>
        </section>

        <section className={styles.techImage}>
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.btnWrapper}>
                <Link href="#">{t("Consult Our Frontend Team")}</Link>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.skills}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Front Skill")}</h2>
              <p>{t("Skill Des")}</p>
            </div>
            <div className={styles.wrapper}>
              {frontEndTechnologies.map((tech, index) => (
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

        <ProjectDetails selectedProjectId={5} />

        {/* <section className="serviceSec5">
          <div className="container serviceSec5A desktop">
            <div className="row">
              <div className="col-6 left">
                <div className="service5Flex">
                  <div className="fs24 text_linear">
                    {t("Frontend Development")} {t("Team")}
                  </div>
                  <NextImage src="/images/service5Left.png" alt={""} />
                </div>
                <div className="fs64 text_black head">{t("Team Idea")}</div>
                <p className="fs24 text_grey">{t("Front Team Des")}</p>
              </div>
            </div>
            <NextImage
              src="/images/arrow-up1.png"
              className="arrow1"
              alt={""}
            />
          </div>
        </section> */}
      </main>
      <Faq />
      <Expertise />
      <Contactmod />
      <Footer />
    </>
  );
}
