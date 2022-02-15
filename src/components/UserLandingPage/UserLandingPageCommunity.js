import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import communityImgone from "../../assets/icons/communityImgone.svg";
import communityImgtwo from "../../assets/icons/communityImgtwo.png";
import communityImgthree from "../../assets/icons/communityImgthree.png";
import { useTranslation } from "react-i18next";
const UserLandingPageCommunity = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  return (
    <>
      <Box className="box-user">
        <Box
          sx={{
            padding: "18px 0 18px 0",
          }}
        >
          <Typography align="center" variant="h5">
            {t("Be part of our community")}
          </Typography>
          <div className="offerdashline"> </div>
        </Box>
      </Box>
      <div className="communt_container">
        <Grid className="community" container spacing={2}>
          <Grid item xs={12} md={4}>
            <div className="community-block">
              <img src={communityImgone} />
              <h5
                className={`${
                  language == "en"
                    ? "community-content-header"
                    : "frcommunity-content-header"
                }`}
              >
                {t("Rejoignez la ")}
                <br />
                {t("communaute")}
              </h5>
              {/* <span
              className={`${
                language == "en"
                  ? "community-content-pargraph"
                  : "frcommunity-content-pargraph"
              }`}
            >
              {t(
                "Evaluate the courses for continous improvement of the creators"
              )}
            </span> */}
            </div>
          </Grid>
          <hr className="border_line" />
          <Grid item xs={12} md={4}>
            <div className="community-block">
              <img
                src={communityImgtwo}
                style={{ height: "70px", margin: "auto", textAlgn: "center" }}
              />
              <h5
                className={`${
                  language == "en"
                    ? "community-content-header"
                    : "frcommunity-content-header"
                }`}
              >
                {t("Participez au developpement")}
                <br />
                {t("de la communaute")}
              </h5>
              {/* <span
              className={`${
                language == "en"
                  ? "community-content-pargraph"
                  : "frcommunity-content-pargraph"
              }`}
            >
              {t("Participates in the growth of the community and its economy")}
            </span> */}
            </div>
          </Grid>
          <hr className="border_line" />{" "}
          <Grid item xs={12} md={4}>
            <div className="community-block community-block-border">
              <img
                src={communityImgthree}
                style={{ height: "70px", margin: "auto", textAlgn: "center" }}
              />
              <h5
                className={`${
                  language == "en"
                    ? "community-content-header"
                    : "frcommunity-content-header"
                }`}
              >
                {t("Beneficiez de cours ")}
                <br />
                {t("sur mesure")}
              </h5>
              {/* <span
              className={`${
                language == "en"
                  ? "community-content-pargraph"
                  : "frcommunity-content-pargraph"
              }`}
            >
              {t("Inform content creators of hot topics to be addressed")}
            </span> */}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default UserLandingPageCommunity;
