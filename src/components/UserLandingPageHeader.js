import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../assets/img/headerlogo.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import SubscriptionPopup from "./PopupForms/SubscriptionPopup";

import { useTranslation, Trans } from "react-i18next";

const HeaderUserLandingPage = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const history = useHistory();
  // const showPopup = () => {
  //   setOpen(true);
  // };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {<SubscriptionPopup open={open} setOpen={setOpen} />}
        <AppBar position="static" className="headerBackgroundColor">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <div className="logo-text-container">
                <img
                  className="logo-img"
                  src={logo}
                  onClick={() => {
                    history.push("/");
                    window.location.reload();
                  }}
                />
              </div>
            </Typography>
            <Link
              to="/blog"
              style={{
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ marginRight: "15px" }}>Blog</Typography>
            </Link>
            <Link
              to="/contentcreator"
              style={{ color: "white", textDecoration: "none" }}
            >
              <button className="btn-content-creator">
                {t("Become Content Creator")}
              </button>
            </Link>

            <button
              className="btn-content-creator"
              onClick={() => setOpen(true)}
            >
              {t("Get Early Access")}
            </button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default HeaderUserLandingPage;
