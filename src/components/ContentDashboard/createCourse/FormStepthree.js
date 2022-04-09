import React, { useState } from "react";
import Step3Bg from "../../../assets/img/Step3Bg.svg";
import Step2TrimImg from "../../../assets/img/Step2TrimImg.svg";
import Step3TrimBtn from "../../../assets/img/Step3TrimBtn.svg";
import Step3SplitBtn from "../../../assets/img/Step3SplitBtn.svg";
import SplitEpisodes from "../../PopupForms/SplitEpisodes";

const FormStepThree = ({ step, setStep }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <SplitEpisodes open={open} setOpen={setOpen} />
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <h2 className="coursedetail1">Upload Course 3</h2>
        <div className="hrLine1" />
        <div className="step3-container">
          <div className="step3-centerDiv">
            <div className="step3-colmn">
              <img className="Step3Bg" src={Step3Bg} alt="" />
            </div>
            <div className="step3-colmn2">
              <img className="Step3Bg" src={Step2TrimImg} alt="" />
            </div>
            <div className="step3-colmn3">
              <img className="step3-buttons" src={Step3TrimBtn} alt="" />
              <img
                onClick={handleClick}
                className="step3-buttons"
                src={Step3SplitBtn}
                alt=""
              />
            </div>
          </div>
        </div>
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
