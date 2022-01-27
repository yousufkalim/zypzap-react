import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Moni1 from "../../assets/icons/Moni1.svg";
import Moni2 from "../../assets/icons/Moni2.svg";
import Moni3 from "../../assets/icons/Moni3.svg";
import Moni4 from "../../assets/icons/Moni4.svg";
import Moni5 from "../../assets/icons/Moni5.svg";
import SubscriptionPopup from "../PopupForms/SubscriptionPopup";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  { a: "makeline", b: "" },
  { a: "makeline", b: "" },
  { a: "makeline", b: "" },
  { a: "makeline", b: "" },
  { a: "makeline", b: "" },
];

const Monitization = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [open, setOpen] = useState(false);
  const showPopup = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <>
      <div className="monitization">
        {open && <SubscriptionPopup open={open} setOpen={setOpen} />}
        <h2 className="monitization_heading">{t("Monitization Process")}</h2>
        <hr className="hr_line3" />
        {/* ///// stapper ////// */}
        <Box sx={{ width: "80%", margin: "auto" }} className="step-box">
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label.a}>
                <StepLabel>
                  <div className="step-count">{label.b}</div>
                  <br />
                </StepLabel>
                {/* <StepLabel>{label.a}</StepLabel> */}
              </Step>
            ))}
          </Stepper>
          {/* /// */}
          <div className="monitization_container">
            <Grid
              style={{
                display: "flex",
                // flexDirection: "column",
                justifyContent: "space-around",
              }}
              container
              rowSpacing={0}
              columnSpacing={{ xs: 0, sm: 0, md: 0 }}
            >
              <Grid item xs={2.3}>
                <div className="moniBox">
                  <div className="moniImage">
                    <img className="moni_icon" src={Moni1} alt="" />
                  </div>
                  <div className="moni_heading">
                    <p className="moni_p">{t("Préparation du cours")}</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={2.3}>
                <div className="lineImg"></div>
                <div className="moniBox">
                  <div className="moniImage">
                    <img className="moni_icon" src={Moni2} alt="" />
                  </div>
                  <div className="moni_heading">
                    <p className="moni_p">{t("Evaluation et validation")}</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={2.3}>
                <div className="moniBox">
                  <div className="moniImage">
                    <img className="moni_icon" src={Moni3} alt="" />
                  </div>
                  <div className="moni_heading">
                    <p className="moni_p">{t("Mise en ligne")}</p>
                  </div>
                </div>
                <div className="lineIm2"></div>
              </Grid>
              <Grid item xs={2.3}>
                <div className="lineImg3"></div>
                <div className="moniBox">
                  <div className="moniImage">
                    <img className="moni_icon" src={Moni4} alt="" />
                  </div>
                  <div className="moni_heading">
                    {/* <h3 className="moni_h3">{t("on-line")}</h3> */}
                    <p className="moni_p">{t("Suivi des performances")}</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={2.3}>
                <div className="lineImg3"></div>
                <div className="moniBox">
                  <div className="moniImage">
                    <img className="moni_icon" src={Moni5} alt="" />
                  </div>
                  <div className="moni_heading">
                    <p className="moni_p">{t("Gains mensuels ")}</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          {/* // */}
        </Box>
      </div>
      <div className="monibutton">
        <button onClick={showPopup} className="moniBTN">
          Monétisez vos compétences
        </button>
      </div>
    </>
  );
};

export default Monitization;
