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
    gamedetails,
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
        <p>Step {step}/6</p>
        <h2 className="coursedetail1">Course Details</h2>
        <div className="hrLine1" />
        <div className="courseDivContainer">
          {/* /* -------------------------------- main div --------------------------------  */}

          <div className="courseDiv">
            <div className="step_container">
              <Grid xs={12} sm={6}>
                <div>
                  <p className="stepLabel">Course Title </p>
                  <input
                    type="text"
                    className="coursInput"
                    placeholder="learn how to play minacraft"
                    value={gamedetails}
                    name="gamedetails"
                    onChange={chnageEvent}
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
                    <option value="inital Level" className="setepOption">
                      Initial
                    </option>
                    <option value="medium Level" className="setepOption">
                      Medium
                    </option>
                    <option value="Advance Level" className="setepOption">
                      Pro
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
                      <option value="Action" className="setepOption">
                        Action
                      </option>
                      <option value="Adventure" className="setepOption">
                        Adventure
                      </option>
                      <option value="Multiplayer game" className="setepOption">
                        Multiplayer game
                      </option>
                      <option value="Car Racing" className="setepOption">
                        Car Racing
                      </option>
                      <option value="FPS" className="setepOption">
                        FPS
                      </option>
                      <option value="Simulation" className="setepOption">
                        Simulation
                      </option>
                      <option value="Sports" className="setepOption">
                        Sports
                      </option>
                      <option value="Puzzle" className="setepOption">
                        Puzzle
                      </option>
                      <option value="RPG" className="setepOption">
                        RPG
                      </option>
                      <option value="RTS" className="setepOption">
                        RTS
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
                      <option value="Single" className="setepOption">
                        Single
                      </option>
                      <option value="Multiplayer" className="setepOption">
                        Multiplayer
                      </option>
                      <option value="Both" className="setepOption">
                        Both
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
                      <option value="Retro Consoles" className="setepOption">
                        Retro Consoles
                      </option>
                      <option value="PS1/2/3/4/5" className="setepOption">
                        PS1/2/3/4/5
                      </option>
                      <option value="Xbox/360/One/X" className="setepOption">
                        Xbox/360/One/X
                      </option>
                      <option value="Mobile Games" className="setepOption">
                        Mobile Games
                      </option>
                      <option value="Portable Consoles" className="setepOption">
                        Portable Consoles
                      </option>
                      <option value="PC" className="setepOption">
                        PC
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
          <button onClick={() => setStep(2)} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepone;
