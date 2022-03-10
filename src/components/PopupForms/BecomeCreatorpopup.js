import React, { useState } from "react";
import { toast } from "react-toastify";
import Dialog from "@mui/material/Dialog";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import api from "../../api";
import { Store, UpdateStore } from "../../StoreContext";

const BecomeCreatorpopup = ({ open, setOpen }) => {
  const updateStore = UpdateStore();
  const { user, creator } = Store();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    gameyouaregoodat: "",
    onlineTeaching: "",
    gameLevel: "",
    audience: "",
  });
  const { gameyouaregoodat, onlineTeaching, gameLevel, audience } = data;

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
    if (data.gameyouaregoodat == "") {
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
    };

    try {
      let res = await api("post", `/creators/${user?._id}`, formdata);
      console.log("res", res);
      if (res) {
        window.location.reload();
        setOpen(false);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
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
                Game you are goot at
              </label>
              <input
                className="detailInput"
                type="text"
                placeholder="e.g. CS-GO"
                name="gameyouaregoodat"
                value={data.gameyouaregoodat}
                onChange={handleChange}
              />
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
