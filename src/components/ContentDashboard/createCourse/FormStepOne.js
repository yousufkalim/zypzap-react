import React from "react";
import Grid from "@mui/material/Grid";

const FormStepone = ({ step, setStep, formDataOne, setformDataOne }) => {
  const chnageEvent = (e) => {
    setformDataOne({
      ...formDataOne,
      [e.target.name]: e.target.value,
    });
  };
  const {
    gameName,
    gameLevel,
    gameType,
    gameMood,
    gamePlateForm,
    description,
  } = formDataOne;
  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/3</p>
        <h2 className="coursedetail1">Course Details</h2>
        <div className="hrLine1" />
        <div className="courseDivContainer">
          {/* /* -------------------------------- main div --------------------------------  */}

          <div className="courseDiv">
            <div className="step_container">
              <Grid xs={12} sm={6}>
                <div>
                  <p className="stepLabel">Course Details </p>
                  <input
                    type="text"
                    className="coursInput"
                    placeholder="learn how to play minacraft"
                  />
                </div>
              </Grid>
            </div>
            <Grid xs={12} sm={6}>
              <div>
                <p className="stepLabel">Game Name</p>
                <input
                  type="text"
                  className="coursInput"
                  placeholder="PUBG GamePlay "
                  value={gameName}
                  name="gameName"
                  onChange={chnageEvent}
                />
              </div>
            </Grid>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}>
                <div>
                  <p className="stepLabel">Gameplay level</p>
                  <select
                    id="gameLevel"
                    name="gameLevel"
                    className="stepSelect"
                    value={gameLevel}
                    onChange={chnageEvent}
                  >
                    <option value="volvo" className="setepOption">
                      select level
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
          </div>
          {/* /* -------------------------------- main div --------------------------------  */}
          {/* /* -------------------------------- main div --------------------------------  */}
          <div></div>
          <div className="courseDiv">
            <Grid container spacing={2} className="step_container">
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}>
                  <div>
                    <p className="stepLabel">Game Type</p>
                    <select
                      id="gameType"
                      name="gameType"
                      className="stepSelect"
                      value={gameType}
                      onChange={chnageEvent}
                    >
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
                <Grid xs={12} sm={6}>
                  <div>
                    <p className="stepLabel">Gaming Mode</p>
                    <select
                      id="gameMood"
                      name="gameMood"
                      value={gameMood}
                      className="stepSelect"
                      onChange={chnageEvent}
                    >
                      <option value="volvo" className="setepOption">
                        Select Mode
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
                    <p className="stepLabel">Gaming Platform</p>
                    <select
                      id="gamePlateForm"
                      name="gamePlateForm"
                      className="stepSelect"
                      value={gamePlateForm}
                      onChange={chnageEvent}
                    >
                      <option value="volvo" className="setepOption">
                        Retro Consoles
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
            </Grid>
          </div>
          {/* /* -------------------------------- main div --------------------------------  */}
        </div>
        <label htmlFor="" className="stepLabel">
          Course description
        </label>
        <textarea
          name="description"
          id=""
          cols="200"
          rows="20"
          placeholder="300 characters maximum"
          className="courstexarea"
          value={description}
          onChange={chnageEvent}
        ></textarea>
        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          <button
            onClick={() => console.log("23456", formDataOne)}
            className="continueBtn"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepone;
