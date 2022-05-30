import React, { useState } from "react";
import "../../components/UserProfile/UserProfile.css";
import UserHomeProfleImg from "../../assets/img/UserHomeProfleImg.svg";
import ProfileDp from "../../assets/img/ProfileDp.jpg";
import editIcon from "../../assets/editicon2.svg";
import PropfileInformation from "../PopupForms/PropfileInformation";
import RegisterSuccessfully from "../PopupForms/RegisterSuccessfully";
import BecomeCreatorpopup from "../PopupForms/BecomeCreatorpopup";
import { Store, UpdateStore } from "../../StoreContext";
import { useHistory } from "react-router-dom";
import api from "../../api";
const UserProfile = (props) => {
  const { user, creator } = props;
  const history = useHistory();
  const [openProfile, setOpenProfile] = useState(false);
  const [openCongratulation, setCongratulation] = useState(false);
  const [open, setOpen] = useState(false);

  const [cover_photo, setCoverImageURL] = useState("");


  const updateStore = UpdateStore();

  const handleClickOpen = () => {
    if (user?.role == "Creator") {
      setOpen(true);
    } else {
      setOpenProfile(true);
    }
  };
  console.log("createor profile", creator, user);
  const handleImageSelect = async (e) => {
    const formdata = new FormData();
    formdata.append(`files`, e.target.files[0]);
    let res = await api("post", "/uploadImage", formdata);
    setCoverImageURL(res.data.file[0].location);
  };
  const saveCoverPhoto = async () => {
    if (user?.role == "Creator") {
      let res = await api("post", `/creators/${user?._id}`, { cover_photo });
      if (res) {
        console.log("res.data for creator", res.data);
      }
    } else {
      let res = await api("put", `/users/addProfileInfo/${user?._id}`, {
        cover_photo
      });
      if (res) {
        console.log("res.data for user", res.data);
      }
    }
  };
  console.log("user", user);

  return (
    <>
      <RegisterSuccessfully
        open={openCongratulation}
        setOpen={setCongratulation}
        text="Your Profile Edit Successfully !"
      />

      <PropfileInformation
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        user={user}
        setCongratulation={setCongratulation}
      />

      <BecomeCreatorpopup open={open} setOpen={setOpen} user={user} />
      <div className="userProfileDiv">
        <div className="userProfile-centerDiv">
          <div className="profile-image">
            {/* {showImg ? null : (
              <> */}
            <img
              src={
                user?.cover_photo
                  ? user.cover_photo
                  : cover_photo
                  ? cover_photo
                  : UserHomeProfleImg
              }
              alt=""
              className="profileBackgroun-Image"
            />
            {/* </>
            )} */}
          </div>

          <div className="Profile-DP">
            <img
              src={user?.profile_photo ? user.profile_photo : ProfileDp}
              alt=""
              className="DP-img"
            />
            {/* {user?.role === "Creator" && ( */}
            <img
              src={editIcon}
              className="editprofileIcon"
              onClick={handleClickOpen}
            />
            {/* )} */}
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
                Level:&nbsp;
                <span className="level-span">
                  {creator?.gameLevel ? creator.gameLevel : "Semi-Pro"}
                </span>
              </p>
            </div>
            {/* <div className="following-content">
              <p className="followingP">
                Following:&nbsp;
                <span className="follo-span">
                  {creator?.followers ? creator.followers.length : " 0"}
                </span>
              </p>
            </div> */}

            <div className="profileEditButton">

              {cover_photo ? (
                <div className="editProfiel-btn" onClick={saveCoverPhoto}>
                  Save Cover Photo
                </div>
              ) : (
                <a to="">
                  <label>
                    <input
                      style={{
                        display: "none",
                        cursor: "none"
                      }}
                      type="file"
                      accept="image/*"
                      // placeholder="Ref."
                      onChange={handleImageSelect}
                      onClick={(event) => {
                        event.target.value = null;
                      }}
                    />
                    <div className="editProfiel-btn">Add Cover Photo</div>
                    {/* <img
                  src={profile_photo ? profile_photo : Course1}
                  className="userProfileInput"
                /> */}
                  </label>
                </a>
              )}

            </div>
          </div>
          {/* profile Div */}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
