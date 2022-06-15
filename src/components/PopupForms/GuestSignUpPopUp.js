import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../api";
import { Store, UpdateStore } from "../../StoreContext";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";

const GuestSignUpPopUp = ({ open, setOpen, setOpenSignup, setOpenLogin }) => {
  const updateStore = UpdateStore();
  const { user } = Store();
  //   const { singlCourse } = props;
  const handleClick = async (u, course) => {
    const data = {
      courseId: course?._id,
      userId: u?._id
    };
    let res = await api("post", "/users/enrolledCourseAndStarted", data);
    if (res) {
      updateStore({ user: res.data });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Dialog open={open}>
          <div className="create_container" style={{ padding: "6%" }}>
            <ClearIcon className="clearIcon3" onClick={handleClose} />
            <p className="text-center">
              You must be a registered user <br /> to continue
            </p>
            <div style={{ display: "flex", paddingTop: "3%" }}>
              <button
                className="formbtn2"
                onClick={() => {
                  setOpenSignup(true);
                  handleClose();
                }}
                style={{
                  width: "50%",
                  marginLeft: "17%",
                  marginTop: "6%",
                  marginBottom: "6%",
                  borderRadius: "8px"
                }}
              >
                Sign Up Now
              </button>
              <button
                className="formbtn2"
                type="submit"
                onClick={() => {
                  setOpenLogin(true);
                  handleClose();
                }}
                style={{
                  width: "45%",
                  marginLeft: "3%",
                  marginRight: "20%",
                  marginTop: "6%",
                  marginBottom: "6%",
                  borderRadius: "8px",
                  // background: "rgba(128, 128, 128, 0.562)",
                  color: "white"
                }}
              >
                Log in Now
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default GuestSignUpPopUp;
