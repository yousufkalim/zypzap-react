import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Select from "react-select";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";

const FormStepone = ({ step, setStep, formDataOne, setformDataOne }) => {
  const [values, setValues] = useState([]);

  const {
    course_name,
    gameName,
    selectedGamename,
    gameLevel,
    gameType,
    gameMood,
    gamePlateForm,
    description
  } = formDataOne;

  const chnageEvent = (e) => {
    setformDataOne({
      ...formDataOne,
      [e.target.name]: e.target.value
    });
  };
  const useStyles = makeStyles({
    customTextField: {
      "& input": { color: "white" },
      "&:hover": {
        border: "red !important"
      },
      "& input::placeholder": {
        color: "white",
        "@media (max-width: 780px)": {
          paddingLeft: "-2px"
        }
      }
    },
    option: {
      background: "#242635 ",
      color: "white",
      "&:hover": {
        backgroundColor: "#9198a5 !important"
      }
    },
    noOptions: {
      display: `${"inherit"}`,
      color: "white"
    }
  });
  const classes = useStyles();

  const handleContinue = () => {
    if (course_name === "") {
      return toast.error("Veuillez saisir le nom de votre cours");
    }
    if (selectedGamename === "") {
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
  const getAllGames = async (e) => {
    console.log("e isss", e.target.value);
    setformDataOne({
      ...formDataOne,
      [e.target.name]: e.target.value
    });

    let res = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_GAME_API}=` +
        e.target.value +
        "&page=1&page_size=10",
      {
        withCredentials: false
      }
    );
    console.log("res is ,", res?.data?.results);

    var gamesToSet = []; // //debugger;
    for (var i = 0; i < res?.data?.results?.length; i++) {
      gamesToSet.push({
        id: i,
        label: res?.data?.results[i].name,

        img: res?.data?.results[i].background_image
      });
    }
    if (gamesToSet.length === res?.data?.results.length) {
      setValues(gamesToSet);
    }
  };

  // Set selected game in  setAddressValue State
  const setGamefiled = async (item) => {
    if (item.target.textContent) {
      const selectedItem = item.target.textContent;
      for (var i = 0; i < values.length; i++) {
        if (values[i].label === selectedItem) {
          var label = values[i].label;
          var img = values[i].img;

          const city = values[i].city;
          setformDataOne({
            ...formDataOne,
            ["selectedGamename"]: values[i].label
          });
        }
      }
    } else {
      await setformDataOne({
        ...formDataOne,
        ["selectedGamename"]: values[i].label
      });
    }
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
                {/* <select
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
                </select> */}
                <Autocomplete
                  options={values}
                  classes={{
                    option: classes.option
                  }}
                  className="coursInputAutofiled"
                  noOptionsText={
                    <div style={{ color: "white", fontSize: "12px" }}>
                      {" "}
                      no option{" "}
                    </div>
                  }
                  PaperComponent={({ children }) => (
                    <Paper style={{ background: "#242635" }}>{children}</Paper>
                  )}
                  getOptionLabel={(option) => option.label || ""}
                  onChange={setGamefiled}
                  hiddenLabel="true"
                  style={{
                    margin: "auto"
                  }}
                  renderInput={(params) => (
                    <TextField
                      classes={{ root: classes.customTextField }}
                      {...params}
                      placeholder="Game Name"
                      style={{ color: "white" }}
                      variant="outlined"
                      onChange={getAllGames}
                      value={gameName}
                      name="gameName"
                    />
                  )}
                />
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
                      Select Level
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
                        Select Sategory
                      </option>
                      <option value="Action" className="setepOption">
                        Action
                      </option>
                      <option value="Adventure" className="setepOption">
                        Adventure
                      </option>
                      <option value="Metaverse" className="setepOption">
                        MetaVerse
                      </option>
                      <option value="MMOG" className="setepOption">
                        MMOG
                      </option>
                      <option value="Car Racing" className="setepOption">
                        Car Racing
                      </option>
                      <option value="Versus Fighting" className="setepOption">
                        Versus Fighting
                      </option>
                      <option value="FPS" className="setepOption">
                        FPS
                      </option>
                      <option value="RTS" className="setepOption">
                        RTS
                      </option>
                      <option value="RPG" className="setepOption">
                        RPG
                      </option>
                      <option
                        value="Turn by Turn Strategy"
                        className="setepOption"
                      >
                        Turn by Turn Strategy
                      </option>
                      <option value="Simulation" className="setepOption">
                        Simulation
                      </option>
                      <option value="Sports" className="setepOption">
                        Sport
                      </option>
                      <option value="Trading Card" className="setepOption">
                        Trading Card
                      </option>
                      <option value="Puzzle" className="setepOption">
                        Puzzle
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
