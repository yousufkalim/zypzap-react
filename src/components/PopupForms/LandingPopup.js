import React, { useEffect } from "react";
import "../../css/form/LandingPopup.css";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";
import NewLogo from "../../assets/icons/NewLogo.png";
import GamerLogo from "../../assets/icons/GamerLogo.svg";

const LandingPopup = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div>
      <Dialog open={open} maxWidth={"xl"}>
        <div className="landingPopup" style={{ backgroundColor: "#1D1F38" }}>
          <ClearIcon className="subsclearIcon" onClick={handleClose} />
          <div className="landingPopup_container">
            {/* landingPopup_logo_and_heading */}
            <div className="landingPopup_logo_and_heading">
              <div className="landingLogo">
                <img src={NewLogo} alt="" />
              </div>
              <div className="landingheading">
                <p className="landing_heading_P">
                  SOYEZ PARMI LES PREMIERS <br /> ET BÉNÉFICIEZ D’AVANTAGES
                  EXCLUSIFS*
                </p>
              </div>
            </div>
            {/* landingPopup_logo_and_heading */}
            {/* landing gamers colmns */}
            <div className="landing_gamers_mainDiv">
              <div className="landing_gamers_colmn_1">
                {/* gamer_heading_Line_logo */}
                <div className="gamer_heading_Line_logo">
                  <p className="gamers_title">GAMERS</p>
                  <p className="gamer_tite_p">
                    Faites partie des 1000 premiers inscrits
                  </p>
                  <div className="gamer_line"></div>
                  <img src={GamerLogo} alt="" className="gamer_Logo" />
                </div>
                {/* gamer_heading_Line_logo */}
                {/* Accès gratuit */}
                <div className="gratuit">
                  <p className="gratuit_p1">Accès gratuit</p>
                  <p className="gratuit_p2">à la plateforme pendant un an</p>
                </div>
                <div className="gratuit">
                  <p className="gratuit_p1">Interactions privilégiées</p>
                  <p className="gratuit_p2">
                    avec vos instructeurs <br /> durant les Live Masterclass
                  </p>
                </div>
                <div className="gratuit">
                  <p className="gratuit_p1">
                    Accès aux évènements virtuels exclusifs
                  </p>
                </div>
                <div className="gratuit">
                  <p className="gratuit_p2_2ind">
                    Accès anticipé aux fonctionnalités beta
                  </p>
                  <p className="gratuit_p1">pendant un an</p>
                </div>
                <img src={GamerLogo} alt="" className="gamer_Logo2" />
                {/* Accès gratuit */}
              </div>
              <div className="landing_gamers_colmn_1">
                {/* gamer_heading_Line_logo */}
                <div className="gamer_heading_Line_logo">
                  <p className="gamers_title">CREATEURS DE CONTENU</p>
                  <p className="gamer_tite_p">
                    Faites partie des 100 premiers inscrits !
                  </p>
                  <div className="gamer_line"></div>
                  <img src={GamerLogo} alt="" className="gamer_Logo" />
                </div>
                {/* gamer_heading_Line_logo */}
                {/* Accès gratuit */}
                <div className="gratuit">
                  <p className="gratuit_p1">Mise en avant de vos contenus</p>
                  <p className="gratuit_p2">dans les résultats de recherche</p>
                </div>
                <div className="gratuit">
                  <p className="gratuit_p1">0% de commission prélevé </p>
                  <p className="gratuit_p2">
                    pendant un an <br />
                    sur les revenus générés
                  </p>
                </div>
                <div className="gratuit">
                  <p className="gratuit_p1">
                    Augmentation du % des revenus partagés
                  </p>
                  <p className="gratuit_p2">pendant un an</p>
                </div>
                <div className="gratuit">
                  <p className="gratuit_p2_2">
                    Accès anticipé aux fonctionnalités beta
                  </p>
                  <p className="gratuit_p1">pendant un an</p>
                </div>
                <img src={GamerLogo} alt="" className="gamer_Logo2_culm_2" />
                {/* Accès gratuit */}
              </div>
            </div>
            {/* landing gamers colmns */}

            {/* L'offre se termine dans */}
            <div className="Loffer_mainDiv">
              <p className="loffer-p">
                *Les modalités de l’offre vous seront communiqués par email
              </p>
              <p className="loffer_heading">L'offre se termine dans</p>
              {/* L_offer_boxe */}
              <div className="L_offer_boxe">
                <div className="L_offer_Colmn">
                  <p className="L_offer_numbers">00</p>
                  <p className="L_offer_Times">DAYS</p>
                </div>
                <div className="L_offer_Colmn">
                  <p className="L_offer_numbers">00</p>
                  <p className="L_offer_Times">HOURS</p>
                </div>
                <div className="L_offer_Colmn">
                  <p className="L_offer_numbers">00</p>
                  <p className="L_offer_Times">MINUTES</p>
                </div>
                <div className="L_offer_Colmn">
                  <p className="L_offer_numbers">00</p>
                  <p className="L_offer_Times">SECONDS</p>
                </div>
              </div>
              {/* L_offer_boxe */}
              <div className="landingLogo2">
                <img src={NewLogo} alt="" />
              </div>
              <button className="L_offer_btn">Close</button>
            </div>
            {/* L'offre se termine dans */}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default LandingPopup;
