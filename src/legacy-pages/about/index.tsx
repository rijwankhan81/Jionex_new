import Head from "next/head";
import { Footer } from "../../layout/footer";
import Faq from "../../modules/faq";
import Expertise from "../../modules/expertise";
import Contactmod from "../../modules/contact";
import styles from "./about.module.scss";

import { useTranslation } from "next-i18next";
import {
  companyValuesAR,
  companyValuesBN,
  companyValuesEN,
  companyValuesES,
} from "../../constants/companyValues";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextImage from "../../hooks/NextImage";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import useHasMounted from "../../hooks/useHasMounted";

export default function AboutUs({ ...props }) {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  let companyValues;

  switch (selectedLanguage) {
    case "bn":
      companyValues = companyValuesBN;
      break;
    case "ar":
      companyValues = companyValuesAR;
      break;
    case "es":
      companyValues = companyValuesES;
      break;
    default:
      companyValues = companyValuesEN;
  }

  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <>
      <Head>
        <title>
          About Jionex – Innovating Digital Solutions for Governments, FinTech,
          Healthcare & More
        </title>
        <meta
          name="description"
          content="Learn about Jionex, a technology company dedicated to delivering innovative digital solutions for governments, financial institutions, healthcare providers, and more across South Asia and the Middle East."
        />
        <meta
          name="keywords"
          content="Jionex, digital solutions, government technology, fintech innovation, healthcare IT, South Asia tech, Middle East digital services, technology company, digital transformation"
        />
        <meta
          property="og:title"
          content="About Jionex – Innovating Digital Solutions for Governments, FinTech, Healthcare & More"
        />
        <meta
          property="og:description"
          content="Discover how Jionex is transforming digital services for governments, financial institutions, and healthcare providers across South Asia and the Middle East."
        />
        <meta
          property="og:image"
          content="https://www.jionex.com/images/jionex_logo.png"
        />
        <meta property="og:url" content="https://www.jionex.com/about" />
      </Head>
      <div className="aboutMain">
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
              <h1>{t("About Banner H")}</h1>
              <h2>{t("About Banner H2")}</h2>
              <p>{t("About Banner Des")}</p>
              <p>{t("About Banner Des Two")}</p>
              <p>{t("About Banner Des Three")}</p>
            </motion.div>
          </Container>
        </section>
        {/* <section className="about">
          <div className="container">
            <div className="abflexMain">
              <div className="abflex">
                <div className="fs80 text_black abflexHead col-xl-6 col-sm-12">
                  {t("About Banner H")}
                </div>
                <div className="abflexRight  col-xl-6 col-sm-12">
                  <div className="abflexRightA col-xl-11 col-lg-12 col-md-12 col-sm-12">
                    <p className="fs24N">{t("About Banner Des")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ddflex1">
              <div className="absec2">
                <div className="">
                  <NextImage src="/images/ab1.png" className="img-fluid" alt={""} />
                </div>
                <div className="ab2">
                  <NextImage src="/images/ab2.png" className="img-fluid" alt={""} />
                  <a href="#" className="ab2Scroll">
                    <i className="fa fa-long-arrow-down"></i>
                    <div className="fs24">{t("Scroll to explore")}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className={styles.mnv}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Innovate Forward")}</h2>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.mission}`}>
                <motion.div
                  className={styles.content}
                  initial={{ translateX: -100, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: "easeInOut",
                  }}
                >
                  <h3>{t("Our mission")}</h3>
                  <p>{t("Our mission Des")}</p>
                </motion.div>
                <motion.div
                  className={styles.image}
                  initial={{ translateX: 100, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: "easeInOut",
                  }}
                >
                  <NextImage src="/images/mission.jpg" className="" alt={""} />
                </motion.div>
              </div>
              <div className={`${styles.col} ${styles.vision}`}>
                <motion.div
                  className={styles.image}
                  initial={{ translateX: -100, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: "easeInOut",
                  }}
                >
                  <NextImage src="/images/vision.jpg" className="" alt={""} />
                </motion.div>
                <motion.div
                  className={styles.content}
                  initial={{ translateX: 100, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: "easeInOut",
                  }}
                >
                  <h3>{t("Our Vission")}</h3>
                  <p>{t("Our Vission Des")}</p>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* <section className="aboutHead">
          <div className="container aboutHeadFlex">
            <div className="fs64 col-xl-6 col-sm-6">{t("Story H")}</div>
            <p className="fs24B">{t("Story Des")}</p>
          </div>
          <div className="container mission">
            <div className="row">
              <div className="col-xl-6 col-sm-6 missionDiv left">
                <div className="fs48 text_white">{t("Our mission")}</div>
                <p className="fs22D">{t("Our mission Des")}</p>
              </div>
              <div className="col-xl-6 col-sm-6 missionDiv">
                <div className="fs48 text_white">{t("Our Vission")}</div>
                <p className="fs22D">{t("Our Vission Des")}</p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="revolution">
          <motion.div
            className="revolt container"
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeInOut",
            }}
          >
            <div className="revolFlex">
              {/* <div className="revolLeft col-xxl-6 col-lg-5">
                <div className="row">
                  <div className="col-xxl-7 col-12">
                    <NextImage src="/images/revol1.png" className="img1" alt={""} />
                  </div>
                  <div className="col-xxl-5 col-6">
                    <NextImage src="/images/revol2.png" className="img1" alt={""} />
                  </div>
                  <div className="col-xxl-5 col-6">
                    <NextImage src="/images/revol3.png" className="img2" alt={""} />
                  </div>
                  <div className="col-xxl-7 col-12">
                    <NextImage src="/images/revol4.png" className="img2" alt={""} />
                  </div>
                </div>
              </div> */}
              <div className="revolRight">
                <div className="revolRight1 bord">
                  <div className="fs48N revolRightHead">{t("We started")}</div>
                  <p className="fs24">{t("We started Des 1")}</p>
                  <p className="fs24">{t("We started Des 2")}</p>
                </div>
                <div className="revolRight1 bord1">
                  <div className="fs24B text_black">
                    {t("We started Des 3")}
                  </div>
                  {/* <div className="revSign">
                    <div className="revolRight1A ">
                      <NextImage src="/team_images/jisan.jpg" alt="" />
                      <div className="revRF">
                        <div className="fs20B text_black">
                          {t("Sakawat Jisan")}
                        </div>
                        <p className="text_grey fs18">{t("Founder & CEO")}</p>
                      </div>
                    </div>
                    <NextImage src="/images/revSign.png" alt="" />
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="values container">
          <div className="valueHead">
            <div className="fs64 text_black">{t("Values")}</div>
            <p className="fs24 text_grey">{t("Values Des")}</p>
          </div>
          <div className="valueFlex">
            {companyValues.map((value, index) => (
              <motion.div
                className="valueBox"
                key={index}
                initial={{ scale: 0.8, translateY: 100, opacity: 0 }}
                whileInView={{ scale: 1, translateY: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeInOut",
                }}
              >
                <NextImage src={value.image} alt={value.title} className="" />
                <div className="fs34 text_black">{value.title}</div>
                <p className="fs24N text_grey">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* <section className="question container">
          <div className="quesWrap">
            <div className="fs50 text_white questionHead">
              {t("Have any questions")}
            </div>
            <div className="quesBtnWrap">
              <Link href="/contact" className="btn_orange">
                {t("Contact Us")}
              </Link>
            </div>
            <NextImage src="/images/question1.png" className="quest1" alt={""} />
            <NextImage src="/images/question2.png" className="quest2" alt={""} />
          </div>
        </section> */}

        <Faq></Faq>

        <Expertise></Expertise>

        {/* <Feedback></Feedback> */}

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
