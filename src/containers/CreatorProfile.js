import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CreatorProfileHome from "../components/CreatorProfile/CreatorProfileHome";
import Footer from "../components/blog/BlogFooter";
import { useParams } from "react-router-dom";
import api from "../api";
const CreatorProfile = () => {
  const { id } = useParams();
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
      <CreatorProfileHome id={id} />
      <Footer overView={overView} />
    </>
  );
};

export default CreatorProfile;
