import Head from "next/head";
import { Footer } from "../../layout/footer";
import styles from "./clients.module.scss";
import { useTranslation } from "next-i18next";
import useHasMounted from "../../hooks/useHasMounted";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextImage from "../../hooks/NextImage";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { clients } from "../../constants/clients";

export default function Clients({ ...props }) {
  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <>
      <Head>
        <title>
          Our Clients – Trusted by Governments, FinTechs, Healthcare & More |
          Jionex
        </title>
        <meta
          name="description"
          content="Jionex proudly serves government agencies, financial institutions, healthcare providers, educational boards, SMEs, and travel platforms across South Asia and the Middle East."
        />
        <meta
          name="keywords"
          content="Jionex clients, government technology partners, fintech partners, healthcare IT clients, education digital transformation, SME digital clients, travel platform clients, trusted by public sector, South Asia IT clients, Middle East digital projects"
        />
        <meta
          property="og:title"
          content="Our Clients – Governments, FinTechs, Healthcare & More | Jionex"
        />
        <meta
          property="og:description"
          content="See who trusts Jionex with their digital transformation. We work with public agencies, fintech startups, hospitals, schools, and SMEs in South Asia & the Middle East."
        />
        <meta
          property="og:image"
          content="https://www.jionex.com/images/jionex_logo.png"
        />
        <meta property="og:url" content="https://www.jionex.com/clients" />
      </Head>
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.bannerWrapper}>
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
                {/* <h1>Our Ready-Made Software Solutions</h1> */}
                <h2>{t("Clients Banner Title")}</h2>
                <p>{t("Clients Banner Des")}</p>
              </motion.div>
            </Container>
          </div>
        </section>

        <section className={styles.products}>
          <Container>
            <div className={styles.row}>
              {clients.map((product, index) => (
                <div key={index} className={styles.col}>
                  <div className={styles.image}>
                    <NextImage src={product.image} alt={product.name} />
                  </div>
                  <h2>{product.name}</h2>
                  <div className={styles.country}>
                    <NextImage src={product.flag} alt={product.country} />
                    <h3>{product.country}</h3>
                  </div>
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
