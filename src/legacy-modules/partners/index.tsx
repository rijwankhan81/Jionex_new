import { useTranslation } from "next-i18next";
import {
  projectsAR,
  projectsBN,
  projectsEN,
  projectsES,
} from "../../constants/projects";
import styles from "./partner.module.scss";
import Marquee from "react-fast-marquee";

export default function Partners({ ...props }) {
  const { i18n } = useTranslation("common");
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
  return (
    <>
      <section className={styles.black_ribbon}>
        <Marquee
          className={styles.bg_dark}
          direction={selectedLanguage === "ar" ? "right" : "left"}
        >
          {projectsData.map((project) => (
            <div className={styles.ribbon_section} key={project.id}>
              <div className={styles.ribbon_text}>
                {project.items.map((item) => (
                  <img src={item.image} alt={item.name} />
                ))}
              </div>
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
}
