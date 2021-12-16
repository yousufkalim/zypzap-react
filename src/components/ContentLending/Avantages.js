import React from "react";
import Grid from "@mui/material/Grid";
import Avant from "../../assets/icons/Avant.png";
import Carousel from "react-material-ui-carousel";
import { useTranslation } from "react-i18next";

const Avantages = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };
  const items = [
    {
      text: t("The first gaming online course creation platform  open to all"),
    },
    { text: t("Content Creators are free to cover any game") },
    {
      text: t(
        "The monetization for each content created is immediate and easy to understand"
      ),
    },
    {
      text: t(
        "Each user has the opportunity to acquire a real expert status within the community"
      ),
    },
    {
      text: t("The first gaming online course creation platform  open to all"),
    },
    { text: t("Content Creators are free to cover any game") },
    {
      text: t(
        "The monetization for each content created is immediate and easy to understand"
      ),
    },
    {
      text: t(
        "Each user has the opportunity to acquire a real expert status within the community"
      ),
    },
    {
      text: t("The first gaming online course creation platform  open to all"),
    },
    { text: t("Content Creators are free to cover any game") },
    {
      text: t(
        "The monetization for each content created is immediate and easy to understand"
      ),
    },
    {
      text: t(
        "Each user has the opportunity to acquire a real expert status within the community"
      ),
    },
  ];
  return (
    <>
      <div className="content_Avantages">
        <h2 className="Avantages_heading">{t("Advantages Passtotrip")}</h2>
        <div className="offerdashline"></div>
        <div className="Avantages_container">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <div className="content_pera">
                {items.map((e) => (
                  <p className="pera1">{e.text}</p>
                ))}
              </div>
            </Grid>
            <Grid item xs={6}>
              <Carousel
                autoPlay={false}
                //   navButtonsAlwaysVisible={true}
                animation={"fade"}
                activeIndicatorIconButtonProps={{
                  className: "activeIndicator",
                }}
                className="topcoursecarousal"
              >
                <div>
                  <img src={Avant} alt="" className="avant_img" />
                </div>

                <div>
                  <img src={Avant} alt="" className="avant_img" />
                </div>
                <div>
                  <img src={Avant} alt="" className="avant_img" />
                </div>
                <div>
                  <img src={Avant} alt="" className="avant_img" />
                </div>
              </Carousel>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="avantbutton">
        <button className="AvantBTN" onClick={() => scrollToTop()}>
          {t("Become Content Creator")}
        </button>
      </div>
    </>
  );
};

export default Avantages;
