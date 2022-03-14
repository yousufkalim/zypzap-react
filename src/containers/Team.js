import React from "react";
import "../components/Team/Team.css";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import TeamBg from "../components/Team/TeamBg";
import LinkedInAccount from "../components/Team/LinkedInAccount";
import Footer2 from "../components/StandbyPage/Footer2";

const Team = () => {
  return (
    <div>
      <UserLandingPageHeader />
      <TeamBg />
      <LinkedInAccount />
      <Footer2 />
    </div>
  );
};

export default Team;
