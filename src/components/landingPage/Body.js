// Init
import React from "react";
import AboutLandingPageImg from "../../assets/img/aboutlandingpage02.png";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

export default function Body() {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  console.log("t is ", language);

  // React.useEffect(() => {
  //   document.addEventListener("onload", () => {
  //     var element = document.getElementsByClassName("landingPage_heading");
  //     element.classList.add("myStyles");
  //   });
  // }, [window.onload]);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > -5 && window.scrollY < 200) {
        var element = document.getElementsByClassName("landingPage_heading");
        if (element && element.length > 0) {
          for (let index = 0; index < element.length; index++) {
            element[index].classList.add("myStyles");
          }
        }
      } else {
        var element = document.getElementsByClassName("landingPage_heading");
        if (element && element.length > 0) {
          for (let index = 0; index < element.length; index++) {
            element[index].classList.remove("myStyles");
          }
        }
      }
    });
  }, [window.scrollY]);

  return (
    <>
      <div className="landingpagecontainer">
        <div className="landingpageimgcontainer">
          <img src={AboutLandingPageImg} className="landingpageLeftimg" />
        </div>
        <div
          className={`${
            language == "fr"
              ? "frlandingpagetextonImg "
              : "landingpagetextonImg"
          }`}
        >
          <div className="landingPage_heading ">
            <h1 className="landingpagetextimgH1 myStyles ">
              {t("Welcome to the")}
              <br className="landingBr" /> {t("Gamer's eLearning 3.0")}
            </h1>
            <p className="myStyles ">
              {t("Join our Online Courses community and reach your goal")}
            </p>
          </div>
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
