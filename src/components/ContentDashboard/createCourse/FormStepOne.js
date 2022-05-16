import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
// import Select from "@mui/material/Select";
import Select from "react-select";
import { toast } from "react-toastify";
const FormStepone = ({ step, setStep, formDataOne, setformDataOne, games }) => {
  const [game, setGame] = useState(games ? games : []);
  const {
    course_name,
    gameName,
    gameLevel,
    gameType,
    gameMood,
    gamePlateForm,
    description,
  } = formDataOne;
  useEffect(() => {
    setGame(games ? games : []);
    setformDataOne({
      ...formDataOne,
      ["gameName"]: games[0]._id,
    });
  }, []);
  const chnageEvent = (e) => {
    setformDataOne({
      ...formDataOne,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    if (course_name === "") {
      return toast.error("Veuillez saisir le nom de votre cours");
    }
    if (gameName === "") {
      return toast.error("Veuillez entrer votre nom du jeu");
    }
    if (gameLevel === "") {
      return toast.error("Veuillez saisir le nom de votre niveau de jeu");
    }
    if (gameType === "") {
      return toast.error("Veuillez entrer votre type de jeu");
    }
    if (gameMood === "") {
      return toast.error("Veuillez entrer votre ambiance de jeu");
    }
    if (gamePlateForm === "") {
      return toast.error(
        "Veuillez saisir le nom de votre forme de plateau de jeu"
      );
    }
    if (description === "") {
      return toast.error("Veuillez entrer votre description");
    }
    setStep(2);
  };
  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <h2 className="coursedetail1">Course Details </h2>
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
                    placeholder="Learn how to play minacraft"
                    value={course_name}
                    name="course_name"
                    onChange={chnageEvent}
                  />
                </div>
              </Grid>
            </div>
            <Grid xs={12} sm={6}>
              <div>
                <p className="stepLabel">Game Name</p>
                <select
                  id="gameName"
                  name="gameName"
                  className="coursInput"
                  value={gameName ? gameName : games[0]._id}
                  onChange={chnageEvent}
                >
                  {games?.map((g, index) => {
                    return (
                      <option value={g._id} className="setepOption">
                        {g.game_name}
                      </option>
                    );
                  })}
                </select>
                {/* <Select
                  name="gameName"
                  className="coursInput"
                  isMulti
                  className="form-control-alternative"
                  // defaultValue={["1", "2", "3"]}
                  options={games?.map((game) => ({
                    value: game?._id,
                    label: game.game_name,
                  }))}
                /> */}
              </div>
            </Grid>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}>
                <div>
                  <p className="stepLabel">Gameplay Level</p>
                  <select
                    id="gameLevel"
                    name="gameLevel"
                    className="stepSelect"
                    value={gameLevel}
                    onChange={chnageEvent}
                  >
                    <option value="Casual" className="setepOption">
                      select level
                    </option>
                    <option value="Casual" className="setepOption">
                      CASUAL
                    </option>
                    <option value="Confirmed" className="setepOption">
                      CONFIRMED
                    </option>
                    <option value="Hardcore" className="setepOption">
                      HARDCORE
                    </option>
                    <option value="Esporter" className="setepOption">
                      ESPORTER
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
                        select category
                      </option>
                      <option value="Action" className="setepOption">
                        ACTION
                      </option>
                      <option value="Adventure" className="setepOption">
                        ADVENTURE
                      </option>
                      <option value="Multiplayer game" className="setepOption">
                        MULTIPLAYER GAME
                      </option>
                      <option value="Car Racing" className="setepOption">
                        CAR RACING
                      </option>
                      <option value="FPS" className="setepOption">
                        FPS
                      </option>
                      <option value="Simulation" className="setepOption">
                        SIMULATION
                      </option>
                      <option value="Sports" className="setepOption">
                        SPORTS
                      </option>
                      <option value="Puzzle" className="setepOption">
                        PUZZLE
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
                        Select Mode
                      </option>
                      <option value="Single" className="setepOption">
                        SINGLE
                      </option>
                      <option value="Multiplayer" className="setepOption">
                        MULTIPLAYER
                      </option>
                      <option value="Both" className="setepOption">
                        BOTH
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
                      {/* <option value="Mobile Games" className="setepOption">
                        MOBILE GAMES
                      </option> */}
                      <option value="Retro Consoles" className="setepOption">
                        Retro Consoles
                      </option>
                      <option value="PS1/2/3/4/5" className="setepOption">
                        PS1/2/3/4/5
                      </option>
                      <option value="Xbox/360/One/X" className="setepOption">
                        XBOX/360/ONE/X
                      </option>

                      <option value="Portable Consoles" className="setepOption">
                        PORTABLE CONSOLE
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
          Course Description
        </label>
        <textarea
          name="description"
          id=""
          cols="200"
          rows="20"
          placeholder="300 Characters Maximum"
          className="courstexarea"
          value={description}
          onChange={chnageEvent}
        ></textarea>
        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          {/* <button
            className="drafBtn"
            style={{ background: "none", border: "1px solid #662F88" }}
          >
            Previous
          </button> */}
          <button onClick={handleContinue} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};
export default FormStepone;
