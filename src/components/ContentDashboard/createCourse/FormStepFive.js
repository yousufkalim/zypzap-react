import React, { useState } from "react";
import Fireicon from "../../../assets/icons/Fireicon.png";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "../../../assets/icons/EditIcon.svg";
import DeleteIcon from "../../../assets/icons/DeleteIcon.svg";

const FormStepFive = ({ step, setStep, setformDataTwo, formDataTwo }) => {
  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <h2 className="coursedetail1">Uploaded Episode</h2>
        <div className="hrLine1" />
        {formDataTwo?.map((file, index) => {
          return (
            <>
              <SingleVideo
                id={index}
                file={file}
                setformDataTwo={setformDataTwo}
                index={index}
                formDataTwo={formDataTwo}
              />
            </>
          );
        })}
        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          <button
            className="drafBtn"
            style={{ background: "none", border: "1px solid #662F88" }}
          >
            Previous
          </button>
          <button onClick={() => setStep(6)} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

const SingleVideo = ({ file, setformDataTwo, index, formDataTwo }) => {
  const [fileName, setFileName] = useState(file?.name);
  const handleDelete = (file) => {
    const newChapter = formDataTwo?.filter((a) => a !== file);
    setformDataTwo(newChapter);
  };
  const handleEdit = (file, index) => {};
  return (
    <div className="step3_container">
      <div className="step3Counting">{index}-</div>
      <div className="step3Img">
        <img src={Fireicon} alt="" />
      </div>
      <div className="step3Input">
        <input
          id={index}
          type="text"
          placeholder="Title"
          className="step3_inputs"
          value={fileName}
        />
        <img
          className="editIcon"
          src={EditIcon}
          alt=""
          onClick={() => handleEdit(file)}
        />
        <img
          className="deleteIcon"
          src={DeleteIcon}
          alt=""
          onClick={() => handleDelete(file)}
        />
      </div>
    </div>
  );
};
export default FormStepFive;
