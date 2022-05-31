import React, { useState } from "react";
import SubscriptionPopup from "../PopupForms/SubscriptionPopup";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CongratulationPopup2 from "../PopupForms/ConfirmationPopup2";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#17192D",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: (theme.palette.mode =
      "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(50.06deg, #662F88 50.05%, #20BF55 131.69%);"),
  },
}));

const Preparing = () => {
  const [successPopup, setSuccessPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CongratulationPopup2
        open={successPopup}
        setOpen={setSuccessPopup}
        closeModal={handleClose}
      />
      {open && (
        <SubscriptionPopup
          open={open}
          setOpen={setOpen}
          setShowPopups={setShowPopup}
          setShowPopup={setShowPopup}
          setSuccessPopup={setSuccessPopup}
          title="Recevez notre newsletter pour être "
          title2="au cœur du développement"
          type="all"
        />
      )}{" "}
      <div className="preparing">
        <div className="preparingCenterDiv">
          <div className="preparingPrsntage">
            <div className="preparingPrsntageCenterDiv">
              <div className="preparingPrsntageDiv">
                <p className="preparingPrsntageCounting1">.</p>
                <p className="preparingPrsntageCounting">20%</p>
                <p className="preparingPrsntageCounting">50%</p>
                <p className="preparingPrsntageCounting">70%</p>
                <p className="preparingPrsntageCounting">80%</p>
                <p className="preparingPrsntageCounting">100%</p>
              </div>
              <Box sx={{ flexGrow: 0 }}>
                <BorderLinearProgress variant="determinate" value={80} />
              </Box>
              <div className="preparingPrsntageInput">
                <p className="PreparingPrnstageP">
                  Restez informÉs sur notre dÉveloppement
                </p>
                <input
                  className="Input-prsntage"
                  type="text"
                  placeholder="e.g. moinheykal@gmail.com"
                />
                <buttton className="preparingPrsntageBtn" onClick={handleClick}>
                  Prévenez-moi !
                </buttton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preparing;
