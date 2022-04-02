import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import UploadSuccessLog from "../../assets/icons/UploadSuccessLog.svg";
// import UploadedEpisodePopup from "./UploadedEpisodePopup";
import ClearIcon from "@mui/icons-material/Clear";

const DeletedFullCoursePopup = ({ open, setOpen }) => {
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
      <Dialog
        open={open}
        setOpe={setOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="uploadSuccessDiv">
          <div className="uploadSuccess-centerDiv">
            <ClearIcon className="subsclearIcon" onClick={handleClose} />
            <img src={UploadSuccessLog} alt="" className="uloadSuccessIMG" />
            <p className="uploadSuccessP">CS-GO Ep 1 Complete Course Deleted</p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeletedFullCoursePopup;
