import React from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import UploadSuccessLog from "../../assets/icons/UploadSuccessLog.svg";
import ClearIcon from "@mui/icons-material/Clear";

const DeletedEpisodeCourse = ({ open, setOpen }) => {
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
          <ClearIcon className="subsclearIcon" onClick={handleClose} />
          <div className="uploadSuccess-centerDiv">
            <img src={UploadSuccessLog} alt="" className="uloadSuccessIMG" />
            <p className="uploadSuccessP">
              Delete Episode PUBG GamePlay Course 1/2
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeletedEpisodeCourse;
