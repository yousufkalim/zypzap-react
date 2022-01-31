import React, { useState, useEffect } from "react";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import LandingPartnerBody from "../components/LandingPartner/LandingPartnerBody";
import Footer from "../components/blog/BlogFooter";
const LandingPartner = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      // behavior: "smooth",
    });
  };
  useEffect(() => {
    // scroll top
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          minHeight: "100vh",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <UserLandingPageHeader />
        <LandingPartnerBody />
        <Footer />
      </div>
    </>
  );
};

export default LandingPartner;
