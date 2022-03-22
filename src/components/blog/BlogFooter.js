// Init
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import NewLogo from "../../assets/icons/NewLogo.png";
import FbIcon22 from "../../assets/icons/FbIcon22.svg";
import TwitterIcon2 from "../../assets/icons/TwitterIcon2.svg";
import Instagram from "../../assets/icons/instagram-icon-8.svg";
import LinkedinIcon2 from "../../assets/icons/LinkedinIcon2.svg";
import VactorIcon from "../../assets/icons/VactorIcon.svg";
import InstagramIcon from "../../assets/icons/InstagramIcon.svg";
import Globe from "../../assets/icons/globe.svg";
import email from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone.svg";
import location from "../../assets/icons/location.svg";

import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

export default function Footer({ openContentRequest, setOpenContentRequest }) {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="footerDiv">
        <Grid
          container
          spacing={4}
          style={{ borderBottom: "0.2px solid #2B2B4D" }}
        >
          <Grid item xs={12} sm={3} className="footer_container">
            <div className="f1div">
              <Link to="/">
                <img className="footerLogo " src={NewLogo} />
              </Link>
              <div>
                <table className="infotable1">
                  <tr>
                    <div className="tdDiv">
                      <td>
                        <img src={email} height={15} className="emailicon" />
                      </td>
                      <td className="infoTd"> contact@zypap.com</td>
                    </div>
                    {/* </tr>
                  <tr>
                    <div className="tdDiv">
                      <td>
                        <img src={phone} height={20} className="emailicon" />
                      </td>
                      <td className="infoTd">+33603856707</td>
                    </div>
                  </tr>
                  <tr> */}
                    <div className="tdDiv">
                      <td>
                        <img src={location} height={20} className="emailicon" />
                      </td>
                      <td className="infoTd">Paris, France</td>
                    </div>
                  </tr>
                </table>
                <div className="isocialcondiv">
                  <img src={FbIcon22} height={50} className="imgIcon3" />
                  <img src={TwitterIcon2} height={50} className="imgIcon3" />
                  <img src={LinkedinIcon2} height={50} className="imgIcon3" />
                  <img src={VactorIcon} height={50} className="imgIcon3" />
                  <img
                    src={InstagramIcon}
                    height={20}
                    className="imgIcon3"
                    style={{ marginBottom: "17px", marginLeft: "5px" }}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} className="footer_menu">
            <div className="f2div">
              <Link
                to="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                <p className="pmargin">A propos de nous</p>
              </Link>
              <Link
                to="/contentcreator"
                style={{ color: "white", textDecoration: "none" }}
              >
                <p className="pmargin">Devenir createur</p>
              </Link>
              <p className="pmargin"> Devenir Evaluateur</p>
              <Link
                to="/landingpartner"
                style={{ color: "white", textDecoration: "none" }}
              >
                <p className="pmargin">Partenaires</p>
              </Link>
              <Link
                to="#"
                className="pmargin"
                style={{ color: "white", textDecoration: "none" }}
                onClick={() => {
                  setOpenContentRequest(true);
                }}
              >
                {" "}
                Contactez-nous
              </Link>
            </div>
          </Grid>

          <Grid item xs={12} sm={3} className="footer_m2">
            <div className="f2div">
              <p className="pmargin"> L’équipe</p>
              <Link
                to="/blog"
                style={{ color: "white", textDecoration: "none" }}
              >
                <p className="pmargin">Blog</p>
              </Link>
              <p className="pmargin">Rejoignez-nous</p>
              <p className="pmargin">Informations légales</p>
              <p className="pmargin">Politique de confidentialité</p>
              <Link
                to="/policy"
                style={{ color: "white", textDecoration: "none" }}
              >
                <p className="pmargin">Privacy Policy</p>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} className="footer_language">
            <div className="languagebuttondiv">
              {/* <img src={Globe} className="languageIcon" /> */}
              <button
                className="languageButton"
                onClick={() =>
                  changeLanguage(`${language == "en" ? "fr" : "en"}`)
                }
              >
                {language == "fr" ? "English" : "French"}
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="divforsign" style={{ width: "100%" }}>
        <p className="sign">©ZypZap. ALL RIGHTS RESERVED.</p>
      </div>
    </>
  );
}
