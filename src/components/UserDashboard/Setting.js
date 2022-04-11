import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import api from "../../api";
import Course1 from "../../assets/img/course1.png";
import { toast } from "react-toastify";
import { Store, UpdateStore } from "../../StoreContext";
function Setting({ openProfile, setOpenProfile }) {
  const { user } = Store();
  const [favouritGame, setFavouritGame] = useState(
    user?.prefrence_games?.favourite_games
      ? user.prefrence_games.favourite_games
      : []
  );
  const [gameType, setGameType] = useState(user?.gameType ? user.gameType : []);
  const [plateForm, setPlateForm] = useState(
    user?.plateForm ? user.plateForm : []
  );
  const [gameMood, setGameMood] = useState(
    user?.gameMood ? user.gameMood : "Single"
  );
  const [learningRethem, setLearningRethem] = useState(
    user?.setLearningRethem ? user.setLearningRethem : ""
  );

  const [currentLevel, setCurrentLevel] = useState(
    user?.prefrence_games?.current_level
      ? user.prefrence_games.current_level
      : "initial"
  );
  const [target_level, setTargetLevel] = useState(
    user?.prefrence_games?.target_level
      ? user.prefrence_games.target_level
      : "initial"
  );
  useEffect(() => {
    setCurrentSate();
  }, [user]);
  const setCurrentSate = () => {
    console.log("user", user);
    setFavouritGame(
      user?.prefrence_games?.favourite_games
        ? user.prefrence_games.favourite_games
        : []
    );
    setGameType(user?.gameType ? user.gameType : []);
    setPlateForm(user?.plateForm ? user.plateForm : []);
    setGameMood(user?.gameMood ? user.gameMood : "Single");
    setLearningRethem(user?.setLearningRethem ? user.setLearningRethem : "");
    setCurrentLevel(
      user?.prefrence_games?.current_level
        ? user.prefrence_games.current_level
        : "initial"
    );
    setTargetLevel(
      user?.prefrence_games?.target_level
        ? user.prefrence_games.target_level
        : "initial"
    );
  };

  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setFavouritGame([...favouritGame, event.target.value]);
      event.target.value = "";
    }
  };
  const onChangeRadioBtn = (e) => {
    const value = e.target.value;
    setGameMood(e.target.value);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const removeTags = (index) => {
    setFavouritGame([
      ...favouritGame.filter((tag) => favouritGame.indexOf(tag) !== index),
    ]);
  };
  const changePlayPeriodHandler = (e) => {
    setLearningRethem(e.target.value);
  };

  const changeCurrentLevelHandler = (e) => {
    setCurrentLevel(e.target.value);
  };
  const changeTargetLevelHandler = (e) => {
    setTargetLevel(e.target.value);
  };
  const selectplateForm = (name) => {
    if (!plateForm) {
      setPlateForm(name);
    } else {
      const data = [...plateForm, name];
      setPlateForm(data);
    }
  };
  const selectGameType = (name) => {
    if (!gameType) {
      setGameType(name);
    } else {
      const data = [...gameType, name];
      setGameType(data);
    }
  };

  const submitProfile = async (e) => {
    const prefrence_games = {
      favourite_games: favouritGame,
      learningRethem: learningRethem,
      current_level: currentLevel,
      target_level: target_level,
    };
    const formdata = {
      prefrence_games,
      gameType,
      plateForm,
      gameMood,
    };
    if (
      prefrence_games === "" ||
      gameType === "" ||
      plateForm === "" ||
      gameMood === "" ||
      target_level === "" ||
      currentLevel === "" ||
      favouritGame === ""
    ) {
      return toast.error("Give your complete details!");
    } else {
      if (user) {
        let res = await api(
          "put",
          `/users/addProfileInfo/${user._id}`,
          formdata
        );
        if (res) {
          console.log("res", res);
          toast.success("Modifier le profil avec succès");
        }
      } else {
        toast.success("Profil non modifié");
      }
    }
  };

  let gametypebtn = [
    { name: "Action" },
    { name: "Adventure" },
    { name: "Metaverse" },
    { name: "MMOG" },
    { name: "Car Racing" },
    { name: "Versus Fighting" },
    { name: "FPS" },
    { name: "RTS" },
    { name: "RPG" },
    { name: "Simulation" },
    { name: "Turn By Turn Strategy" },
    { name: "Sport" },
    { name: "Tradung Card" },
    { name: "Puzzle" },
  ];
  let gametypebtn2 = [
    { name: "Retro Consoles" },
    { name: "PS1/2/3/4/5" },
    { name: "Xbox/360/One/X" },
    { name: "Mobile Games" },
    { name: "Portable Consoles" },
    { name: "PC" },
  ];

  return (
    <div className="dashboardSetting">
      <div className="userProfile_conteiner2">
        <div className="tags-input">
          <div>
            <p className="tags-input-FGames">Favorite Games</p>
          </div>
          <div className="tags-input-ul tags-input2 ">
            <ul className="tags-input-ul2">
              {favouritGame.map((tag, index) => (
                <li key={index} className="userProfileLi">
                  <i
                    className="material-icons"
                    onClick={() => removeTags(index)}
                  >
                    <span className="userProfileLiSpan">{tag}</span>
                  </i>
                </li>
              ))}
              <input
                className="userProfile_inputTags"
                type="text"
                onKeyUp={(event) => addTags(event)}
                placeholder="Add here..."
              />
            </ul>
          </div>
        </div>
        <div className="userButtonGroup">
          <p className="userButton-heading">Game type</p>
          <div className="allButtons">
            <>
              {gametypebtn.map((tag) => {
                return gameType?.includes(tag.name) ? (
                  <button
                    className="activetypebtn"
                    onClick={() => {
                      selectGameType(tag.name);
                    }}
                  >
                    {tag.name}
                  </button>
                ) : (
                  <button
                    className="userTagsAllButton"
                    onClick={() => {
                      selectGameType(tag.name);
                    }}
                  >
                    {tag.name}
                  </button>
                );
              })}
            </>
          </div>
        </div>
        <div className="userButtonGroup">
          <p className="userButton-heading">Gaming Plateforms</p>
          <div className="allButtons2">
            {gametypebtn2.map((tag, i) => {
              return plateForm?.includes(tag.name) ? (
                <button
                  key={i}
                  className="activetypebtn"
                  onClick={() => {
                    selectplateForm(tag.name);
                  }}
                >
                  {tag.name}
                </button>
              ) : (
                <button
                  key={i}
                  className="userTagsAllButton"
                  onClick={() => {
                    selectplateForm(tag.name);
                  }}
                >
                  {tag.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="userProfileGamingMode">
          <FormControl>
            <p className="gamingModeP">Favorite gaming mode</p>
            <div className="gamingModeSelect">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={gameMood}
                name="radio-buttons-group"
                style={{ display: "inline" }}
              >
                &nbsp; &nbsp;
                <FormControlLabel
                  value="Single"
                  control={<Radio />}
                  label="Single"
                  onClick={onChangeRadioBtn}
                />
                <FormControlLabel
                  value="MultiPlayer"
                  control={<Radio />}
                  label="MultiPlayer"
                  onClick={onChangeRadioBtn}
                />
              </RadioGroup>
            </div>
          </FormControl>
        </div>
        <div>
          <label for="Learning">Learning Rhythm</label>
        </div>
        <div className="userProfileSelectInput">
          <br />
          <select
            id="Select"
            name="Select"
            onChange={changePlayPeriodHandler}
            className="selectInput-userProfile selectInput2"
          >
            <option value="Per Week" className="selectInput-option">
              10h to 20h Per Week
            </option>
            <option value="Per Month">10h to 20h Per Week</option>
            <option value="Per Year">20h to 30h Per Week</option>
            <option value="Per Month">30h to 40h Per Week</option>
            <option value="Per Year">40h to 50h Per Week</option>
            <option value="Per Month">50h to 60h Per Week</option>
            <option value="Per Year">60h to 70h Per Week</option>
          </select>
        </div>
        <div className="userProfileSelectInput">
          <label for="Learning">Current Gameplay level</label>
          <br />
          <select
            id="Select"
            name="Select"
            onChange={changeCurrentLevelHandler}
            className="selectInput-userProfile selectInput2"
            defaultValue={currentLevel}
          >
            <option value="Casual" className="selectInput-option">
              Casual (5h - 7h Of Play Per Week)
            </option>
            <option value="Confirmed">
              Confirmed (8 Hours - 15 Hours Of Play Per Week)
            </option>
            <option value="Hardcore">
              Hardcore (16 Hours - 28 Hours Of Play Per Week)
            </option>
            <option value="Esporter">
              Esporter (More than 30 Hours Of Play Per Week)
            </option>
          </select>
        </div>
        <div className="userProfileSelectInput">
          <label for="Learning">Target Gameplay level</label>
          <br />

          <select
            id="Select"
            name="Select"
            onChange={changeTargetLevelHandler}
            className="selectInput-userProfile selectInput2"
            defaultValue={target_level}
          >
            <option value="Casual" className="selectInput-option">
              Casual (5h - 7h Of Play Per Week)
            </option>
            <option value="Confirmed">
              Confirmed (8 Hours - 15 Hours Of Play Per Week)
            </option>
            <option value="Hardcore">
              Hardcore (16 Hours - 28 Hours Of Play Per Week)
            </option>
            <option value="Esporter">
              Esporter (More than 30 Hours Of Play Per Week)
            </option>
          </select>
        </div>
        <button
          className="userProfileButton userProfileButton2"
          onClick={submitProfile}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Setting;
