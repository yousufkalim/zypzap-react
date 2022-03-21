import React, { useState } from "react";
import "../components/PrivacyPolicy/PrivacyPolicy.css";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import PrivacyHome from "../components/PrivacyPolicy/PrivacyHome";
import Introduction from "../components/PrivacyPolicy/Introduction";
import FollowingData from "../components/PrivacyPolicy/FollowingData";
import ProcessingData from "../components/PrivacyPolicy/ProcessingData";
import Partage from "../components/PrivacyPolicy/Partage";
import Rectification from "../components/PrivacyPolicy/Rectification";
import Footer2 from "../components/StandbyPage/Footer2";
import Contactez from "../components/PopupForms/contactez";

const PrivacyPolicy = () => {
  const [openContentRequest, setOpenContentRequest] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };
  React.useEffect(() => {
    // scroll top
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Contactez
        openContentRequest={openContentRequest}
        setOpenContentRequest={setOpenContentRequest}
      />
      <UserLandingPageHeader />
      <PrivacyHome />
      <Introduction />
      <FollowingData />
      <ProcessingData />
      <Partage />
      <Rectification />
      <Footer2
        openContentRequest={openContentRequest}
        setOpenContentRequest={setOpenContentRequest}
      />
      {/* <ProcessingData title="3. Conservation" /> */}
    </>
  );
};

export default PrivacyPolicy;
