import React, { useState } from "react";
import Fireicon from "../../../assets/icons/Fireicon.png";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "../../../assets/icons/EditIcon.svg";
import DeleteIcon from "../../../assets/icons/DeleteIcon.svg";

const FormStepFive = ({ step, setStep, setformDataOne }) => {
  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <h2 className="coursedetail1">Uploaded Episode</h2>
        <div className="hrLine1" />

        {/* /// */}
        {/* //// */}
        <div className="step3_container">
          <div className="step3Counting">1-</div>
          <div className="step3Img">
            <img src={Fireicon} alt="" />
          </div>
          <div className="step3Input">
            <input type="text" placeholder="Title" className="step3_inputs" />
            <img className="editIcon" src={EditIcon} alt="" />
            <img className="deleteIcon" src={DeleteIcon} alt="" />
          </div>
        </div>
        {/* /// */}
        <div className="step3_container">
          <div className="step3Counting">2-</div>
          <div className="step3Img">
            <img src={Fireicon} alt="" />
          </div>
          <div className="step3Input">
            <input type="text" placeholder="Title" className="step3_inputs" />
            <img className="editIcon" src={EditIcon} alt="" />
            <img className="deleteIcon" src={DeleteIcon} alt="" />
          </div>
        </div>
        {/* /// */}
        <div className="step3_container">
          <div className="step3Counting">3-</div>
          <div className="step3Img">
            <img src={Fireicon} alt="" />
          </div>
          <div className="step3Input">
            <input type="text" placeholder="Title" className="step3_inputs" />
            <img className="editIcon" src={EditIcon} alt="" />
            <img className="deleteIcon" src={DeleteIcon} alt="" />
          </div>
        </div>
        {/* /// */}
        <div className="step3_container">
          <div className="step3Counting">4-</div>
          <div className="step3Img">
            <img src={Fireicon} alt="" />
          </div>
          <div className="step3Input">
            <input type="text" placeholder="Title" className="step3_inputs" />
            <img className="editIcon" src={EditIcon} alt="" />
            <img className="deleteIcon" src={DeleteIcon} alt="" />
          </div>
        </div>
        {/* /// */}
        <div className="step3_container">
          <div className="step3Counting">5-</div>
          <div className="step3Img">
            <img src={Fireicon} alt="" />
          </div>
          <div className="step3Input">
            <input type="text" placeholder="Title" className="step3_inputs" />
            <img className="editIcon" src={EditIcon} alt="" />
            <img className="deleteIcon" src={DeleteIcon} alt="" />
          </div>
        </div>
        {/* /// */}
        <div className="step3_container">
          <div className="step3Counting">6-</div>
          <div className="step3Img">
            <img src={Fireicon} alt="" />
          </div>
          <div className="step3Input">
            <input type="text" placeholder="Title" className="step3_inputs" />
            <img className="editIcon" src={EditIcon} alt="" />
            <img className="deleteIcon" src={DeleteIcon} alt="" />
          </div>
        </div>
        {/* /// */}
        <div className="step3_container">
          <div className="step3Counting">7-</div>
          <div className="step3Img">
            <img src={Fireicon} alt="" />
          </div>
          <div className="step3Input">
            <input type="text" placeholder="Title" className="step3_inputs" />
            <img className="editIcon" src={EditIcon} alt="" />
            <img className="deleteIcon" src={DeleteIcon} alt="" />
          </div>
        </div>
        {/* /// */}
        <div className="step3_container">
          <div className="step3Counting">8-</div>
          <div className="step3Img">
            <img src={Fireicon} alt="" />
          </div>
          <div className="step3Input">
            <input type="text" placeholder="Title" className="step3_inputs" />
            <img className="editIcon" src={EditIcon} alt="" />
            <img className="deleteIcon" src={DeleteIcon} alt="" />
          </div>
        </div>
        {/* /// */}

        <div className="step3_Btn">
          <AddIcon className="addBTN" />
          <button className="addNew">Add New</button>
        </div>
        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          <button onClick={() => setStep(6)} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepFive;
