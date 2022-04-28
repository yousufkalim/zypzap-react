import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/blog/BlogFooter";
import Dashboard from "../components/ContentDashboard/Dashboard";
import { Store, UpdateStore } from "../StoreContext";
// import CreateACoursePopup from "../components/PopupForms/CreateACoursePopup";
const ContentDashboard = () => {
  const { creator } = Store();
  const [footerState, setFooterState] = useState(true);
  const [openlogin, setOpenLogin] = useState(false);

  const [opensignup, setOpenSignup] = useState(false);
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundColor: "#0e0f1e",
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
        />
        <Dashboard id={creator?._id} />

        {/* {!footerState && <Footer />} */}
      </div>
    </>
  );
};

export default ContentDashboard;
