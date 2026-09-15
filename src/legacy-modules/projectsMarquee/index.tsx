import styles from "./services.module.scss";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useTranslation } from "next-i18next";
import {
  projectsEN,
  projectsBN,
  projectsAR,
  projectsES,
} from "../../constants/projects";
import useHasMounted from "../../hooks/useHasMounted";
import { Container } from "react-bootstrap";
import NextImage from "../../hooks/NextImage";
import { motion } from "framer-motion";

export default function Projects() {
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

  const allItems = projectsData.flatMap((project) => project.items);

  return (
    <>
      <section className={styles.black_ribbon}>
        {/* Left-to-Right Marquee */}
        <Marquee direction="left" className={styles.marquee}>
          <div className={styles.ribbon_section}>
            <div className={styles.ribbon_text}>
              {allItems.map((item, index) => (
                <div className={styles.service} key={item.id || index}>
                  <Link
                    href={item.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5 className={styles.ribbon_ltext}>{t(item.name)}</h5>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Marquee>

        {/* Right-to-Left Marquee */}
        <Marquee direction="right" className={styles.marquee}>
          <div className={styles.ribbon_section}>
            <div className={styles.ribbon_text}>
              {allItems.map((item, index) => (
                <div className={styles.service} key={item.id || index}>
                  <Link
                    href={item.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5 className={styles.ribbon_ltext}>{t(item.name)}</h5>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Marquee>
      </section>
    </>
  );
}

export function Portfolio() {
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
    default:
      projectsData = projectsEN;
  }

  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  const allItems = projectsData.flatMap((project) => project.items);

  return (
    <>
      <section className={styles.portfolio}>
        <Container>
          <div className={styles.head}>
            <h2>{t("Our Products")}</h2>
          </div>
          <div className={styles.row}>
            {allItems.map((item, index) => (
              <motion.div
                className={styles.image}
                key={item.id || index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index, // stagger delay based on index
                  ease: "easeInOut",
                }}
              >
                <Link href={item.slug}>
                  <NextImage src={item.image} alt={""} />
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
