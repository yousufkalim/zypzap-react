import React from "react";
import AboutLandingPageImg from "../../assets/img/AboutLandingPageImg2.svg";
import WhoWeAre from "../../components/about/WhoWeAre";

const About2 = () => {
  return (
    <div>
      <div className="aboutcontainer">
        <div className="aboutimgcontainer">
          <img src={AboutLandingPageImg} className="aboutLeftimg" />
        </div>
        <div className="AbouttextonImg">
          <h1 className="AbouttextimgH1">A propos de nous</h1>
        </div>
      </div>
      <WhoWeAre />
    </div>
  );
};

export default About2;
