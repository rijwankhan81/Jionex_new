import Head from "next/head";
import styles from "./contact.module.scss";
import { Footer } from "../../layout/footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import useHasMounted from "../../hooks/useHasMounted";
import { officeLocationsEN } from "../../constants/officeAddress";
import { Container } from "react-bootstrap";
import NextImage from "../../hooks/NextImage";

export default function contact({ ...props }) {
  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      <Head>
        <title>Contact Jionex – Start Your Digital Transformation Today</title>
        <meta
          name="description"
          content="Reach out to Jionex for smart digital solutions in government, fintech, healthcare, education, SMEs and travel. Let’s discuss your next project in South Asia or the Middle East."
        />
        <meta
          name="keywords"
          content="contact Jionex, digital transformation inquiry, government tech contact, fintech software support, healthcare IT solutions, South Asia tech company, Middle East software partner, custom software contact"
        />
        <meta
          property="og:title"
          content="Contact Jionex – Start Your Digital Transformation Today"
        />
        <meta
          property="og:description"
          content="Get in touch with our experts for scalable digital platforms across government, finance, healthcare and more."
        />
        <meta
          property="og:image"
          content="https://www.jionex.com/images/jionex_logo.png"
        />
        <meta property="og:url" content="https://www.jionex.com/contact" />
      </Head>
      <section className="Main">
        <section className="contactPage">
          <div className="contactBg">
            <div className="hyperlinks">
              <a className="fs24B text_white" href="#">
                {t("Home")}
              </a>
              <a href="#">
                <i className="fa fa-angle-right text_white"></i>
              </a>
              <a className="fs24B text_white" href="#">
                {t("Contact Us")}
              </a>
            </div>
            <div className="row conBgDown">
              <div className="col-xl-6 col-sm-10">
                <div className="fs100N text_white">{t("Contact Us")}</div>
                <p className="fs24N text_grey">{t("Contact Banner Des")}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="conSection2">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="talk">
                <div className="talkFlex">
                  <div>
                    <img src="images/music.png" className="" />
                  </div>
                  <div className="fs48N text_black">{t("Let’s Talk")}</div>
                  <p className="fs18 text_black">{t("Let’s Talk Des")}</p>
                </div>
                <div className="info">
                  <img src="/images/email.png" />
                  <div className="emailFlex">
                    <div className="fs20N text_grey">{t("Email")}</div>
                    <div className="fs26 text_black">contact@jionex.com</div>
                  </div>
                </div>
                <div className="info info1">
                  <img src="/images/phone.png" />
                  <div className="phoneFlex">
                    <div className="fs20N text_grey">{t("Phone No")}.</div>
                    <div>
                      <a className="fs26 text_black" href="tel:1569258166">
                        +971569258166
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 queryMain">
              <div className="col-xl-10  col-lg-12 col-md-12 ms-auto query">
                <div className="text_black fs40 queryHead">
                  {t("Send Us Your Querry")}
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="fs26 title">{t("Full name")}</div>
                    <input type="text" placeholder="John Carter" />
                  </div>
                  <div className="col-xl-6 secondInp">
                    <div className="fs26 title">{t("Email")}</div>
                    <input type="email" placeholder="example@email.com" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="fs26 title">{t("Phone")}</div>
                    <input type="text" placeholder="+1 (205) - 583 - 2896" />
                  </div>
                  <div className="col-xl-6 secondInp">
                    <div className="fs26 title">{t("Budget")}</div>
                    <input type="email" placeholder="$" />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="fs26">{t("Message")}</div>
                    <textarea
                      rows={5}
                      placeholder="Please type your message here..."
                    />
                  </div>
                </div>
                <div className="fs22 text_grey">{t("Agreement")}</div>
                <div className="queryWrapper">
                  <button type="button" className="btn_pink">
                    {t("Submit")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.locations}>
        <Container>
          <div className={styles.head}>
            <h2>{t("We are Around the Globe")}</h2>
          </div>
          <div className={styles.row}>
            {officeLocationsEN.map((office, index) => (
              <div className={styles.location} key={index}>
                <h2 className={styles.country}>{office.country}</h2>
                <div className={styles.image}>
                  <NextImage
                    src={office.image}
                    className=""
                    alt={office.country}
                  />
                </div>
                <div>
                  <h3 className={styles.country}>{office.city}</h3>
                  <h4>
                    (<span>{office.office}</span>){" "}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer></Footer>
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
