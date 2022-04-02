import React, { useState } from "react";
import SubscriptionPopup from "../PopupForms/SubscriptionPopup";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      {open && (
        <SubscriptionPopup
          open={open}
          setOpen={setOpen}
          setShowPopups={setShowPopup}
          setShowPopup={setShowPopup}
          title="Recevez notre newsletter pour être au cœur du développement"
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
                <p className="preparingPrsntageCounting">100%</p>
              </div>
              <Box sx={{ flexGrow: 0 }}>
                <BorderLinearProgress variant="determinate" value={75} />
              </Box>
              <div className="preparingPrsntageInput">
                <p className="PreparingPrnstageP">Restez informé</p>
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
