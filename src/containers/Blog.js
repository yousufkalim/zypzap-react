// Init
import React, { useEffect } from "react";
// import Header from "../components/Header";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import BlogBody from "../components/blog/BlogBody";

export default function Blog() {
  const [openlogin, setOpenLogin] = React.useState(false);
  const [opensignup, setOpenSignup] = React.useState(false);
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
      <UserLandingPageHeader />
      {/* <Header
        setOpenLogin={setOpenLogin}
        setOpenSignup={setOpenSignup}
        openlogin={openlogin}
        opensignup={opensignup}
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
      /> */}
      <BlogBody />
    </div>
  );
}
