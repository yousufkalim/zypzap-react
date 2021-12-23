import React from "react";
import Fireicon from "../../../assets/icons/Fireicon.png";
import AddIcon from "@mui/icons-material/Add";

const FormStepThree = ({ step, setStep, setformDataOne }) => {
  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/3</p>
        <h2 className="coursedetail1">Upload Course 3</h2>
        <div className="hrLine1" />
        {/* //// */}
        <div className="step3_container">
          <div className="step3Counting">1-</div>
          <div className="step3Img">
            <img src={Fireicon} alt="" />
          </div>
          <div className="step3Input">
            <input type="text" placeholder="Title" className="step3_inputs" />
          </div>
          <button className="step3BTN">Change Video</button>
        </div>
        {/* /// */}
        {/* //// */}
        <div className="step3_container">
          <div className="step3Counting">2-</div>
          <div className="step3Img">
            <img src={Fireicon} alt="" />
          </div>
          <div className="step3Input">
            <input type="text" placeholder="Title" className="step3_inputs" />
          </div>
          <button className="step3BTN">Change Video</button>
        </div>
        {/* /// */}
        {/* //// */}
        <div className="step3_container">
          <div className="step3Counting">3-</div>
          <div className="step3Img">
            <img src={Fireicon} alt="" />
          </div>
          <div className="step3Input">
            <input type="text" placeholder="Title" className="step3_inputs" />
          </div>
          <button className="step3BTN">Change Video</button>
        </div>
        {/* /// */}
        {/* //// */}
        <div className="step3_container">
          <div className="step3Counting">4-</div>
          <div className="step3Img">
            <img src={Fireicon} alt="" />
          </div>
          <div className="step3Input">
            <input type="text" placeholder="Title" className="step3_inputs" />
          </div>
          <button className="step3BTN">Change Video</button>
        </div>
        {/* /// */}
        {/* //// */}
        <div className="step3_container">
          <div className="step3Counting">5-</div>
          <div className="step3Img">
            <img src={Fireicon} alt="" />
          </div>
          <div className="step3Input">
            <input type="text" placeholder="Title" className="step3_inputs" />
          </div>
          <button className="step3BTN">Change Video</button>
        </div>
        {/* /// */}
        <div className="step3_Btn">
          <AddIcon className="addBTN" />
          <button className="addNew">Add New</button>
        </div>
        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          <button onClick={() => setStep(3)} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepThree;
