import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ImageInput from "../../../utils/ImageInput";
import api from "../../../api";
const FormStepsix = ({
  step,
  formDataOne,
  formDataTwo,
  formDataSix,
  setformDataSix,
}) => {
  const [uploading, setUploading] = useState(false);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setformDataSix(file);
    setUploading(true);
  };
  const handleClick = async () => {
    let video = [...formDataTwo, formDataSix];
    console.log("video", formDataTwo);
    console.log("video", formDataSix);

    let formdata = new FormData();
    video.map((item) => {
      formdata.append("files", item);
    });
    formdata.append(`data`, formDataOne);
    console.log("formDataOne", formDataOne);

    let res = await api("post", "/courses", formdata);
    if (res) console.log("res", res);
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
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepsix;
