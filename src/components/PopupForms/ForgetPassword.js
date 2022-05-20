import React, { useState } from "react";
import { toast } from "react-toastify";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";
import api from "../../api";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 82,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "red",
      transform: "translateX(22px)",

      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "green" : "black",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    background: theme.palette.mode === "dark" ? "red" : "linear-gradient(65.06deg, #662f88 9.05%, #20bf55 131.69%)",
    width: 28,
    height: 28,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "pink" : "gray",
    borderRadius: 20 / 2,
    position: "relative",
    left: "-21px",
  },
}));

export default function ForgetPassword({ open, setOpen, setSignup }) {
  let [email, setEmail] = useState("");

  const handleClose = () => {
    setEmail("");
    setOpen(false);
  };

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please enter your email");
    }

    let res = await api("post", "/users/forget-password", { email });
    if (res) {
      setOpen(false);
      toast.success("Please check your email to reset your password");
    }
    setEmail("");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="login_form" style={{ paddingBottom: "25px" }}>
        <div className="form_container">
          <h1 className="loginH1">Forget Password</h1>
          <ClearIcon className="clearIcon" onClick={handleClose} />

          <form action="" style={{ marginTop: "10px" }}>
            <label htmlFor="email" className="loginFH1">
              Enter your email
            </label>
            <input
              className="inputForm bldText"
              type="email"
              placeholder="e.g.moinheykal@gmail.com"
              value={email}
              onChange={handleInput}
              name="email"
              required
            />

            <button className="formbtns" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Dialog>
  );
}
