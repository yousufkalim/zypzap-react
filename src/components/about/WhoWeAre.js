// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import WhoWeAreimg from "../../assets/img/about1.png";
import VideoImg from "../../assets/img/videoimg.png";

export default function About() {
  return (
    <>
      <div className="whowearecontainer">
        <h1
          className="whowearecontainer_heading"
          style={{ textTransform: "uppercase", fontFamily: "Myriad Pro" }}
        >
          il etait une fois...
        </h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="whoweareimgdiv">
              <img src={WhoWeAreimg} className="whoweareimg" alt="img" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="whoweareText">
              <p className="whoweareP">
                ZYPZAP est une plateforme de création de contenus vidéo en
                ligne, spécialisée dans le Gaming. Il s’agit également de la
                première plateforme de création de contenu l’eLearning pour
                gamers ! Les outils de création et les fonctionnalités
                innovantes sont spécialement étudiés pour la conception de cours
                en ligne. Notre volonté est de garantir la pertinence et la
                qualité des cours mis en ligne.
              </p>
              <p className="whoweareP">
                La société a été fondée en 2021 et depuis lors, nous mettons un
                point d'honneur à respecter notre philosophie. Selon nous, la
                monétisation doit être transparente et diversifiée, et la
                création de contenu libre et accessible à tous.
              </p>
            </div>
          </Grid>
        </Grid>
        {/* <div className="videoImgDiv">
          <img src={VideoImg} className="videoimg" />
        </div> */}
      </div>
    </>
  );
}
