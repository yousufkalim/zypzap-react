import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Moon from "../assets/icons/moon.svg";
import UserHeaderIcon from "../assets/icons/UserHeaderIcon.svg";
import Globe from "../assets/icons/globe.svg";
import CourseIcon from "../assets/icons/CourseIcon.svg";
import DownArrow from "../assets/icons/downarrow.svg";
import UserIcon from "../assets/icons/userIcon.svg";
import { useHistory } from "react-router-dom";
import CreateFormPopup from "./PopupForms/CreateFormPopup";
import PropfileInformation from "./PopupForms/PropfileInformation";
import LoginFormPopup from "./PopupForms/LoginFormPopup";
import BecomeCreatorpopup from "./PopupForms/BecomeCreatorpopup";
import OptionPopup from "./PopupForms/OptionPopup";
import api from "../api";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import NewLogo from "../assets/icons/NewLogo.png";
import HomePageLogo from "../assets/icons/HomePageLogo.svg";

import { Store, UpdateStore } from "../StoreContext";
import { Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar({
  openlogin,
  setOpenLogin,
  opensignup,
  setOpenSignup,
  openBecomeCreatorPopup,
  setOpenBecomeCreatorPopup,
  search,
  games,
  setSearch,
  input,
  setInput,
}) {
  const updateStore = UpdateStore();
  const { user, creator } = Store();

  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [Option, setOption] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleLogout = async () => {
    let res = await api("post", "/users/logout/all");
    if (res) {
      updateStore({ user: null, creator: null });
      localStorage.removeItem("token");
      history.push("/home");
    }
  };
  // const handleClickOpen = () => {
  //   setOpenProfile(true);
  // };

  const handleClose = () => {
    setOpenProfile(false);
  };

  const showBecomePopup = () => {
    setOption(true);
  };

  const onClickEvent = () => {
    // alert("click");
    history.push("/searchResult");
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleSearchClick = (event) => {
    history.push("/searchResult");
  };
  const searchCourse = async (e) => {
    e.preventDefault();
    if (input !== "") {
      if (search === "course") {
        let res = await api("get", `/courses/search?name=${input}`);
        if (res) {
          updateStore({ searchCourse: res?.data, searchCreator: [] });
        }
      }
      if (search === "creator") {
        let res = await api("get", `/creators/search?name=${input}`);
        if (res) {
          updateStore({ searchCreator: res?.data, searchCourse: [] });
        }
      }
    }
  };
  const handleCreatorSearch = (e) => {
    e.preventDefault();
    setSearch("creator");
  };
  const handleCourseSearch = (e) => {
    e.preventDefault();
    setSearch("course");
  };
  const handleChangeInput = (e) => {
    updateStore({ Input: e.target.value });
    setInput(e.target.value);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem className="opnPrfil" onClick={handleMenuClose}>
        Profile
      </MenuItem>
      <MenuItem className="opnPrfil" onClick={handleMenuClose}>
        My account
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <ClearIcon className="closeMenu" /> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>User</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>My Courses</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        ></IconButton>
        <p onClick={showBecomePopup}>Become a Creater</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <CreateFormPopup
        open={opensignup}
        setOpen={setOpenSignup}
        login={openlogin}
        setLogin={setOpenLogin}
      />
      <PropfileInformation
        openProfile={openProfile}
        handleClose={handleClose}
        user={user}
      />
      <LoginFormPopup
        open={openlogin}
        setOpen={setOpenLogin}
        signup={opensignup}
        setSignup={setOpenSignup}
      />

      <BecomeCreatorpopup
        open={openBecomeCreatorPopup}
        setOpen={setOpenBecomeCreatorPopup}
        games={games}
        user={user}
        creator={creator}
      />
      <OptionPopup open={Option} setOpen={setOption} />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="headerBackgroundColor">
          <Toolbar className="imgLogo">
            <img
              // src={Logo}
              src={HomePageLogo}
              alt="img"
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push("/");
                window.location.reload();
              }}
            />

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                fontFamily: "Mulish",
                paddingLeft: "5px",
              }}
            >
              {/* Categories */}
              <div
                onClick={onClickEvent}
                style={{
                  cursor: "pointer",
                }}
              >
                <a
                  // href="/SearchResult"
                  target="_blank"
                  style={{ color: "#fff" }}
                >
                  {/* <SearchIcon className="searchItemsIcon" /> */}
                </a>
              </div>
            </Typography>
            <Search className="searchBar" onChange={handleChangeInput}>
              <div onClick={searchCourse}>
                {" "}
                <SearchIcon
                  className="searchBarIcon"
                  onClick={handleSearchClick}
                />
                <SearchIconWrapper></SearchIconWrapper>
              </div>

              <div className="dropdown">
                {/* <button className="dropbtn"> */}
                <img src={DownArrow} alt="img" className="downarrow" />
                {/* </button> */}
                <div className="dropdown-content">
                  <div className="drowp1">
                    <a href="#" onClick={handleCreatorSearch}>
                      <img className="UserIcons" src={UserIcon} alt="" />
                      Content Creators
                      <p className="drowpP">
                        Top gamers who create content for you
                      </p>
                    </a>
                  </div>
                  <div className="drowp1">
                    <a href="#" onClick={handleCourseSearch}>
                      <img className="UserIcons" src={CourseIcon} alt="" />
                      Courses
                      <p className="drowpP">Browse and buy courses</p>
                    </a>
                  </div>
                </div>
              </div>
              <StyledInputBase
                placeholder="Type your search here"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            {/* <Box sx={{ flexGrow: 1 }} /> */}
            <Link to="" className="requestBt">
              {user ? (
                <></>
              ) : (
                <button className="requestBtn">Request a Course</button>
              )}

              {/* <button className="requestBtn2">
                <img src={UserHeaderIcon} alt="" />
              </button> */}
              <button className="comming-soon">
                <span className="comming-soon2"> Coming Soon</span>
              </button>
            </Link>

            {(user?.role == "User" || user?.role == "Creator") && (
              <Link to="/userprofile" className="requestBt">
                {/* onClick={handleClickOpen} */}
                {/* //////User Profile */}
                <button className="requestBtn">
                  {" "}
                  <img src={UserHeaderIcon} alt="" />
                </button>
              </Link>
            )}
            <Box
              className={`${creator ? "headerLinkbox" : "headerLinkbox2"}`}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: { xs: "none", md: "space-between" },
                width: { xs: "auto", md: "30%" },
              }}
            >
              {creator ? (
                <>
                  <Link
                    to="/contentHome"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <p className="sgnBtn">Switch to Learner</p>
                  </Link>
                  <Link
                    to={{
                      pathname: "dashboard",
                      state: { creator: `${creator}` },
                    }}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <p className="sgnBtn">dashboard</p>
                  </Link>
                </>
              ) : (
                <>
                  {user?.role != "Creator" && user?.role == "User" && (
                    <>
                      <p
                        className="sgnBtn"
                        onClick={() => {
                          setOpenBecomeCreatorPopup(true);
                        }}
                      >
                        Become a Creater
                      </p>
                      <Link
                        to={{
                          pathname: "/UserDashboard",
                          state: { user: `${user}` },
                        }}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        <p className="sgnBtn">My Dashboard</p>
                      </Link>
                    </>
                  )}
                </>
              )}
              {user ? (
                <p className="sgnBtn" onClick={handleLogout}>
                  Logout
                </p>
              ) : (
                <>
                  <p className="sgnBtn" onClick={() => setOpenSignup(true)}>
                    Sign Up
                  </p>
                  <p className="sgnBtn" onClick={() => setOpenLogin(true)}>
                    Login
                  </p>
                  <div>
                    <FormControl className="form_Control_header">
                      <button className="comming-soon3">Coming Soon</button>
                      <MenuItem>
                        <Select
                          className="select_form_header"
                          value={age}
                          onChange={handleChange}
                          displayEmpty
                        >
                          <MenuItem value="" className="walletInputMenu">
                            Connect Wallet
                          </MenuItem>
                          <MenuItem value={10} className="walletInputMenu">
                            Metamask
                          </MenuItem>
                          <MenuItem value={20} className="walletInputMenu">
                            Coinbase
                          </MenuItem>
                        </Select>
                      </MenuItem>
                    </FormControl>
                  </div>
                </>
              )}

              {/* <div>
                <img src={UserIcon} alt="img" />
                <img src={Globe} alt="img" />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <img src={Moon} alt="img" />
              </div> */}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}
