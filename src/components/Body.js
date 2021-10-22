// Init
import React from "react";
import Bodyimg from "../assets/img/body.png";
import BodyBlurimg from "../assets/img/bodyblur.png";
import TopCourses from "./TopCourses";
import LatestCourses from "./LatestCourses";

export default function Body() {
  return (
    <>
      <div className="Bodycontainer">
        <img src={Bodyimg} className="bodyImage" />
        <img src={BodyBlurimg} className="blurImg" />
        <div className="textonImg">
          <h1>
            We help you becoming
            <br /> a pro player
          </h1>
          <p>For players who want more</p>
          <button>Sign Up For Free</button>
        </div>

        <TopCourses />
        <LatestCourses />
      </div>
    </>
  );
}
