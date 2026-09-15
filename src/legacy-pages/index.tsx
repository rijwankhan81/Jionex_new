import { Footer } from "../layout/footer";
import Head from "next/head";
import Link from "next/link";
import Contactmod from "../modules/contact";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import NextImage from "../hooks/NextImage";
import styles from "../styles/home.module.scss";
import { Container } from "react-bootstrap";
import Blogs from "../modules/blogs";
import Projects, { Portfolio } from "../modules/projectsMarquee";
import { motion } from "framer-motion";
import Partners from "../modules/partners";
import {
  businessSolutionsAR,
  businessSolutionsBN,
  businessSolutionsEN,
  businessSolutionsES,
} from "../constants/solutions";
import {
  abilitiesAR,
  abilitiesBN,
  abilitiesEN,
  abilitiesES,
} from "../constants/abilities";
import useHasMounted from "../hooks/useHasMounted";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  launchingAR,
  launchingBN,
  launchingEN,
  launchingES,
} from "../constants/launching";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.changeLanguageDirection(
        i18n.language === "ar" ? "rtl" : "ltr"
      );
      swiperRef.current.swiper.update();
    }
  }, [i18n.language]);

  const swiperRef = useRef<any>(null);

  let abilities, businessSolutions, launching;

  switch (selectedLanguage) {
    case "bn":
      abilities = abilitiesBN;
      businessSolutions = businessSolutionsBN;
      launching = launchingBN;
      break;
    case "ar":
      abilities = abilitiesAR;
      businessSolutions = businessSolutionsAR;
      launching = launchingAR;
      break;
    case "es":
      abilities = abilitiesES;
      businessSolutions = businessSolutionsES;
      launching = launchingES;
      break;
    default:
      abilities = abilitiesEN;
      businessSolutions = businessSolutionsEN;
      launching = launchingEN;
  }

  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      <Head>
        <title>
          Jionex – Smart Digital Solutions for Governments, FinTechs, Healthcare
          & Enterprises
        </title>
        <meta
          name="description"
          content="Jionex delivers innovative digital transformation solutions for governments, fintech startups, healthcare providers, SMEs, and educational institutions across South Asia and the Middle East."
        />
        <meta
          name="keywords"
          content="digital transformation, smart city solutions, government software, fintech development, blockchain platform, hospital management system, education ERP, school management software, SME software, business automation, South Asia tech, Middle East software solutions, Bangladesh IT company, custom software development, e-governance platform"
        />
        <meta
          property="og:title"
          content="Jionex – Smart Digital Solutions for Governments, FinTechs & Enterprises"
        />
        <meta
          property="og:description"
          content="Empowering cities, fintechs, and businesses with scalable digital platforms and smart services in South Asia and the Middle East."
        />
        <meta
          property="og:image"
          content="https://www.jionex.com/images/jionex_logo.png"
        />
        <meta property="og:url" content="https://www.jionex.com/" />
      </Head>

      <div className={styles.page}>
        <section className={styles.banner}>
          {/* <div className={styles.video}>
            {!videoLoaded && (
              <NextImage
                src="/images/home-banner.jpg" 
                alt="Banner Placeholder"
                fill
                className={styles.fallbackImage}
              />
            )}
            <video
              muted
              autoPlay
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              style={{ opacity: videoLoaded ? 1 : 0 }}
            >
              <source src="/images/home2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
          <Container className={styles.container}>
            <div className={styles.wrapper}>
              <h1>{t("homeBannerHeading")}</h1>
              {/* <p>{t("homeBannerDes")}</p> */}
              <div className={styles.buttons}>
                <Link href="/contact" className={styles.btnBlue}>
                  {t("Let's get started")}
                </Link>
                <Link href="/products" className={styles.btnPink}>
                  {t("View Products")}
                </Link>
              </div>
            </div>
          </Container>
        </section>
        <Partners />
        <section className={styles.launching}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Launching Soon")}</h2>
            </div>
            <div className={styles.row}>
              <Swiper
                // dir={i18n.language === "ar" ? "ltr" : "rtl"}
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
                ref={swiperRef}
                slidesPerView={"auto"}
                loop={true}
                centeredSlides={true}
                spaceBetween={15}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
              >
                {launching.map((service) => (
                  <SwiperSlide className={styles.slide} key={service.id}>
                    <div className={styles.item}>
                      <div className={styles.image}>
                        <NextImage src={service.image} alt={""} />
                      </div>
                      <div className={styles.content}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <Link href={service.url} target="_blank">
                          {t("Visit")}
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Container>
        </section>
        <section className={styles.abilities}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Our Abilities")}</h2>
              <p>{t("Our Abilities Des")}</p>
            </div>
            <div className={styles.wrapper}>
              {abilities.map((service, index) => (
                <motion.div
                  className={styles.service}
                  key={service.id}
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 * index, // stagger delay based on index
                    ease: "easeInOut",
                  }}
                >
                  <NextImage src={service.image} alt={""} />
                  <h5 className={styles.ribbon_ltext}>{t(service.title)}</h5>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <Projects />

        <section className={styles.solutions}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.service}>
                <div className={styles.head}>
                  <h2>{t("Comprehensive Business Solutions")}</h2>
                </div>
                <div className={styles.rowItem}>
                  <div className={styles.rowItemWrapper}>
                    {businessSolutions.length > 0 ? (
                      businessSolutions.map((item, idx) => (
                        <motion.div
                          className={styles.content}
                          key={idx}
                          style={{
                            backgroundImage: `url('${item.image
                              .toLowerCase()
                              .replace(/\s+/g, "-")}')`,
                          }}
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
                          <div className={styles.wrapper}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <p>No items available</p>
                    )}
                  </div>
                  {/* <div className={styles.btn}>
                    <Link href="/portfolio">{t("View Our Work")}</Link>
                  </div> */}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Portfolio />

        <Blogs limit={3} />

        <Contactmod />

        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // load your namespace
    },
  };
}
