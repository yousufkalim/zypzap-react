// Init
import React from "react";
import Header from "../components/Header";
import Body from "../components/landingPage/Body";
import WhatWeOffer from "../components/landingPage/WhatWeoffer";
import Footer from "../components/blog/BlogFooter";

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Header />
      <Body />
      <WhatWeOffer />
    </div>
  );
}
