import Head from "next/head";
import { Footer } from "../../layout/footer";
import Contactmod from "../../modules/contact";
import styles from "./services.module.scss";
import { useTranslation } from "next-i18next";
import useHasMounted from "../../hooks/useHasMounted";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  servicesEN,
  servicesBN,
  servicesAR,
  servicesES,
} from "../../constants/services";

export default function Technologies({ ...props }) {
  const { t, i18n } = useTranslation("common");
  const selectedLanguage = i18n.language;
  let services;

  switch (selectedLanguage) {
    case "bn":
      services = servicesBN;
      break;
    case "ar":
      services = servicesAR;
      break;
    case "es":
      services = servicesES;
      break;
    default:
      services = servicesEN;
  }

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <>
      <Head>
        <title>
          Services – Modern Tech Stack for Scalable Digital Solutions | Jionex
        </title>
        <meta
          name="description"
          content="Explore the modern technology stack Jionex uses to deliver scalable, secure, and high-performance digital solutions for governments, fintechs, healthcare, education, and SMEs."
        />
        <meta
          name="keywords"
          content="modern tech stack, Next.js development, Node.js, React, TypeScript, scalable software, secure applications, cloud solutions, digital transformation technologies, fintech tech stack, healthcare IT stack, South Asia software company, Middle East software development"
        />
        <meta
          property="og:title"
          content="Technologies We Use – Scalable Tech Stack by Jionex"
        />
        <meta
          property="og:description"
          content="Our expert team uses modern tools like React, Node.js, TypeScript, and cloud technologies to build scalable and secure digital platforms for key industries."
        />
        <meta
          property="og:image"
          content="https://www.jionex.com/images/jionex_logo.png"
        />
        <meta property="og:url" content="https://www.jionex.com/technologies" />
      </Head>
      <main className={styles.main}>
        <section className={styles.banner}>
          <Container>
            <motion.div
              className={styles.wrapper}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeInOut",
              }}
            >
              {/* <h1>About Jionex</h1> */}
              <h2>{t("Empowering Innovation, One Solution at a Time")}</h2>
              <p>{t("Empowering Innovation, One Solution at a Time Des")}</p>
            </motion.div>
          </Container>
        </section>

        <section className={styles.services}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Services")}</h2>
            </div>
            <div className={styles.wrapper}>
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ translateY: 100, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index, // stagger delay based on index
                    ease: "easeInOut",
                  }}
                >
                  <div className={styles.service}>
                    <div className={styles.front}>
                      <div className={styles.icon}>{service.icon}</div>
                      <h3>{t(service.title)}</h3>
                      <p>{t(service.des)}</p>
                    </div>
                    <div className={styles.back}>
                      <div className={styles.icon}>{service.icon}</div>
                      <h3>{t(service.title)}</h3>
                      <Link className={styles.btnBlue} href={service.link}>
                        {t("Read More")}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        <Contactmod />

        <Footer></Footer>
      </main>
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
