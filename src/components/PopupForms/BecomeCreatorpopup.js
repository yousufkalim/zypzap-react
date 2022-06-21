import React, { useState, useEffect } from "react";
import Select from "react-select";
import Dialog from "@mui/material/Dialog";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useHistory } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { TextField, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import api from "../../api";
import Course1 from "../../assets/img/course1.png";
import { toast } from "react-toastify";
import ClearIcon from "@mui/icons-material/Clear";
import { Store, UpdateStore } from "../../StoreContext";

// import BecomeCreatorpopup from "./PopupForms/BecomeCreatorpopup";

const BecomeCreatorpopup = ({
  open,
  setOpen,
  user,
  creator,
  setOpen3,
  setOpen2
}) => {
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
  const history = useHistory();
  const updateStore = UpdateStore();
  const [values, setValues] = useState([]);
  const [profile_photo, setImageURL] = useState(
    user?.profile_photo ? user.profile_photo : Course1
  );
  const [favouritGame, setFavouritGame] = useState(user?.expertiseGame || []);
  const [gameType, setGameType] = useState(user?.gameType ? user.gameType : []);
  const [plateForm, setPlateForm] = useState(
    user?.plateForm ? user.plateForm : []
  );
  const [gameMood, setGameMood] = useState(
    user?.gameMood ? user.gameMood : "Single"
  );

  useEffect(() => {
    setCurrentSate();
  }, [user]);

  const handleClose = () => {
    setOpen(false);
  };
  const setCurrentSate = () => {
    setImageURL(user?.profile_photo ? user.profile_photo : Course1);
    setFavouritGame(user?.expertiseGame || []);
    setGameType(user?.gameType ? user.gameType : []);
    setPlateForm(user?.plateForm ? user.plateForm : []);
    setGameMood(user?.gameMood ? user.gameMood : "Single");
  };

  const onChangeRadioBtn = (e) => {
    const value = e.target.value;
    setGameMood(e.target.value);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const removeTagsPlateForm = (index) => {
    setPlateForm([
      ...plateForm.filter((tag) => plateForm.indexOf(tag) !== index)
    ]);
  };
  const selectplateForm = (e) => {
    if (e.target.className === "activetypebtn") {
      setPlateForm((prev) => {
        return prev.filter((a) => a !== e.target.value);
      });
    } else {
      if (!plateForm) {
        setPlateForm(e.target.value);
      } else {
        const data = [...plateForm, e.target.value];
        setPlateForm(data);
      }
    }
  };
  const selectGameType = (e) => {
    if (e.target.className === "activetypebtn") {
      setGameType((prev) => {
        return prev.filter((a) => a !== e.target.value);
      });
    } else {
      if (!gameType) {
        setGameType(e.target.value);
      } else {
        const data = [...gameType, e.target.value];
        setGameType(data);
      }
    }
  };

  const submitProfile = async (e) => {
    if (
      favouritGame === "" &&
      gameType === "" &&
      plateForm === "" &&
      gameMood === ""
    ) {
      return toast.error("Veuillez saisir le nom de votre cours");
    } else {
      const formdata = {
        expertiseGame: favouritGame,
        profile_photo,
        gameType: gameType,
        plateForm: plateForm,
        gameMood: gameMood
      };

      if (user) {
        let res = await api("post", `/creators/${user?._id}`, formdata);

        if (res) {
          updateStore({
            user: res?.data?.newUsers,
            creator: res?.data?.creator
          });
          setOpen(false);
          history.push("/contentHome");
          // setOpen2(true);
          // window.location.reload();
        }
      } else {
        setOpen3(true);
      }
    }
  };

  let gametypebtn = [
    "Action",
    "Adventure",
    "Metaverse",
    "Massively Multiplayer Games",
    "Car Racing",
    "FPS",
    "RTS",
    "RPG",
    "Turn by Turn Strategy",
    "Simulation",
    "Sports",
    "Trading card",
    "Puzzle",
    "Versus Fighting",
    "Trading card and Board games"
  ];
  const gamePlateform = [
    "PC",
    "Mobile Games",
    "PS1/2/3/4/5",
    "Xbox/360/One/X",
    "Retro Consoles",
    "Portable Consoles"
  ];

  const handleImageSelect = async (e) => {
    const formdata = new FormData();
    formdata.append(`files`, e.target.files[0]);
    let res = await api("post", "/uploadImage", formdata);
    if (res) setImageURL(res.data.file[0].location);
  };
  const getAllGames = async (e) => {
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
    <>
      <Dialog open={open} className="login_data">
        <div className="userProfile_conteiner">
          <ClearIcon className="subsclearIcon" onClick={handleClose} />
          <div className="userProfile_heading">
            <h2 className="userProfileH1">Profile Information</h2>
            <p className="userProfileP">Input your details</p>
          </div>
          {/* <div className="userProfile-uploadData">
            <div>
              <label>
                <input
                  style={{
                    display: "none",
                    cursor: "none"
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
              <p className="tags-input-FGames">Expertise Games</p>
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
            <p className="userButton-heading">Expertise Game type</p>
            <div className="allButtons">
              <>
                {gametypebtn.map((tag) => {
                  return (
                    <button
                      className={
                        gameType?.includes(tag)
                          ? "activetypebtn"
                          : "userTagsAllButton"
                      }
                      value={tag}
                      onClick={selectGameType}
                    >
                      {tag}
                    </button>
                  );
                })}
              </>
            </div>
          </div>
          <div className="userButtonGroup">
            <p className="userButton-heading">Expertise Gaming Plateforms</p>
            <div className="allButtons2">
              {gamePlateform.map((tag, i) => {
                return (
                  <button
                    key={i}
                    className={
                      plateForm?.includes(tag)
                        ? "activetypebtn"
                        : "userTagsAllButton"
                    }
                    value={tag}
                    onClick={selectplateForm}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="userProfileGamingMode">
            <FormControl>
              <p className="gamingModeP">Expertise Gaming Mode</p>
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
                    label="Single Mode"
                    onClick={onChangeRadioBtn}
                  />
                  <FormControlLabel
                    value="MultiPlayer"
                    control={<Radio />}
                    label="MultiPlayer Mode"
                    onClick={onChangeRadioBtn}
                  />
                  <FormControlLabel
                    value="Both"
                    control={<Radio />}
                    label="Both"
                    onClick={onChangeRadioBtn}
                  />
                </RadioGroup>
              </div>
            </FormControl>
          </div>
          <button className="userProfileButton" onClick={submitProfile}>
            Continue
          </button>
          {/* <button className="backBTN" onClick={handleClose}>
            Back
          </button>{" "} */}
        </div>
      </Dialog>
    </>
  );
};

// export default LoginDetail;
export default BecomeCreatorpopup;
