import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import VideoInput from "../../utils/VideoInput";
import "../../css/form/EditCoursePopup.css";
import Grid from "@mui/material/Grid";
import UploadSuccessfulPopup from "./UploadSuccessfulPopup";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { toast } from "react-toastify";
import { Store, UpdateStore } from "../../StoreContext";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import UploadingTheCourse from "../PopupForms/UploadingTheCourse";

import api from "../../api";
//      todo later---->
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const EditCoursePopup = ({ open, setOpen, course, setOpenS }) => {
  console.log("edit course for edit it", course);
  const { Games, creator } = Store();
  const [showPopup, setShowPopup] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [mbPerSecond, setmbPerSecond] = useState(0);
  const [progress, setProgress] = useState(0);
  const [imgUrl, setImgUrl] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [videoName, setVideoName] = useState("");
  const [game, setGame] = useState(Games ? Games : []);
  const [timeUploadRemaining, setTimeUploadRemaining] = useState(0);
  const [formDataTwo, setformDataTwo] = useState([]);
  const [formDataFive, setformDataFive] = useState([]);
  const [formDataOne, setformDataOne] = useState({
    course_name: course?.course_name,
    // gameName: course?.game_id?._id,
    selectedGamename: course?.selectedGamename,
    gameLevel: course?.gameLevel,
    gameType: course?.game_id?.category,
    gameMood: course?.gameMood,
    gamePlateForm: course?.gamePlateForm,
    description: course?.description
  });
  const {
    course_name,
    // gameName,
    selectedGamename,
    gameLevel,
    gameType,
    gameMood,
    gamePlateForm,
    description
  } = formDataOne;

  useEffect(() => {
    setformDataOne({
      course_name: course?.course_name,
      gameName: course?.game_id?._id,
      selectedGamename: course?.selectedGamename,
      gameLevel: course?.level,
      gameType: course?.game_id?.category,
      gameMood: course?.mode,
      gamePlateForm: course?.plateform,
      description: course?.description
    });
  }, [course]);
  useEffect(() => {
    setGame(Games ? Games : []);
  }, [Games]);
  const chnageEvent = (e) => {
    setformDataOne({
      ...formDataOne,
      [e.target.name]: e.target.value
    });
  };
  const handleSave = async () => {
    const data = { formDataOne, formDataFive, id: course?._id };
    let res = await api("put", "/courses", data);
    if (res) {
      // setShowPopup(true);
      setformDataTwo([]);
      setformDataFive([]);
      setOpen(false);
      // setOpens(true);
    } else {
      return toast.error("Courses not update try again");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (file) => {
    // e.preventDefault();
    const files = file.target.files;
    if (!files) return;
    let newArray = ([] = formDataTwo);
    for (let i = 0; i < files.length; i++) {
      const url = await singlefileUpload(files[i]);
      setImgUrl(...imgUrl, url);
      const fileData = { name: files[i].name, path: url, file: files[i] };
      let file = await handleSingleVideo(fileData);
      // setUploadedVideos([...uploadedVideos, formDataTwo[i]]);
      newArray = [...newArray, file._id];
      setformDataFive(newArray);
      newArray = [...newArray, fileData];
      setformDataTwo(newArray);
      if (i !== files.length - 1) setProgress(0);

      setUploading(true);
      setTimeUploadRemaining(`0 sec left`);
    }
  };
  const handleSingleVideo = async (file) => {
    return new Promise(async (resolve, reject) => {
      file.creator = creator._id;
      let res = await api("post", "/videos", file);
      if (res) {
        resolve(res.data);
      } else {
        reject(null);
      }
    });
  };
  const singlefileUpload = (file) => {
    return new Promise((resolve, reject) => {
      setVideoName(file.name);
      if (!file) return;
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      // file upload speed code
      let lastBytesTransfered = null;
      let lastBytesTransferedTime = null; //new Date().getTime();
      let totaltransferedBytes = 0;
      let updateDurationThreshold = 2000;
      let speed = 0;
      setOpens(true);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          if (lastBytesTransferedTime == null) {
            lastBytesTransfered = snapshot.bytesTransferred;
            lastBytesTransferedTime = new Date().getTime();
            totaltransferedBytes += snapshot.bytesTransferred;
            speed = 0;
          } else {
            let now = new Date().getTime();
            let _duration = now - lastBytesTransferedTime;
            if (_duration > updateDurationThreshold) {
              let bytesPerSecond =
                (snapshot.bytesTransferred - lastBytesTransfered) /
                updateDurationThreshold;

              lastBytesTransfered = snapshot.bytesTransferred;

              lastBytesTransferedTime = now;
              let newbytesPerSecond = bytesPerSecond / 1024;
              setmbPerSecond(newbytesPerSecond.toFixed(3));
              let remTime =
                (((snapshot.totalBytes - snapshot.bytesTransferred) /
                  bytesPerSecond) *
                  2) /
                (updateDurationThreshold - 1000);
              totaltransferedBytes += lastBytesTransfered;
              remTime = remTime.toFixed(0);
              if (remTime <= 60) remTime = `${remTime} sec left`;
              if (remTime > 60 && remTime < 3600) {
                remTime = (remTime / 60).toFixed(2);
                remTime = `${remTime} min left`;
              }

              if (remTime > 3600) {
                remTime = (remTime / 3600).toFixed(2);
                remTime = `${remTime} houre left`;
              }
              setTimeUploadRemaining(remTime);
            }
          }
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  return (
    <>
      <UploadingTheCourse
        open={opens}
        setOpen={setOpens}
        progress={progress}
        setProgress={setProgress}
        videoName={videoName}
        imgUrl={imgUrl}
        uploading={uploading}
        mbPerSecond={mbPerSecond}
        timeUploadRemaining={timeUploadRemaining}
      />
      {/* <RequestSuccessfullyPopup open={open} setOpen={setOpen} /> */}
      <div>
        <Dialog
          fullWidth="true"
          maxWidth="md"
          open={open}
          className="editCoursePopup"
        >
          {/* /* -------------------------------- main div --------------------------------  */}
          <div className="formStepOneDiv">
            <p className="coursedetail2">Edit the course</p>
            <div className="hrLine1" />
            <div className="courseDivContainer">
              {/* /* -------------------------------- main div --------------------------------  */}

              <div className="courseDiv">
                <div className="step_container">
                  <Grid xs={12} sm={6}>
                    <div>
                      <p className="stepLabel">Course Details </p>
                      <input
                        name="course_name"
                        type="text"
                        className="coursInput"
                        placeholder="learn how to play minacraft"
                        value={course_name ? course_name : ""}
                        onChange={chnageEvent}
                      />
                    </div>
                  </Grid>
                </div>
                <Grid xs={12} sm={6}>
                  <div>
                    <p className="stepLabel">Game Name</p>
                    <select
                      id="gameName"
                      name="selectedGamename"
                      className="coursInput"
                      value={selectedGamename}
                      onChange={chnageEvent}
                    >
                      {game?.map((g, index) => {
                        return (
                          <option value={g._id} className="setepOption">
                            {g.game_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </Grid>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}>
                    <div>
                      <p className="stepLabel">Gameplay level</p>
                      <select
                        id="gameLevel"
                        name="gameLevel"
                        className="stepSelect"
                        value={gameLevel}
                        onChange={chnageEvent}
                      >
                        <option value="Casual" className="setepOption">
                          Casual
                        </option>
                        <option value="Confirmed" className="setepOption">
                          Confirmed
                        </option>
                        <option value="Hardcore" className="setepOption">
                          Hardcore
                        </option>
                        <option value="Esporter" className="setepOption">
                          Esporter
                        </option>
                      </select>
                    </div>
                  </Grid>
                </Grid>
              </div>
              {/* /* -------------------------------- main div --------------------------------  */}
              {/* /* -------------------------------- main div --------------------------------  */}
              <div></div>
              <div className="courseDiv">
                <Grid container spacing={2} className="step_container">
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}>
                      <div>
                        <p className="stepLabel">Game Type</p>

                        <select
                          id="gameType"
                          name="gameType"
                          className="stepSelect"
                          value={gameType}
                          onChange={chnageEvent}
                        >
                          <option value="Action" className="setepOption">
                            Action
                          </option>
                          <option value="Adventure" className="setepOption">
                            Adventure
                          </option>
                          <option value="Metaverse" className="setepOption">
                            MetaVerse
                          </option>
                          <option value="MMOG" className="setepOption">
                            MMOG
                          </option>
                          <option value="Car Racing" className="setepOption">
                            Car Racing
                          </option>
                          <option
                            value="Versus Fighting"
                            className="setepOption"
                          >
                            Versus Fighting
                          </option>
                          <option value="FPS" className="setepOption">
                            FPS
                          </option>
                          <option value="RTS" className="setepOption">
                            RTS
                          </option>
                          <option value="RPG" className="setepOption">
                            RPG
                          </option>
                          <option
                            value="Turn by Turn Strategy"
                            className="setepOption"
                          >
                            Turn by Turn Strategy
                          </option>
                          <option value="Simulation" className="setepOption">
                            Simulation
                          </option>
                          <option value="Sports" className="setepOption">
                            Sport
                          </option>
                          <option value="Trading Card" className="setepOption">
                            Trading Card
                          </option>
                          <option value="Puzzle" className="setepOption">
                            Puzzle
                          </option>
                        </select>
                      </div>
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <div>
                        <p className="stepLabel">Gaming Mode</p>
                        <select
                          id="gameMood"
                          name="gameMood"
                          className="stepSelect"
                          value={gameMood}
                          onChange={chnageEvent}
                        >
                          <option value="Single" className="setepOption">
                            Single
                          </option>
                          <option value="Multiplayer" className="setepOption">
                            Multiplayer
                          </option>
                          <option value="Both" className="setepOption">
                            Both
                          </option>
                        </select>
                      </div>
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <div>
                        <p className="stepLabel">Gaming Platform</p>
                        <select
                          id="gamePlateForm"
                          name="gamePlateForm"
                          className="stepSelect"
                          value={gamePlateForm}
                          onChange={chnageEvent}
                        >
                          <option
                            value="Retro Consoles"
                            className="setepOption"
                          >
                            Retro Consoles
                          </option>
                          <option value="PS1/2/3/4/5" className="setepOption">
                            PS1/2/3/4/5
                          </option>
                          <option
                            value="Xbox/360/One/X"
                            className="setepOption"
                          >
                            Xbox/360/One/X
                          </option>
                          <option value="Mobile Games" className="setepOption">
                            Mobile Games
                          </option>
                          <option
                            value="Portable Consoles"
                            className="setepOption"
                          >
                            Portable Consoles
                          </option>
                          <option value="PC" className="setepOption">
                            PC
                          </option>
                        </select>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              {/* /* -------------------------------- main div --------------------------------  */}
            </div>
            <label htmlFor="" className="stepLabel">
              Course description
            </label>
            <textarea
              name="description"
              id=""
              cols="200"
              rows="20"
              placeholder="300 characters maximum"
              className="courstexarea"
              value={description}
              onChange={chnageEvent}
            ></textarea>
            {/* <Grid container spacing={2}>
              <div className="step_container2">
                <div className="step1">
                  <p className="stapPr">Re-upload full course</p>
                  <VideoInput
                    id="1"
                    text="Select Video"
                    onChange={handleSubmit}
                  />
                </div>
                <p className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <div className="step2">
                  <p className="stapPr2">Re-upload Chapters</p>
                  <VideoInput text="Select Video" />
                </div>
              </div>
            </Grid> */}

            <div className="coursDetailBtn">
              <button className="drafBtn" onClick={handleClose}>
                Cancel
              </button>
              <button className="continueBtn" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
          {/* /* -------------------------------- main div --------------------------------  */}
        </Dialog>
      </div>
    </>
  );
};

export default EditCoursePopup;
