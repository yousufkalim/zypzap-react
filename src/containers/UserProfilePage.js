import React from "react";
import UserProfile from "../components/UserProfile/UserProfile";
import MyProfile from "../components/UserProfile/MyProfile";
import Header from "../components/Header";
import Footer from "../components/blog/BlogFooter";
import { Store, UpdateStore } from "../StoreContext";

const UserProfilePage = () => {
  const updateStore = UpdateStore();
  const { user } = Store();
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
      <UserProfile user={user} />
      <MyProfile user={user} />
      <Footer />
    </>
  );
};

export default UserProfilePage;
