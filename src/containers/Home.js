// Init
import React from "react";
import Header from "../components/Header";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import Footer from "../components/blog/BlogFooter";
import Body from "../components/Body";

export default function Home() {
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
      <Footer />
    </div>
  );
}
