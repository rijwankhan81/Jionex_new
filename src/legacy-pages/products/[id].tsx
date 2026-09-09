// pages/portfolio/[id].tsx
import Head from "next/head";

import { Footer } from "../../layout/footer";
import Contactmod from "../../modules/contact";
import styles from "./products.module.scss";
import { Container } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import {
  projectsAR,
  projectsBN,
  projectsEN,
  projectsES,
} from "../../constants/projects";
import useHasMounted from "../../hooks/useHasMounted";
import { GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextImage from "../../hooks/NextImage";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Portfolio() {
  const { i18n, t } = useTranslation("common");
  const selectedLanguage = i18n.language;
  const isClient = useHasMounted();
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

  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p>Loading...</p>;
  }

  // Find the product and its category
  let project, category;
  for (const cat of projectsData) {
    project = cat.items.find(
      (item) => item.id === parseInt(id?.toString() || "0")
    );
    if (project) {
      category = cat;
      break;
    }
  }

  if (!project) {
    return <p>project not found</p>;
  }

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{project.name}</title>
      </Head>
      <div className={styles.portfolioPage}>
        <section className={styles.singleDetail}>
          <Container className={styles.container}>
            <div className={styles.row}>
              {project.image && (
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
                  <NextImage src={project.image} alt={project.name} />
                </motion.div>
              )}
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
                <h2>{project.name}</h2>
                <p>{project.about}</p>
                <Link
                  className={styles.btnBlue}
                  href={project.slug}
                  target="_blank"
                >
                  {t("Visit")}
                </Link>
              </motion.div>
            </div>
          </Container>
        </section>
        <Contactmod />
        <Footer />
      </div>
    </>
  );
}

// Pre-generates pages for each project ID from all categories
export const getStaticPaths: GetStaticPaths = async () => {
  const allItems = [...projectsEN, ...projectsBN] // Combine both language data
    .flatMap((category) => category.items); // Flatten categories into a single array

  const paths = allItems.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking", // Will render not-yet-generated pages on first access
  };
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // load your namespace
    },
  };
}
