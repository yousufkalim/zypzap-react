import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Dialog from "@mui/material/Dialog";

import api from "../../api";
import EmailVarificaiton from "./EmailVarificaiton";
import { Store, UpdateStore } from "../../StoreContext";
const CreateLogoutPopup = ({ open, setOpen }) => {
  const history = useHistory();
  const updateStore = UpdateStore();
  const handleLogout = async () => {
    let res = await api("post", "/users/logout/all");
    if (res) {
      updateStore({ user: null, creator: null });
      localStorage.removeItem("token");
      window.location.pathname = "/home";
    }
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
            <button
              className="formbtn2"
              type="submit"
              onClick={handleLogout}
              style={{
                width: "60%",
                height: "120px",
                marginLeft: "20%",
                marginTop: "6%",
                marginBottom: "6%",
                borderRadius: "8px",
                fontSize: "30px",
              }}
            >
              Log out
            </button>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default CreateLogoutPopup;
