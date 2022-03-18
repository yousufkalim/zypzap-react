import React, { useState } from "react";
import AboutLandingPageImg from "../../assets/img/AboutLandingPageImg.svg";

const PrivacyHome = () => {
  return (
    <div>
      <div className="landingpagecontainer">
        <div className="landingpageimgcontainer">
          <img src={AboutLandingPageImg} className="landingpageLeftimg" />
        </div>
        <div className="privacyH1">
          Politique de confidentialite et <br /> gestion des cookies
        </div>
      </div>
    </div>
  );
};

export default PrivacyHome;
