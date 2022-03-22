import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";
import { toast } from "react-toastify";
import "../../css/form/contactez.css";
import api from "../../api";

const ContentRequest = ({ openContentRequest, setOpenContentRequest }) => {
  const [inputData, setInputData] = useState({
    gameName: "",
    Level: "",
    message: "",
  });

  const { gameName, Level, message } = inputData;
  console.log("inputData", inputData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  const changeTargetLevelHandler = (e) => {
    setInputData({ ...inputData, Level: e.target.value });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if (gameName == "") {
      return toast.error("Please enter your Game name");
    }
    if (Level == "") {
      return toast.error("Please enter your Game Level");
    }
    if (message == "") {
      return toast.error("Please enter your text");
    }
    console.log("setInputData", inputData);
    let res = await api("post", "/contentRequests", inputData);
    //    localhost:5000/api/contentRequests
    setInputData({ gameName: "", Level: "", text: "" });
    toast.success("Message Send");
  };
  const handleClose = () => {
    setOpenContentRequest(false);
  };
  return (
    <>
      <Dialog open={openContentRequest} onClose={handleClose}>
        <div className="requestMainDiv">
          <div className="contactezDiv">
            {/* /* --------------------------------- oneDiv --------------------------------- */}
            <div className="contactez-box">
              <h1 className="contactezDivH1">Request a Course Content</h1>
              <ClearIcon className="requestDivIcon" onClick={handleClose} />
            </div>
            {/* /* --------------------------------- oneDiv --------------------------------- */}
            <div className="contactezDiv-box2">
              <label htmlFor="" className="contactezDov-label">
                {" "}
                Game name
              </label>
              <input
                style={{ border: "none", backgroundColor: "#131321" }}
                className="contactezDiv-input"
                type="text"
                name="gameName"
                value={gameName}
                id=""
                placeholder="e.g. moinheykal"
                onChange={handleChange}
              />
            </div>
            {/* /* --------------------------------- oneDiv --------------------------------- */}
            <div className="contactezDiv-box3">
              <label htmlFor="" className="contactezDov-label">
                Game Level
              </label>
              <select
                name="Level"
                value={Level}
                id="Level"
                className="contactezDiv-input"
                style={{
                  border: "none",
                  backgroundColor: "#131321",
                  color: "#6D6D6D",
                }}
              >
                <option value="Intial" className="selectInput-option">
                  Intial
                </option>
                <option value="Medium">Medium</option>
                <option value="Pro">Pro</option>
              </select>
              {/* <select
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
              {/* </select> */}
            </div>
            {/* /* --------------------------------- oneDiv --------------------------------- */}
            <div className="contactezDiv-box4">
              <label htmlFor="" className="contactezDov-label">
                Course description
              </label>
              <textarea
                style={{ border: "none", backgroundColor: "#131321" }}
                className="contactezDiv-input"
                name="message"
                value={message}
                id=""
                cols="30"
                rows="5"
                placeholder="Course description here"
                onChange={handleChange}
              ></textarea>
            </div>
            {/* /* --------------------------------- oneDiv --------------------------------- */}
            <div className="contactezDiv-box5">
              <button className="contactezBtn2" onClick={handleClick}>
                Request Now
              </button>
            </div>
            {/* /* --------------------------------- oneDiv --------------------------------- */}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ContentRequest;
