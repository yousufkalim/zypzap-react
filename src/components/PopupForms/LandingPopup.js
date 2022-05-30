import React, { useState, useEffect } from "react";
import "../../css/form/LandingPopup.css";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";
import NewLogo from "../../assets/icons/NewLogo.png";
import GamerLogo from "../../assets/icons/GamerLogo.svg";
import Countdown from "react-countdown";
import moment from "moment";

const LandingPopup = ({ open, setOpen }) => {
  const [timeLeft, setTimeLeft] = useState(30);
  var countDownDate = new Date("June 26, 2022").getTime();
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setState({
        days,
        hours,
        minutes,
        seconds
      });

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        setState({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);
  }, []);

  // console.log("timer,", state);

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
                  <p className="L_offer_numbers">{state?.days}</p>
                  <p className="L_offer_Times">DAYS</p>
                </div>
                <div className="L_offer_Colmn">
                  <p className="L_offer_numbers">{state?.hours}</p>
                  <p className="L_offer_Times">HOURS</p>
                </div>
                <div className="L_offer_Colmn">
                  <p className="L_offer_numbers">{state?.minutes}</p>
                  <p className="L_offer_Times">MINUTES</p>
                </div>
                <div className="L_offer_Colmn">
                  <p className="L_offer_numbers">{state?.seconds}</p>
                  <p className="L_offer_Times">SECONDS</p>
                </div>
              </div>
              {/* L_offer_boxe */}
              <div className="landingLogo2">
                <img src={NewLogo} alt="" />
              </div>
              <button className="L_offer_btn" onClick={handleClose}>
                Close
              </button>
            </div>
            {/* L'offre se termine dans */}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default LandingPopup;
