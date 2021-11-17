import React from "react";
import Header from "../components/Header";
import ContentLendingPage from "../components/content/ContentLandingPage";
import WhyTechWith from "../components/content/WhyTechWith";
import HappyInstructor from "../components/content/HappyInstructor";
import HowToTeach from "../components/content/HowToTeach";
import Footer from "../components/blog/BlogFooter";
const ContentHome = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#0E0F1E",
          minHeight: "100vh",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <Header />
        <ContentLendingPage />
        <WhyTechWith />
        <HappyInstructor />
        <HowToTeach />
        <Footer />
      </div>
    </>
  );
};
export default ContentHome;
