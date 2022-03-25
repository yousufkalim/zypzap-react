import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Dialog from "@mui/material/Dialog";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useHistory } from "react-router-dom";
import api from "../../api";
import { Store, UpdateStore } from "../../StoreContext";
const gameType = [
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
  "Sport",
  "Trading card",
  "Puzzle",
  "Versus Fighting",
  "Trading card and Board games",
];
const gamePlateform = [
  "PC",
  "Mobile Games",
  "PS1/2/3/4/5",
  "Xbox/360/One/X",
  "Retro Consoles",
  "Portable Consoles",
  "Tablet",
];
const BecomeCreatorpopup = ({ open, setOpen, games }) => {
  const history = useHistory();
  const updateStore = UpdateStore();
  const { user, creator } = Store();
  const [loading, setLoading] = useState(false);
  const [gameyouaregoodat, setGameyouaregoodat] = useState();
  const [data, setData] = useState({
    plateForm: "",
    type: "",
    onlineTeaching: "",
    gameLevel: "",
    audience: "",
    gameMode: "",
  });
  const { plateForm, type, onlineTeaching, gameLevel, audience, gameMode } =
    data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setData({
      gameyouaregoodat: "",
      onlineTeaching: "",
      gameLevel: "",
      audience: "",
    });
    setOpen(false);
  };

  const SubmitEvent = async (e) => {
    e.preventDefault();
    if (gameyouaregoodat == "") {
      return toast.error("Enter game you are good at");
    }
    if (data.onlineTeaching == "") {
      return toast.error("select any online teaching option");
    }
    if (data.gameLevel == "") {
      return toast.error("select your game level");
    }
    if (data.audience == "") {
      return toast.error("select audience option");
    }
    if (!user) {
      return toast.error("Please login first");
    }
    let formdata = {
      gameyouaregoodat,
      onlineTeaching: onlineTeaching == "yes" ? true : false,
      gameLevel,
      audience,
      gameMode,
      type,
      plateForm,
    };
    try {
      let res = await api("post", `/creators/${user?._id}`, formdata);
      if (res) {
        window.location.reload();
        setOpen(false);
        setLoading(false);
        history.push("/contenthome");
      }
      window.location.reload();
    } catch (error) {
      setLoading(false);
    }
  };
  const handleGameName = (e) => {
    setGameyouaregoodat(e.target.value);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} className="login_data">
        <div className="login_Details">
          <div className="Details_container">
            <h1 className="detailH1">Creator Details</h1>
            <p className="detail_pera">Input your expertise here</p>
            <form action="" onSubmit={SubmitEvent}>
              <label htmlFor="text" className="teachP">
                Expertise Games
              </label>
              <select
                id=""
                name="gameyouaregoodat"
                className="detailInput"
                placeholder="e.g. CS-GO"
                value={gameyouaregoodat}
                onChange={handleGameName}
                style={{ background: "#1D1F38" }}
              >
                {games?.map((game) => {
                  return (
                    <>
                      <option value={game._id}>{game.game_name}</option>
                    </>
                  );
                })}
              </select>

              <label htmlFor="text" className="teachP">
                Expertise Game Type
              </label>
              <select
                id=""
                className="detailInput"
                placeholder="e.g. CS-GO"
                name="type"
                value={data.type}
                onChange={handleChange}
                style={{ background: "#1D1F38" }}
              >
                {gameType?.map((type) => {
                  return (
                    <>
                      <option value={type}>{type}</option>
                    </>
                  );
                })}
              </select>
              <label htmlFor="text" className="teachP">
                Expertise Gaming Platform
              </label>
              <select
                id=""
                className="detailInput"
                placeholder="e.g. CS-GO"
                onChange={handleChange}
                name="plateForm"
                value={data.plateForm}
                style={{ background: "#1D1F38" }}
              >
                {gamePlateform?.map((type) => {
                  return (
                    <>
                      <option value={type}>{type}</option>
                    </>
                  );
                })}
              </select>
              <FormLabel
                component="legend"
                style={{ color: "#fff" }}
                className="labelP"
              >
                Expertise Gaming Mode
              </FormLabel>
              <RadioGroup
                row
                aria-label="circle"
                className="cirleInput"
                name="gameMode"
                value={data.gameMode}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Single"
                  control={<Radio style={{ fontSize: "10px" }} />}
                  label="Single mode"
                />
                <FormControlLabel
                  value="Multiplayer"
                  control={<Radio />}
                  label="Multiplayer mode"
                />
                <FormControlLabel
                  value="Both"
                  control={<Radio />}
                  label="Both "
                />
              </RadioGroup>

              <FormLabel
                component="legend"
                style={{ color: "#fff" }}
                className="labelP"
              >
                Have you done online teaching before
              </FormLabel>
              <RadioGroup
                className="cInput"
                row
                aria-label="circle"
                name="onlineTeaching"
                value={data.onlineTeaching}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              <FormLabel
                component="legend"
                style={{ color: "#fff" }}
                className="labelP"
              >
                What is your gameplay level
              </FormLabel>
              <RadioGroup
                aria-label="circle"
                className="cirleInput"
                name="gameLevel"
                value={data.gameLevel}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="initial"
                  control={<Radio />}
                  label="Entry Level"
                />
                <FormControlLabel
                  value="medium"
                  control={<Radio />}
                  label="Intermediate Level"
                />
                <FormControlLabel
                  value="pro"
                  control={<Radio />}
                  label="Advance Level"
                />
              </RadioGroup>
              <FormLabel
                component="legend"
                style={{ color: "#fff" }}
                className="labelP"
              >
                Do you have any audience
              </FormLabel>
              <RadioGroup
                aria-label="circle"
                className="cirleInput"
                name="audience"
                value={data.audience}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="no"
                  control={<Radio style={{ fontSize: "10px" }} />}
                  label="No"
                />
                <FormControlLabel
                  value="Small"
                  control={<Radio />}
                  label="Small Audience"
                />
                <FormControlLabel
                  value="Huge"
                  control={<Radio />}
                  label="Huge Audience"
                />
              </RadioGroup>
              <button type="submit" className="contBTN">
                Continue
              </button>
            </form>
            <button className="backBTN" onClick={handleClose}>
              Back
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

// export default LoginDetail;
export default BecomeCreatorpopup;
