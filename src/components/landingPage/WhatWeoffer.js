// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import gamerImg from "../../assets/img/gamerimg.png";

export default function WhatWeOffer() {
  return (
    <>
      <div className="whatweoffercontainer">
        <div className="offerh1">
          <h1>What we offer</h1>
          <div className="offerdashline"></div>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="offerdivleft">
            <img src={gamerImg} alt="img" />
            <h1 className="offerheading">I am Gamer</h1>
            <p className="offerText">
              It is a long established fact that a reader will be distracted by
              the readable content of a page this is whe
            </p>
            <button className="whatweofferButton">
              Early Access to Courses
            </button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="offerdivright">b</div>
        </Grid>
      </Grid>
    </>
  );
}
