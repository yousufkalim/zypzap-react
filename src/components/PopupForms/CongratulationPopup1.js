import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import UploadSuccessLog from "../../assets/icons/UploadSuccessLog.svg";
import ClearIcon from "@mui/icons-material/Clear";

const CongratulationPopup1 = ({ open, setOpen, closeModal }) => {
  const handleClose = () => {
    setOpen(false);
    closeModal();
  };
  return (
    <div>
      <Dialog
        open={open}
        setOpen={setOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="uploadSuccessDiv">
          <ClearIcon className="subsclearIcon" onClick={handleClose} />
          <div className="uploadSuccess-centerDiv">
            <img src={UploadSuccessLog} alt="" className="uloadSuccessIMG" />
            <p className="uploadSuccessP">
              Félicitations !
              <br />
              Vous êtes inscrit avec succès !
            </p>
            <button className="uploadSuccessBTN" onClick={handleClose}>
              OK
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CongratulationPopup1;
