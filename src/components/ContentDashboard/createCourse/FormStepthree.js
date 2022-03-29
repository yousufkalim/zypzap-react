import React, { useState } from "react";

const FormStepThree = ({ step, setStep, setformDataThree }) => {
  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <h2 className="coursedetail1">Upload Course 3</h2>
        <div className="hrLine1" />
        Step 3
        <div className="coursDetailBtn">
          <button onClick={() => setStep(4)} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepThree;
