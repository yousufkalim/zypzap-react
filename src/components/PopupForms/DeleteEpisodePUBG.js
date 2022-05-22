import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import UploadSuccessLog from "../../assets/icons/UploadSuccessLog.svg";
import DeletedEpisodeCourse from "./DeletedEpisodeCourse";
import ClearIcon from "@mui/icons-material/Clear";
const DeleteEpisodePUBG = ({ open, setOpen, text }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <DeletedEpisodeCourse open={showDeletePopup} setOpen={setShowDeletePopup} />
      <Dialog open={open} setOpe={setOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <div className="uploadSuccessDiv">
          <ClearIcon className="subsclearIcon" onClick={handleClose} />
          <div className="uploadSuccess-centerDiv">
            <img src={UploadSuccessLog} alt="" className="uloadSuccessIMG" />
            <p className="uploadSuccessP">
              Episode {text.title} GamePlay Course {text.index + 1}/{text.length} deleted
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteEpisodePUBG;
