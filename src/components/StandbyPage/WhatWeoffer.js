// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import gamerImg from "../../assets/img/ComputerImg.svg";
import contentImg from "../../assets/img/ComputerImg2.svg";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";

export default function WhatWeOffer() {
  const { t, i18n } = useTranslation();

  // React.useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     if (window.scrollY > 300 && window.scrollY < 700) {
  //       var element = document.getElementsByClassName("offerdzooming ");
  //       if (element && element.length > 0) {
  //         for (let index = 0; index < element.length; index++) {
  //           element[index].classList.add("myStyleWhat");
  //         }
  //       }
  //     }
  //   });
  // }, [window.scrollY]);

  return (
    <>
      <div className="whatweoffercontainer ">
        <div className="offerh1">
          <h1
            className="offerh1-1"
            style={{ fontWeight: "100", fontSize: "28px" }}
          ></h1>
          {/* <div className="offerdashline"></div> */}
        </div>
      </div>
      <Grid container spacing={2} className="offerGrid ">
        <Grid item xs={12} sm={6}>
          <div className="offerdivleft">
            <div className="offerdzooming ">
              <img src={gamerImg} className="offerimg1 offerimg1-1" alt="img" />
              <h1
                className=".offerheading2 offerheading5"
                style={{ marginTop: "5px" }}
              >
                {t("Je suis un Gamer")}
              </h1>
              <p className="offerText2">
                {t("Suivez les cours de votre choix ")}
                <br />
                {t(" et commencez à scorer")}
              </p>

              <Link to="/userlanding">
                <button
                  className="whatweofferButton"
                  style={{ marginBottom: "18px" }}
                >
                  {t("Inscrivez-vous")}
                </button>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="offerdivright  ">
            <div className="offerdzooming ">
              <img src={contentImg} className="offerimg2 " alt="img" />
              <h1 className=".offerheading2 offerheading5">
                {t("Je suis un Createur de contenu")}
              </h1>
              <p className="offerText2">
                {t("Créez vos cours et ")}
                <br />
                {t("monetisez votre expertise")}
              </p>
              <Link to="/contentcreator">
                <button className="whatweofferButton">
                  {t("Inscrivez-vous")}
                </button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
