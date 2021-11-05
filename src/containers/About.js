// Init
import React from "react";
import Header from "../components/Header";
import AboutLandingPage from "../components/about/AboutLandingPage";
import UserReview from "../components/about/UsersReview";
import GetStarted from "../components/about/GetStarted";
import Footer from "../components/blog/BlogFooter";

export default function About() {
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
      <AboutLandingPage />
      <UserReview />
      <GetStarted />
      <Footer />
    </div>
  );
}
