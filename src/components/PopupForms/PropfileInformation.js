import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
// import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import UserProfileIm from "../../assets/userProfileIm.png";

import api from "../../api";
import Course1 from "../../assets/img/course1.png";
import { Store, UpdateStore } from "../../StoreContext";

import Checkbox from "@mui/material/Checkbox";

export default function PropfileInformation({ openProfile, handleClose }) {
  // const [tags, setTags] = useState([]);
  const [profile_photo, setImageURL] = useState("");
  const [favouritGame, setFavouritGame] = useState([""]);
  const [gameType, setGameType] = useState([""]);
  const [plateForm, setPlateForm] = useState([""]);
  const [gameMood, setGameMood] = useState("");
  const [playPeriod, setPlayPeriod] = useState("");
  const [playTime, setPlayTime] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");
  const [target_level, setTargetLevel] = useState("");

  const updateStore = UpdateStore();
  const { user } = Store();
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
  const selectplateForm = (e) => {
    if (!plateForm) {
      setPlateForm(e.target.value);
    } else {
      const data = [...plateForm, e.target.value];
      setPlateForm(data);
    }
  };
  const selectGameType = (e) => {
    if (!gameType) {
      setGameType(e.target.value);
    } else {
      const data = [...gameType, e.target.value];
      setGameType(data);
    }
  };
  const handleImageSelect = async (e) => {
    const formdata = new FormData();
    formdata.append(`file`, e.target.files[0]);
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
      console.log("Form not Submit Because some information missing....");
    } else {
      if (user) {
        let res = await api(
          "put",
          `/users/addProfileInfo/${user._id}`,
          formdata
        );
        console.log("res", res);
      } else {
        console.log("Please Login !");
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
              <button
                className="userTagsAllButton"
                value="Action"
                onClick={selectGameType}
              >
                Action
              </button>
              <button
                className="userTagsAllButton"
                value="Adventure"
                onClick={selectGameType}
              >
                Adventure
              </button>
              <button
                className="userTagsAllButton"
                value="Multiplayer game"
                onClick={selectGameType}
              >
                Multiplayer game
              </button>
              <button
                className="userTagsAllButton"
                value="Car Racing"
                onClick={selectGameType}
              >
                Car Racing
              </button>
              <button
                className="userTagsAllButton"
                value="FPS"
                onClick={selectGameType}
              >
                FPS
              </button>
              <button
                className="userTagsAllButton"
                value="Simulation"
                onClick={selectGameType}
              >
                Simulation
              </button>
              <button
                className="userTagsAllButton"
                value="Sports"
                onClick={selectGameType}
              >
                Sports
              </button>
              <button
                className="userTagsAllButton"
                value="Puzzle"
                onClick={selectGameType}
              >
                Puzzle
              </button>
              <button
                className="userTagsAllButton"
                value="RPG"
                onClick={selectGameType}
              >
                RPG
              </button>
              <button
                className="userTagsAllButton"
                value="RTS"
                onClick={selectGameType}
              >
                RTS
              </button>
              <button
                className="userTagsAllButton"
                value="Car Racing"
                onClick={selectGameType}
              >
                Car Racing
              </button>

              {gametypebtn.map((tegs) => (
                <button className="userTagsAllButton">{tegs.name}</button>
              ))}
            </div>
          </div>
          <div className="userButtonGroup">
            <p className="userButton-heading">Gaming Plateforms</p>
            <div className="allButtons2">
              <button
                className="userTagsAllButton"
                value="Retro Consoles"
                onClick={selectplateForm}
              >
                Retro Consoles
              </button>
              <button
                className="userTagsAllButton"
                value="PS1/2/3/4/5"
                onClick={selectplateForm}
              >
                PS1/2/3/4/5
              </button>
              <button
                className="userTagsAllButton"
                value="Xbox/360/One/X"
                onClick={selectplateForm}
              >
                Xbox/360/One/X
              </button>
              <button
                className="userTagsAllButton"
                value="Mobile Games"
                onClick={selectplateForm}
              >
                Mobile Games
              </button>
              <button
                className="userTagsAllButton"
                value="Portable Consoles"
                onClick={selectplateForm}
              >
                Portable Consoles
              </button>
              <button
                className="userTagsAllButton"
                value="PC"
                onClick={selectplateForm}
              >
                PC
              </button>

              {gametypebtn2.map((tegs2) => (
                <button className="userTagsAllButton">{tegs2.name}</button>
              ))}
            </div>
          </div>
          <div className="userProfileGamingMode">
            <p className="gamingModeP">Favorite gaming mode</p>
            <div className="gamingModeSelect">
              <form>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeRadioBtn}
                    id="Single"
                    name="active"
                    value="Single"
                  />
                  <label for="Single">Single mode</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeRadioBtn}
                    id="Multiplayer"
                    name="active"
                    value="Multiplayer"
                  />
                  <label for="Multiplayer">Multiplayer mode</label>
                </div>
              </form>

              <Checkbox {...label} />

              <label for="vehicle1"> Single Player Mode</label>
              <Checkbox {...label} style={{ marginLeft: "13px" }} />

              <label for="vehicle2"> MultiPlayer Mode</label>
            </div>
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
                Per Week
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
                2 Houre
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
            >
              <option value="medium" className="selectInput-option">
                Medium
              </option>

              {/* <option value="saab">Pro</option> */}
              <option value="initial">Initial</option>
              <option value="pro">Pro</option>
            </select>
          </div>
          {/* select input div */}
          <button className="userProfileButton" onClick={submitProfile}>
            Continue
          </button>
        </div>
        <button className="userProfileButton">Continue</button>
      </Dialog>
    </div>
  );
}
