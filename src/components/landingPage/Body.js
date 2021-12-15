// Init
import React, { useState } from "react";
import AboutLandingPageImg from "../../assets/img/aboutlandingpage02.png";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import SubscriptionPopup from "../PopupForms/SubscriptionPopup";

export default function Body() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  console.log("t is ", language);
  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0 && window.scrollY < 1) {
        var element = document.getElementsByClassName("landingPage_heading");
        if (element && element.length > 0) {
          for (let index = 0; index < element.length; index++) {
            element[index].classList.add("myStyles");
          }
        }
      }
    });
  }, [window.scrollY]);

  return (
    <>
      {open && <SubscriptionPopup open={open} setOpen={setOpen} />}
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
            <p className="myStylep ">
              {t("Join our Online Courses community and reach your goal")}
            </p>
          </div>
          <div className="landingbuttondiv">
            <button
              className="landingpagetextonImgbutton"
              onClick={() => setOpen(true)}
            >
              {t("Early access to courses")}
            </button>

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
