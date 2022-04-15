import React, { useState } from "react";
import Header from "../components/Header";
import SettingCreatorProfileHomePage from "../components/SettingCreatorProfile/SettingCreatorProfileHomePage";
import SettingPersonalInformation from "../components/SettingCreatorProfile/SettingPersonalInformation";
import Footer from "../components/blog/BlogFooter";

const SettingCreatorProfile = () => {
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] = useState(false);
  return (
    <div>
      <Header
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
      />
      <SettingCreatorProfileHomePage />
      <SettingPersonalInformation />
      <Footer />
    </div>
  );
};

export default SettingCreatorProfile;
