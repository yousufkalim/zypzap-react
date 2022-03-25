import React, { useState } from "react";
import "../../components/UserProfile/UserProfile.css";
import UserHomeProfleImg from "../../assets/img/UserHomeProfleImg.svg";
import CreatorPrifileImg from "../../assets/img/CreatorPrifileImg.svg";
import PropfileInformation from "../PopupForms/PropfileInformation";
import ProGamer from "../../assets/img/ProGamer.svg";
import ViewCourse from "../../assets/img/ViewCourse.svg";
import ViewStudent from "../../assets/img/ViewStudent.svg";
import ViewRank from "../../assets/img/ViewRank.svg";

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
              src={UserHomeProfleImg}
              alt=""
              className="profileBackgroun-Image"
            />
          </div>

          <div className="Profile-DP">
            <img
              src={user?.profile_photo ? user.profile_photo : CreatorPrifileImg}
              alt=""
              className="DP-img"
            />
          </div>
          {/* profile Div */}
          <div className="profile-container">
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
              <div className="creatorProfileDiv">
                <div className="creatorLogos">
                  <img className="CreatorProfileImg" src={ProGamer} alt="" />
                </div>
                <div className="creatorProfileContent">
                  <p className="creatorProfileP">Pro Gamer</p>
                </div>
                <div className="creatorLogos">
                  <img className="CreatorProfileImg" src={ViewCourse} alt="" />
                </div>
                <div className="creatorProfileContent">
                  <p className="creatorProfileP">8 Courses</p>
                </div>
                <div className="creatorLogos">
                  <img className="CreatorProfileImg" src={ViewStudent} alt="" />
                </div>
                <div className="creatorProfileContent">
                  <p className="creatorProfileP">2287 Students</p>
                </div>
                <div className="creatorLogos">
                  <img className="CreatorProfileImg" src={ViewRank} alt="" />
                </div>
                <div className="creatorProfileContent">
                  <p className="creatorProfileP">2nd Rank</p>
                </div>
              </div>
            </div>
            {/* <div className="following-content">
              <p className="followingP">
                Following: <span className="follo-span">10</span>
              </p>
            </div> */}

            <div className="profileEditButton">
              <a to="">
                <button className="editProfiel-btn2" onClick={handleClickOpen}>
                  Follow
                </button>
              </a>
            </div>
          </div>
          {/* profile Div */}
        </div>
      </div>
    </>
  );
};

export default CreatorProfileHome;
