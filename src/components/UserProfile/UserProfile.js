import React, { useState, useCallback } from "react";
import "../../components/UserProfile/UserProfile.css";
import UserHomeProfleImg from "../../assets/img/UserHomeProfleImg.svg";
import ProfileDp from "../../assets/img/profileavatar.png";
import LoadingAvatar from "../../assets/img/loadingavatar.jpeg";
import editIcon from "../../assets/editicon2.svg";
import PropfileInformation from "../PopupForms/PropfileInformation";
import RegisterSuccessfully from "../PopupForms/RegisterSuccessfully";
import BecomeCreatorpopup from "../PopupForms/BecomeCreatorpopup";
import { Store, UpdateStore } from "../../StoreContext";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Slider from "@material-ui/core/Slider";
import Cropper from "react-easy-crop";
import api from "../../api";
import { getCroppedImg } from "./canvasUtils";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../utils/firebase";

const UserProfile = (props) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [ProfileLoading, setProfileLoading] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [imgfile, setImgfile] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [imageSrc, setImageSrc] = React.useState(null);

  const { user, creator } = props;
  const history = useHistory();
  const [openProfile, setOpenProfile] = useState(false);
  const [openCongratulation, setCongratulation] = useState(false);
  const [open, setOpen] = useState(false);

  const [cover_photo, setCoverImageURL] = useState("");
  const [profile_photo, setProfileimg] = useState("");
  const updateStore = UpdateStore();
  let file;
  const handleClickOpen = () => {
    if (user?.role == "Creator") {
      setOpen(true);
    } else {
      setOpenProfile(true);
    }
  };
  const handleImageSelect = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      file = e.target.files[0];
      setImgfile(file);
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };
  const handleIProfilemageSelect = async (e) => {
    setProfileLoading(true);
    let myFile = e.target.files[0];

    // upload on firebase
    if (!myFile) return;
    const storageRef = ref(storage, `files/${myFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, myFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProfileimg(downloadURL);
          saveProfilePhoto(downloadURL);
          setProfileLoading(false);
        });
      }
    );
    // end upload on firebase
  };
  const saveCoverPhoto = async (downloadURL) => {
    if (user?.role == "Creator") {
      let res = await api("post", `/creators/${user?._id}`, {
        cover_photo: downloadURL
      });
      if (res) {
        setCoverImageURL("");
        updateStore({
          user: res?.data?.newUsers,
          creator: res?.data?.creator
        });
        console.log("res.data for creator", res.data);
      }
    } else {
      let res = await api("put", `/users/addProfileInfo/${user?._id}`, {
        cover_photo: downloadURL
      });
      if (res) {
        setCoverImageURL("");
        updateStore({ user: res.data });
        console.log("res.data for user", res.data);
      }
    }
  };
  const saveProfilePhoto = async (profile_photo) => {
    if (user?.role == "Creator") {
      let res = await api("post", `/creators/${user?._id}`, { profile_photo });
      if (res) {
        setProfileimg("");
        updateStore({
          user: res?.data?.newUsers,
          creator: res?.data?.creator
        });
      }
    } else {
      let res = await api("put", `/users/addProfileInfo/${user?._id}`, {
        profile_photo
      });
      if (res) {
        setProfileimg("");
        updateStore({ user: res.data });
      }
    }
  };

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  const showandSaveCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);

      var myFile = new File([croppedImage], imgfile?.name, {
        lastModified: new Date().getTime(),
        type: imgfile?.type
      });
      // upload on firebase
      if (!myFile) return;
      const storageRef = ref(storage, `files/${myFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, myFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("downloadURL222", downloadURL);
            saveCoverPhoto(downloadURL);
            setCoverImageURL(downloadURL);
          });
        }
      );
      // end upload on firebase

      setCroppedImage(croppedImage);
      setCoverImageURL(URL.createObjectURL(croppedImage));
      setImageSrc(null);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels]);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
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
          {imageSrc ? (
            <>
              {" "}
              <div className="cropperdiv">
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={8 / 2}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </div>
              <div className="imgzoomer">
                <p

                // classes={{ root: classes.sliderLabel }}
                >
                  Zoom
                </p>
                <Slider
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-labelledby="Zoom"
                  className="zoomlider"
                  onChange={(e, zoom) => setZoom(zoom)}
                />
              </div>
            </>
          ) : (
            <div className="profile-image">
              {/* {showImg ? null : (
              <> */}
              <img
                src={
                  cover_photo
                    ? cover_photo
                    : user?.cover_photo
                    ? user?.cover_photo
                    : UserHomeProfleImg
                }
                alt=""
                className="profileBackgroun-Image"
              />
              {/* </>
            )} */}
            </div>
          )}

          <div className="Profile-DP">
            {ProfileLoading ? (
              <img src={LoadingAvatar} alt="loading" className="DP-img" />
            ) : (
              <img
                src={
                  profile_photo
                    ? profile_photo
                    : user?.profile_photo
                    ? user?.profile_photo
                    : ProfileDp
                }
                alt=""
                className="DP-img"
              />
            )}

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
                  onChange={handleIProfilemageSelect}
                  onClick={(event) => {
                    event.target.value = null;
                  }}
                />
                <img
                  src={editIcon}
                  className="editprofileIcon"
                  // onClick={handleClickOpen}
                />
              </label>
            </a>
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
              {imageSrc ? (
                <>
                  <div
                    className="editProfiel-btn"
                    onClick={showandSaveCroppedImage}
                  >
                    Save Cover Photo
                  </div>
                </>
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
