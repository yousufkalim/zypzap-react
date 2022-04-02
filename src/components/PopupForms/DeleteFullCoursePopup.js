import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import DeletedFullCoursePopup from "./DeletedFullCoursePopup";
import DeleteCourseIcon from "../../assets/icons/DeleteCourseIcon.svg";

const DeleteFullCoursePopup = ({ open, setOpen }) => {
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
      <DeletedFullCoursePopup
        open={showDeletePopup}
        setOpen={setShowDeletePopup}
      />
      <Dialog
        open={open}
        setOpe={setOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="uploadSuccessDiv">
          <div className="uploadSuccess-centerDiv">
            <img src={DeleteCourseIcon} alt="" className="uloadSuccessIMG" />
            <div className="deletePupop-content">
              <p className="deletePupopP">Delete CS-GO Ep 1 Complete Course</p>
              <div className="deletePupop-buttons">
                <button className="deletePupopBtn" onClick={handleClick}>
                  Yes
                </button>
                <button className="deletePupopBtn" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteFullCoursePopup;
