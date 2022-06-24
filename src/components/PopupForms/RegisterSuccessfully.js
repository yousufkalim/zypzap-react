import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import UploadSuccessLog from "../../assets/icons/UploadSuccessLog.svg";
import ClearIcon from "@mui/icons-material/Clear";

const CongratulationPopup1 = ({ open, setOpen, text }) => {
  const handleClose = () => {
    window.location.reload(false);
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        setOpen={setOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="uploadSuccessDiv">
          <ClearIcon className="subsclearIcon" onClick={handleClose} />
          <div className="uploadSuccess-centerDiv">
            <img src={UploadSuccessLog} alt="" className="uloadSuccessIMG" />
            <p className="uploadSuccessP">
              Congratulations !
              <br />
              {text}
            </p>
            <button className="uploadSuccessBTN" onClick={handleClose}>
              close
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CongratulationPopup1;
