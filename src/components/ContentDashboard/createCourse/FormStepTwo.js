import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import VideoInput from "../../../utils/VideoInput";
import UploadSuccessfulPopup from "../../PopupForms/UploadSuccessfulPopup";
import UploadCancalledPopup from "../../PopupForms/UploadCancalledPopup";
import RequestSuccessfullyPopup from "../../PopupForms/RequestSuccessfullyPopup";

const FormStepTwo = ({ step, setStep, setformDataOne }) => {
  const [open, setOpen] = React.useState(false);
  const [activeUploadButton, setActiveUploadButton] = useState(1);
  const handleActiveUploadButton = (i) => {
    setActiveUploadButton(i);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <RequestSuccessfullyPopup open={open} setOpen={setOpen} />
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <div className="uploadBtnDiv">
          <h2
            className={`
             ${activeUploadButton == 1 && "ActiveLine"} 
            uploadCoursebtn`}
            onClick={() => handleActiveUploadButton(1)}
          >
            Upload Course
          </h2>

          <h2
            className={`
             ${activeUploadButton == 2 && "ActiveLine"} 
            RecordButton`}
            onClick={() => handleActiveUploadButton(2)}
          >
            Record Course
          </h2>
        </div>
        <div className={` hrLine1`} />

        {activeUploadButton == 1 ? (
          <Grid container spacing={2}>
            <div className="step_container2">
              <div className="step1">
                <p className="stapPr">Upload Full Course</p>
                <VideoInput text="Select Video" />
              </div>
              <p className="step_or">or</p>
              <div className="step2">
                <p className="stapPr2">Upload chapters</p>
                <VideoInput text="Select Chapter" />
              </div>
            </div>
          </Grid>
        ) : (
          <div>
            <h1>Record Course</h1>
          </div>
        )}
        <div className="coursDetailBtn">
          <button className="drafBtn" onClick={handleClickOpen}>
            Draft
          </button>
          <button onClick={() => setStep(3)} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepTwo;
