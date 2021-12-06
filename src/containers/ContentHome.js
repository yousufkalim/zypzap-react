import React, { useState } from "react";
import Header from "../components/Header";
import ContentLendingPage from "../components/content/ContentLandingPage";
import WhyTechWith from "../components/content/WhyTechWith";
import HappyInstructor from "../components/content/HappyInstructor";
import HowToTeach from "../components/content/HowToTeach";
import Footer from "../components/blog/BlogFooter";
const ContentHome = () => {
  const [openlogin, setOpenLogin] = React.useState(false);
  const [opensignup, setOpenSignup] = React.useState(false);
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
        <Header
          setOpenLogin={setOpenLogin}
          setOpenSignup={setOpenSignup}
          openlogin={openlogin}
          opensignup={opensignup}
        />
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
