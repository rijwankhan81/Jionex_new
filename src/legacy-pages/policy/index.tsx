import { Footer } from "../../layout/footer";

import { useTranslation } from "next-i18next";
import {
  privacyPolicyEN,
  privacyPolicyBN,
  privacyPolicyAR,
  privacyPolicyES,
} from "../../constants/privacyPolicy";
import useHasMounted from "../../hooks/useHasMounted";
import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

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

  const [privacyPolicyData, setPrivacyPolicyData] = useState<{
    content: string;
  }>({ content: "" });

  useEffect(() => {
    let policyData;

    switch (selectedLanguage) {
      case "bn":
        policyData = privacyPolicyBN[0];
        break;
      case "ar":
        policyData = privacyPolicyAR[0];
        break;
      case "es":
        policyData = privacyPolicyES[0];
        break;
      default:
        policyData = privacyPolicyEN[0];
    }

    // Ensure policyData is an object with a 'content' property
    if (policyData && typeof policyData.content === "string") {
      setPrivacyPolicyData(policyData);
    }
  }, [selectedLanguage]);
  const { t } = useTranslation("common");
  if (!isClient) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{t("Privacy Policy")}</title>
      </Head>
      <main>
        <section className="policyBanner">
          <h1>{t("Privacy Policy")}</h1>
        </section>
        <article
          className="policy"
          dangerouslySetInnerHTML={{ __html: privacyPolicyData.content }}
        />
        <Footer />
      </main>
    </>
  );
}
