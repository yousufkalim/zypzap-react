import React from "react";
import Fireicon from "../../../assets/icons/Fireicon.png";
import AddIcon from "@mui/icons-material/Add";

const FormStepFour = ({ step, setStep, setformDataOne }) => {
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
          <button className="drafBtn">Draft</button>
          <button onClick={() => setStep(5)} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};
export default FormStepFour;
