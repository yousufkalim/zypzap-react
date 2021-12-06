import React from "react";
import { useTranslation, Trans } from "react-i18next";

const ButtonBecomeAPartner = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  return (
    <>
      <button className="btn-landing-partner">{t("Become a Partner")}</button>
    </>
  );
};

export default ButtonBecomeAPartner;
