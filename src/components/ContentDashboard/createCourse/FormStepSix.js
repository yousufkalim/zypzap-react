import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ImageInput from "../../../utils/ImageInput";
import VideoInput from "../../../utils/VideoInput";
import api from "../../../api";
import { Store, UpdateStore } from "../../../StoreContext";
import { toast } from "react-toastify";
import successPopup from "../../PopupForms/RequestSuccessfullyPopup";
import { initializeApp } from "firebase/app";
import { useHistory } from "react-router-dom";
import { getStorage } from "firebase/storage";
import CourseAproved from "../../PopupForms/CourseAproved";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

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
const FormStepsix = ({
  step,
  formDataOne,
  formDataTwo,
  formDataSix,
  setformDataOne,
  setformDataTwo,
  setformDataSix,
  formDataFive,
  setStep,
  setformDataFive,
  setDefaultCompState
}) => {
  const history = useHistory();
  const updateStore = UpdateStore();
  const { creator } = Store();
  const [uploading, setUploading] = useState(false);
  const [btnState, setBtnState] = useState(0);
  const [opens, setOpens] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  // const [videoName, setVideoName] = useState("");
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setformDataSix(file);
  //   setUploading(true);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnState(3);
    const file = e.target.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
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
          setformDataSix(downloadURL);
          setImgUrl(downloadURL);
          setUploading(true);
          setBtnState(0);
        });
      }
    );
  };

  const handleClick = async () => {
    if (imgUrl == "") {
      return toast.error("Veuillez entrer la vignette du cours");
    }
    setBtnState(1);
    // let video = [...formDataTwo, formDataSix];
    const {
      course_name,
      gameName,
      gameLevel,
      gameType,
      gameMood,
      gamePlateForm,
      description
    } = formDataOne;

    let data = { formDataOne, formDataFive, formDataSix, id: creator._id };
    let res = await api("post", "/courses", data);
    if (res) {
      updateStore({ creator: res?.data?.creator });
      setformDataOne({
        course_name: "",
        gameName: "",
        gameLevel: "",
        gameType: "",
        gameMood: "",
        gamePlateForm: "",
        description: ""
      });
      setformDataFive([]);
      setformDataSix("");
      setBtnState(2);
      toast.success("Profil non modifié");
      // setDefaultCompState("Course");
      setOpens(true);
      // setStep("");

      // window.location.reload();
      // setStep(1);  --todo change url
    } else {
      toast.error("Enter your email");
    }
  };
  const handleClose = () => {
    setOpens(false);
  };
  return (
    <>
      <CourseAproved
        open={opens}
        setOpen={setOpens}
        closeModal={handleClose}
        setDefaultCompState={setDefaultCompState}
        setStep={setStep}
        text=""
      />
      {/* <successPopup
        open={showPopup}
        setOpen={() => setShowPopup(!showPopup)}
        closeModal={handleClose}
      /> */}
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <br />

        <p className="stapPr">Add intro video and Thumbnail</p>
        <div className={` hrLine1`} />
        {!uploading ? (
          <div className="step6-upload-div">
            <Grid container spacing={2}>
              <div className="step_container">
                <div className="step1">
                  <p className="step1-p">Upload Course Thumbnail</p>
                  <ImageInput text="Select Image" onChange={handleSubmit} />
                </div>
              </div>
            </Grid>
            <Grid container spacing={2}>
              <div className="step_container">
                <div className="step1">
                  <p className="step1-p">Upload Course Introduction</p>
                  <VideoInput text="Select Video" onChange={handleSubmit} />
                </div>
              </div>
            </Grid>
          </div>
        ) : (
          <p className="success">
            Thumnail Upload Successfully Now Submit Course
          </p>
        )}

        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          <button
            className="drafBtn"
            style={{ background: "none", border: "1px solid #662F88" }}
            onClick={() => setStep(5)}
          >
            Previous
          </button>
          <button
            className="continueBtn"
            onClick={handleClick}
            disabled={btnState == 0 ? false : true}
          >
            {btnState === 0
              ? "Submit For Approval"
              : btnState === 1
              ? "Loading"
              : btnState === 2
              ? "Submited"
              : "uploading thumnail"}
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepsix;
