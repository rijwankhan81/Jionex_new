import styles from "./services.module.scss";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useTranslation } from "next-i18next";
import useHasMounted from "../../hooks/useHasMounted";
import {
  servicesAR,
  servicesBN,
  servicesEN,
  servicesES,
} from "../../constants/services";

export default function Services() {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  let services;

  switch (selectedLanguage) {
    case "bn":
      services = servicesBN;
      break;
    case "ar":
      services = servicesAR;
      break;
    case "es":
      services = servicesES;
      break;
    default:
      services = servicesEN;
  }

  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      <section className={styles.black_ribbon}>
        {/* Left-to-right Marquee */}
        <Marquee>
          <div className={styles.ribbon_section}>
            <div className={styles.ribbon_text}>
              {services.map((service) => (
                <div className={styles.service} key={service.id}>
                  <Link href={service.link}>
                    <h5 className={styles.ribbon_ltext}>{service.title}</h5>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Marquee>

        {/* Right-to-left Marquee */}
        <Marquee direction="right">
          <div className={styles.ribbon_section}>
            <div className={styles.ribbon_text}>
              {services.map((service) => (
                <div className={styles.service} key={service.id}>
                  <Link href={service.link}>
                    <h5 className={styles.ribbon_ltext}>{service.title}</h5>
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

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale ?? "en", ["common"])),
//     },
//   };
// };
