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
import { iotDevTools } from "../../../constants/tech/iot";
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
          IoT App Development Services – Smart & Connected Solutions | Jionex
        </title>
        <meta
          name="description"
          content="Explore Jionex's IoT app development services, delivering smart and connected solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="IoT app development, smart solutions, connected devices, Jionex IoT services, Internet of Things applications"
        />
        <meta
          property="og:title"
          content="IoT App Development Services – Smart & Connected Solutions | Jionex"
        />
        <meta
          property="og:description"
          content="Discover how Jionex delivers IoT app development services that ensure smart connectivity and tailored solutions for your business applications."
        />

        <meta property="og:url" content="https://www.jionex.com/tech/iot-app" />
      </Head>

      <main className={`${styles.main} ${styles.iot}`}>
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
                <Link href="#">{t("IoT App Development")}</Link>
              </li>
            </ul>
            <div className={styles.content}>
              <h1>
                {t("Leading")} <span>{t("IoT App Development")}</span>{" "}
                {t("Firm")}
              </h1>
              <p>{t("IOT Banner Des")}</p>
            </div>
          </Container>
        </section>

        <section className={styles.techImage}>
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.btnWrapper}>
                <Link href="#">{t("Consult Our IOT Development Team")}</Link>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.skills}>
          <Container>
            <div className={styles.head}>
              <h2>{t("IOT Skill")}</h2>
            </div>
            <div className={styles.wrapper}>
              {iotDevTools.map((tech, index) => (
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

        <ProjectDetails selectedProjectId={10} />
      </main>

      <Faq />
      <Expertise />
      <Contactmod />
      <Footer />
    </>
  );
}
