import Head from "next/head";
import { Footer } from "../../../layout/footer";
import Faq from "../../../modules/faq";
import Expertise from "../../../modules/expertise";
import Contactmod from "../../../modules/contact";
import Partners from "../../../modules/partners";
import ProjectDetails from "../../../modules/projects";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Container } from "react-bootstrap";
import { customSoftwareTools } from "../../../constants/tech/custom";
import styles from "../tech.module.scss";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
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
          Custom Software Development Services – Tailored Solutions for Your
          Business | Jionex
        </title>
        <meta
          name="description"
          content="Discover Jionex's custom software development services, delivering scalable and secure solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="custom software development, tailored software solutions, scalable software, secure software development, Jionex custom software services"
        />
        <meta
          property="og:title"
          content="Custom Software Development Services – Tailored Solutions for Your Business | Jionex"
        />
        <meta
          property="og:description"
          content="Explore how Jionex delivers custom software development services that ensure scalability and security for your business applications."
        />
        <meta
          property="og:url"
          content="https://www.jionex.com/tech/custom-software"
        />
      </Head>

      <main className={`${styles.main} ${styles.custom}`}>
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
                <Link href="#">{t("Custom Software Development")}</Link>
              </li>
            </ul>
            <div className={styles.content}>
              <h1>
                {t("Leading")} <span>{t("Custom Software Development")}</span>{" "}
                {t("Firm")}
              </h1>
              <p>{t("Custom Banner Des")}</p>
            </div>
          </Container>
        </section>

        <section className={styles.techImage}>
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.btnWrapper}>
                <Link href="#">{t("Consult Our Custom Team")}</Link>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.skills}>
          <Container>
            <div className={styles.head}>
              <h2>
                {t("Deploy Custom Software Team with Specific Skill Set")}
              </h2>
            </div>
            <div className={styles.wrapper}>
              {customSoftwareTools.map((tech, index) => (
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

        <ProjectDetails selectedProjectId={6} />
      </main>

      <Faq />
      <Expertise />
      <Contactmod />
      <Footer />
    </>
  );
}
