import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ImageInput from "../../../utils/ImageInput";

const FormStepsix = ({ step, setStep, setformDataOne }) => {
  const [activeUploadButton, setActiveUploadButton] = useState(1);
  const handleActiveUploadButton = (i) => {
    setActiveUploadButton(i);
  };

  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <br />

        <p className="stapPr">Add intro video and Thumbnail</p>
        <div className={` hrLine1`} />

        {activeUploadButton == 1 ? (
          <Grid container spacing={2}>
            <div className="step_container">
              <div className="step1">
                <ImageInput text="Select Image" />
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
          <button className="continueBtn">Continue</button>
        </div>
      </div>
    </>
  );
};

export default FormStepsix;
