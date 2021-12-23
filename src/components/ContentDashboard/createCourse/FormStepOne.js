import React from "react";
import Grid from "@mui/material/Grid";

const FormStepone = ({ step, setStep, setformDataOne }) => {
  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/3</p>
        <h2 className="coursedetail1">Course Details</h2>
        <div className="hrLine1" />
        <Grid container spacing={2} className="step_container">
          <Grid xs={12} sm={6}>
            <div>
              <p className="stepLabel">Course Title</p>
              <input
                type="text"
                className="coursInput"
                placeholder="learn how to play minacraft"
              />
            </div>
          </Grid>
          <Grid xs={12} sm={6}>
            <div>
              <p className="stepLabel">Course Title</p>
              {/* <input
                type="text"
                className="coursInput"
                placeholder="select category "
              /> */}
              <select id="cars" name="cars" className="stepSelect">
                <option value="volvo" className="setepOption">
                  select category
                </option>
                <option value="saab" className="setepOption">
                  Saab 95
                </option>
                <option value="mercedes" className="setepOption">
                  Mercedes SLK
                </option>
                <option value="audi" className="setepOption">
                  Audi TT
                </option>
              </select>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <div>
              <p className="stepLabel">Course Title</p>
              <select id="cars" name="cars" className="stepSelect">
                <option value="volvo" className="setepOption">
                  Enter a Game
                </option>
                <option value="saab" className="setepOption">
                  Saab 95
                </option>
                <option value="mercedes" className="setepOption">
                  Mercedes SLK
                </option>
                <option value="audi" className="setepOption">
                  Audi TT
                </option>
              </select>
            </div>
          </Grid>
          <Grid xs={12} sm={6}>
            <div>
              <p className="stepLabel">Course Title</p>
              <input type="text" className="coursInput" placeholder="Price" />
            </div>
          </Grid>
          <Grid xs={12} sm={6}>
            <div>
              <p className="stepLabel">Course Title</p>
              <select id="cars" name="cars" className="stepSelect">
                <option value="volvo" className="setepOption">
                  Select lavel
                </option>
                <option value="saab" className="setepOption">
                  Saab 95
                </option>
                <option value="mercedes" className="setepOption">
                  Mercedes SLK
                </option>
                <option value="audi" className="setepOption">
                  Audi TT
                </option>
              </select>
            </div>
          </Grid>
        </Grid>
        <label htmlFor="" className="stepLabel">
          Course description
        </label>
        <textarea
          name=""
          id=""
          cols="200"
          rows="20"
          placeholder="300 characters maximum"
          className="courstexarea"
        ></textarea>
        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          <button onClick={() => setStep(2)} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepone;
