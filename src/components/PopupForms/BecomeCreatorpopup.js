import React, { useState, useEffect } from "react";
import Select from "react-select";
import Dialog from "@mui/material/Dialog";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useHistory } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import api from "../../api";
import Course1 from "../../assets/img/course1.png";
import { toast } from "react-toastify";
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
  const history = useHistory();
  const updateStore = UpdateStore();
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
    "Portable Consoles",
    "Tablet"
  ];

  const handleImageSelect = async (e) => {
    const formdata = new FormData();
    formdata.append(`files`, e.target.files[0]);
    let res = await api("post", "/uploadImage", formdata);
    if (res) setImageURL(res.data.file[0].location);
  };
  return (
    <>
      <Dialog open={open} className="login_data">
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
          </div>
          <div className="tags-input">
            <div>
              <p className="tags-input-FGames">Expertise Games</p>
            </div>
            <div className="tags-input-ul">
              <ul className="tags-input-ul2">
                {favouritGame.map((tag, index) => (
                  <li key={index} className="userProfileLi">
                    <span
                      style={{
                        border: "1px solide grey",
                        borderRadius: "2px",
                        padding: "5px",
                        paddingTop: "5px",
                        paddingBottom: "5px"
                      }}
                      className="userProfileLiSpan"
                    >
                      {tag}
                      <i
                        style={{
                          color: "white",
                          height: "50%",
                          marginLeft: "11px"
                        }}
                        class="fa-solid fa-xmark"
                        onClick={() => removeTags(index)}
                      ></i>
                    </span>
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
          <button className="backBTN" onClick={handleClose}>
            Back
          </button>{" "}
        </div>
      </Dialog>
    </>
  );
};

// export default LoginDetail;
export default BecomeCreatorpopup;
