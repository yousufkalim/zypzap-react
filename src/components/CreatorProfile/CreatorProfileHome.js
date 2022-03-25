import React, { useState } from "react";
import "../../components/UserProfile/UserProfile.css";
import UserHomeProfleImg2 from "../../assets/img/UserHomeProfleImg2.svg";
import CreatorPrifileImg from "../../assets/img/CreatorPrifileImg.svg";
import PropfileInformation from "../PopupForms/PropfileInformation";
import ProGamer from "../../assets/img/ProGamer.svg";
import ViewCourse from "../../assets/img/ViewCourse.svg";
import ViewStudent from "../../assets/img/ViewStudent.svg";
import ViewRank from "../../assets/img/ViewRank.svg";

import Course1 from "../../assets/img/course1.png";
import { ReactComponent as Star1 } from "../../assets/icons/star2.svg";
const CreaterDatav = [
  {
    imgSrc: ProGamer,
    content: "Pro Gamer",
  },
  {
    imgSrc: ViewCourse,
    content: "8 Courses",
  },
  {
    imgSrc: ViewStudent,
    content: "2287 Students",
  },
  {
    imgSrc: ViewRank,
    content: "2nd Rank",
  },
];

const CreatorProfileHome = (props) => {
  const { user } = props;
  const [openProfile, setOpenProfile] = useState(false);
  const handleClickOpen = () => {
    setOpenProfile(true);
  };
  const handleClose = () => {
    setOpenProfile(false);
  };
  return (
    <>
      <div className="userProfileDiv">
        <div className="userProfile-centerDiv">
          <div className="profile-image">
            <img
              src={UserHomeProfleImg2}
              alt=""
              className="profileBackgroun-Image"
            />
          </div>

          <div className="Profile-DP2">
            <img
              src={user?.profile_photo ? user.profile_photo : CreatorPrifileImg}
              alt=""
              className="DP-img"
            />
          </div>
          {/* profile Div */}
          <div className="profile-container2">
            <div className="prfile-name-heading">
              <h1 className="profile-name">
                {user ? user.username : "Atif Khan"}
              </h1>

              <p className="pofileP">Taken Player</p>
              <p className="prfile-lavelP">
                Hi, I am Arslan
                <br />I am a Professional Taken player 2 times world champion
                last year i was choosen to be red bull athelete too i am here to
                help you win the game and have a fun.
              </p>
              <div className="profileEditButton">
                <a to="">
                  <button
                    className="editProfiel-btn2"
                    onClick={handleClickOpen}
                  >
                    Follow
                  </button>
                </a>
              </div>
              <div className="creatorProfileDiv">
                {CreaterDatav.map((CrntVal) => {
                  return (
                    <>
                      <div className="creatorLogos">
                        <img
                          className="CreatorProfileImg"
                          src={CrntVal.imgSrc}
                          alt=""
                        />
                      </div>
                      <div className="creatorProfileContent">
                        <p className="creatorProfileP">{CrntVal.content}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="creatorProfileCard">
        <h3 className="creatorProfileH3">Courses</h3>
        <div className="creatorProfileCart-centerDiv">
          <div className="creatorCard">
            <div
              className="cardGrid"
              style={{
                backgroundColor: " #202342",
                margin: "12px",
                borderRadius: "35px",
              }}
            >
              <img src={Course1} className="courseimg" alt="img" />
              <h5 className="latestcourseh5">PUBG GamePlay Course</h5>
              <p className="latestcoursep1">Ifaf ghori</p>
              <p className="latestcoursep1">
                {" "}
                5.0 &nbsp;
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star1
                    style={{
                      width: "15px",
                      height: "15px",
                      color: "red",
                      margintTop: "3px",
                      position: "relative",
                      top: "3px",
                      key: { item },
                    }}
                  />
                ))}
                &nbsp; (382,420)
              </p>
              <h6 className="latestcourseh6">44$</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorProfileHome;
