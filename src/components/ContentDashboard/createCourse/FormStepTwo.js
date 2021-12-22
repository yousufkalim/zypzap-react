import React, { useState } from "react";
import Grid from "@mui/material/Grid";

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
            <Grid xs={12} sm={6}>
              <div>
                <p>Upload Full Course</p>
              </div>
            </Grid>
            <Grid xs={12} sm={6}>
              <div>
                <p>Upload Chapters</p>
              </div>
            </Grid>
          </Grid>
        ) : (
          <div>
            <h1>Record Course</h1>
          </div>
        )}

        <button onClick={() => setStep(3)}>Continue</button>
      </div>
    </>
  );
};

export default FormStepTwo;
