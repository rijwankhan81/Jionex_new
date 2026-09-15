import Link from "next/link";
import { useTranslation } from "next-i18next";
import NextImage from "../../hooks/NextImage";
import { motion } from "framer-motion";

export default function Contactmod({ ...props }) {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="container-fluid contact">
        <div className="container">
          <div className="row">
            <motion.div
              className="col-xl-5 contactLeft"
              initial={{ translateX: -100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeInOut",
              }}
            >
              <NextImage
                src="/images/contact.png"
                className="img-fluid"
                alt={""}
              />
            </motion.div>
            <motion.div
              className="col-xl-7 contactRight"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeInOut",
              }}
            >
              <div className="col-xl-11 contactRightA">
                <div className="text_linear fs64 ">{t("Contact H")}</div>
                <p className="fs24">{t("Contact H Des")}</p>
                <div className="contflex">
                  <div className="contBox1">
                    <img
                      src="/images/contactimg1.png"
                      alt=""
                      className="cont2"
                    />
                    <div className="fs28 text_white">
                      {t("Schedule a meeting")}
                    </div>
                  </div>
                  <div className="contBox">
                    <img
                      src="/images/contactimg2.png"
                      alt=""
                      className="cont2"
                    />
                    <div className="fs28 text_black">{t("Call us Now")}</div>
                  </div>
                  <div className="contBox">
                    <img
                      src="/images/contactimg3.png"
                      alt=""
                      className="cont2"
                    />
                    <div className="fs28 text_black">
                      {t("Request a Quote")}
                    </div>
                  </div>
                </div>
                <div className="contBtnWrapper">
                  <Link href="/contact" className="btn_blue">
                    {t("Contact us Now")}
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
