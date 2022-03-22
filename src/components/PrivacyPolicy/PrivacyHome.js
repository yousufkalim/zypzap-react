import React, { useState } from "react";
import AboutLandingPageImg from "../../assets/img/AboutLandingPageImg.svg";
import StandbyBg from "../../assets/img/StandbyBg.svg";

const PrivacyHome = () => {
  return (
    <div>
      <div className="landingpagecontainer">
        <div className="landingpageimgcontainer">
          <img src={AboutLandingPageImg} className="landingpageLeftimg" />
          <img src={StandbyBg} className="landingpageLeftimg2" />
        </div>
        <div className="privacyH1">
          Politique de confidentialite et <br /> gestion des cookies
        </div>
      </div>
    </div>
  );
};

export default PrivacyHome;
