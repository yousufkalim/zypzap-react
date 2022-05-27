import React, { useState, useEffect } from "react";
import UserProfile from "../components/UserProfile/UserProfile";
import MyProfile from "../components/UserProfile/MyProfile";
import Header from "../components/Header";
import Footer from "../components/blog/BlogFooter";
import { Store, UpdateStore } from "../StoreContext";

const UserProfilePage = () => {
  const updateStore = UpdateStore();
  const { user, creator } = Store();
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] = useState(false);
  useEffect(() => {}, [user]);
  return (
    <>
      <Header
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
      />
      <UserProfile user={user} creator={creator} />
      <MyProfile user={user} />
      <Footer />
    </>
  );
};

export default UserProfilePage;
