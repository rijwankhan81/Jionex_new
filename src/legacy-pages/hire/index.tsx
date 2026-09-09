import Head from "next/head";
import { Footer } from "../../layout/footer";
import Link from "next/link";
import styles from "./hire.module.scss";
import { Container } from "react-bootstrap";
import { MdOutlineAttachFile } from "react-icons/md";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import useHasMounted from "../../hooks/useHasMounted";
import {
  jobDataAR,
  jobDataBN,
  jobDataEN,
  jobDataES,
} from "../../constants/jobs";

export default function OurPartners({ ...props }) {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  let jobData;

  switch (selectedLanguage) {
    case "bn":
      jobData = jobDataBN;
      break;
    case "ar":
      jobData = jobDataAR;
      break;
    case "es":
      jobData = jobDataES;
      break;
    default:
      jobData = jobDataEN;
  }

  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      <Head>
        <title>Careers at Jionex | Join Our Innovative Team Today</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Jionex. Join our team of innovators and make an impact with cutting-edge projects. Discover roles in development, design, IT, and more. Apply now!"
        />
      </Head>
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h1>
                {t("Hire Banner H1")} <span> {t("Hire Banner H2")} </span>{" "}
                {t("Hire Banner H3")}
              </h1>
              <p>{t("Hire Banner Des")}</p>
            </div>
          </Container>
        </section>
        <section className={styles.hiring}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>{t("Explore Current Openings")}</h2>
              <p>{t("Explore Current Openings Des")}</p>
            </div>

            <div className={styles.jobs}>
              {jobData.map((job) => (
                <div key={job.id} className={styles.wrapper}>
                  <div className={styles.icon}>{job.icon}</div>
                  <div className={styles.info}>
                    <div className={styles.heading}>
                      <h2>{job.title}</h2>
                      <Link className={styles.btn} href="#apply">
                        {t("Apply Now")}
                      </Link>
                    </div>
                    <p>{job.description}</p>
                    <ul>
                      <li>{job.location}</li>
                      <li>{job.type}</li>
                      <li>{job.experience}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <section className={styles.grow}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.image}>
                <img src="/images/grow.jpeg" alt="" />
              </div>

              <div className={styles.content}>
                <h2>{t("Opportunities for Growth")}</h2>
                <p>{t("Opportunities for Growth Des")}</p>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.joinUs} id="apply">
          <Container>
            <div className={styles.head}>
              <h2>
                <span>{t("Join Us")}</span> {t("and Make an Impact")}
              </h2>
              <p>{t("Join Us Des")}</p>
            </div>
            <div className={styles.apply}>
              <form className={styles.form}>
                <div className={styles.parentField}>
                  <div className={styles.field}>
                    <label>
                      {t("Your Name")}
                      <span>*</span>
                    </label>
                    <input type="text" />
                  </div>
                  <div className={styles.field}>
                    <label>
                      {t("Your E-mail")}
                      <span>*</span>
                    </label>
                    <input type="email" />
                  </div>
                </div>
                <div className={styles.parentField}>
                  <div className={styles.field}>
                    <label>
                      {t("Phone Number")}
                      <span>*</span>
                    </label>
                    <input type="text" />
                  </div>
                  <div className={styles.field}>
                    <label>
                      {t("Upload Your CV")}
                      <span>*</span>
                    </label>
                    <div className={styles.fileInput}>
                      <input type="file" name="" id="" />
                      <div className={styles.choose}>
                        <h6>{t("Attach File")}</h6>
                        <MdOutlineAttachFile />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.textField}>
                  <label>{t("Message")}</label>
                  <textarea name="" id=""></textarea>
                </div>

                <div className={styles.btnField}>
                  <button className={styles.btn}>{t("Submit")}</button>
                </div>
              </form>
            </div>
          </Container>
        </section>
        <Footer></Footer>
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
