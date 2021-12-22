import React from "react";
import Grid from "@mui/material/Grid";

const FormStepone = ({ step, setStep, setformDataOne }) => {
  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/3</p>
        <h2 className="coursedetail1">Course Details</h2>
        <div className="hrLine1" />
        <Grid container spacing={2} className="step_container">
          <Grid xs={12} sm={6}>
            <div>
              <p>Course Title</p>
              <input
                type="text"
                className="coursInput"
                placeholder="learn how to play minacraft"
              />
            </div>
          </Grid>
          <Grid xs={12} sm={6}>
            <div>
              <p>Course Title</p>
              <input
                type="text"
                className="coursInput"
                placeholder="select category "
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <div>
              <p>Course Title</p>
              <input
                type="text"
                className="coursInput"
                placeholder="Enter Game name"
              />
            </div>
          </Grid>
          <Grid xs={12} sm={6}>
            <div>
              <p>Course Title</p>
              <input type="text" className="coursInput" placeholder="Price" />
            </div>
          </Grid>
          <Grid xs={12} sm={6}>
            <div>
              <p>Course Title</p>
              <input
                type="text"
                className="coursInput"
                placeholder="select level "
              />
            </div>
          </Grid>
        </Grid>
        <label htmlFor=""> Course description</label>
        <textarea
          name=""
          id=""
          cols="200"
          rows="20"
          placeholder="300 characters maximum"
          className="courstexarea"
        ></textarea>
        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          <button onClick={() => setStep(2)} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepone;
