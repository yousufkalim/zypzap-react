import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import NewLogo from "../../assets/icons/NewLogo.png";
import email from "../../assets/icons/email.svg";
import location from "../../assets/icons/location.svg";
import fDiscord from "../../assets/img/fDiscord.svg";
import fTwitter from "../../assets/img/fTwitter.svg";
import fReddit from "../../assets/img/fReddit.svg";
import fFacebook from "../../assets/img/fFacebook.svg";
import fLinkedin from "../../assets/img/fLinkedin.svg";
// import Discord from "../../assets/img/Discord.svg";
// import Twitter from "../../assets/img/Twitter.svg";
// import Reddit from "../../assets/img/Reddit.svg";
// import Facebook from "../../assets/img/Facebook.svg";

import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const Footer2 = ({ openContentRequest, setOpenContentRequest }) => {
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
                      <td className="infoTd"> contact@zypzap.com</td>
                    </div>
                    <div className="tdDiv">
                      <td>
                        <img src={location} height={20} className="emailicon" />
                      </td>
                      <td className="infoTd">Paris, France</td>
                    </div>
                  </tr>
                </table>
                <div className="isocialcondiv">
                  <a href="https://discord.gg/QDB2vxVE" target="_blank">
                    <img src={fDiscord} height={40} className="imgIcon" />
                  </a>
                  <a href="https://twitter.com/ZypZap_com" target="_blank">
                    <img src={fTwitter} height={40} className="imgIcon" />
                  </a>
                  <img src={fReddit} height={40} className="imgIcon" />
                  <a
                    href="https://www.facebook.com/zypzap.media"
                    target="_blank"
                  >
                    <img src={fFacebook} height={40} className="imgIcon" />
                  </a>
                  <img src={fLinkedin} height={40} className="imgIcon" />
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
                to="/LegalNotice"
                style={{ color: "white", textDecoration: "none" }}
              >
                <p className="pmargin">Informations légales</p>
              </Link>
              <Link
                to="/Team"
                style={{ color: "white", textDecoration: "none" }}
              >
                <p className="pmargin">L’équipe</p>
              </Link>
              {/* <p className="pmargin"> L’équipe</p> */}
              <Link
                to="/PrivacyPolicy"
                style={{ color: "white", textDecoration: "none" }}
              >
                <p className="pmargin">Politique de confidentialité</p>
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
          <button
            className="languageButton"
            onClick={() => changeLanguage(`${language == "en" ? "fr" : "en"}`)}
          >
            {language == "fr" ? "English" : "French"}
          </button>
        </Grid>
      </div>
      <div className="divforsign" style={{ width: "100%" }}>
        <p className="sign">©ZypZap. ALL RIGHTS RESERVED.</p>
      </div>
    </>
  );
};

export default Footer2;
