import Head from "next/head";
import { Footer } from "../../../layout/footer";
import Link from "next/link";
import Faq from "../../../modules/faq";
import Expertise from "../../../modules/expertise";
import Contactmod from "../../../modules/contact";
import Partners from "../../../modules/partners";
import ProjectDetails from "../../../modules/projects";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styles from "../tech.module.scss";
import { Container } from "react-bootstrap";
import { MdArrowForwardIos } from "react-icons/md";
import { cloudTools } from "../../../constants/tech/cloud";
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
          Cloud Infrastructure & Hosting Services – Scalable & Secure Solutions
          | Jionex
        </title>
        <meta
          name="description"
          content="Explore Jionex's cloud computing services, delivering scalable and secure cloud solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="cloud computing, scalable cloud solutions, secure cloud services, Jionex cloud computing, cloud infrastructure"
        />
        <meta
          property="og:title"
          content="Cloud Computing Services – Scalable & Secure Solutions | Jionex"
        />
        <meta
          property="og:description"
          content="Discover how Jionex delivers cloud computing services that ensure scalability and security for your business applications."
        />
        <meta
          property="og:url"
          content="https://www.jionex.com/tech/cloud-computing"
        />
      </Head>

      <main className={`${styles.main} ${styles.cloud}`}>
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
                <Link href="#">{t("Cloud Infrastructure & Hosting")}</Link>
              </li>
            </ul>
            <div className={styles.content}>
              <h1>{t("Scale with Confidence. Operate with Resilience")}</h1>
              <p>{t("Scale with Confidence. Operate with Resilience Des")}</p>
            </div>
          </Container>
        </section>

        <section className={styles.techImage}>
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.btnWrapper}>
                <Link href="#">
                  {t("Consult Our Cloud Infrastructure & Hosting Team")}
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
                  "Cloud Infrastructure & Hosting Team with Specific Skill Set"
                )}
              </h2>
            </div>
            <div className={styles.wrapper}>
              {cloudTools.map((tech, index) => (
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

        <ProjectDetails selectedProjectId={7} />
      </main>

      <Faq />
      <Expertise />
      <Contactmod />
      <Footer />
    </>
  );
}
