// Init
import React from "react";
import AboutLandingPageImg from "../../assets/img/aboutlandingpage02.png";
import WhoWeAre from "./WhoWeAre";

export default function About() {
  return (
    <>
      <div className="aboutcontainer">
        <div className="aboutimgcontainer">
          <img src={AboutLandingPageImg} className="aboutLeftimg" />
        </div>
        <div className="AbouttextonImg">
          <h1 className="AbouttextimgH1">Qui sommes-nous ?</h1>
        </div>
      </div>
      <WhoWeAre />
    </>
  );
}
