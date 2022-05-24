import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import SuccessfullyVerified from "./SuccessfullyVerified";

const EmailVarificaiton = ({ open, setOpen }) => {
  const [openPopup, setOpenPopup] = React.useState(false);
  const handleClick = () => {
    setOpenPopup(true);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <SuccessfullyVerified open={openPopup} setOpen={setOpenPopup} />
      <Dialog open={open} setOpe={setOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <div className="uploadSuccessDiv">
          <div className="uploadSuccess-centerDiv">
            {/* <img src={DeleteCourseIcon} alt="" className="uloadSuccessIMG" /> */}
            <h1 className="emailVarificationH1">Email Verification</h1>
            <div className="deletePupop-content">
              <p className="deletePupopP">
                We have sended you a confirmation <br /> email. check your email box please
              </p>
              <div className="deletePupop-button">
                <button className="deletePupopBtn">Later</button>
                &nbsp; &nbsp;
                <button className="deletePupopBtn" onClick={handleClick}>
                  Verify Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default EmailVarificaiton;
