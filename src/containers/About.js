// Init
import React, { useEffect } from "react";
// import Header from "../components/Header";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import AboutLandingPage from "../components/about/AboutLandingPage";
import UserReview from "../components/about/UsersReview";
import GetStarted from "../components/about/GetStarted";
import Footer from "../components/blog/BlogFooter";

export default function About() {
  const [openlogin, setOpenLogin] = React.useState(false);
  const [opensignup, setOpenSignup] = React.useState(false);
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] =
    React.useState(false);
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
      <UserLandingPageHeader />
      {/* <Header
        setOpenLogin={setOpenLogin}
        setOpenSignup={setOpenSignup}
        openlogin={openlogin}
        opensignup={opensignup}
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
      /> */}
      <AboutLandingPage />
      <UserReview />
      <GetStarted />
      <Footer />
    </div>
  );
}
