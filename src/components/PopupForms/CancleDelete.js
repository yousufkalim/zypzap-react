import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import UploadSuccessLog from "../../assets/icons/crosIcon.svg";

const CancleDelete = ({ open, setOpen, text }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
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
            <img src={UploadSuccessLog} alt="" className="uloadSuccessIMG" />
            <p className="uploadSuccessP">
              Episode {text.title} GamePlay Course {text.index}/2 deleted
            </p>
            <button className="uploadSuccessBTN" onClick={handleClose}>
              Confirm
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CancleDelete;
