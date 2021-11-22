// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import FooterLogo from "../../assets/icons/footerlogo.png";
import FbIcon from "../../assets/icons/fbicon2.svg";
import TwitterIcon from "../../assets/icons/twittericon.svg";
import PintrestIcon from "../../assets/icons/pintresticon.svg";
import LinkedinIcon from "../../assets/icons/linkedinicon.svg";
import Globe from "../../assets/icons/globe.svg";
import { Link } from "react-router-dom";

export default function YouMayLike() {
  return (
    <div className="footerDiv">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <div className="f1div">
            <img className="footerLogo " src={FooterLogo} />
            <div>
              <p className="footerText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
                aliquam fermentum arcu at morbi amet. Elementum nunc{" "}
              </p>
              <div className="isocialcondiv">
                <img src={FbIcon} height={60} />
                <img src={TwitterIcon} height={60} />
                <img src={LinkedinIcon} height={60} />
                <img src={PintrestIcon} height={60} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div className="f2div">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <p className="phead">Home</p>
            </Link>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              <p className="pmargin">About Us</p>
            </Link>
            <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>
              <p className="pmargin">Blog</p>
            </Link>

            <p className="pmargin">For Creators</p>
            <p className="pmargin">Partners</p>
            <p className="pmargin">Privacy Policy</p>
          </div>
        </Grid>

        <Grid item xs={12} sm={3}>
          <div className="f2div">
            <p className="phead">Top Games</p>
            <p className="pmargin"> CS-GO</p>
            <p className="pmargin">FIFA 2021</p>
            <p className="pmargin">GTA V</p>
            <p className="pmargin">Taken 8</p>
            <p className="pmargin"> Call of Duty</p>
          </div>
        </Grid>

        <Grid item xs={12} sm={3}>
          <div className="languagebuttondiv">
            <img src={Globe} className="languageIcon" />
            <button className="languageButton">English</button>
          </div>
          <div className="divforsign">
            <p className="sign">©Passtotrip. ALL RIGHTS RESERVED.</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
