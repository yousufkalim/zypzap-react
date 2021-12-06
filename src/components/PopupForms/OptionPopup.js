import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Optionuser from "../../assets/icons/Optionuser.png";
import Optioncontect from "../../assets/icons/Optioncontect.png";
const OptionPopup = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose} className="option_data">
        <div className="option_Details">
          <div className="option_container">
            <h1 className="optionH1">Contnue</h1>
            <p className="option_pera">What you are up to</p>
            <div className="option_box">
              <div className="option_box1">
                <img src={Optionuser} alt="Optionuser" />
                <p>Learner</p>
              </div>
              <div className="option_box2">
                <img src={Optioncontect} alt="Optionuser" />
                <p>Content Creator</p>
              </div>
            </div>
            <button type="submit" className="optionBTN">
              Continue
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default OptionPopup;
