// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import gamerImg from "../../assets/img/gamerimg.png";
import contentImg from "../../assets/img/contentimg.png";
import { useTranslation, Trans } from "react-i18next";

export default function WhatWeOffer() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="whatweoffercontainer">
        <div className="offerh1">
          <h1>{t("What we offer")}</h1>
          <div className="offerdashline"></div>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="offerdivleft">
            <img src={gamerImg} className="offerimg1" alt="img" />
            <h1 className="offerheading">{t("I am Gamer")}</h1>
            <p className="offerText">
              {t(
                "It is a long established fact that a reader will be distracted by the readable content of a page this is whe"
              )}
            </p>
            <button className="whatweofferButton">
              {t("Early access to courses")}
            </button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="offerdivright">
            <img src={contentImg} className="offerimg2" alt="img" />
            <h1 className="offerheading">{t("I AM Content Creator")}</h1>
            <p className="offerText">
              {t(
                "It is a long established fact that a reader will be distracted by the readable content of a page this is whe"
              )}
            </p>
            <button className="whatweofferButton">
              {t("Early access to courses")}
            </button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
