// Init
import React from "react";
import AboutLandingPageImg from "../../assets/img/aboutlandingpage2.png";
import Aboutimg from "../../assets/img/about02.png";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

export default function Body() {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  console.log("t is ", language);

  return (
    <>
      <div className="landingpagecontainer">
        <div className="landingpageimgcontainer">
          <img src={AboutLandingPageImg} className="landingpageLeftimg" />
          <img src={Aboutimg} className="landingpageRightimg" />
        </div>
        <div
          className={`${
            language == "en" ? "landingpagetextonImg" : "frlandingpagetextonImg"
          }`}
        >
          <h1 className="landingpagetextimgH1">
            {t("Welcome to the")}
            <br className="landingBr" /> {t("Gamer's eLearning 3.0")}
          </h1>
          <p className="landingpagetextonImgP">
            {t("Join our Online Courses community and reach your goal")}
          </p>
          <div className="landingbuttondiv">
            <Link
              to="/userlanding"
              style={{ color: "white", textDecoration: "none" }}
            >
              <button className="landingpagetextonImgbutton">
                {t("Early access to courses")}
              </button>
            </Link>
            <Link
              to="/contentcreator"
              style={{ color: "white", textDecoration: "none" }}
            >
              <button className="landingpagetextonImgbutton">
                {t("Become content creator")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
