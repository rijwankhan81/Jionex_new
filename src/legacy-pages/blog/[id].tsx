import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Footer } from "../../layout/footer";
import styles from "./blogs.module.scss";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { Col, Container, Row } from "react-bootstrap";
import NextImage from "../../hooks/NextImage";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import useHasMounted from "../../hooks/useHasMounted";
import { blogPostsAR } from "../../constants/blogs/ar";
import { blogPostsBN } from "../../constants/blogs/bn";
import { blogPostsEN } from "../../constants/blogs/en";
import { blogPostsES } from "../../constants/blogs/es";

const PdfViewer = dynamic(() => import("../../components/pdf"), { ssr: false });

export default function BlogDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;
  let blogPosts;

  switch (selectedLanguage) {
    case "bn":
      blogPosts = blogPostsBN.slice().reverse();
      break;
    case "ar":
      blogPosts = blogPostsAR.slice().reverse();
      break;
    case "es":
      blogPosts = blogPostsES.slice().reverse();
      break;
    default:
      blogPosts = blogPostsEN.slice().reverse();
  }

  const blog = blogPosts.find((item) => item.id === id);
  const relatedBlogs = blogPosts.filter((item) => item.id !== id).slice(0, 4);

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  if (!blog) return <p>Blog not found.</p>;

  return (
    <>
      <Head>
        {(() => {
          const englishBlog = blogPostsEN.find((item) => item.id === blog.id);
          const metaTitle = englishBlog?.title || blog.title;
          const rawDescription = englishBlog?.description || blog.description;
          const metaDescription = Array.isArray(rawDescription)
            ? rawDescription[0]
            : rawDescription;

          return (
            <>
              <title>{metaTitle}</title>
              <meta name="description" content={metaDescription} />
              <meta property="og:title" content={metaTitle} />
              <meta property="og:description" content={metaDescription} />
              <meta property="og:image" content={blog.image} />
              <meta
                property="og:url"
                content={`https://www.jionex.com/en/blog/${blog.id}`}
              />
            </>
          );
        })()}
      </Head>

      <main className={styles.page}>
        <section className={styles.singleBlog}>
          <Container>
            <Row>
              <Col xl={8} md={7}>
                <div className={styles.info}>
                  <h1>{blog.title}</h1>
                  <p>{blog.date}</p>
                  <div className={styles.image}>
                    <NextImage src={blog.image} alt={blog.alt} />
                  </div>
                  <p>{blog.description}</p>

                  {/* Blog content (HTML string) */}
                  {blog.content && (
                    <div
                      className={styles.full}
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  )}

                  {blog.pdf && (
                    <div className="pdf-section">
                      {/* <h2>Document Viewer</h2> */}
                      <PdfViewer fileUrl={blog.pdf} />
                    </div>
                  )}
                </div>
              </Col>

              <Col xl={4} md={5}>
                <div className={styles.related}>
                  <h2>{t("Related Blogs")}</h2>
                  <div className={styles.blogs}>
                    {relatedBlogs.map((item, index) => (
                      <Link href={`/blog/${item.id}`} key={item.id}>
                        <motion.div
                          className={styles.blog}
                          initial={{ scale: 0.8, translateY: 100, opacity: 0 }}
                          whileInView={{ scale: 1, translateY: 0, opacity: 1 }}
                          viewport={{ once: true, amount: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 * index,
                            ease: "easeInOut",
                          }}
                        >
                          <NextImage src={item.image} alt={item.alt} />
                          <h4>{item.title}</h4>
                          <p>{item.date}</p>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Static Props
export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const id = params?.id?.toString();

  if (!id) return { notFound: true };

  const blogPosts = locale === "en" ? blogPostsEN : blogPostsBN;
  const blog = blogPosts.find((item) => item.id === id);

  if (!blog) return { notFound: true };

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

// Static Paths
export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: any[] = [];

  (locales || []).forEach((locale) => {
    const blogPosts = locale === "en" ? blogPostsEN : blogPostsBN;
    blogPosts.forEach((post) => {
      paths.push({
        params: { id: post.id.toString() },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: "blocking",
  };
};
