import React from "react";

import AboutLandingPageImg from "../../assets/img/aboutlandingpage.png";
import UserLandingPageAdvantages from "../UserLandingPage/UserLandingPageAdvantages";
import UserLandingPageCommunity from "../UserLandingPage/UserLandingPageCommunity";
import UserLandingPageTrending from "../UserLandingPage/UserLandingPageTrending";
import UserLandingPageBlog from "../UserLandingPage/UserLandingPageBlog";
import Aboutimg from "../../assets/img/kk.png";

const UserLandingPageBody = () => {
  return (
    <>
      <div className="user-landingpage-container">
        <div className="user-landing-page-img-container">
          <img src={AboutLandingPageImg} className="aboutLeftimg" />
          <img src={Aboutimg} className="user-landing-page-right-img" />
        </div>
        <div className="user-landing-page-text-on-img">
          <h1 className="UserLandingPageAboutTextImgH1">
            Welcome to the Gamer's Learning 3.0{" "}
          </h1>
          <p className="user-landing-page-text-on-imgP">
            Join our Online Courses community and become a pro game
          </p>
          <form class="flex-form">
            <input type="email" placeholder="Email address" />
            <input type="submit" value="Get Early Access" />
          </form>
        </div>
      </div>
      <UserLandingPageAdvantages />
      <UserLandingPageCommunity />
      <UserLandingPageTrending />
      <UserLandingPageBlog />
    </>
  );
};

export default UserLandingPageBody;
