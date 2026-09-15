import Head from "next/head";

import { Footer } from "../../../layout/footer";
import Faq from "../../../modules/faq";
import Expertise from "../../../modules/expertise";
import Contactmod from "../../../modules/contact";
import Partners from "../../../modules/partners";
import ProjectDetails from "../../../modules/projects";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { androidDevTools } from "../../../constants/tech/android";
import { Container } from "react-bootstrap";
import styles from "../tech.module.scss";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import useHasMounted from "../../../hooks/useHasMounted";

export default function Services1({ ...props }) {
  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      <Head>
        <title>
          Android App Development Services – Custom Mobile Solutions | Jionex
        </title>
        <meta
          name="description"
          content="Explore Jionex's Android app development services, delivering scalable and secure mobile applications tailored to your business needs."
        />
        <meta
          name="keywords"
          content="Android app development, custom mobile applications, scalable Android solutions, secure mobile apps, Jionex Android services"
        />
        <meta
          property="og:title"
          content="Android App Development Services – Custom Mobile Solutions | Jionex"
        />
        <meta
          property="og:description"
          content="Discover how Jionex delivers Android app development services that ensure scalability and security for your business applications."
        />
        <meta
          property="og:url"
          content="https://www.jionex.com/tech/android-app"
        />
      </Head>

      <main className={`${styles.main} ${styles.android}`}>
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
                <Link href="#">{t("Android App Development")}</Link>
              </li>
            </ul>
            <div className={styles.content}>
              <h1>
                {t("Leading")} <span>{t("Android App Development")}</span>{" "}
                {t("Firm")}
              </h1>
              <p>{t("Android Banner Des")}</p>
            </div>
          </Container>
        </section>

        <section className={styles.techImage}>
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.btnWrapper}>
                <Link href="#">{t("Consult Our Android Team")}</Link>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.skills}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Android Skill")}</h2>
            </div>
            <div className={styles.wrapper}>
              {androidDevTools.map((tech, index) => (
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

        <ProjectDetails selectedProjectId={1} />
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
