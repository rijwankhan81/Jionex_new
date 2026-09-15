import Head from "next/head";
import { Footer } from "../../layout/footer";
import styles from "./products.module.scss";
import { useTranslation } from "next-i18next";
import useHasMounted from "../../hooks/useHasMounted";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextImage from "../../hooks/NextImage";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  productsAR,
  productsBN,
  productsEN,
  productsES,
} from "../../constants/products";

export default function Products({ ...props }) {
  const { t, i18n } = useTranslation("common");
  const selectedLanguage = i18n.language;
  let products;

  switch (selectedLanguage) {
    case "bn":
      products = productsBN.slice().reverse();
      break;
    case "ar":
      products = productsAR.slice().reverse();
      break;
    case "es":
      products = productsES.slice().reverse();
      break;
    default:
      products = productsEN.slice().reverse();
  }

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <>
      <Head>
        <title>
          Our Projects – Smart Platforms for Government, FinTech, Healthcare &
          More | Jionex
        </title>
        <meta
          name="description"
          content="Discover Jionex's innovative digital products including smart city platforms, e-wallet systems, healthcare ERPs, school management solutions, and SME tools tailored for South Asia and the Middle East."
        />
        <meta
          name="keywords"
          content="digital products, smart city platform, fintech solutions, healthcare ERP, education management software, SME tools, travel platform, government technology, South Asia software, Middle East tech products, custom digital platforms"
        />
        <meta
          property="og:title"
          content="Our Digital Products – Government, FinTech, Healthcare & More | Jionex"
        />
        <meta
          property="og:description"
          content="Explore innovative digital products built by Jionex for public services, finance, health, education, and business sectors across South Asia and the Middle East."
        />
        <meta
          property="og:image"
          content="https://www.jionex.com/images/jionex_logo.png"
        />
        <meta property="og:url" content="https://www.jionex.com/products" />
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
              <h1>{t("Products Banner Title")}</h1>
              <h2>{t("Products Banner Sub Title")}</h2>
              <p>{t("Products Banner Des")}</p>
            </motion.div>
          </Container>
        </section>

        <section className={styles.products}>
          <Container>
            <div className={styles.row}>
              {products.map((product, index) => (
                <div key={index} className={styles.col}>
                  <div className={styles.image}>
                    <NextImage src={product.image} alt={product.title} />
                  </div>
                  <div className={styles.content}>
                    <h2>{product.title}</h2>
                    <h3>{product.subtitle}</h3>
                    <h4>{t("Key Features")}:</h4>
                    <ul>
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <p>{product.tagline}</p>
                  </div>
                  <Link className={styles.btn} href={"#"}>
                    {t("Contact For Demo")}
                  </Link>
                </div>
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
