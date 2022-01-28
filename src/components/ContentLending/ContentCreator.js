import React from "react";
import Grid from "@mui/material/Grid";
import Groups from "../../assets/icons/Groups.svg";
import Vector from "../../assets/icons/Vector.svg";
import Group from "../../assets/icons/Group.svg";
import Vectors from "../../assets/icons/Vectors.svg";
import Airbnb from "../../assets/icons/airbnb.png";
import Ola from "../../assets/icons/ola.png";
import Walmart from "../../assets/icons/Walmart.png";
import Oye from "../../assets/icons/oye.png";
import Amazon from "../../assets/icons/amazone.png";
import Fedex from "../../assets/icons/Fedex.png";
import Micrsoft from "../../assets/icons/Micrsoft.png";
import Google from "../../assets/icons/Google.png";
import { useTranslation } from "react-i18next";

const ContentCreator = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100 && window.scrollY < 400) {
        var element = document.getElementsByClassName("content_creator");
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
      <div className="content_creator">
        <h2 className="creator_heading">
          {t("Content Creators in our Community")}
        </h2>

        <div className="offerdashline"></div>
        <div className="creator_container">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} sm={6}>
              <div className="creator_contain">
                <div className="creator_img">
                  <img src={Groups} alt="Groups" className="creator_img_icon" />
                </div>
                <p className="creator_P">
                  {t("Serve The Community By Creating Relevont Video Content")}
                </p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div className="creator_contain">
                <div className="creator_img">
                  <img
                    src={Vectors}
                    alt="Vectors"
                    className="creator_img_icon"
                  />
                </div>
                <p className="creator_P">
                  {t("Be A Pillor In The Progress Of Gamers At Their Own Pace")}
                </p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div className="creator_contain">
                <div className="creator_img">
                  <img src={Vector} alt="Group" className="creator_img_icon" />
                </div>
                <p className="creator_P">
                  {t("Listening To The Community About Their Needs")}
                </p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div className="creator_contain">
                <div className="creator_img">
                  <img src={Group} alt="Vector" className="creator_img_icon" />
                </div>
                <p className="creator_P">
                  {t("Participate In The Moderation And Validtion Of Content")}
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* /// */}
      </div>
      <div className="nosDiv">
        <div className="nos-container">
          <h1 className="nosH1">NOS PARTENAIRES</h1>
        </div>
      </div>
      {/* /// */}
      <div className="partner_container" style={{ display: "none" }}>
        <div className=" our_partners" style={{ color: "#fff" }}>
          <div className="heading_container">
            <h1 className=" partners_hading">{t("Our Partners")}</h1>
            <p className=" partners_pera">
              {t("Become our partners biggest ambassador")}
            </p>
          </div>
          {/* 1 */}
          <div className="social_icon_one">
            <div className="one_container">
              <img src={Airbnb} alt="" className="one_icon" />
              <img src={Google} alt="" className="one_icon" />
            </div>
          </div>
          {/* 2 */}
          <div className="social_icon_one">
            <div className="one_container">
              <img src={Amazon} alt="" className="one_icon" />
              <img src={Ola} alt="" className="one_icon" />
            </div>
          </div>
          {/* 3 */}
          <div className="social_icon_one">
            <div className="one_container">
              <img src={Fedex} alt="" className="one_icon" />
              <img src={Walmart} alt="" className="one_icon" />
            </div>
          </div>
          {/* 4 */}
          <div className="social_icon_one">
            <div className="one_container">
              <img src={Micrsoft} alt="" className="one_icon" />
              <img src={Oye} alt="" className="one_icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCreator;
