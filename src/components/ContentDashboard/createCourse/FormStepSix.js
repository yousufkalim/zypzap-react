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
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
const firebaseConfig = {
  apiKey: "GOOGLE_API_KEY_REDACTED",
  authDomain: "video-storage-3769b.firebaseapp.com",
  projectId: "video-storage-3769b",
  storageBucket: "video-storage-3769b.appspot.com",
  messagingSenderId: "674858504046",
  appId: "1:674858504046:web:dc91ec7bc28e23342c3b7f",
  measurementId: "G-TRTYFM0GKT",
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
  setDefaultCompState,
}) => {
  const history = useHistory();
  const updateStore = UpdateStore();
  const { creator } = Store();
  const [uploading, setUploading] = useState(false);
  const [btnState, setBtnState] = useState(0);
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
      description,
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
        description: "",
      });
      setformDataFive([]);
      setformDataSix("");
      setBtnState(2);
      toast.success("Profil non modifié");
      setDefaultCompState("Course");
      setStep("");

      // window.location.reload();
      // setStep(1);  --todo change url
    } else {
      toast.error("Enter your email");
    }
  };
  const handleClose = () => {
    showPopup(false);
  };
  return (
    <>
      <successPopup
        open={showPopup}
        setOpen={() => setShowPopup(!showPopup)}
        closeModal={handleClose}
      />
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
                  <ImageInput text="Select Video" onChange={handleSubmit} />
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
