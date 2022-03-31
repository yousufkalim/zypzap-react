import React from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import UploadSuccessLog from "../../assets/icons/UploadSuccessLog.svg";
import DeletedEpisodeCourse from "./DeletedEpisodeCourse";

const DeleteEpisodePUBG = ({ open, setOpen }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleClick = () => {
    setShowDeletePopup(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <DeletedEpisodeCourse
        open={showDeletePopup}
        setOpen={setShowDeletePopup}
      />
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
              Delete Episode PUBG GamePlay Course 1/2
            </p>
            <button className="uploadSuccessBTN" onClick={handleClick}>
              Confirm
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteEpisodePUBG;
