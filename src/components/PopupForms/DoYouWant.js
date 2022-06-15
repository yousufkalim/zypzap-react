import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useHistory } from "react-router-dom";

const DoYouWant = ({ open, setOpen, setOpenBecomeCreatorPopup }) => {
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        setOpen={setOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ maxWidth: "500px", margin: "auto" }}
      >
        <div
          className="uploadSuccess-centerDiv"
          style={{ color: "#fff", textAlign: "center" }}
        >
          <p className="uploadSuccessP">
            <ClearIcon className="clearIconss" onClick={handleClose} />
            Do you Want to keep your profile <br /> preferences information?
          </p>
          <div className="coursDetailBtns">
            <button
              className="continueBtn"
              onClick={() => {
                setOpenBecomeCreatorPopup(true);
                setOpen(false);
              }}
            >
              Yes
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="continueBtn" onClick={handleClose}>
              No
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DoYouWant;
