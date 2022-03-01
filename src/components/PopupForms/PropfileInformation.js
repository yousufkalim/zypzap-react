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
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        className="userProfile-box"
        open={openProfile}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="userProfile_conteiner">
          {/* heading div */}
          <div className="userProfile_heading">
            <h2 className="userProfileH1">Profile Information</h2>
            <p className="userProfileP">Input your details</p>
          </div>
          {/* heading div */}
          {/* upload image div */}
          <div className="userProfile-uploadData">
            <div>
              <label>
                <input
                  style={{
                    display: "none",
                    cursor: "none",
                  }}
                  type="file"
                  // accept="image/*"
                  // placeholder="Ref."
                  // onChange={handleImageSelect}
                  // onClick={(event) => {
                  //   event.target.value = null;
                  // }}
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
          {/* upload image div */}
          {/* tage div */}
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
          {/* tage div */}
          {/* group button */}
          <div className="userButtonGroup">
            <p className="userButton-heading">Game type</p>
            <div className="allButtons">
              <button className="userTagsAllButton">Action</button>
              <button className="userTagsAllButton">Adventure</button>
              <button className="userTagsAllButton">Multiplayer game</button>
              <button className="userTagsAllButton">Car Racing</button>
              <button className="userTagsAllButton">FPS</button>
              <button className="userTagsAllButton">Simulation</button>
              <button className="userTagsAllButton">Sports</button>
              <button className="userTagsAllButton">Puzzle</button>
              <button className="userTagsAllButton">RPG</button>
              <button className="userTagsAllButton">RTS</button>
              <button className="userTagsAllButton">Car Racing</button>
            </div>
          </div>
          {/* group button */}
          {/* group button2 */}
          <div className="userButtonGroup">
            <p className="userButton-heading">Gaming Plateforms</p>
            <div className="allButtons2">
              <button className="userTagsAllButton">Retro Consoles</button>
              <button className="userTagsAllButton">PS1/2/3/4/5</button>
              <button className="userTagsAllButton">Xbox/360/One/X</button>
              <button className="userTagsAllButton">Mobile Games</button>
              <button className="userTagsAllButton">Portable Consoles</button>
              <button className="userTagsAllButton">PC</button>
            </div>
          </div>
          {/* group button2 */}
          {/* gaming mood */}
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
          {/* gaming mood */}
          {/* select input div */}
          <div>
            <label for="Learning">Learning Rhythm</label>
          </div>
          <div className="userProfileSelectInput2">
            <br />

            <select id="Select">
              <option value="volvo" className="selectInput-option">
                Per Week
              </option>
              <option value="saab">Per Month</option>
              <option value="mercedes">Per Year</option>
              {/* <option value="audi">Select</option> */}
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
              {/* <option value="audi">Select</option> */}
            </select>
          </div>
          {/* select input div */}
          {/* select input div */}
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
              {/* <option value="saab">Medium</option> */}
              <option value="mercedes">initial</option>
              <option value="audi">pro</option>
            </select>
          </div>
          {/* select input div */}
          {/* select input div */}
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
              {/* <option value="saab">Pro</option> */}
              <option value="mercedes">Initial</option>
              <option value="audi">Pro</option>
            </select>
          </div>
          {/* select input div */}
          <button className="userProfileButton">Continue</button>
        </div>
      </Dialog>
    </div>
  );
}

// export default PropfileInformation;
