import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next"; // Import i18next hook
import styles from "./Switch.module.scss"; // Import styles for the switcher
import NextImage from "../../hooks/NextImage";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // Access the i18n instance
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when the component is mounted on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Toggle the dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const isArabic = i18n.language === "ar";
  // Handle language change using i18next
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
    router.push(router.asPath, router.asPath, {
      locale: lang,
      scroll: false, // 🔥 This prevents page scroll to top
    });
  };

  // Language options with flags
  const languageOptions = [
    { code: "en", name: "English", flag: "/images/en.png" },
    { code: "bn", name: "বাংলা", flag: "/images/bn.png" },
    { code: "ar", name: "العربية", flag: "/images/ar.png" },
    { code: "es", name: "Español", flag: "/images/es.png" },
  ];

  // Only render the component on the client side to avoid SSR issues
  if (!isClient) {
    return null;
  }

  // Fallback to a default image in case the flag is undefined
  const selectedLanguageFlag =
    languageOptions.find((lang) => lang.code === i18n.language)?.flag ||
    "/images/default-flag.png"; // Provide a default flag here

  return (
    <div className={styles.languageSwitcher}>
      <div className={styles.languageBtn} onClick={toggleDropdown}>
        {/* Display selected language with flag */}
        <NextImage
          src={selectedLanguageFlag}
          alt="flag"
          width={20} // Adjust width and height if necessary
          height={15}
        />
      </div>
      {isOpen && (
        <ul
          className={`${styles.languageDropdown} ${
            isArabic ? styles.arabic : ""
          }`}
        >
          {languageOptions.map(({ code, name, flag }) => (
            <li
              key={code}
              className={styles.languageOption}
              onClick={() => handleLanguageChange(code)}
            >
              <NextImage src={flag} alt={name} />
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
