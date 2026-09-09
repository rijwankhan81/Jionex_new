import { useTranslation } from "next-i18next";

export default function Faq({ ...props }) {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="container-fluid FAQ">
        <div className="container faqSection">
          <div className="faqFlex">
            <div className="fs64 text_black FAQhead col-sm-6">{t("FAQ")}</div>
            <div className="text_black1 fs30 FAQheadR">{t("FAQ Des")}</div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item my-xl-4">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button fs20D text_black"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span className="fs20D text_black">01</span>&nbsp;&nbsp;
                  {t("FAQ H1")}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="fs20 text_grey">{t("FAQ H1 Des")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item mb-xl-4">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed fs20D text_black"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span className="fs20D text_black">02</span>&nbsp;&nbsp;
                  {t("FAQ H2")}
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="fs20 text_grey">{t("FAQ H2 Des")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item mb-xl-4">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed fs20D text_black"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <span className="fs20D text_black ">03</span>&nbsp;&nbsp;
                  {t("FAQ H3")}
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="fs20 text_grey">{t("FAQ H3 Des")}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item mb-xl-4">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button fs20D text_black collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <span className="fs20D text_black ">04</span>&nbsp;&nbsp;
                  {t("FAQ H4")}
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="fs20 text_grey">{t("FAQ H4 Des")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
