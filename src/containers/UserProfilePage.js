import React from "react";
import UserProfile from "../components/UserProfile/UserProfile";
import MyProfile from "../components/UserProfile/MyProfile";
import Header from "../components/Header";
import Footer from "../components/blog/BlogFooter";

const UserProfilePage = () => {
  return (
    <>
      <Header
      // openlogin={openlogin}
      // setOpenLogin={setOpenLogin}
      // opensignup={opensignup}
      // setOpenSignup={setOpenSignup}
      // openBecomeCreatorPopup={openBecomeCreatorPopup}
      // setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
      />
      <UserProfile />
      <MyProfile />
      <Footer />
    </>
  );
};

export default UserProfilePage;
