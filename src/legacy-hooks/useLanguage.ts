import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n } = useTranslation("common");

  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return language;
};

export default useLanguage;
