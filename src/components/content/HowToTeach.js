import React from "react";
import Grid from "@material-ui/core/Grid";
import TeachPlan from "../../assets/TeachPlan.svg";
import HowToTeachBG from "../../assets/img/HowToTeachBG.svg";

const HowToTeach = () => {
  return (
    <>
      <div className="HowToTeach-container">
        <img src={HowToTeachBG} alt="" />
        <div className="getStartedContainer2">
          <p className="getStartedHeading2">How To Teach</p>
          <Grid container>
            <Grid item xs={12} md={6} sm={4}>
              <div className="Getstaredgrid12">
                <div className="leftdiv22">
                  <img src={TeachPlan} className="Getstarted22" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} sm={4}>
              <div className="Getstaredgrid22">
                <div className="StepMain2">
                  <div className="Stepper12">
                    <div className="Steppertitle12">
                      1<div className="Stepperline2"></div>
                    </div>
                    <p className="Stepperdisc2">Prepare your course</p>
                  </div>
                  <div>
                    {/* <p className="Steppera">
                    Many desktop publishing packages <br /> edditors now use
                    lorem ipsum <br /> and a search for
                  </p> */}
                  </div>
                  <div className="Stepper12">
                    <div className="Steppertitle12">
                      2<div className="Stepperline2"></div>
                    </div>
                    <p className="Stepperdisc2">Record your course</p>
                  </div>
                  <div className="Stepper12">
                    <div className="Steppertitle12">
                      3<div className="Stepperline2"></div>
                    </div>
                    <p className="Stepperdisc2">Edit your course</p>
                  </div>
                  <div className="Stepper12">
                    <div className="Steppertitle12">
                      4<div className="Stepperline2"></div>
                    </div>
                    <p className="Stepperdisc2">Pass the evaluation check</p>
                  </div>
                  <div className="Stepper12">
                    <div className="Steppertitle12">
                      5<div className="Stepperline2"></div>
                    </div>
                    <p className="Stepperdisc2">Set the price of your course</p>
                  </div>
                  <div>
                    {/* <p className="Steppera">
                    Many desktop publishing packages <br /> edditors now use
                    lorem ipsum <br /> and a search for
                  </p> */}
                  </div>
                  <div className="Stepper12">
                    <div className="Steppertitle12">6</div>
                    <p className="Stepperdisc2">Publish your course</p>
                  </div>
                  <div>
                    {/* <p className="Steppera">
                    Many desktop publishing packages <br /> edditors now use
                    lorem ipsum <br /> and a search for
                  </p> */}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="howTeachBtn">
            <button className="textonbutton">Create a Course</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HowToTeach;
