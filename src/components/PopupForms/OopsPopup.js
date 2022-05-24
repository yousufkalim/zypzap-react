import React from "react";
import Dialog from "@mui/material/Dialog";
import OppsLogo from "../../assets/icons/OppsLogo.svg";
import ClearIcon from "@mui/icons-material/Clear";

const OopsPopup = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open} setOpen={setOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <div className="uploadSuccessDiv">
          <ClearIcon className="subsclearIcon" onClick={handleClose} />
          <div className="uploadSuccess-centerDiv">
            <img src={OppsLogo} alt="" className="uloadSuccessIMG" />
            <p className="uploadSuccessP">
              Oops!
              <br /> Something went wrong.
            </p>
            <button className="uploadSuccessBTN" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default OopsPopup;
