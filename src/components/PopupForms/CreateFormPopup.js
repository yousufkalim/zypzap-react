import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
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
import EmailVarificaiton from "./EmailVarificaiton";
import { Store, UpdateStore } from "../../StoreContext";
const CreateFormPopup = ({ open, setOpen, setLogin, setOpenProfile }) => {
  // const [opens, setOpens] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [allMembers, setAllMembers] = useState(0);

  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    CnfrmPassword: "",
    showPassword: false,
    showConfirPassword: false,
  });
  const updateStore = UpdateStore();
  useEffect(() => {
    // setMembers();
    if (!open) {
      setValues({ username: "", email: "", password: "", CnfrmPassword: "" });
    }
  }, []);
  // init

  const {
    username,
    email,
    password,
    showPassword,
    CnfrmPassword,
    showConfirPassword,
  } = values;
  const showLoginFormPopup = () => {
    setLogin(true);
    setOpen(false);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !showPassword });
  };
  const handleClickShowCofirmPassword = () => {
    setValues({ ...values, showConfirPassword: !showConfirPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClose = () => {
    setValues({ username: "", email: "", password: "", CnfrmPassword: "" });
    setOpen(false);
  };

  const onChangeEvent = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // const setMembers = async () => {
  //   let res = await api("get", "/newsletters/all");
  //   if (res) {
  //     setAllMembers(res.data.allMembers);
  //   }
  // };
  const submitForm = async (event) => {
    event.preventDefault();
    if (values.username == "") {
      return toast.error("Please enter your username");
    }
    if (values.email == "") {
      return toast.error("Please enter your email");
    }

    if (values.password == "" || password.length < 8) {
      return toast.error("Please enter more then eight digit password");
    }
    if (values.CnfrmPassword == "" || CnfrmPassword.length < 8) {
      return toast.error("Please enter more then eight digit Confirm Password");
    }
    if (CnfrmPassword !== password) {
      return toast.error("Password and confirm password dose not match");
    }
    setLoading(true);
    let formdata = {
      username,
      email,
      password,
      CnfrmPassword,
      role: "User",
    };
    try {
      let res = await api("post", "/users", formdata);

      if (res) {
        localStorage.setItem("token", res?.data?.token);
        updateStore({ user: res.data.user });
        setOpen(false);
        setLoading(false);
        setValues({ username: "", email: "", password: "" });
        setOpenProfile(true);
        toast.success(res.data.message);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        {/* <EmailVarificaiton open={opens} setOpen={setOpens} /> */}

        <Dialog open={open} maxWidth={"sm"}>
          <div className="create_form">
            <div className="create_container">
              <h1 className="createH1">Create an Account</h1>
              <ClearIcon className="clearIcon2" onClick={handleClose} />
              <p className="create_pera">Let's get started</p>
              <form action="" autocomplete="off">
                <label htmlFor="user" className="createLbl">
                  Username
                </label>
                <input
                  autocomplete="false"
                  className="inputForm2 bldText3"
                  type="email"
                  placeholder="e.g.moinheykal"
                  value={values.username}
                  onChange={onChangeEvent}
                  name="username"
                  required
                />
                <label htmlFor="email" className="createLbl">
                  Email
                </label>
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
                <label
                  htmlFor="password"
                  style={{ marginTop: "30px" }}
                  className="createLbl"
                >
                  Password
                </label>
                <Input
                  className="inputForm2Password"
                  type={showPassword ? "text" : "password"}
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
                <label
                  htmlFor="password"
                  style={{ marginTop: "30px" }}
                  className="createLbl"
                >
                  Confirm Password
                </label>
                <Input
                  className="inputForm2Password"
                  type={showConfirPassword ? "text" : "password"}
                  onChange={onChangeEvent}
                  placeholder="************************"
                  value={values.CnfrmPassword}
                  name="CnfrmPassword"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        className="showPassInput"
                        onClick={handleClickShowCofirmPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showConfirPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <button
                  className="formbtn2"
                  type="submit"
                  disabled={loading}
                  onClick={submitForm}
                >
                  {loading ? "loading" : "Sign Up"}
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
                </Box>{" "}
              </form>
              <div className="logPera">
                <p>Already Have An Account?</p>
                <button className="logBtn" onClick={showLoginFormPopup}>
                  LOGIN
                </button>
                <br />
                <br />
              </div>
              <p className="terms">
                By Registering for this website, you accept our
                <span className="condition">
                  Terms <br /> Of Use
                </span>
                and our <span className="condition">Privacy Policy.</span>
              </p>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default CreateFormPopup;
