// Init
import React, { useState } from "react";
import Header from "../components/Header";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import Footer from "../components/blog/BlogFooter";
import Body from "../components/Body";
import { useLocation } from "react-router-dom";
import SetAuthToken from "../utils/SetAuthToken";
import Contactez from "../components/PopupForms/contactez";

export default function Home() {
  const [openContentRequest, setOpenContentRequest] = useState(false);
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("user");
  if (localStorage.getItem !== token && token !== null) {
    localStorage.setItem("token", token);
  }

  const [openlogin, setOpenLogin] = useState(false);
  const [opensignup, setOpenSignup] = useState(false);

  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] =
    React.useState(false);
  return (
    <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Contactez
        openContentRequest={openContentRequest}
        setOpenContentRequest={setOpenContentRequest}
      />
      {/* <UserLandingPageHeader /> */}
      <Header
        openlogin={openlogin}
        setOpenLogin={setOpenLogin}
        opensignup={opensignup}
        setOpenSignup={setOpenSignup}
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
      />
      <Body
        openlogin={openlogin}
        setOpenLogin={setOpenLogin}
        opensignup={opensignup}
        setOpenSignup={setOpenSignup}
      />
      <Footer
        openContentRequest={openContentRequest}
        setOpenContentRequest={setOpenContentRequest}
      />
    </div>
  );
}
