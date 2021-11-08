// Init
import React, { useEffect } from "react";
import Header from "../components/Header";
import AboutLandingPage from "../components/about/AboutLandingPage";
import UserReview from "../components/about/UsersReview";
import GetStarted from "../components/about/GetStarted";
import Footer from "../components/blog/BlogFooter";

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };
  useEffect(() => {
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
      <Header />
      <AboutLandingPage />
      <UserReview />
      <GetStarted />
      <Footer />
    </div>
  );
}
