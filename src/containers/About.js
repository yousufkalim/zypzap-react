// Init
import React from "react";
import Header from "../components/Header";
import AboutLandingPage from "../components/about/AboutLandingPage";

export default function About() {
  return (
    <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Header />
      <AboutLandingPage />
    </div>
  );
}
