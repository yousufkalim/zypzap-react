import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import communityImgone from "../../assets/img/communityImgtwo.png";
import communityImgtwo from "../../assets/img/communityImgtwoo.png";
import communityImgthree from "../../assets/img/communityImgthree.png";
import { useTranslation } from "react-i18next";
const UserLandingPageCommunity = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  return (
    <>
      <Box className="box-user">
        <Box
          sx={{
            padding: "20px 0 20px 0",
          }}
        >
          <Typography align="center" variant="h5">
            {t("Be part of our community")}
          </Typography>
          <div className="offerdashline"> </div>
        </Box>
      </Box>
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
              {t("Evaluation of courses")}
            </h5>
            <span
              className={`${
                language == "en"
                  ? "community-content-pargraph"
                  : "frcommunity-content-pargraph"
              }`}
            >
              {t(
                "Evaluate the courses for continous improvement of the creators"
              )}
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="community-block">
            <img src={communityImgtwo} />
            <h5
              className={`${
                language == "en"
                  ? "community-content-header"
                  : "frcommunity-content-header"
              }`}
            >
              {t("Community Development")}
            </h5>
            <span
              className={`${
                language == "en"
                  ? "community-content-pargraph"
                  : "frcommunity-content-pargraph"
              }`}
            >
              {t("Participates in the growth of the community and its economy")}
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="community-block community-block-border">
            <img src={communityImgthree} />
            <h5
              className={`${
                language == "en"
                  ? "community-content-header"
                  : "frcommunity-content-header"
              }`}
            >
              {t("Collaboration Between Users")}
            </h5>
            <span
              className={`${
                language == "en"
                  ? "community-content-pargraph"
                  : "frcommunity-content-pargraph"
              }`}
            >
              {t("Inform content creators of hot topics to be addressed")}
            </span>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default UserLandingPageCommunity;
