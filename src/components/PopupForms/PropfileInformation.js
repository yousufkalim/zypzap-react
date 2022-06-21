import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import api from "../../api";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { TextField, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Course1 from "../../assets/img/course1.png";
import { toast } from "react-toastify";
import ClearIcon from "@mui/icons-material/Clear";
import { Store, UpdateStore } from "../../StoreContext";
export default function PropfileInformation({
  openProfile,
  setOpenProfile,
  user,
  setCongratulation
}) {
  const useStyles = makeStyles({
    customTextField: {
      "& input": {
        color: "white",
        border: "none"
      },
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
  const updateStore = UpdateStore();
  const [profile_photo, setImageURL] = useState(
    user?.profile_photo ? user.profile_photo : Course1
  );
  const [values, setValues] = useState([]);
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
    user?.prefrence_games?.learningRethem
      ? user.prefrence_games.learningRethem
      : "10h To 20h Per Week"
  );
  const [currentLevel, setCurrentLevel] = useState(
    user?.prefrence_games?.current_level
      ? user.prefrence_games.current_level
      : "initial"
  );
  const [LearningRhythm, setLearningRhythm] = useState(
    user?.learning_rhythm || "initial"
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
    setLearningRethem(
      user?.prefrence_games?.learningRethem
        ? user.prefrence_games.learningRethem
        : "Per Week"
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
      ...favouritGame.filter((tag) => favouritGame.indexOf(tag) !== index)
    ]);
  };

  const changeCurrentLevelHandler = (e) => {
    setCurrentLevel(e.target.value);
  };
  const ChangeLearningRhythm = (e) => {
    setLearningRhythm(e.target.value);
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
  const removePlatform = (name) => {
    setPlateForm((prev) => {
      return prev.filter((a) => a !== name);
    });
  };
  const selectGameType = (name) => {
    if (!gameType) {
      setGameType(name);
    } else {
      const data = [...gameType, name];
      setGameType(data);
    }
  };
  const removeGameType = (name) => {
    setGameType((prev) => {
      return prev.filter((a) => a !== name);
    });
  };

  const handleImageSelect = async (e) => {
    const formdata = new FormData();
    formdata.append(`files`, e.target.files[0]);
    let res = await api("post", "/uploadImage", formdata);
    setImageURL(res.data.file[0].location);
  };

  const submitProfile = async (e) => {
    const prefrence_games = {
      favourite_games: favouritGame,
      learningRethem: learningRethem,
      current_level: currentLevel,
      target_level: target_level
    };
    const formdata = {
      profile_photo,
      prefrence_games,
      gameType,
      plateForm,
      gameMood,
      LearningRhythm
    };
    if (
      prefrence_games === "" ||
      gameType === "" ||
      plateForm === "" ||
      gameMood === "" ||
      target_level === "" ||
      currentLevel === "" ||
      learningRethem === "" ||
      favouritGame === ""
    ) {
    } else {
      if (user) {
        let res = await api(
          "put",
          `/users/addProfileInfo/${user?._id}`,
          formdata
        );
        if (res) {
          updateStore({ user: res.data });
          setOpenProfile(false);
          setCongratulation(true);
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
    { name: "Sports" },
    { name: "Trading Card" },
    { name: "Puzzle" }
  ];
  let gametypebtn2 = [
    { name: "Retro Consoles" },
    { name: "PS1/2/3/4/5" },
    { name: "Xbox/360/One/X" },
    { name: "Mobile Games" },
    { name: "Portable Consoles" },
    { name: "PC" }
  ];
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const getAllGames = async (e) => {
    // setformDataOne({
    //   ...formDataOne,
    //   [e.target.name]: e.target.value
    // });

    let res = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_GAME_API}=` +
        e.target.value +
        "&page=1&page_size=10",
      {
        withCredentials: false
      }
    );

    var gamesToSet = []; // //debugger;
    for (var i = 0; i < res?.data?.results?.length; i++) {
      gamesToSet.push(res?.data?.results[i].name);
    }
    if (gamesToSet.length === res?.data?.results.length) {
      setValues(gamesToSet);
    }
  };
  // Set selected game in  setAddressValue State
  const setGamefiled = async (item, selectedItems, reason) => {
    setFavouritGame(selectedItems);
  };

  return (
    <div>
      <Dialog
        className="userProfile-box"
        open={openProfile}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="userProfile_conteiner">
          <div className="userProfile_heading">
            <ClearIcon
              className="clearIcon"
              onClick={() => setOpenProfile(false)}
              style={{ margin: "10px 0" }}
            />
            <h2 className="userProfileH1">Profile Information</h2>
            <p className="userProfileP">Input your details</p>
          </div>
          {/* <div className="userProfile-uploadData">
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
              <p className="uploadHeading">Upload Picture</p>
            </div>
          </div> */}
          <div className="tags-input">
            <div>
              <p className="tags-input-FGames">Favorite Games</p>
            </div>
            <div>
              <Autocomplete
                multiple
                options={values}
                classes={{
                  option: classes.option
                }}
                filterSelectedOptions
                popupIcon={null}
                disableClearable
                className="AutofiledgameExperties"
                noOptionsText={
                  <div
                    style={{
                      color: "white",
                      fontSize: "12px"
                    }}
                  >
                    {" "}
                    no option{" "}
                  </div>
                }
                PaperComponent={({ children }) => (
                  <Paper style={{ background: "#242635" }}>{children}</Paper>
                )}
                onChange={setGamefiled}
                hiddenLabel="true"
                style={{
                  margin: "auto"
                }}
                renderInput={(params) => (
                  <TextField
                    className="userProfile_inputTags"
                    type="text"
                    placeholder="Add here..."
                    classes={{ root: classes.customTextField }}
                    {...params}
                    style={{ color: "white" }}
                    // variant="outlined"
                    onChange={getAllGames}
                    sx={{
                      outline: "none",
                      width: "80%",
                      borderRadius: "6px"
                    }}
                    // value={gameName}
                    // name="gameName"
                  />
                )}
              />
            </div>
          </div>
          <div className="userButtonGroup">
            <p className="userButton-heading">Game Type</p>
            <div className="allButtons">
              <>
                {gametypebtn.map((tag) => {
                  return gameType?.includes(tag.name) ? (
                    <button
                      className="activetypebtn"
                      onClick={() => {
                        removeGameType(tag.name);
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
                      removePlatform(tag.name);
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
              <p className="gamingModeP">Favorite Gaming Mode</p>
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
                    label="Single Player Mode"
                    onClick={onChangeRadioBtn}
                  />
                  <FormControlLabel
                    value="MultiPlayer"
                    control={<Radio />}
                    label="MultiPlayer Mode"
                    onClick={onChangeRadioBtn}
                  />
                </RadioGroup>
              </div>
            </FormControl>
          </div>
          <div>
            <label
              for="Learning"
              style={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Mulish"
              }}
            >
              Learning Rhythm
            </label>
          </div>
          <div className="userProfileSelectInput2">
            <br />
            <select
              id="Select"
              name="Select"
              onChange={ChangeLearningRhythm}
              className="selectInput-userProfile2"
              style={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "Mulish"
              }}
            >
              <option
                value="10h To 20h Per Week"
                className="selectInput-option"
              >
                {learningRethem === "10h To 20h Per Week"
                  ? learningRethem
                  : "10h To 20h Per Week"}
              </option>
              <option value="20h To 30h Per Week">
                {learningRethem === "20h To 30h Per Week"
                  ? learningRethem
                  : "20h To 30h Per Week"}
              </option>
              <option value="30h To 40h Per Week">
                {learningRethem === "30h To 40h Per Week"
                  ? learningRethem
                  : "30h To 40h Per Week"}
              </option>
              <option value="40h To 50h Per Week">
                {learningRethem === "40h To 50h Per Week"
                  ? learningRethem
                  : "40h To 50h Per Week"}
              </option>
              <option value="50h To 60h Per Week">
                {learningRethem === "50h To 60h Per Week"
                  ? learningRethem
                  : "50h To 60h Per Week"}
              </option>
              <option value="60h To 70h Per Week">
                {learningRethem === "60h To 70h Per Week"
                  ? learningRethem
                  : "60h To 70h Per Week"}
              </option>
            </select>
          </div>
          <div className="userProfileSelectInput">
            <label
              for="Learning"
              style={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Mulish"
              }}
            >
              Current Gameplay Level
            </label>
            <br />
            <select
              id="Select"
              name="Select"
              onChange={changeCurrentLevelHandler}
              className="selectInput-userProfile"
              defaultValue={currentLevel}
              style={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "Mulish"
              }}
            >
              <option value="Casual" className="selectInput-option">
                Casual (5h - 7h Of Play Per Week)
              </option>

              {/* <option value="saab">Pro</option> */}
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
            <label
              for="Learning"
              style={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Mulish"
              }}
            >
              Target Gameplay Level
            </label>
            <br />

            <select
              id="Select"
              name="Select"
              onChange={changeTargetLevelHandler}
              className="selectInput-userProfile"
              defaultValue={target_level}
              style={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "Mulish"
              }}
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
          <button className="userProfileButton" onClick={submitProfile}>
            Continue
          </button>
        </div>
      </Dialog>
    </div>
  );
}
