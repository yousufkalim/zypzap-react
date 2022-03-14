import React from "react";
import "../components/Team/Team.css";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import TeamBg from "../components/Team/TeamBg";
import LinkedInAcound from "../components/Team/LinkedInAcound";
import Footer2 from "../components/StandbyPage/Footer2";

const Team = () => {
  return (
    <div>
      <UserLandingPageHeader />
      <TeamBg />
      <LinkedInAcound />
      <Footer2 />
    </div>
  );
};

export default Team;
