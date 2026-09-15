import React, { useState } from "react";
import {
  projectsDataAR,
  projectsDataBN,
  projectsDataEN,
  projectsDataES,
} from "../../constants/projectsData";
import { useTranslation } from "next-i18next";
import useHasMounted from "../../hooks/useHasMounted";
import NextImage from "../../hooks/NextImage";
import { Container } from "react-bootstrap";

const ProjectDetails = ({ selectedProjectId }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  let projectsData;

  switch (selectedLanguage) {
    case "bn":
      projectsData = projectsDataBN;
      break;
    case "ar":
      projectsData = projectsDataAR;
      break;
    case "es":
      projectsData = projectsDataES;
      break;
    default:
      projectsData = projectsDataEN;
  }

  // Find the selected project based on ID
  const selected = projectsData.find(
    (project) => project.id === selectedProjectId
  );

  // If project is selected, set it to state
  React.useEffect(() => {
    if (selected) {
      setSelectedProject(selected);
    }
  }, [selectedProjectId, selected]);

  const { t } = useTranslation("common");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      {selectedProject ? (
        <section className="container serviceSec4">
          <Container>
            <div className="fs27D port">
              {t("Our Portfolio")}
              <NextImage
                src="/images/ind5A.png"
                className="img-fluid line"
                alt={""}
              />
              <div className="row">
                <div className="col-xl-9 col-md-7">
                  <div className="fs64 text_black ind5head">
                    {selectedProject.description}
                  </div>
                </div>
              </div>
              {/* Check if the selected project exists */}
              <div className="projects">
                {selectedProject.items.map((item, idx) => (
                  <div className="portWrapper1" key={idx}>
                    <div className="Portfolio1 ">
                      <div className="text_black fs35D">{item.title}</div>
                      <div className="fflex">
                        <div className="fs19D text_grey2">{item.date}</div>
                        <div className="fs19D text_grey2">.</div>
                        <div className="fs19D text_grey2">{item.duration}</div>
                      </div>
                      <div className="fflex">
                        {item.roles.map((role, roleIdx) => (
                          <div className="fs21D text_black tagsA" key={roleIdx}>
                            {role}
                          </div>
                        ))}
                      </div>
                      <p className="fs19D text_black">{item.description}</p>
                      <div className="imgWrapper">
                        {/* {item.image && (
                        <img src={item.image} className="img-fluid" />
                      )} */}
                        <NextImage
                          src={item.image}
                          className="img-fluid"
                          alt={""}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : (
        <p>Service not found</p>
      )}
    </>
  );
};

export default ProjectDetails;
