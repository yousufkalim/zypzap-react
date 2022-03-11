import React from "react";
import "../components/LegalNotice/LegalNotic.css";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import Legal from "../components/LegalNotice/Legal";
import LegalHeading from "../components/LegalNotice/LegalHeading";

const LegalNotice = () => {
  return (
    <>
      <UserLandingPageHeader />
      <Legal />
      <LegalHeading />
    </>
  );
};

export default LegalNotice;
