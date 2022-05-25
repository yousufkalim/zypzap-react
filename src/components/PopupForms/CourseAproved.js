import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import UploadSuccessLog from "../../assets/icons/UploadSuccessLog.svg";
import ClearIcon from "@mui/icons-material/Clear";
import { Store, UpdateStore } from "../../StoreContext";

const CourseAproved = ({ open, setOpen, setStep, text }) => {
  const { creator, contentDashboardButton } = Store();
  const updateStore = UpdateStore();
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
      >
        <div className="uploadSuccessDiv">
          <ClearIcon className="subsclearIcon" onClick={handleClose} />
          <div className="uploadSuccess-centerDiv">
            <img src={UploadSuccessLog} alt="" className="uloadSuccessIMG" />
            {text !== "" ? (
              <p className="uploadSuccessP">{text}</p>
            ) : (
              <>
                <p className="uploadSuccessP">
                  Your request for the appovel is send
                  <br />
                  successfully
                </p>
              </>
            )}
            {text ? (
              <button
                className="uploadSuccessBTN"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Done
              </button>
            ) : (
              <button
                className="uploadSuccessBTN"
                onClick={() => {
                  updateStore({ contentDashboardButton: "Course" });
                  setStep("");
                }}
              >
                Done
              </button>
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CourseAproved;
