import React, { useState } from "react";
import "../components/LegalNotice/LegalNotic.css";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import Legal from "../components/LegalNotice/Legal";
import LegalHeading from "../components/LegalNotice/LegalHeading";
import Footer2 from "../components/StandbyPage/Footer2";
import Contactez from "../components/PopupForms/contactez";

const LegalNotice = () => {
  const [openContentRequest, setOpenContentRequest] = useState(false);
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
      <Contactez
        openContentRequest={openContentRequest}
        setOpenContentRequest={setOpenContentRequest}
      />
      <UserLandingPageHeader />
      <Legal />
      <LegalHeading />
      <Footer2
        openContentRequest={openContentRequest}
        setOpenContentRequest={setOpenContentRequest}
      />
    </>
  );
};

export default LegalNotice;
