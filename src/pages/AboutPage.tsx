import React from "react";
import { Trans, useTranslation } from "react-i18next";

export const AboutPage:React.FC = () => {

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">About Page</h1>

      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>

      <hr/>

      <Trans i18nKey="title">
        Welcome to react using react-i18next
      </Trans>
      <div>
        {t("description.body")}
      </div>

    </div>
  )
}
