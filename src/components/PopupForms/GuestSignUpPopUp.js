import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../api";
import { Store, UpdateStore } from "../../StoreContext";
import Dialog from "@mui/material/Dialog";

const GuestSignUpPopUp = ({ open, setOpen, setOpenSignup }) => {
  const updateStore = UpdateStore();
  const { user } = Store();
  //   const { singlCourse } = props;
  const handleClick = async (u, course) => {
    const data = {
      courseId: course?._id,
      userId: u?._id,
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
        <Dialog open={open} onClose={handleClose}>
          <div className="create_container" style={{ padding: "6%" }}>
            <h1
              className="text-center"
              style={{
                color: "white",
                letterSpacing: "1px",
                textAlign: "center",
                marginTop: "2%",
              }}
            >
              {" "}
              You must be a registered user to continue{" "}
            </h1>
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
                  padding: "1%",
                  marginBottom: "6%",
                  borderRadius: "8px",
                }}
              >
                Sign Up Now
              </button>
              <button
                type="submit"
                onClick={handleClose}
                style={{
                  width: "45%",
                  marginLeft: "3%",
                  marginRight: "20%",
                  marginTop: "6%",
                  padding: "1%",
                  fontSize: "20px",
                  marginBottom: "6%",
                  borderRadius: "8px",
                  border: "none",
                  background: "rgba(128, 128, 128, 0.562)",
                  color: "white",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default GuestSignUpPopUp;
