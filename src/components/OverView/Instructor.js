import React from "react";
import { NavLink, Link } from "react-router-dom";
import InstructorIcon from "../../assets/icons/InstructorIcon.svg";
// import overViewIcon1 from "../../assets/icons/overViewIcon1.svg";
import overViewIcon2 from "../../assets/icons/overViewIcon2.svg";
import overViewIcon3 from "../../assets/icons/overViewIcon3.svg";
import overViewIcon4 from "../../assets/icons/overViewIcon4.svg";
const Instructor = () => {
  return (
    <div>
      <div className="overView_description">
        <div className="overView-descripiton-centerDiv">
          {/* <div className="overView-description-content">
            <h3 className="overDescriptionH3">Description</h3>
            <p className="overDescriptionP">Welcome to Instructor</p>
          </div> */}
          <div className="Instructor">
            <div className="instructor-co1">
              <div className="instructor-image">
                <img src={InstructorIcon} alt="" className="instructorLogo" />
              </div>
              <div className="instructor-heading">
                <h2 className="instructorH2">Arslan Ash</h2>
                <p className="instructorP">Player of Tekken</p>
                <p className="instructor-lavel">
                  Level: <span className="instructor-span">Pro</span>
                </p>
                <p className="instructor-student">500000+ Students</p>
              </div>
              <Link className="Instructor-followBtn" to="#">
                Follow
              </Link>
            </div>
            <div className="instructor-co">
              <div className="instructor-about-Heading">
                <h2 className="instructor-aboutH2">About the Instructor</h2>
                <p className="instructor-aboutP">Taken Player</p>
              </div>
              <div className="instructorProfile-heading">
                <p className="instructorProfile-Name">Hi, I am Arslan</p>
                <p className="instructorProfile-P">
                  I am a Professional Taken player 2 times world champion last
                  year i was choosen to be red bull athelete too i am here to
                  help you win the game and have a fun.
                </p>
              </div>
              <div className="overViewTags">
                {/* <li className="overViewLi">
                  <img src={overViewIcon1} alt="" className="overViewIcon-1" />
                  <p className="overViewIconP">10 Weeks</p>
                </li> */}
                <li className="overViewLi">
                  <img src={overViewIcon2} alt="" className="overViewIcon-1" />
                  <p className="overViewIconP">Pro Gamer</p>
                </li>
                <li className="overViewLi">
                  <img src={overViewIcon3} alt="" className="overViewIcon" />
                  <p className="overViewIconP">8 Lessons</p>
                </li>
                <li className="overViewLi">
                  <img src={overViewIcon4} alt="" className="overViewIcon" />
                  <p className="overViewIconP">2287 Students</p>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
