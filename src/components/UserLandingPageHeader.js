import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../assets/icons/logo.png";

const HeaderUserLandingPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="headerBackgroundColor">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <div className="logo-text-container">
                <span className="logo-text"> pass to trip </span>
                <img className="logo-img" src={logo} />
              </div>
            </Typography>
            <Typography sx={{ marginRight: "15px" }}>Blog</Typography>
            <button className="btn-content-creator">
              Become Content Creator
            </button>
            <button className="btn-content-creator">Get Early Access</button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default HeaderUserLandingPage;
