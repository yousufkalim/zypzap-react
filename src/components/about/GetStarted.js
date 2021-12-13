import react from "react";
import Grid from "@material-ui/core/Grid";
import getstarted1 from "../../assets/img/getstarted1.png";
import getstarted2 from "../../assets/img/getstarted2.png";
import getstarted3 from "../../assets/img/getstarted3.png";
export default function GetStarted() {
  return (
    <>
      <div className="getStartedContainer">
        <p className="getStartedHeading">Get Started With Us</p>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={7}>
            <div className="Getstaredgrid1">
              <div className="leftdiv1">
                <img src={getstarted1} className="Getstarted1" alt="img" />
              </div>
              <div className="leftdiv2">
                <img src={getstarted2} className="Getstarted2" alt="img" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={5}>
            <div className="Getstaredgrid2">
              <div className="StepMain">
                <div className="Stepper1">
                  <div className="Steppertitle1">
                    1<div className="Stepperline"></div>
                  </div>
                  <p className="Stepperdisc">Login into Account</p>
                </div>
                <div className="Stepper1">
                  <div className="Steppertitle1">
                    2<div className="Stepperline0"></div>
                  </div>
                  <p className="Stepperdisc">
                    Select Account (User & Content Creater)
                  </p>
                </div>
                <div className="Stepper1">
                  <div className="Steppertitle1">3</div>
                  <p className="Stepperdisc">Teach & Learn </p>
                </div>
              </div>
              <div className="rightdiv">
                <img src={getstarted3} className="Getstarted3" alt="img" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
