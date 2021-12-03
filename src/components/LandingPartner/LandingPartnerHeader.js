import React from "react";
import Box from "@mui/material/Box";
import landingpartnerheaderimg from "../../assets/img/landingpartnerheaderimg2.png";
import LandingPartnerButton from "./LandingPartnerButton";
import { useTranslation, Trans } from "react-i18next";
const LandingPartnerHeader = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  return (
    <>
      <Box className="landing-partner-img-container">
        <img
          className="landing-partner-header-img"
          src={landingpartnerheaderimg}
        />
        <div class="slider container">
          <div class="landing-partner-text-container">
            <h1 className="landing-partner-header">{t("Partner with Us")}</h1>
            <p className="landing-partner-pargraph">
              {t("Here what we can create together")}
            </p>
            <LandingPartnerButton />
          </div>
        </div>
      </Box>
    </>
  );
};

export default LandingPartnerHeader;
