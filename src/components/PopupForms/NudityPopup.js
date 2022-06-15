import React from "react";
import "../../css/form/NudityPopup.css";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";

const NudityPopup = ({ nudityPop, setNudityPop }) => {
  const handleClose = () => {
    setNudityPop(false);
  };

  return (
    <>
      <Dialog open={nudityPop} onClose={handleClose}>
        <div className="nudity_mainDiv">
          <div className="nudity_centerDiv">
            <ClearIcon className="clearIcon3" onClick={handleClose} />
            <div className="nudity_titleDiv">
              <p className="nudity_title">Nudity & Sexual Content Policies</p>
            </div>
            <div className="nudity_contentDiv">
              <p className="nudity_content">
                Depiction Of Genitals, Breasts, Or Buttocks
              </p>
              <p className="nudity_content">
                (Clothed Or Unclothed) For The Purpose Of Sexual Gratification
              </p>
              <p className="nudity_content">
                *Pornography Or Depicting Sexual Acts, Genitals,
              </p>
              <p className="nudity_content">
                Or Fetishes For The Purpose Of Sexual Gratification On Any
              </p>
              <p className="nudity_content">
                Surface (Such As Video, Text, Audio, Images)
              </p>
              {/* extra heading */}
              <p className="nudity_content">
                Depiction Of Genitals, Breasts, Or Buttocks
              </p>
              <p className="nudity_content">
                (Clothed Or Unclothed) For The Purpose Of Sexual Gratification
              </p>
              <p className="nudity_content">
                *Pornography Or Depicting Sexual Acts, Genitals,
              </p>
              <p className="nudity_content">
                Or Fetishes For The Purpose Of Sexual Gratification On Any
              </p>
              <p className="nudity_content">
                Surface (Such As Video, Text, Audio, Images)
              </p>
            </div>
            <div className="nudity_btnDiv">
              <button className="nudity_btn">
                Consult Terms And Conditions
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default NudityPopup;
