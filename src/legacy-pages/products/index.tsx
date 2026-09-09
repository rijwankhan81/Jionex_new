import Head from "next/head";

import { Footer } from "../../layout/footer";
import Contactmod from "../../modules/contact";

import styles from "./products.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import {
  projectsAR,
  projectsBN,
  projectsEN,
  projectsES,
} from "../../constants/projects";
import useHasMounted from "../../hooks/useHasMounted";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { motion } from "framer-motion";

export default function Portfolio() {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  let projectsData;

  switch (selectedLanguage) {
    case "bn":
      projectsData = projectsBN;
      break;
    case "ar":
      projectsData = projectsAR;
      break;
    case "es":
      projectsData = projectsES;
      break;
    default:
      projectsData = projectsEN;
  }

  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <>
      <Head>
        <title>
          Our Products – Digital Transformation Success Stories | Jionex
        </title>
        <meta
          name="description"
          content="See how Jionex delivers real-world results: smart city platforms, fintech apps, healthcare ERPs, education systems, SME tools, and travel solutions across South Asia and the Middle East."
        />
        <meta
          name="keywords"
          content="software portfolio, case studies, smart city projects, fintech app development, healthcare ERP success, education software solutions, SME digital tools, travel technology case study, South Asia IT projects, Middle East software portfolio"
        />
        <meta
          property="og:title"
          content="Jionex Portfolio – Digital Transformation Success Stories"
        />
        <meta
          property="og:description"
          content="Explore our proven track record building scalable platforms for governments, fintechs, healthcare providers, education boards, SMEs, and travel companies."
        />
        <meta
          property="og:image"
          content="https://www.jionex.com/images/jionex_logo.png"
        />
        <meta property="og:url" content="https://www.jionex.com/portfolio" />
      </Head>
      <div className={styles.portfolioPage}>
        <section className={styles.contactPage}>
          <Container className={styles.container}>
            <div className={styles.contactBg}>
              {/* <div className={styles.hyperlinks}>
                <Link className="fs24B text_white" href="#">
                  Home
                </Link>
                <Link href="#">
                  <i className="fa fa-angle-right text_white"></i>
                </Link>
                <Link className="fs24B text_white" href="#">
                  Portfolio
                </Link>
              </div> */}
              <Row className={styles.conBgDown}>
                <Col xl={12}>
                  <div className={styles.fs100N}>
                    {t("Innovating the Future, One Platform at a Time")}
                  </div>
                  <p className={styles.fs24N}>
                    {t("Innovating the Future, One Platform at a Time Des")}
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className={styles.portfolioSection}>
          <h2>{t("Built & Owned by JIONEX")}</h2>

          <div className={styles.gridParent}>
            {projectsData.map((project) => (
              <div className={styles.wrapper} key={project.id}>
                <Container className={styles.container}>
                  <div className={styles.head}>
                    <h3>{project.name}</h3>
                    {/* <p>{project.about}</p> */}
                  </div>
                  <div className={styles.portfolioGrid}>
                    {project.items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        className={styles.portfolio}
                        initial={{ scale: 0.8, translateY: 100, opacity: 0 }}
                        whileInView={{ scale: 1, translateY: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 * index,
                          ease: "easeInOut",
                        }}
                      >
                        <div className={styles.portfolioWrapper}>
                          <div className={styles.projectImg}>
                            <Link href={`/products/${item.id}`}>
                              <img src={item.image} alt={item.name} />
                            </Link>
                          </div>
                          <div className={styles.label}>
                            {/* <p>
                              {expandedStates[index]
                                ? item.about
                                : item.about?.slice(0, 70) + "..."}{" "}
                              <span
                                className={styles.viewToggleBtn}
                                onClick={() => toggleView(index)}
                              >
                                {expandedStates[index]
                                  ? "View Less"
                                  : "View More"}
                              </span>
                            </p> */}
                            <div className={styles.labelText}>
                              <h4>{item.name}</h4>
                              {/* <span className="text-category">Angular</span> */}
                              <Link
                                href={`/products/${item.id}`}
                                className={styles.templateBtn}
                                rel="noopener noreferrer"
                              >
                                {t("Visit")}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Container>
              </div>
            ))}
            {/* <div className={styles.wrapper}>
              <Container className={styles.container}>
                <h2>Our citizen service Platform </h2>
                <div className={styles.portfolioGrid}>

                  {servicesData.map((service) => (
                    <div key={service.id} className={styles.portfolio}>
                      <div className={styles.portfolioWrapper}>
                        <div className={styles.projectImg}>
                          <img src={service.image} alt={service.name} />
                        </div>
                        <div className={styles.label}>
                         
                          <h5 className="text-sm text-gray-500 mb-2">{service.category}</h5>
                          <ul className="list-disc list-inside mb-2">
                            {service.services.map((item, index) => (
                              <li key={index} className="text-gray-700">{item}</li>
                            ))}
                          </ul>
                          <p className="text-green-600 font-medium"><b>Impact:</b> {service.impact}</p>
                          <div className={styles.labelText}>
                            <h4>{service.name}</h4>
                            
                            <a
                              href={service.slug}
                              className={styles.templateBtn}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {t("Visit")}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Container>
            </div> */}
          </div>
        </section>

        <Contactmod></Contactmod>

        <Footer></Footer>
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
