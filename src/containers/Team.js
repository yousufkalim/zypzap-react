import React, { useState } from "react";
import "../components/Team/Team.css";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import TeamBg from "../components/Team/TeamBg";
import LinkedInAccount from "../components/Team/LinkedInAccount";
import Footer2 from "../components/StandbyPage/Footer2";
import Contactez from "../components/PopupForms/contactez";

const Team = () => {
  const [openContentRequest, setOpenContentRequest] = useState(false);

  React.useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };
  React.useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <Contactez
        openContentRequest={openContentRequest}
        setOpenContentRequest={setOpenContentRequest}
      />
      <UserLandingPageHeader />
      <TeamBg />
      <LinkedInAccount />
      <Footer2
        openContentRequest={openContentRequest}
        setOpenContentRequest={setOpenContentRequest}
      />
    </div>
  );
};

export default Team;
