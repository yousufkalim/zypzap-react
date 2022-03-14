import React from "react";
import "../components/Team/Team.css";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import TeamBg from "../components/Team/TeamBg";
import LinkedInAccount from "../components/Team/LinkedInAccount";
import Footer2 from "../components/StandbyPage/Footer2";

const Team = () => {
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
      <UserLandingPageHeader />
      <TeamBg />
      <LinkedInAccount />
      <Footer2 />
    </div>
  );
};

export default Team;
