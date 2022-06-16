import React, { useState, useEffect } from "react";
import "../components/StandbyPage/index.css";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import Body from "../components/landingPage/Body";
import Preparing from "../components/StandbyPage/Preparing";
import WhatWeOffer from "../components/StandbyPage/WhatWeoffer";
import FollowUs from "../components/StandbyPage/FollowUs";
import JoinedUs from "../components/StandbyPage/JoinedUs";
import UserLandingPageBlog from "../components/UserLandingPage/UserLandingPageBlog";
import Footer2 from "../components/StandbyPage/Footer2";
import Contactez from "../components/PopupForms/contactez";

export default function StandbyPage() {
  const [openContentRequest, setOpenContentRequest] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };
  useEffect(() => {
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
      <div
        style={{
          backgroundColor: "#000",
          minHeight: "100vh",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <UserLandingPageHeader />
        <Body />
        <WhatWeOffer />
        <Preparing />
        <FollowUs />
        {/* <JoinedUs /> */}
        {/* <UserLandingPageBlog /> */}
        <Footer2
          openContentRequest={openContentRequest}
          setOpenContentRequest={setOpenContentRequest}
        />
      </div>
    </>
  );
}
