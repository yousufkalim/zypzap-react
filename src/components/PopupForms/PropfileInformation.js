import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
// import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import UserProfileIm from "../../assets/userProfileIm.png";

export default function PropfileInformation({ openProfile, handleClose }) {
  const [tags, setTags] = React.useState([]);
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
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
                />
                <img src={UserProfileIm} className="userProfileInput" />
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
                {tags.map((tag, index) => (
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
              {gametypebtn.map((tegs) => (
                <button className="userTagsAllButton">{tegs.name}</button>
              ))}
            </div>
          </div>
          <div className="userButtonGroup">
            <p className="userButton-heading">Gaming Plateforms</p>
            <div className="allButtons2">
              {gametypebtn2.map((tegs2) => (
                <button className="userTagsAllButton">{tegs2.name}</button>
              ))}
            </div>
          </div>
          <div className="userProfileGamingMode">
            <p className="gamingModeP">Favorite gaming mode</p>
            <div className="gamingModeSelect">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                className="userProfileChackbox"
                value="Bike"
              />
              <label for="vehicle1"> Single Player Mode</label>
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
                className="userProfileChackbox2"
              />
              <label for="vehicle2"> MultiPlayer Mode</label>
            </div>
          </div>
          <div>
            <label for="Learning">Learning Rhythm</label>
          </div>
          <div className="userProfileSelectInput2">
            <br />

            <select id="Select" className="selectInput-userProfile2">
              <option value="volvo" className="selectInput-option">
                Per Week
              </option>
              <option value="saab">Per Month</option>
              <option value="mercedes">Per Year</option>
            </select>
            <select
              id="Select"
              name="Select"
              className="selectInput-userProfile2"
            >
              <option value="volvo" className="selectInput-option">
                2 Houre
              </option>
              <option value="saab">4 Houre</option>
              <option value="mercedes">6 Houre</option>
            </select>
          </div>
          <div className="userProfileSelectInput">
            <label for="Learning">Current Gameplay level</label>
            <br />
            <select
              id="Select"
              name="Select"
              className="selectInput-userProfile"
            >
              <option value="volvo" className="selectInput-option">
                Medium
              </option>
              <option value="mercedes">initial</option>
              <option value="audi">pro</option>
            </select>
          </div>
          <div className="userProfileSelectInput">
            <label for="Learning">Target Gameplay level</label>
            <br />
            <select
              id="Select"
              name="Select"
              className="selectInput-userProfile"
            >
              <option value="volvo" className="selectInput-option">
                Medium
              </option>
              <option value="mercedes">Initial</option>
              <option value="audi">Pro</option>
            </select>
          </div>
          <button className="userProfileButton">Continue</button>
        </div>
      </Dialog>
    </div>
  );
}
