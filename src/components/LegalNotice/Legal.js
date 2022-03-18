import React from "react";
import AboutLandingPageImg from "../../assets/img/AboutLandingPageImg2.svg";

const Legal = () => {
  return (
    <div>
      <div className="aboutcontainer">
        <div className="aboutimgcontainer">
          <img src={AboutLandingPageImg} className="aboutLeftimg" />
        </div>
        <div className="AbouttextonImg">
          <h1 className="AbouttextimgH1">Mentions lÉgales</h1>
        </div>
      </div>
    </div>
  );
};

export default Legal;
