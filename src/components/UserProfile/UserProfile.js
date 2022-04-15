import React, { useState } from "react";
import "../../components/UserProfile/UserProfile.css";
import UserHomeProfleImg from "../../assets/img/UserHomeProfleImg.svg";
import ProfileDp from "../../assets/img/ProfileDp.jpg";
import PropfileInformation from "../PopupForms/PropfileInformation";
import BecomeCreatorpopup from "../PopupForms/BecomeCreatorpopup";
import { Store, UpdateStore } from "../../StoreContext";
const UserProfile = (props) => {
  const { user } = props;
  const [openProfile, setOpenProfile] = useState(false);
  const [open, setOpen] = useState(false);

  const updateStore = UpdateStore();
  const { creator } = Store;

  const handleClickOpen = () => {
    if (user?.role == "Creator") {
      setOpen(true);
    } else {
      setOpenProfile(true);
    }
  };

  return (
    <>
      <PropfileInformation
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        user={user}
      />
      <BecomeCreatorpopup open={open} setOpen={setOpen} user={user} />
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
              src={user?.profile_photo ? user.profile_photo : ProfileDp}
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
              <p className="pofileP">
                {user ? user.email[0] : "johnsmith1@gmail.com"}
              </p>
              <p className="prfile-lavelP">
                Level:{" "}
                <span className="level-span">
                  {creator?.gameLevel ? creator.gameLevel : "Semi-Pro"}
                </span>
              </p>
            </div>
            <div className="following-content">
              <p className="followingP">
                Following:{" "}
                <span className="follo-span">
                  {creator?.followers ? creator.followers.length : "10"}
                </span>
              </p>
            </div>

            <div className="profileEditButton">
              <a to="">
                <button className="editProfiel-btn" onClick={handleClickOpen}>
                  Edit Profile
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

export default UserProfile;
