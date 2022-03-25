import React, { useState } from "react";
import Header from "../components/Header";
import CreatorProfileHome from "../components/CreatorProfile/CreatorProfileHome";
import Footer from "../components/blog/BlogFooter";

const CreatorProfile = () => {
  const [overView, setOverView] = useState(false);
  const [openlogin, setOpenLogin] = React.useState(false);
  const [opensignup, setOpenSignup] = React.useState(false);
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] =
    React.useState(false);
  return (
    <>
      <Header
        openlogin={openlogin}
        setOpenLogin={setOpenLogin}
        opensignup={opensignup}
        setOpenSignup={setOpenSignup}
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
      />
      <CreatorProfileHome />
      <Footer overView={overView} />
    </>
  );
};

export default CreatorProfile;
