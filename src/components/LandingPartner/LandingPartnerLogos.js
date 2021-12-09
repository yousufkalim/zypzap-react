import React from "react";
import Grid from "@mui/material/Grid";
import Ola from "../../assets/icons/ola.png";
import Walmart from "../../assets/icons/Walmart.png";
import Oye from "../../assets/icons/oye.png";
import Amazon from "../../assets/icons/amazone.png";
import Fedex from "../../assets/icons/Fedex.png";
// import Google from "../../assets/icons/Google.png";
const LandingPartnerLogos = () => {
  return (
    <>
      <div className="landing-partner-logo-container">
        <Grid container spacing={6}>
          <Grid md={2} sm={5} xs={5}>
            {/* <img
              className="landing-creator-logo-spacing landing-partner-fedex-img"
              src={Fedex}
            /> */}
            Fedex
          </Grid>
          <Grid md={2} sm={5} xs={5}>
            {/* <img className="landing-creator-logo-spacing" src={Google} /> */}
            Google
          </Grid>
          <Grid md={2} sm={5} xs={5}>
            {/* <img className="landing-creator-logo-spacing" src={Ola} /> */}
            Ola
          </Grid>
          <Grid md={2} sm={5} xs={5}>
            {/* <img className="landing-creator-logo-spacing" src={Walmart} /> */}
            Walmart
          </Grid>
          <Grid md={2} sm={5} xs={5}>
            {/* <img className="landing-creator-logo-spacing" src={Oye} /> */}
            OYO
          </Grid>
          <Grid md={2} sm={5} xs={5}>
            {/* <img className="landing-creator-logo-spacing" src={Amazon} /> */}
            Amazon
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default LandingPartnerLogos;
