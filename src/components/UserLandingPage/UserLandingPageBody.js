import React, { useState } from "react";
import userlangingpage from "../../assets/img/userlandingpage02.png";
import UserLandingPageAdvantages from "../UserLandingPage/UserLandingPageAdvantages";
import UserLandingPageCommunity from "../UserLandingPage/UserLandingPageCommunity";
import UserLandingPageTrending from "../UserLandingPage/UserLandingPageTrending";
import UserLandingPageBlog from "../UserLandingPage/UserLandingPageBlog";
import SubscriptionPopup from "../PopupForms/SubscriptionPopup";
import { useTranslation } from "react-i18next";
const UserLandingPageBody = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  console.log("language ", language);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const postEmail = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <div>
        {open && (
          <SubscriptionPopup Email={email} open={open} setOpen={setOpen} />
        )}
      </div>
      <div className="user-landingpage-container">
        <div className="user-landing-page-img-container">
          <img src={userlangingpage} className="aboutLeftimg" />
        </div>
        <div className="user-landing-page-text-on-img">
          <h1
            className={`${
              language == "en"
                ? "UserLandingPageAboutTextImgH1"
                : "frUserLandingPageAboutTextImgH1"
            }`}
          >
            {t("Deviens maitre du jeu !")}
          </h1>
          <p className="user-landing-page-text-on-imgP">
            {t("Accédez à la connaissance supreme du gaming")}
          </p>
          <form
            className={`${
              language == "fr" ? "flex-form" : "flex-form flex-form2"
            }`}
            onSubmit={postEmail}
          >
            <input
              className="user-landing-page-email-input"
              value={email}
              name="email"
              onChange={getEmail}
              type="email"
              placeholder={t("Email address")}
              required
            />
            <input
              className="user-landing-page-submit-input"
              type="submit"
              value={t("Early access to courses")}
            />
          </form>
        </div>
      </div>
      <UserLandingPageAdvantages
        text1="DES COURS CONÇUS POUR PROGRESSER"
        text2="TOUS LES JEUX SONT ABORDES"
        text3="DES SUJETS DE COURS SUR MESURE"
        text4="UN BUDGET MINIMAL POUR UNE PROGRESSION EFFICACE"
      />
      <UserLandingPageCommunity />

      <UserLandingPageTrending />
      <UserLandingPageBlog />
    </>
  );
};

export default UserLandingPageBody;
