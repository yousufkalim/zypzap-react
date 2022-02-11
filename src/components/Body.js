// Init
import React, { useState, useEffect } from "react";
import Bodyimg from "../assets/img/Bodyimg.svg";
import BodyBlurimg from "../assets/img/bodyblur.png";
import TopCourses from "./TopCourses";
import LatestCourses from "./LatestCourses";
import TopRatedContent from "./TopRatedContent";
import Request from "./Request";
import RankingList from "./RankingList";
import Blog from "./Blog";

export default function Body({ setOpenSignup }) {
  return (
    <>
      <div className="Bodycontainer">
        <img
          src={Bodyimg}
          alt="img"
          className="bodyImage"
          style={{ position: "relative" }}
        />

        <div className="textonImg">
          <h1 className="textimgH1">
            We help you becoming
            <br /> a pro player
          </h1>
          <p className="textonImgP">For players who want more</p>
          <button
            className="textonImgbutton"
            onClick={() => setOpenSignup(true)}
          >
            Sign Up For Free
          </button>
        </div>
        <TopCourses />
        <LatestCourses />
        <TopRatedContent />
        <Request />
        <RankingList />
        <Blog />
      </div>
    </>
  );
}
