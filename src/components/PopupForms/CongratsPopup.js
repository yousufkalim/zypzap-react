import React from "react";
import Dialog from "@mui/material/Dialog";
import UploadSuccessLog from "../../assets/icons/UploadSuccessLog.svg";
import ClearIcon from "@mui/icons-material/Clear";

const CongratsPopup = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
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
              Congrats!
              <br /> You created a Creator account
            </p>
            <button className="uploadSuccessBTN" onClick={() => setOpen(false)}>
              Done
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CongratsPopup;
