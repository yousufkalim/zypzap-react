import React, { useState } from "react";
import UserProfile from "../components/UserProfile/UserProfile";
import MyProfile from "../components/UserProfile/MyProfile";
import Header from "../components/Header";
import Footer from "../components/blog/BlogFooter";
import { Store, UpdateStore } from "../StoreContext";

const UserProfilePage = () => {
  const updateStore = UpdateStore();
  const { user } = Store();
  console.log("23456", user);
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] = useState(false);
  return (
    <>
      <Header
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
      />
      <UserProfile user={user} />
      <MyProfile user={user} />
      <Footer />
    </>
  );
};

export default UserProfilePage;
