import React, { useState } from "react";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ClearIcon from "@mui/icons-material/Clear";
import Google from "../../assets/icons/Googli.png";
import ChatIcon from "../../assets/icons/chatIcon.png";
import DriveIcon from "../../assets/icons/driveIcon.png";
import AppleIcon from "../../assets/icons/appleIcon.png";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import LoginFormPopup from "./LoginFormPopup";

const CreateFormPopup = ({ open, setOpen, login, setLogin }) => {
  const [values, setValues] = React.useState({
    user: "",
    email: "",
    password: "",
    showPassword: false,
  });
  const showPopup = () => {
    setLogin(true);
    setOpen(false);
    // setLogin(true);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClose = () => {
    setOpen(false);
    // setLogin(true);
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (values.user == "") {
      return toast.error("Please enter your username");
    }
    if (values.email == "") {
      return toast.error("Please enter your email");
    }

    if (values.password == "") {
      return toast.error("Please enter your password");
    }
    console.log(values);
    setValues({ user: "", email: "", password: "" });
  };
  const onChangeEvent = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        {login && <LoginFormPopup login={login} setLogin={setLogin} />}
        <Dialog open={open} onClose={handleClose}>
          <div className="create_form">
            <div className="create_container">
              <h1 className="createH1">Create an Account</h1>
              <ClearIcon className="clearIcon2" onClick={handleClose} />
              <p className="create_pera">Let's get started</p>
              <form action="">
                <label htmlFor="user">Username</label>
                <input
                  className="inputForm2 bldText3"
                  type="email"
                  placeholder="e.g.moinheykal"
                  value={values.user}
                  onChange={onChangeEvent}
                  name="user"
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  className="inputForm2 bldText2"
                  type="email"
                  placeholder="e.g.moinheykal@gmail.com"
                  value={values.email}
                  onChange={onChangeEvent}
                  name="email"
                  required
                />
                <br />
                <label htmlFor="password" style={{ marginTop: "30px" }}>
                  Password
                </label>
                <Input
                  className="inputForm2"
                  type={values.showPassword ? "text" : "password"}
                  onChange={onChangeEvent}
                  placeholder="************************"
                  value={values.password}
                  name="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        className="showPassInput"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <button className="formbtn2" type="submit" onClick={submitForm}>
                  Sign Up
                </button>
                <div className="lines-container">
                  <hr className="lines1" />
                  <div className="or2">Or</div>
                  <hr className="lines2" />
                </div>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <div className="social_accoount">
                        <span>
                          <img src={Google} alt="" />
                        </span>
                        <span>
                          <img src={ChatIcon} alt="" />
                        </span>
                        <span>
                          <img src={DriveIcon} alt="" />
                        </span>
                        <span>
                          <img src={AppleIcon} alt="" />
                        </span>
                      </div>
                    </Grid>
                  </Grid>
                </Box>{" "}
              </form>
              <div className="logPera">
                <p>Already Have An Account?</p>
                <button className="logBtn" onClick={showPopup}>
                  LOGIN
                </button>
                <br />
                <br />
              </div>
              <p className="terms">
                By Registering for this website, you accept our{" "}
                <span className="condition">
                  Terms <br /> Of Use
                </span>{" "}
                and our <span className="condition">Privacy Policy.</span>{" "}
              </p>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default CreateFormPopup;
