import { useTranslation, Trans } from "react-i18next";
import React from "react";

const lngs = {
  en: { nativeName: "English" },
  ru: { nativeName: "Russian" }
};

export const AboutPage:React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">About Page</h1>
      <Trans i18nKey="description.part1">
        Edit <code>src/App.js</code> and save to reload.
      </Trans>
      <p>{t("description.part2")}</p>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal" }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  )
}
