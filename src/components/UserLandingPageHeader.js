import  React,{useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../assets/img/headerlogo.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import UserlandingPagePopup from './UserLandingPage/UserlandingPagePopup'
const HeaderUserLandingPage = () => {
  const [open, setOpen] = useState(false)
  const history = useHistory();
  const showPopup = ()=>{
    setOpen(true);
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      {open && <UserlandingPagePopup open={open} setOpen={setOpen}/>} 
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
                Become Content Creator
              </button>
            </Link>
            <Link
              to="/userlanding"
              style={{ color: "white", textDecoration: "none" }}
            >
              <button onClick={showPopup} className="btn-content-creator">Get Early Access</button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default HeaderUserLandingPage;
