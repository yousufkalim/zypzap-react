import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../assets/img/headerlogo.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const HeaderUserLandingPage = () => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
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
              <div
                className="logo-text-container"
                onClick={() => {
                  history.push("/");
                  window.location.reload();
                }}
              >
                <img className="logo-img" src={logo} />
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
            <Link
              to="/userlanding"
              style={{ color: "white", textDecoration: "none" }}
            >
              <button className="btn-content-creator">
                {t("Get Early Access")}
              </button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default HeaderUserLandingPage;
