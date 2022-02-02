// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import gamerImg from "../../assets/img/gamerimg.png";
import contentImg from "../../assets/img/contentimg.png";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";

export default function WhatWeOffer() {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 300 && window.scrollY < 700) {
        var element = document.getElementsByClassName("offerdzooming ");
        if (element && element.length > 0) {
          for (let index = 0; index < element.length; index++) {
            element[index].classList.add("myStyleWhat");
          }
        }
      }
    });
  }, [window.scrollY]);

  return (
    <>
      <div className="whatweoffercontainer ">
        <div className="offerh1">
          <h1 style={{ fontWeight: "100" }}>{t("What we offer")}</h1>
          <div className="offerdashline"></div>
        </div>
      </div>
      <Grid container spacing={2} className="offerGrid ">
        <Grid item xs={12} sm={6}>
          <div className="offerdivleft">
            <div className="offerdzooming ">
              <img src={gamerImg} className="offerimg1 " alt="img" />
              <h1 className="offerheading">{t("I am Gamer")}</h1>
              <p className="offerText">
                {t("Suivez les cours de votre choix et commencez à scorer")}
              </p>
              <Link to="/userlanding">
                <button className="whatweofferButton">{t("Join us")}</button>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="offerdivright  ">
            <div className="offerdzooming ">
              <img src={contentImg} className="offerimg2 " alt="img" />
              <h1 className="offerheading">{t("I AM Content Creator")}</h1>
              <p className="offerText">
                {t("Créez vos cours et ")}
                <br />
                {t("monetisez votre expertise")}
              </p>
              <Link to="/contentcreator">
                <button className="whatweofferButton">{t("Join us")}</button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
