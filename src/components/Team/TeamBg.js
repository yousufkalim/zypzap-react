import React from "react";
import AboutLandingPageImg from "../../assets/img/aboutlandingpage02.png";

const TeamBg = () => {
  return (
    <>
      <div className="aboutcontainer">
        <div className="aboutimgcontainer">
          <img src={AboutLandingPageImg} className="aboutLeftimg" />
        </div>
        <div className="AbouttextonImg">
          <h1 className="AbouttextimgH1">L'Equipe</h1>
        </div>
      </div>
    </>
  );
};

export default TeamBg;
