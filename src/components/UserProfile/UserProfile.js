import React, { useState, useCallback } from 'react';
import '../../components/UserProfile/UserProfile.css';
import UserHomeProfleImg from '../../assets/img/UserHomeProfleImg.svg';
import editProfile from '../../assets/img/editProfile.svg';

import ProfileDp from '../../assets/img/profileavatar.png';
import LoadingAvatar from '../../assets/img/loadingavatar.jpeg';
import editIcon from '../../assets/editicon2.svg';
import PropfileInformation from '../PopupForms/PropfileInformation';
import RegisterSuccessfully from '../PopupForms/RegisterSuccessfully';
import BecomeCreatorpopup from '../PopupForms/BecomeCreatorpopup';
import { Store, UpdateStore } from '../../StoreContext';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tooltip from '@material-ui/core/Tooltip';
import Slider from '@material-ui/core/Slider';
import cam from '../../assets/icons/cam.svg';
import Cropper from 'react-easy-crop';
import api from '../../api';
import { getCroppedImg } from './canvasUtils';
import { uploadPhoto } from '../../utils/uploadMedia';

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

  const [cover_photo, setCoverImageURL] = useState('');
  const [profile_photo, setProfileimg] = useState('');
  const updateStore = UpdateStore();
  let file;
  const handleClickOpen = () => {
    if (user?.role == 'Creator') {
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
    if (!myFile) return;

    const formData = new FormData();
    formData.append('photos', myFile);

    let data = await uploadPhoto(formData, 'profile_photos');

    setProfileimg(data.url);
    saveProfilePhoto(data.url);
    setProfileLoading(false);
  };
  const saveCoverPhoto = async (downloadURL) => {
    if (user?.role == 'Creator') {
      let res = await api('post', `/creators/${user?._id}`, {
        cover_photo: downloadURL,
      });
      if (res) {
        setCoverImageURL('');
        updateStore({
          user: res?.data?.newUsers,
          creator: res?.data?.creator,
        });
      }
    } else {
      let res = await api('put', `/users/addProfileInfo/${user?._id}`, {
        cover_photo: downloadURL,
      });
      if (res) {
        setCoverImageURL('');
        updateStore({ user: res.data });
      }
    }
  };
  const saveProfilePhoto = async (profile_photo) => {
    if (user?.role == 'Creator') {
      let res = await api('post', `/creators/${user?._id}`, { profile_photo });
      if (res) {
        setProfileimg('');
        updateStore({
          user: res?.data?.newUsers,
          creator: res?.data?.creator,
        });
      }
    } else {
      let res = await api('put', `/users/addProfileInfo/${user?._id}`, {
        profile_photo,
      });
      if (res) {
        setProfileimg('');
        updateStore({ user: res.data });
      }
    }
  };

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  const showandSaveCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);

      var myFile = new File([croppedImage], imgfile?.name, {
        lastModified: new Date().getTime(),
        type: imgfile?.type,
      });
      if (!myFile) return;

      const formData = new FormData();
      formData.append('photos', myFile);

      let data = await uploadPhoto(formData, 'cover_photos');

      saveCoverPhoto(data.url);
      setCoverImageURL(data.url);

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
              {' '}
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
                <Tooltip title="Zoom">
                  <Slider
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    className="zoomlider"
                    onChange={(e, zoom) => setZoom(zoom)}
                  />
                </Tooltip>
              </div>
            </>
          ) : (
            <>
              {window.innerWidth < 601 ? (
                <img
                  src={
                    cover_photo ? cover_photo : user?.cover_photo ? user?.cover_photo : editProfile
                  }
                  style={{
                    opacity: '0.7',
                    position: 'fixed',
                    top: '0',
                    objectFit: 'cover',
                    position: 'relative',
                    top: '-23vh',
                    height: '34vh',
                    /* text-align: center; */
                    width: '100vw',
                    overflow: 'hidden',
                  }}
                  alt=""
                />
              ) : (
                <div className="profile-image">
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
                </div>
              )}
            </>
          )}
          {/* ============================================= */}

          {window.innerWidth < 601 ? (
            <div
              className="mobDP"
              style={{ display: 'flex', flexDirection: 'column', marginTop: '-40vh' }}
            >
              <div style={{ paddingBottom: '3vh', position: 'relative', fontWeight: '600' }}>
                {imageSrc ? (
                  <>
                    <div
                      style={{
                        textAlign: 'center',
                        color: 'white',
                      }}
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
                          display: 'none',
                          cursor: 'none',
                        }}
                        type="file"
                        accept="image/*"
                        // placeholder="Ref."
                        onChange={handleImageSelect}
                        onClick={(event) => {
                          event.target.value = null;
                        }}
                      />
                      <div
                        style={{
                          position: 'unset',
                          textAlign: 'center',
                          color: 'white',
                          top: '-3',
                        }}
                      >
                        <img src={cam} style={{ marginRight: '3px' }} alt="" /> Add Cover Photo
                      </div>
                    </label>
                  </a>
                )}
              </div>

              <div style={{ margin: 'auto' }}>
                {ProfileLoading ? (
                  <img
                    src={LoadingAvatar}
                    alt="loading"
                    style={{
                      border: '6px solid #14162c',
                      borderRadius: '8px',
                      padding: '0',
                      objectFit: 'cover',
                      margin: '0',
                      width: '130px',
                      height: '134px',
                      margin: 'auto',
                      position: 'relative',
                    }}
                  />
                ) : (
                  <img
                    src={profile_photo ? profile_photo : user?.profile_photo}
                    alt=""
                    style={{
                      border: '6px solid #14162c',
                      borderRadius: '8px',
                      padding: '0',
                      objectFit: 'cover',
                      margin: '0',
                      width: '130px',
                      height: '134px',
                      margin: 'auto',
                      position: 'relative',
                    }}
                    onError={() => setProfileimg(ProfileDp)}
                  />
                )}

                <a to="">
                  <label>
                    <input
                      style={{
                        display: 'none',
                        cursor: 'none',
                      }}
                      type="file"
                      accept="image/*"
                      // placeholder="Ref."
                      onChange={handleIProfilemageSelect}
                      onClick={(event) => {
                        event.target.value = null;
                      }}
                    />
                    <Tooltip title={'Edit Profile Photo'}>
                      <img
                        src={cam}
                        style={{ right: '20%', position: 'relative', bottom: '2vh' }}
                      />
                    </Tooltip>
                  </label>
                </a>
              </div>
              <div style={{ color: 'white' }}>
                <h1 className="profile-name" style={{ textAlign: 'center' }}>
                  {user ? user.username : 'Atif Khan'}
                </h1>
                <p className="pofileP" style={{ textAlign: 'center' }}>
                  {user ? user.email[0] : 'johnsmith1@gmail.com'}
                </p>

                <p className="prfile-lavelP">
                  {creator?.gameLevel ? creator.gameLevel : 'Semi-Pro'}
                  <br />
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'rgba(255, 255, 255, 0.5)',
                      textAlign: 'center',
                    }}
                  >
                    Level
                  </p>
                </p>
              </div>
            </div>
          ) : (
            ''
          )}
          {/* ============================================= */}
          {window.innerWidth < 601 ? (
            ''
          ) : (
            <>
              <div className="Profile-DP">
                {ProfileLoading ? (
                  <img src={LoadingAvatar} alt="loading" className="DP-img" />
                ) : (
                  <img
                    src={profile_photo ? profile_photo : user?.profile_photo}
                    alt=""
                    className="DP-img"
                    onError={() => setProfileimg(ProfileDp)}
                  />
                )}

                <a to="">
                  <label>
                    <input
                      style={{
                        display: 'none',
                        cursor: 'none',
                      }}
                      type="file"
                      accept="image/*"
                      // placeholder="Ref."
                      onChange={handleIProfilemageSelect}
                      onClick={(event) => {
                        event.target.value = null;
                      }}
                    />
                    <Tooltip title={'Edit Profile Photo'}>
                      <img
                        src={editIcon}
                        className="editprofileIcon"
                        // onClick={handleClickOpen}
                      />
                    </Tooltip>
                  </label>
                </a>
              </div>

              <div className="profile-container">
                <div className="prfile-name-heading">
                  <h1 className="profile-name">{user ? user.username : 'Atif Khan'}</h1>
                  <p className="pofileP">{user ? user.email[0] : 'johnsmith1@gmail.com'}</p>
                  {window.innerWidth < 601 ? (
                    <p className="prfile-lavelP">
                      {creator?.gameLevel ? creator.gameLevel : 'Semi-Pro'}
                      <br />
                      <p
                        style={{
                          fontSize: '14px',
                          fontWeight: '500',
                          color: 'rgba(255, 255, 255, 0.5)',
                          textAlign: 'center',
                        }}
                      >
                        Level
                      </p>
                    </p>
                  ) : (
                    <p className="prfile-lavelP">
                      Level:&nbsp;
                      <span className="level-span">
                        {creator?.gameLevel ? creator.gameLevel : 'Semi-Pro'}
                      </span>
                    </p>
                  )}
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
                      <div className="editProfiel-btn" onClick={showandSaveCroppedImage}>
                        Save Cover Photo
                      </div>
                    </>
                  ) : (
                    <a to="">
                      <label>
                        <input
                          style={{
                            display: 'none',
                            cursor: 'none',
                          }}
                          type="file"
                          accept="image/*"
                          // placeholder="Ref."
                          onChange={handleImageSelect}
                          onClick={(event) => {
                            event.target.value = null;
                          }}
                        />
                        <div className="editProfiel-btn">
                          <img src={cam} style={{ marginRight: '3px' }} alt="" /> Add Cover Photo
                        </div>
                        {/* <img
                  src={profile_photo ? profile_photo : Course1}
                  className="userProfileInput"
                /> */}
                      </label>
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
          {/* profile Div */}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
