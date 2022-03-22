import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";
import { toast } from "react-toastify";
import "../../css/form/contactez.css";

const ContentRequest = ({ openContentRequest, setOpenContentRequest }) => {
  const [inputData, setInputData] = useState({
    name: "",
    Level: "asdf",
    text: "",
  });
  const { name, Level, text } = inputData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (name == "") {
      return toast.error("Please enter your Game name");
    }
    if (Level == "") {
      return toast.error("Please enter your Game Level");
    }
    if (text == "") {
      return toast.error("Please enter your text");
    }
    setInputData({ name: "", Level: "", text: "" });
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
                name="name"
                value={inputData.name}
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
                value={inputData.Level}
                id=""
                className="contactezDiv-input"
                style={{ border: "none", backgroundColor: "#131321" }}
              >
                <option value="">Select</option>
                <option value="">Select</option>
                <option value="">Select</option>
              </select>
            </div>
            {/* /* --------------------------------- oneDiv --------------------------------- */}
            <div className="contactezDiv-box4">
              <label htmlFor="" className="contactezDov-label">
                Course description
              </label>
              <textarea
                style={{ border: "none", backgroundColor: "#131321" }}
                className="contactezDiv-input"
                name="text"
                value={inputData.text}
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
