import Head from "next/head";

import { Footer } from "../../layout/footer";
import styles from "./partner-with-us.module.scss";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import useHasMounted from "../../hooks/useHasMounted";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { motion } from "framer-motion";
import Services from "../../modules/servicesMarquee";
import NextImage from "../../hooks/NextImage";
import {
  pillersAR,
  pillersBN,
  pillersEN,
  pillersES,
} from "../../constants/partnership-pillers";

export default function Partner() {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  let pillers;

  switch (selectedLanguage) {
    case "bn":
      pillers = pillersBN;
      break;
    case "ar":
      pillers = pillersAR;
      break;
    case "es":
      pillers = pillersES;
      break;
    default:
      pillers = pillersEN;
  }

  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <>
      <Head>
        <title>
          Partners With Us – Digital Solutions for Government, FinTech,
          Healthcare & More | Jionex
        </title>
        <meta
          name="description"
          content="Explore Jionex’s tailored digital transformation solutions across industries including government, fintech, healthcare, education, SMEs, and travel in South Asia and the Middle East."
        />
        <meta
          name="keywords"
          content="digital transformation, government software, fintech platform, hospital management ERP, education management system, SME business software, travel technology solutions, South Asia tech, Middle East digital solutions, smart city software, blockchain fintech Bangladesh"
        />
        <meta
          property="og:title"
          content="Industries We Serve – Smart Digital Solutions by Jionex"
        />
        <meta
          property="og:description"
          content="Tailored technology solutions for governments, fintech startups, healthcare providers, educational institutions, SMEs, and travel companies."
        />
        <meta
          property="og:image"
          content="https://www.jionex.com/images/jionex_logo.png"
        />
        <meta property="og:url" content="https://www.jionex.com/industries" />
      </Head>
      <div className={styles.portfolioPage}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h1>{t("Why Partner With Jionex")}</h1>
              <p>{t("Why Partner With Jionex Des")}</p>
              <div className={styles.btn}>
                <Link href="contact">{t("Schedule a Free Consultation")}</Link>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.services}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.service}>
                <div className={styles.head}>
                  <h2>{t("Our Partnership Pillars")}</h2>
                </div>
                <div className={styles.rowItem}>
                  <div className={styles.rowItemWrapper}>
                    {pillers.map((item, idx) => (
                      <motion.div
                        className={styles.content}
                        key={idx}
                        // style={{
                        //   backgroundImage: `url('${item.image
                        //     .toLowerCase()
                        //     .replace(/\s+/g, "-")}')`,
                        // }}
                        initial={{
                          scale: 0.8,
                          translateY: 100,
                          opacity: 0,
                        }}
                        whileInView={{
                          scale: 1,
                          translateY: 0,
                          opacity: 1,
                        }}
                        viewport={{ once: true, amount: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 * idx,
                          ease: "easeInOut",
                        }}
                      >
                        <div className={styles.image}>
                          <NextImage src={item.image} alt={""} />
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.inner}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Services />
        <section className={styles.ready}>
          <Container className={styles.container}>
            <div className={styles.wrapper}>
              <h2>{t("Ready to Transform Together")}</h2>
              <p>{t("Ready to Transform Together Des")}</p>
              <div className={styles.btn}>
                <Link href="contact">{t("Contact us today")}</Link>
              </div>
            </div>
          </Container>
        </section>
        <Footer />
      </div>
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
