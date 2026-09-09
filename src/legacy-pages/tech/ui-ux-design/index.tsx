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
import { uiuxTools } from "../../../constants/tech/uiux";
import useHasMounted from "../../../hooks/useHasMounted";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // load your namespace
    },
  };
}

export default function UIUX({ ...props }) {
  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <>
      <Head>
        <title>
          UI/UX Design Services – Crafting Intuitive Digital Experiences |
          Jionex
        </title>
        <meta
          name="description"
          content="Discover Jionex's UI/UX design services, creating user-centric interfaces that enhance digital experiences across web and mobile platforms."
        />
        <meta
          name="keywords"
          content="UI design services, UX design solutions, user interface design, user experience design, digital product design, responsive design, mobile app UX, web UI design"
        />
        <meta
          property="og:title"
          content="UI/UX Design Services – Crafting Intuitive Digital Experiences | Jionex"
        />
        <meta
          property="og:description"
          content="Explore how Jionex delivers user-centric UI/UX design services that enhance digital experiences across web and mobile platforms."
        />
        <meta
          property="og:url"
          content="https://www.jionex.com/tech/ui-ux-design"
        />
      </Head>

      <main className={`${styles.main} ${styles.uiux}`}>
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
                <Link href="#">{t("UI/UX Design")}</Link>
              </li>
            </ul>
            <div className={styles.content}>
              <h1>
                {t("Leading")} <span>{t("UI/UX Design")}</span> {t("Firm")}
              </h1>
              <p>
                {t(
                  "User experience is at the heart of what we do. Jionex’s UI/UX design team creates intuitive, visually appealing, and user-friendly interfaces that elevate engagement, drive conversions, and enhance digital experiences across platforms and devices."
                )}
              </p>
            </div>
          </Container>
        </section>

        <section className={styles.techImage}>
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.btnWrapper}>
                <Link href="#">{t("Consult Our UI/UX Team")}</Link>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.skills}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Deploy UI/UX Team with Specific Skill Set")}</h2>
            </div>
            <div className={styles.wrapper}>
              {uiuxTools.map((tech, index) => (
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

        <ProjectDetails selectedProjectId={9} />
      </main>
      <Faq />
      <Expertise />
      <Contactmod />
      <Footer />
    </>
  );
}
