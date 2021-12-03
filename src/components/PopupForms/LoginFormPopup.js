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
export default function LoginFormPopup({ open, setOpen, setSignup }) {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const showSignUpFormPopup = () => {
    setOpen(false);
    setSignup(true);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (values.email == "") {
      return toast.error("Please enter your email");
    }

    if (values.password == "") {
      return toast.error("Please enter your password");
    }
    console.log(values);
    setValues({ email: "", password: "" });
  };
  const onChangeEvent = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <div className="login_form">
          <div className="form_container">
            <h1>Login to your account</h1>
            <ClearIcon className="clearIcon" onClick={handleClose} />
            <p className="login_pera">Welcome back</p>
            <form action="">
              <label htmlFor="email">Email</label>
              <input
                className="inputForm bldText"
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
                className="inputForm"
                type={values.showPassword ? "text" : "password"}
                onChange={onChangeEvent}
                placeholder="************************"
                value={values.password}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      className="showPass"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />

              <a href="" className="for_get">
                <p className="forget">Forget password?</p>
              </a>
              <button className="formbtns" type="submit" onClick={submitForm}>
                Log in
              </button>
              <div className="lines">
                <hr className="line1" />
                <div className="or">Or</div>
                <hr className="line2" />
              </div>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <div className="social">
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
              </Box>
            </form>
            <div className="signPera">
              <p>Don't Have An Account?</p>
              <button className="sgnUpBtn" onClick={showSignUpFormPopup}>
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
