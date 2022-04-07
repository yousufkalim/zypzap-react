import React from "react";
const FormStepFour = ({ step, setStep }) => {
  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <h2 className="coursedetail1">Upload Full Course</h2>
        <div className="hrLine1" />
        <div className="step4Div">
          <p className="step4DivP">No Video to display</p>
        </div>
        <div className="coursDetailBtn">
          <button
            className="drafBtn"
            style={{ background: "none", border: "1px solid #662F88" }}
          >
            Previous
          </button>

          <button onClick={() => setStep(5)} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};
export default FormStepFour;
