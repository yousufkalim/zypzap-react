import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ContentLendingPage from "../components/content/ContentLandingPage";
import WhyTechWith from "../components/content/WhyTechWith";
import HappyInstructor from "../components/content/HappyInstructor";
import HowToTeach from "../components/content/HowToTeach";
import Footer from "../components/blog/BlogFooter";
import { Store, UpdateStore } from "../StoreContext";
import api from "../api";
const ContentHome = () => {
  const updateStore = UpdateStore();
  const { user, creator } = Store();

  const [openlogin, setOpenLogin] = React.useState(false);
  const [opensignup, setOpenSignup] = React.useState(false);
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] = useState(false);
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
        <Header
          setOpenLogin={setOpenLogin}
          setOpenSignup={setOpenSignup}
          openlogin={openlogin}
          opensignup={opensignup}
          openBecomeCreatorPopup={openBecomeCreatorPopup}
          setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
          creator={creator}
        />
        <ContentLendingPage
          openBecomeCreatorPopup={openBecomeCreatorPopup}
          setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
          creator={creator}
        />
        <WhyTechWith creator={creator} />
        <HappyInstructor creator={creator} />
        <HowToTeach creator={creator} />
        <Footer creator={creator} />
      </div>
    </>
  );
};
export default ContentHome;
