import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/blog/BlogFooter";
import Dashboard from "../components/ContentDashboard/Dashboard";
import CreateACoursePopup from "../components/PopupForms/CreateACoursePopup";
const ContentDashboard = () => {
  const [footerState, setFooterState] = useState(true);
  const [openlogin, setOpenLogin] = React.useState(false);
  const [opensignup, setOpenSignup] = React.useState(false);
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] =
    React.useState(false);
  
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
        <Dashboard />

        {/* {!footerState && <Footer />} */}
      </div>
    </>
  );
};

export default ContentDashboard;
