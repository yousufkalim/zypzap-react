import React from "react";
import Grid from "@mui/material/Grid";

const FormStepone = ({ step, setStep, setformDataOne }) => {
  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/3</p>
        <h2 className="coursedetail1">Course Details</h2>
        <div className="hrLine1" />
        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <div>
              <p>Course Title</p>
              <input type="text" />
            </div>
          </Grid>
          <Grid xs={12} sm={6}>
            <div>
              <p>Course Title</p>
              <input type="text" />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <div>
              <p>Course Title</p>
              <input type="text" />
            </div>
          </Grid>
          <Grid xs={12} sm={6}>
            <div>
              <p>Course Title</p>
              <input type="text" />
            </div>
          </Grid>
        </Grid>
        <button onClick={() => setStep(2)}>Continue</button>
      </div>
    </>
  );
};

export default FormStepone;
