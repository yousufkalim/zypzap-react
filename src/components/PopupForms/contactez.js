import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";
import { toast } from "react-toastify";
import "../../css/form/contactez.css";

const Contactez = ({ openContentRequest, setOpenContentRequest }) => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    text: "",
  });
  const { name, email, text } = inputData;

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
      return toast.error("Please enter your name");
    }
    if (email == "") {
      return toast.error("Please enter your email");
    }
    if (text == "") {
      return toast.error("Please enter your email");
    }
    setInputData({ name: "", email: "", text: "" });
    toast.success("Message Send");
  };
  const handleClose = () => {
    setOpenContentRequest(false);
  };
  return (
    <div>
      <Dialog open={openContentRequest}>
        <div className="requestMainDiv">
          <div className="contactezDiv">
            {/* /* --------------------------------- oneDiv --------------------------------- */}
            <div className="contactez-box">
              <h1 className="contactezDivH1">Contactez-nous</h1>
              <ClearIcon className="requestDivIcon" onClick={handleClose} />
            </div>
            {/* /* --------------------------------- oneDiv --------------------------------- */}
            <div className="contactezDiv-box2">
              <label htmlFor="" className="contactezDov-label">
                {" "}
                Nom
              </label>
              <input
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
                Email
              </label>
              <input
                className="contactezDiv-input"
                type="text"
                name="email"
                value={inputData.email}
                id=""
                placeholder="e.g. moinheykal@gmail.com"
                onChange={handleChange}
              />
            </div>
            {/* /* --------------------------------- oneDiv --------------------------------- */}
            <div className="contactezDiv-box4">
              <label htmlFor="" className="contactezDov-label">
                Message
              </label>
              <textarea
                className="contactezDiv-input"
                name="text"
                value={inputData.text}
                id=""
                cols="30"
                rows="10"
                placeholder="Message type here"
                onChange={handleChange}
              ></textarea>
            </div>
            {/* /* --------------------------------- oneDiv --------------------------------- */}
            <div className="contactezDiv-box5">
              <button className="contactezBtn" onClick={handleClick}>
                Envoyer le message{" "}
              </button>
            </div>
            {/* /* --------------------------------- oneDiv --------------------------------- */}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Contactez;
