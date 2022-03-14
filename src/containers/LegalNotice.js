import React from "react";
import "../components/LegalNotice/LegalNotic.css";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import Legal from "../components/LegalNotice/Legal";
import LegalHeading from "../components/LegalNotice/LegalHeading";
import Footer2 from "../components/StandbyPage/Footer2";

const LegalNotice = () => {
  React.useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };
  React.useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <UserLandingPageHeader />
      <Legal />
      <LegalHeading />
      <Footer2 />
    </>
  );
};

export default LegalNotice;
