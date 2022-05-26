// Init
import React, { useState } from "react";
import SubscriptionPopup from "../PopupForms/SubscriptionPopup";
import Grid from "@material-ui/core/Grid";
import gamerImg from "../../assets/img/ComputerImg.svg";
import contentImg from "../../assets/img/ComputerImg2.svg";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import "../../css/landingPage/landingpage.css";
import CongratulationPopup1 from "../PopupForms/CongratulationPopup1";
export default function WhatWeOffer() {
  const [successPopup, setSuccessPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const { t, i18n } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

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
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CongratulationPopup1
        open={successPopup}
        setOpen={setSuccessPopup}
        closeModal={handleClose}
      />
      {open && (
        <SubscriptionPopup
          isThreeLine={true}
          open={open}
          setOpen={setOpen}
          setSuccessPopup={setSuccessPopup}
          pera="S'abonner à la Newsletter"
          title="Accédez à des avantages uniques ! "
          // title2="avantages uniques"
          content="Offre reservée aux 1000 premiers inscrits"
          check="false"
          type="creator"
        />
      )}
      {open2 && (
        <SubscriptionPopup
          isThreeLine={true}
          open={open2}
          setOpen={setOpen2}
          setShowPopups={setShowPopup}
          setSuccessPopup={setSuccessPopup}
          title="Bénéficiez d’un an de services offerts !"
          // title2=" services offerts !"
          content="Offre reservée aux 10 000 premiers inscrits"
          pera="S'abonner à la Newsletter"
          check="true"
          type="user"
        />
      )}
      <Grid container spacing={2} className="offerGrid ">
        <Grid item xs={12} sm={6}>
          <div className="offerdivleft">
            <div className="offerdzooming ">
              <img src={gamerImg} className="offerimg1 offerimg1-1" alt="img" />
              <h1 className="offerheading2 offerheading5">
                {t("Je suis un Gamer")}
              </h1>
              <p className="offerText2">
                {t("Suivez les cours de votre choix ")}
                <br />
                {t(" et commencez à scorer")}
              </p>
              <p className="offerText22">
                Suivez les cours de votre choix et commencez à scorer
              </p>
              <Link to="#">
                <button
                  className="whatweofferButton"
                  style={{ marginBottom: "18px" }}
                  onClick={() => setOpen2(true)}
                >
                  {t("Pré-inscrivez vous")}
                </button>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="offerdivright  ">
            <div className="offerdzooming ">
              <img src={contentImg} className="offerimg2 " alt="img" />
              <h1 className="offerheading2 offerheading5">
                {t("Je suis un Créateur ")}
              </h1>
              <p className="offerText2">
                {t("Créez vos cours et ")}
                <br />
                {t("monetisez votre expertise")}
              </p>
              <p className="offerText22">
                Créez vos cours et monetisez votre expertise
              </p>
              <Link to="#">
                <button
                  className="whatweofferButton2"
                  onClick={() => setOpen(true)}
                >
                  {t("Pré-inscrivez vous")}
                </button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="whatweoffercontainer ">
        <div className="offerh1">
          <h1
            className="offerh1-1"
            style={{ fontWeight: "100", fontSize: "28px" }}
          ></h1>
          {/* <div className="offerdashline"></div> */}
        </div>
        <div className="preparingHeading">
          <h1 className="preparingH1">Nous prÉparons le lancement</h1>
          <p className="preparingP">
            Nous avons hâte de vous faire découvrir la plateforme ZypZap.
          </p>
          <p className="preparingP">
            Toute notre équipe est mobilisée sur le développement de ses
            fonctionnalités inédites et innovantes.
          </p>
          <p className="preparingP">
            Inscrivez-vous dès maintenant pour participer au développement de
            notre communauté.
          </p>
          <p className="preparingP2">
            Nous avons hâte de vous faire découvrir la plateforme ZypZap. Toute
            notre équipe est mobilisée sur le développement de ses
            fonctionnalités inédites et innovantes. Inscrivez-vous dès
            maintenant pour participer au développement de notre communauté.
          </p>
        </div>
      </div>
    </>
  );
}
