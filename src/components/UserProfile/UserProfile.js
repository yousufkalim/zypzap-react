import React from "react";
import "../../components/UserProfile/UserProfile.css";
import UserHomeProfleImg from "../../assets/img/UserHomeProfleImg.svg";
import ProfileDp from "../../assets/img/ProfileDp.jpg";

const UserProfile = () => {
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
            <img src={ProfileDp} alt="" className="DP-img" />
          </div>
          {/* profile Div */}
          <div className="profile-container">
            <div className="prfile-name-heading">
              <h1 className="profile-name">Atif Khan</h1>
              <p className="pofileP">johnsmith1@gmail.com</p>
              <p className="prfile-lavelP">
                Level: <span className="level-span">Semi-Pro</span>
              </p>
            </div>
            <div className="following-content">
              <p className="followingP">
                Following: <span className="follo-span">10</span>
              </p>
            </div>
            <div className="profileEditButton">
              <button className="editProfiel-btn">Edit Profile</button>
            </div>
          </div>
          {/* profile Div */}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
