import React from "react";
import Dialog from "@mui/material/Dialog";
import UploadSuccessLog from "../../assets/icons/UploadSuccessLog.svg";
import ClearIcon from "@mui/icons-material/Clear";
import Rating from "@mui/material/Rating";

const CongratsYouDidPopup = ({ showPopup, setShowPopup }) => {
  const [value, setValue] = React.useState(3);
  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <Dialog
        open={showPopup}
        setOpen={setShowPopup}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="uploadSuccessDiv">
          <ClearIcon className="subsclearIcon" onClick={handleClose} />
          <div className="uploadSuccess-centerDiv">
            <img src={UploadSuccessLog} alt="" className="uloadSuccessIMG" />
            <p className="congtratsYouP">Congrats You did it!</p>
            <p className="congtratsYouP2">Rate your Experience with CS-GO</p>
            <div className="congratsStarBar">
              <Rating
                className="congtratsYouPopup"
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <br />
            <button className="uploadSuccessBTN">Submit</button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default CongratsYouDidPopup;
