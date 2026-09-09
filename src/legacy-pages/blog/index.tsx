import Head from "next/head";
import { Footer } from "../../layout/footer";
import Link from "next/link";
import useHasMounted from "../../hooks/useHasMounted";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "./blogs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import NextImage from "../../hooks/NextImage";
import { motion } from "framer-motion";
import { blogPostsAR } from "../../constants/blogs/ar";
import { blogPostsBN } from "../../constants/blogs/bn";
import { blogPostsEN } from "../../constants/blogs/en";
import { blogPostsES } from "../../constants/blogs/es";
import { useTranslation } from "next-i18next";

export default function Blog() {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  let blogPostsRaw;

  switch (selectedLanguage) {
    case "bn":
      blogPostsRaw = blogPostsBN.slice().reverse();
      break;
    case "ar":
      blogPostsRaw = blogPostsAR.slice().reverse();
      break;
    case "es":
      blogPostsRaw = blogPostsES.slice().reverse();
      break;
    default:
      blogPostsRaw = blogPostsEN.slice().reverse();
  }

  const { t } = useTranslation("common");

  const isClient = useHasMounted();
  if (!isClient) return null;

  return (
    <>
      <Head>
        <title>
          Jionex Blog – Insights on GovTech, FinTech, Healthcare & Digital
          Innovation
        </title>
        <meta
          name="description"
          content="Read the latest insights from Jionex on digital transformation in government, finance, healthcare, education, SMEs, and travel. Stay updated with tech trends across South Asia and the Middle East."
        />
        <meta
          name="keywords"
          content="Jionex blog, govtech insights, fintech blogs, healthcare IT news, digital transformation, smart cities, South Asia tech, Middle East innovation, software trends, SME digital tools"
        />
        <meta
          property="og:title"
          content="Jionex Blog – Insights on GovTech, FinTech, Healthcare & More"
        />
        <meta
          property="og:description"
          content="Explore articles and insights on technology in government, finance, health, education, and more from Jionex."
        />
        <meta
          property="og:image"
          content="https://www.jionex.com/images/jionex_logo.png"
        />
        <meta property="og:url" content="https://www.jionex.com/blog" />
      </Head>
      <main className={styles.main}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <Row className={styles.row}>
              <Col lg={6}>
                <motion.div
                  initial={{ translateX: -100, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: "easeInOut",
                  }}
                >
                  <h3>
                    <span className="text_linear">{t("Blogs of Jionex")}</span>
                  </h3>
                  <p>{t("Blogs of Jionex Des")}</p>
                  <div className={styles.blogWrapBtn}>
                    <Link href="/products" className={styles.btnBlue}>
                      {t("View Products")}
                    </Link>
                    <Link href="/contact" className={styles.btnPink}>
                      {t("Schedule A Free Call")}
                    </Link>
                    {/* <Link href="#form">
                    <i className="fa fa-angles-down"></i>
                  </Link> */}
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
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
                  <NextImage src="/images/blog.jpg" alt="Blog" />
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.blogs}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Blogs")}</h2>
            </div>
            <div className={styles.row}>
              {blogPostsRaw.map((post, index) => (
                <motion.div
                  className={styles.col}
                  key={post.id}
                  initial={{ translateY: 100, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeInOut",
                  }}
                >
                  <img src={post.image} alt={post.alt} />
                  <div className={styles.content}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                  </div>
                  <Link className={styles.btnBlue} href={`/blog/${post.id}`}>
                    {t("Read More")}
                  </Link>
                  <div className={styles.date}>{post.date}</div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <Footer />
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
