import Head from "next/head";

import { Footer } from "../../layout/footer";
import styles from "./team.module.scss";
import { Container } from "react-bootstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import useHasMounted from "../../hooks/useHasMounted";
import {
  advisoryBoard,
  boardOfDirectors,
  executiveLeadership,
  technicalOpsTeam,
} from "../../constants/team-members";
import NextImage from "../../hooks/NextImage";

export default function Team() {
  const { i18n } = useTranslation();
  // const selectedLanguage = i18n.language;
  // const memberList = selectedLanguage === "en" ? memberListEN : memberListBN;

  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      <Head>
        <title>Meet the Team | Jionex - Innovators Behind the Vision</title>
        <meta
          name="description"
          content="Discover the passionate and talented team at Jionex. Learn about the innovators and experts driving our success and delivering cutting-edge solutions. Meet the people who make it happen!"
        />
      </Head>
      <div className={styles.portfolioPage}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h1>{t("Behind the Vision")}</h1>
              <p>{t("Behind the Vision Des")}</p>
            </div>
          </Container>
        </section>

        <div className={styles.teams}>
          <section className={styles.team}>
            <Container className={styles.container}>
              <div className={styles.head}>
                <h2>{t("Board of Directors")}</h2>
                {/* <p>{t("Our Experts Des")}</p> */}
              </div>
              <div className={styles.teamFlex}>
                {boardOfDirectors.map((member) => (
                  <div key={member.id} className={styles.teamBox}>
                    <NextImage src={member.image} className="" alt={""} />
                    <h2>{member.name}</h2>
                    <p>{member.position}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
          <section className={styles.team}>
            <Container className={styles.container}>
              <div className={styles.head}>
                <h2>{t("Advisory Board")}</h2>
              </div>
              <div className={styles.teamFlex}>
                {advisoryBoard.map((member) => (
                  <div key={member.id} className={styles.teamBox}>
                    <NextImage src={member.image} className="" alt={""} />
                    <h2>{member.name}</h2>
                    <p>{member.position}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
          <section className={styles.team}>
            <Container className={styles.container}>
              <div className={styles.head}>
                <h2>{t("Executive Leadership")}</h2>
              </div>
              <div className={styles.teamFlex}>
                {executiveLeadership.map((member) => (
                  <div key={member.id} className={styles.teamBox}>
                    <NextImage src={member.image} className="" alt={""} />
                    <h2>{member.name}</h2>
                    <p>{member.position}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
          <section className={styles.team}>
            <Container className={styles.container}>
              <div className={styles.head}>
                <h2>{t("Technical & Ops Team")}</h2>
              </div>
              <div className={styles.teamFlex}>
                {technicalOpsTeam.map((member) => (
                  <div key={member.id} className={styles.teamBox}>
                    <NextImage src={member.image} className="" alt={""} />
                    <h2>{member.name}</h2>
                    <p>{member.position}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </div>
        <Footer />
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
