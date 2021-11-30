// Init
import React from "react";
import AboutLandingPageImg from "../../assets/img/aboutlandingpage.png";
import Aboutimg from "../../assets/img/about2.png";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <>
      <div className="landingpagecontainer">
        <div className="landingpageimgcontainer">
          <img src={AboutLandingPageImg} className="landingpageLeftimg" />
          <img src={Aboutimg} className="landingpageRightimg" />
        </div>

        <div className="landingpagetextonImg">
          <h1 className="landingpagetextimgH1">
            Welcome to the
            <br className="landingBr" /> Gamer's eLearning 3.0
          </h1>
          <p className="landingpagetextonImgP">
            Join our Online Courses community and reach your goal
          </p>
          <div className="landingbuttondiv">
            <button className="landingpagetextonImgbutton">
              Early access to courses
            </button>
            <Link
              to="/contentcreator"
              style={{ color: "white", textDecoration: "none" }}
            >
              <button className="landingpagetextonImgbutton">
                Become content creator
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
