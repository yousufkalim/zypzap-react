import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import VideoInput from "../../../utils/VideoInput";

const FormStepTwo = ({ step, setStep, setformDataOne }) => {
  const [activeUploadButton, setActiveUploadButton] = useState(1);
  const handleActiveUploadButton = (i) => {
    setActiveUploadButton(i);
  };

  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/3</p>
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
            <div className="step_container">
              <div className="step1">
                <p className="stapPr">Upload Full Course</p>
                <VideoInput text="Select Video" />
              </div>
              <div className="step_or">or</div>
              <div className="step1">
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
          <button className="drafBtn">Draft</button>
          <button onClick={() => setStep(3)} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepTwo;
