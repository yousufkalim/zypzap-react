import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import Fireicon from "../../assets/icons/Fireicon.png";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "../../assets/icons/EditIcon.svg";
import DeleteIcon from "../../assets/icons/DeleteIcon.svg";
import UplaodEpisodeSuccessfull from "./UplaodEpisodeSuccessfull";

const UploadedEpisodePopup = ({ open, setOpen }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleClick = () => {
    setShowDeletePopup(true);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <UplaodEpisodeSuccessfull open={showDeletePopup} setOpen={setShowDeletePopup} />
      <Dialog
        open={open}
        setOpe={setOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth="true"
        maxWidth="lg"
      >
        <div className="uploadSuccessDiv">
          <div className="uploadSuccess-centerDiv">
            {/* /* ------------------------------- content Div ------------------------------  */}
            <div className="formStepOneDiv">
              <p style={{ textAlign: "left" }}>Step 5/6</p>
              <h2 className="coursedetail1" style={{ textAlign: "left" }}>
                Uploaded Episode
              </h2>
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
                <button className="continueBtn" onClick={handleClick}>
                  Continue
                </button>
              </div>
            </div>
            {/* /* ------------------------------- content Div ------------------------------  */}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default UploadedEpisodePopup;
