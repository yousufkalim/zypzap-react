// Init
import React, { useState, useEffect } from "react";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import Body from "../components/landingPage/Body";
import WhatWeOffer from "../components/landingPage/WhatWeoffer";
import UserLandingPageBlog from "../components/UserLandingPage/UserLandingPageBlog";
import Footer from "../components/blog/BlogFooter";

export default function LandingPage() {
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
    <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <UserLandingPageHeader />
      <Body />
      <WhatWeOffer />
      <UserLandingPageBlog />
      <Footer />
    </div>
  );
}
