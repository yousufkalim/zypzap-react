import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import UploadSuccessLog from "../../assets/icons/UploadSuccessLog.svg";
// import UploadedEpisodePopup from "./UploadedEpisodePopup";
import ClearIcon from "@mui/icons-material/Clear";
import { useHistory } from "react-router-dom";
const DeletedFullCoursePopup = ({ open, setOpen, course }) => {
  const history = useHistory();
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleClick = () => {
    setShowDeletePopup(true);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
    history.push("/dashboard");
  };
  const hanldleClick = (e) => {
    history.push("/dashboard");
  };
  return (
    <div>
      <Dialog
        open={open}
        setOpe={setOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="uploadSuccessDiv">
          <div className="uploadSuccess-centerDiv">
            <ClearIcon className="subsclearIcon" onClick={handleClose} />
            <img
              src={UploadSuccessLog}
              alt=""
              className="uloadSuccessIMG"
              onClick={hanldleClick}
            />
            <p className="uploadSuccessP">Course Deleted Successfullly</p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeletedFullCoursePopup;
