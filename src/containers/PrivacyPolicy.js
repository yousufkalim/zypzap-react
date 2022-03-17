import React from "react";
import "../components/PrivacyPolicy/PrivacyPolicy.css";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import PrivacyHome from "../components/PrivacyPolicy/PrivacyHome";
import Introduction from "../components/PrivacyPolicy/Introduction";
import FollowingData from "../components/PrivacyPolicy/FollowingData";
import ProcessingData from "../components/PrivacyPolicy/ProcessingData";
import Partage from "../components/PrivacyPolicy/Partage";
import Rectification from "../components/PrivacyPolicy/Rectification";

const PrivacyPolicy = () => {
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
      <UserLandingPageHeader />
      <PrivacyHome />
      <Introduction />
      <FollowingData />
      <ProcessingData />
      <Partage />
      <Rectification />
      {/* <ProcessingData title="3. Conservation" /> */}
    </>
  );
};

export default PrivacyPolicy;
