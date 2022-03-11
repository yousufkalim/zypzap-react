import React from "react";
import AboutLandingPageImg from "../../assets/img/aboutlandingpage02.png";

const Legal = () => {
  return (
    <div>
      <div className="aboutcontainer">
        <div className="aboutimgcontainer">
          <img src={AboutLandingPageImg} className="aboutLeftimg" />
        </div>
        <div className="AbouttextonImg">
          <h1 className="AbouttextimgH1">Mentions legales</h1>
        </div>
      </div>
    </div>
  );
};

export default Legal;
