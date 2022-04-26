import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Dialog from "@mui/material/Dialog";

const GuestSignUpPopUp = ({ open, setOpen }) => {
  //   const showLogoutPopup = () => {
  //     setLogin(true);
  //     setOpen(false);
  //   };

  const submitForm = async (event) => {
    console.log("event", event);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <div
            className="create_container"
            // style={{ height: "100%", width: "50%" }}
          >
            <h3> You must be a registered user to continue </h3>
            <button
              className="formbtn2"
              type="submit"
              onClick={submitForm}
              style={{
                width: "60%",
                marginLeft: "20%",
                marginTop: "6%",
                marginBottom: "6%",
                borderRadius: "8px",
                fontSize: "30px",
              }}
            >
              Sign Up Now
            </button>
            <button
              //   className="formbtn2"
              type="submit"
              onClick={submitForm}
              style={{
                width: "60%",
                marginLeft: "20%",
                marginTop: "6%",
                marginBottom: "6%",
                borderRadius: "8px",
                fontSize: "30px",
                background: "grey",
              }}
            >
              Close
            </button>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default GuestSignUpPopUp;
