import React, { useState } from "react";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ClearIcon from "@mui/icons-material/Clear";
import Google from "../../assets/icons/Googli.svg";
import ChatIcon from "../../assets/icons/twitch.svg";
import Facebook from "../../assets/icons/fb1.svg";
import Discord1 from "../../assets/icons/discord1.svg";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import api from "../../api";
import { useHistory } from "react-router-dom";

import ForgetPassword from "./ForgetPassword";
import FormControlLabel from "@mui/material/FormControlLabel";
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
        backgroundColor: theme.palette.mode === "dark" ? "green" : "black"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    background:
      theme.palette.mode === "dark"
        ? "red"
        : "linear-gradient(65.06deg, #662f88 9.05%, #20bf55 131.69%)",
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
      backgroundPosition: "center"
    }
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "pink" : "gray",
    borderRadius: 20 / 2,
    position: "relative",
    left: "-21px"
  }
}));

export default function LoginFormPopup({ open, setOpen, setSignup }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false
  });
  const [creatorSwitch, setCreatorSwitch] = useState(false);
  const [forgetPasswordPopup, setForgetPasswordPopup] = useState(false);

  const { email, password, showPassword } = values;
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
    setValues({ email: "", password: "" });
    setOpen(false);
  };

  const onChangeEvent = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const submitForm = async (event) => {
    event.preventDefault();
    if (values.email == "") {
      return toast.error("Please enter your email");
    }

    if (values.password == "") {
      return toast.error("Please enter your password");
    }
    let formdata = {
      email,
      password
    };
    try {
      let res = await api("post", "/users/login", formdata);
      if (res) {
        if (creatorSwitch && res?.data?.user?.role !== "Creator") {
          setLoading(false);
          return toast.error("You are not a creator");
        }
        localStorage.setItem("token", res?.data?.token);
        setOpen(false);
        setLoading(false);
        if (res?.data?.user?.role == "Creator") {
          history.push("/contenthome");
        }
        window.location.reload();
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const label = {
    inputProps: {
      "aria-label": "Switch demo"
    }
  };
  const handleCheck = (e) => {
    setCreatorSwitch(!creatorSwitch);
  };

  return (
    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        style={{ maxWidth: "480px", margin: "auto" }}
      >

        <div className="login_form">
          <div className="form_container">
            <h1 className="loginH1">Login to your account</h1>
            <ClearIcon className="clearIcon" onClick={handleClose} />
            <p className="login_pera">Welcome back</p>
            <div>
              {creatorSwitch ? "Creator" : "User"}
              <MaterialUISwitch
                sx={{ m: 1 }}
                defaultChecked={creatorSwitch}
                onClick={handleCheck}
              />
            </div>
            <form action="">
              <label htmlFor="email" className="loginFH1">
                Email
              </label>
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

              <label htmlFor="password" className="loginFH1">

             

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

              <p
                className="forget"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setForgetPasswordPopup(true);
                  setOpen(false);
                }}
              >
                Forget password?
              </p>

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
                        <a
                          href={`${process.env.REACT_APP_baseURL}/users/auth/discord`}
                        >
                          <img src={Discord1} alt="" />
                        </a>
                      </span>
                      <span>
                        <a
                          href={`${process.env.REACT_APP_baseURL}/users/auth/twitch`}
                        >
                          <img src={ChatIcon} alt="" />
                        </a>
                      </span>
                      <span>
                        <a
                          href={`${process.env.REACT_APP_baseURL}/users/auth/google`}
                        >
                          <img src={Google} alt="" />
                        </a>
                      </span>
                      <span>
                        <a
                          href={`${process.env.REACT_APP_baseURL}/users/auth/facebook`}
                        >
                          <img src={Facebook} alt="" />
                        </a>
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
      <ForgetPassword
        open={forgetPasswordPopup}
        setOpen={setForgetPasswordPopup}
      />
    </div>
  );
}
