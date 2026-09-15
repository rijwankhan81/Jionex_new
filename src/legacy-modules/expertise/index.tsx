import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Expertise({ ...props }) {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="expertise">
        <div className="container">
          <div className="image">
            <img src="/images/lang-frame.svg" alt="" />
          </div>
          <div className="fs64 text_black expHead">{t("Exp")}</div>
          <p className="fs24 text_grey">{t("Exp Des")}</p>

          <div className="startDev">
            <div className="radialWrapper">
              <div className="fs54 text_white head">{t("Start Dev")}</div>
              <div className="flex">
                <div className="expFlex">
                  <i className="fa fa-check"></i>
                  <div className="fs17D text_white">
                    {t("Schedule a Consultation")}
                  </div>
                </div>
                <div className="expFlex">
                  <i className="fa fa-check"></i>
                  <div className="fs17D text_white">
                    {t("Customized Solutions")}
                  </div>
                </div>
                <div className="expFlex">
                  <i className="fa fa-check"></i>
                  <div className="fs17D text_white">{t("Expert Guidance")}</div>
                </div>
              </div>
            </div>
            <div className="expBtnWrapper">
              <Link href="/contact" className="btn_orange" id="exp">
                {t("Schedule A Call Now")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
