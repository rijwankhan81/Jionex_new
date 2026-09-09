import styles from "./blog.module.scss";
import { Container } from "react-bootstrap";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import useHasMounted from "../../hooks/useHasMounted";
import { motion } from "framer-motion";
import { blogPostsAR } from "../../constants/blogs/ar";
import { blogPostsBN } from "../../constants/blogs/bn";
import { blogPostsEN } from "../../constants/blogs/en";
import { blogPostsES } from "../../constants/blogs/es";

type BlogsProps = {
  limit?: number;
};

export default function Blogs({ limit }: BlogsProps) {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  let blogPostsRaw;

  switch (selectedLanguage) {
    case "bn":
      blogPostsRaw = blogPostsBN;
      break;
    case "ar":
      blogPostsRaw = blogPostsAR;
      break;
    case "es":
      blogPostsRaw = blogPostsES;
      break;
    default:
      blogPostsRaw = blogPostsEN;
  }
  const { t } = useTranslation("common");

  const isClient = useHasMounted();
  if (!isClient) return null;

  // ✅ Parse the readable date format
  const parseDate = (dateStr: string) => new Date(Date.parse(dateStr));

  // ✅ Sort from latest to oldest
  const sortedPosts = [...blogPostsRaw].sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });

  // ✅ Apply limit if passed
  const displayedPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <section className={styles.blogs}>
      <Container>
        <div className={styles.head}>
          <h2>{t("Recent Blogs")}</h2>
        </div>
        <div className={styles.row}>
          {displayedPosts.map((post, index) => (
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
  );
}
