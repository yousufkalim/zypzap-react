import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import api from "../../api";
import Course1 from "../../assets/img/course1.png";
import { toast } from "react-toastify";
export default function PropfileInformation({
  openProfile,
  handleClose,
  user,
}) {
  const [profile_photo, setImageURL] = useState(
    user?.profile_photo ? user.profile_photo : Course1
  );
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
  const [playPeriod, setPlayPeriod] = useState(
    user?.prefrence_games?.play_period
      ? user.prefrence_games.play_period
      : "Per Week"
  );
  const [playTime, setPlayTime] = useState(
    user?.prefrence_games?.play_time_per_perioad
      ? user.prefrence_games.play_time_per_perioad
      : "2 Houre"
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
    setImageURL(user?.profile_photo ? user.profile_photo : Course1);
    setFavouritGame(
      user?.prefrence_games?.favourite_games
        ? user.prefrence_games.favourite_games
        : []
    );
    setGameType(user?.gameType ? user.gameType : []);
    setPlateForm(user?.plateForm ? user.plateForm : []);
    setGameMood(user?.gameMood ? user.gameMood : "Single");
    setPlayPeriod(
      user?.prefrence_games?.play_period
        ? user.prefrence_games.play_period
        : "Per Week"
    );
    setPlayTime(
      user?.prefrence_games?.play_time_per_perioad
        ? user.prefrence_games.play_time_per_perioad
        : "2 Houre"
    );
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
    setPlayPeriod(e.target.value);
  };
  const changePlayTimeHandler = (e) => {
    setPlayTime(e.target.value);
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
  const handleImageSelect = async (e) => {
    const formdata = new FormData();
    formdata.append(`files`, e.target.files[0]);
    let res = await api("post", "/uploadImage", formdata);
    setImageURL(res.data.file);
  };

  const submitProfile = async (e) => {
    const prefrence_games = {
      favourite_games: favouritGame,
      play_period: playPeriod,
      play_time_per_perioad: playTime,
      current_level: currentLevel,
      target_level: target_level,
    };
    const formdata = {
      profile_photo,
      prefrence_games,
      gameType,
      plateForm,
      gameMood,
    };
    if (
      (prefrence_games === "" ||
        gameType === "" ||
        plateForm === "" ||
        gameMood === "" ||
        target_level === "" ||
        currentLevel === "" ||
        playTime === "" ||
        playPeriod === "",
      favouritGame === "")
    ) {
    } else {
      if (user) {
        let res = await api(
          "put",
          `/users/addProfileInfo/${user._id}`,
          formdata
        );
        if (res) {
          toast.success("Modifier le profil avec succès");
          handleClose(true);
        }
      } else {
        toast.success("Profil non modifié");
      }
    }
  };

  let gametypebtn = [
    { name: "Action" },
    { name: "Adventure" },
    { name: "Multiplayer game" },
    { name: "Car Racing" },
    { name: "FPS" },
    { name: "Simulation" },
    { name: "Sports" },
    { name: "Puzzle" },
    { name: "RPG" },
    { name: "RTS" },
    { name: "Car Racing" },
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
    <div>
      <Dialog
        className="userProfile-box"
        open={openProfile}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="userProfile_conteiner">
          <div className="userProfile_heading">
            <h2 className="userProfileH1">Profile Information</h2>
            <p className="userProfileP">Input your details</p>
          </div>
          <div className="userProfile-uploadData">
            <div>
              <label>
                <input
                  style={{
                    display: "none",
                    cursor: "none",
                  }}
                  type="file"
                  accept="image/*"
                  // placeholder="Ref."
                  onChange={handleImageSelect}
                  onClick={(event) => {
                    event.target.value = null;
                  }}
                />
                <img
                  src={profile_photo ? profile_photo : Course1}
                  className="userProfileInput"
                />
              </label>
            </div>
            <div>
              <p className="uploadHeading">
                Upload
                <br />
                Picture
              </p>
            </div>
          </div>
          <div className="tags-input">
            <div>
              <p className="tags-input-FGames">Favorite Games</p>
            </div>
            <div className="tags-input-ul">
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
                  placeholder=""
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

            {/* <div className="gamingModeSelect">
              <Checkbox {...label} />

              <label for="Single"> Single Player Mode</label>
              <Checkbox {...label} style={{ marginLeft: "13px" }} />

              <label for="MultiPlayer"> MultiPlayer Mode</label>
            </div> */}
          </div>
          <div>
            <label for="Learning">Learning Rhythm</label>
          </div>
          <div className="userProfileSelectInput2">
            <br />
            <select
              id="Select"
              name="Select"
              onChange={changePlayPeriodHandler}
              className="selectInput-userProfile2"
            >
              <option value="Per Week" className="selectInput-option">
                {playPeriod}
              </option>
              <option value="Per Month">Per Month</option>
              <option value="Per Year">Per Year</option>
              {/* <option value="audi">Select</option> */}
            </select>

            <select
              id="Select"
              name="Select"
              onChange={changePlayTimeHandler}
              className="selectInput-userProfile2"
            >
              <option value="2 Houre" className="selectInput-option">
                {playTime}
              </option>

              <option value="4 Houre">4 Houre</option>
              <option value="6 Houre">6 Houre</option>
            </select>
          </div>
          <div className="userProfileSelectInput">
            <label for="Learning">Current Gameplay level</label>
            <br />
            <select
              id="Select"
              name="Select"
              onChange={changeCurrentLevelHandler}
              className="selectInput-userProfile"
              defaultValue={currentLevel}
            >
              <option value="medium" className="selectInput-option">
                Medium
              </option>

              {/* <option value="saab">Medium</option> */}
              <option value="initial">initial</option>
              <option value="pro">pro</option>
            </select>
          </div>
          <div className="userProfileSelectInput">
            <label for="Learning">Target Gameplay level</label>
            <br />

            <select
              id="Select"
              name="Select"
              onChange={changeTargetLevelHandler}
              className="selectInput-userProfile"
              defaultValue={target_level}
            >
              <option value="medium" className="selectInput-option">
                Initial
              </option>

              {/* <option value="saab">Pro</option> */}
              <option value="initial">Medium</option>
              <option value="pro">Pro</option>
            </select>
          </div>
          {/* select input div */}
          <button className="userProfileButton" onClick={submitProfile}>
            Continue
          </button>
        </div>
      </Dialog>
    </div>
  );
}
