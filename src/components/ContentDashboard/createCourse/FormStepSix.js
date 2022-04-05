import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ImageInput from "../../../utils/ImageInput";
import api from "../../../api";
import { Store, UpdateStore } from "../../../StoreContext";
import { toast } from "react-toastify";
import successPopup from "../../PopupForms/RequestSuccessfullyPopup";
const FormStepsix = ({
  step,
  formDataOne,
  formDataTwo,
  formDataSix,
  setformDataOne,
  setformDataTwo,
  setformDataSix,
  creator,
}) => {
  const updateStore = UpdateStore();
  const [uploading, setUploading] = useState(true);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setformDataSix(file);
    setUploading(true);
  };
  const handleClick = async () => {
    setUploading(false);
    let video = [...formDataTwo, formDataSix];
    const {
      gamedetails,
      gameName,
      gameLevel,
      gameType,
      gameMood,
      gamePlateForm,
      description,
    } = formDataOne;
    let formdata = new FormData();
    video.map((item) => formdata.append("files", item));
    formdata.append(`course_name`, `${gamedetails}`);
    formdata.append(`game_name`, `${gameName}`);
    formdata.append(`level`, `${gameLevel}`);
    formdata.append(`category`, `${gameType}`);
    formdata.append(`mode`, `${gameMood}`);
    formdata.append(`plateform`, `${gamePlateForm}`);
    formdata.append(`description`, `${description}`);
    formdata.append(`id`, `${creator._id}`);
    let res = await api("post", "/courses", formdata);
    if (res) {
      setUploading(true);
      setformDataOne({
        gamedetails: "",
        gameName: "",
        gameLevel: "",
        gameType: "",
        gameMood: "",
        gamePlateForm: "",
        description: "",
      });
      setformDataTwo([]);
      setformDataSix({});
      toast.success("Profil non modifié");
    } else {
      toast.error("Enter your email");
    }
  };
  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <br />

        <p className="stapPr">Add intro video and Thumbnail</p>
        <div className={` hrLine1`} />
        {!uploading ? (
          <Grid container spacing={2}>
            <div className="step_container">
              <div className="step1">
                <ImageInput text="Select Image" onChange={handleFileChange} />
              </div>
            </div>
          </Grid>
        ) : (
          <p className="success">
            Thumnail Upload Successfully Now Submit Course
          </p>
        )}

        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          <button className="continueBtn" onClick={handleClick}>
            {uploading ? "Submit" : "Lodding"}
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepsix;
