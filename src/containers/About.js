// Init
import React, { useEffect } from "react";
// import Header from "../components/Header";
// import UserReview from "../components/about/UsersReview";
// import GetStarted from "../components/about/GetStarted";
// import AboutLandingPage from "../components/about/AboutLandingPage";
// import Footer from "../components/blog/BlogFooter";
import "../components/About2/About2.css";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import About2 from "../components/About2/About2";
import OurMissions from "../components/About2/OurMissions";
import FollowUs from "../components/StandbyPage/FollowUs";
import JoinedUs from "../components/StandbyPage/JoinedUs";
import Footer2 from "../components/StandbyPage/Footer2";

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
        backgroundColor: "black",
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
      {/* <AboutLandingPage /> */}
      <About2 />
      <OurMissions />
      <FollowUs />
      <JoinedUs />
      {/* <UserReview /> */}
      {/* <GetStarted /> */}
      {/* <Footer /> */}
      <Footer2 />
    </div>
  );
}
