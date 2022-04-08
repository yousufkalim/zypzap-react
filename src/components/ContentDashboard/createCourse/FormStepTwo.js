import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import VideoInput from "../../../utils/VideoInput";
import api from "../../../api";
import RequestSuccessfullyPopup from "../../PopupForms/RequestSuccessfullyPopup";

const FormStepTwo = ({ step, setStep, formDataTwo, setformDataTwo }) => {
  const [open, setOpen] = React.useState(false);
  const [activeUploadButton, setActiveUploadButton] = useState(1);
  const [uploading, setUploading] = useState(false);
  const handleActiveUploadButton = (i) => {
    setActiveUploadButton(i);
  };
  const handleFileChange = async (event) => {
    const files = [...event.target.files];
    let formdata = new FormData();
    files.map((item) => formdata.append("files", item));
    if (files) {
      let res = await api("post", "/videos", formdata);
      setUploading(true);
    }
    setformDataTwo(files);
  };
  const handleFileChange1 = (event) => {
    const files = [...event.target.files];
    if (files) {
      setUploading(true);
    }
    setformDataTwo(files);
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
          <>
            {!uploading ? (
              <Grid container spacing={2}>
                <div className="step_container2">
                  <div className="step1">
                    <p className="stapPr">Upload Full Course</p>
                    <VideoInput
                      id="1"
                      text="Select Video"
                      onChange={handleFileChange}
                    />
                  </div>
                  <p className="step_or">or</p>
                  <div className="step2">
                    <p className="stapPr2">Upload chapters</p>
                    <VideoInput
                      id="2"
                      text="Select Chapter"
                      onChange={handleFileChange1}
                    />
                  </div>
                </div>
              </Grid>
            ) : (
              <p className="success">
                Video Upload Successfully Please Continue!
              </p>
            )}
          </>
        ) : (
          <div>
            <h1>Record Course</h1>
          </div>
        )}

        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          <button onClick={() => setStep(5)} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepTwo;
