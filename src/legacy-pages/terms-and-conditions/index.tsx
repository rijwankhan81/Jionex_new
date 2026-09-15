import { Footer } from "../../layout/footer";
import { useTranslation } from "next-i18next";
import useHasMounted from "../../hooks/useHasMounted";
import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import {
  termAndConditionsAR,
  termAndConditionsBN,
  termAndConditionsEN,
  termAndConditionsES,
} from "../../constants/termAndConditions";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // load your namespace
    },
  };
}

export default function Policy() {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  const isClient = useHasMounted();

  const [termAndConditionsData, settermAndConditionsData] = useState<{
    content: string;
  }>({ content: "" });

  useEffect(() => {
    let policyData;

    switch (selectedLanguage) {
      case "bn":
        policyData = termAndConditionsBN[0];
        break;
      case "ar":
        policyData = termAndConditionsAR[0];
        break;
      case "es":
        policyData = termAndConditionsES[0];
        break;
      default:
        policyData = termAndConditionsEN[0];
    }

    // Ensure policyData is an object with a 'content' property
    if (policyData && typeof policyData.content === "string") {
      settermAndConditionsData(policyData);
    }
  }, [selectedLanguage]);

  const { t } = useTranslation("common");

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{t("Term & Conditions")}</title>
      </Head>
      <main>
        <section className="policyBanner">
          <h1>{t("Term & Conditions")}</h1>
        </section>
        <article
          className="policy"
          dangerouslySetInnerHTML={{ __html: termAndConditionsData.content }}
        />
        <Footer />
      </main>
    </>
  );
}
