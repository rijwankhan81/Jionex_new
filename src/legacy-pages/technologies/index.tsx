import Head from "next/head";
import { Footer } from "../../layout/footer";
import Contactmod from "../../modules/contact";
import styles from "./technologies.module.scss";
import { useTranslation } from "next-i18next";
import useHasMounted from "../../hooks/useHasMounted";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextImage from "../../hooks/NextImage";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  technologiesEN,
  technologiesBN,
  technologiesAR,
  technologiesES,
} from "../../constants/techexcelein";
import { techAR, techBN, techEN, techES } from "../../constants/technologies";

export default function Technologies({ ...props }) {
  const { t, i18n } = useTranslation("common");
  const selectedLanguage = i18n.language;
  let tech, technologies;

  switch (selectedLanguage) {
    case "bn":
      tech = techBN;
      technologies = technologiesBN;
      break;
    case "ar":
      tech = techAR;
      technologies = technologiesAR;
      break;
    case "es":
      tech = techES;
      technologies = technologiesES;
      break;
    default:
      tech = techEN;
      technologies = technologiesEN;
  }

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <>
      <Head>
        <title>
          Technologies We Use – Modern Tech Stack for Scalable Digital Solutions
          | Jionex
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
              <h2>{t("Technologies We Use")}</h2>
              <p>{t("Technologies We Use Des")}</p>
            </motion.div>
          </Container>
        </section>

        <section className={styles.tech}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Technologies We Excel In")}</h2>
            </div>
            <Row className={styles.row}>
              <Col md={7}>
                <div className={styles.image}>
                  <NextImage src={"/images/tech.png"} alt={""} />
                </div>
              </Col>
              <Col md={5}>
                <div className={styles.content}>
                  {technologies.map((tech) => (
                    <div key={tech.title}>
                      <h3>{tech.title}</h3>
                      <p>{tech.description}</p>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.services}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Our Technology Stack")}</h2>
            </div>
            <div className={styles.wrapper}>
              {tech.map((service, index) => (
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
