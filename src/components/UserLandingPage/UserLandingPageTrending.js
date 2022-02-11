import React from "react";
import trendinglogo from "../../assets/img/trendinglogo.png";
import icontrendingone from "../../assets/img/icontrendingone.png";
import icontrendingtwo from "../../assets/img/icontrendingtwo.png";
import icontrendingthree from "../../assets/img/icontrendingthree.png";
import icontrendingfour from "../../assets/img/icontrendingfour.png";
import Grid from "@mui/material/Grid";
import VerticalCarousel from "./VerticalCarousal";
import PesLogo from "../../assets/icons/PesLogo.svg";
import BrawlLogo from "../../assets/icons/BrawlLogo.svg";
import MarioLog from "../../assets/icons/MarioLog.svg";
import AnimalLogo from "../../assets/icons/AnimalLogo.svg";
import NbaLogo from "../../assets/icons/NbaLogo.svg";
import IdleLogo from "../../assets/icons/IdleLogo.svg";
import AxieLogo from "../../assets/icons/AxieLogo.svg";
import MetawarsLogo from "../../assets/icons/MetawarsLogo.svg";
import SplintLogo from "../../assets/icons/SplintLogo.svg";
import SandboxLogo from "../../assets/icons/SandboxLogo.svg";

const UserLandingPageTrending = () => {
  let trending = [
    {
      heading: "FIFA 22",
      img: trendinglogo,
    },
    {
      heading: "CLASH ROYALE",
      img: icontrendingone,
    },
    {
      heading: "IDLE CYBER",
      img: icontrendingtwo,
    },
    {
      heading: "DOTTA 3",
      img: icontrendingthree,
    },
    {
      heading: "FOOTBALL",
      img: icontrendingfour,
    },
    {
      heading: "AXIE INFINITY",
      img: trendinglogo,
    },
    {
      heading: "ROYAK",
      img: icontrendingfour,
    },
    {
      heading: "BRAWL STARS",
      img: trendinglogo,
    },
    {
      heading: "META INFINITY",
      img: icontrendingtwo,
    },
    {
      heading: "FIFA 22",
      img: trendinglogo,
    },
    {
      heading: "CLASH ROYALE",
      img: icontrendingone,
    },
    {
      heading: "IDLE CYBER",
      img: icontrendingtwo,
    },
    {
      heading: "DOTTA 3",
      img: icontrendingthree,
    },
    {
      heading: "FOOTBALL",
      img: icontrendingfour,
    },
    {
      heading: "AXIE INFINITY",
      img: trendinglogo,
    },
    {
      heading: "ROYAK",
      img: icontrendingone,
    },
    {
      heading: "BRAWL STARS",
      img: icontrendingthree,
    },
    {
      heading: "META INFINITY",
      img: trendinglogo,
    },
    {
      heading: "ROYAK",
      img: icontrendingthree,
    },
    {
      heading: "BRAWL STARS",
      img: icontrendingone,
    },
    {
      heading: "META INFINITY",
      img: trendinglogo,
    },
    {
      heading: "META INFINITY",
      img: icontrendingfour,
    },
    {
      heading: "ROYAK",
      img: trendinglogo,
    },
    {
      heading: "BRAWL STARS",
      img: trendinglogo,
    },
    {
      heading: "META INFINITY",
      img: trendinglogo,
    },
    {
      heading: "ROYAK",
      img: trendinglogo,
    },
    {
      heading: "BRAWL STARS",
      img: trendinglogo,
    },
  ];
  // let gamesHeading = ["Top Games", "Trendy Games", "NFT Games"];
  let gamesHeading = [
    { heading: "Top Games", classIs: "top1", class2Is: "top2" },
    { heading: "Trendy Games", classIs: "trendy1", class2Is: "trendy2" },
    { heading: "NFT Games", classIs: "NFT1", class2Is: "NFT2" },
  ];

  return (
    <>
      <div className="trend_container">
        <Grid container spacing={3} className="trendingGrid">
          {/* {gamesHeading.map((item) => (
          <Grid item xs={12} sm={4}>
            <VerticalCarousel data={trending} item={item} />
          </Grid>
        ))}1. */}
          <Grid item xs={12} sm={4}>
            <div className="trendingDiv">
              <div className="trendingHeadingDiv">
                <div className="dashDiv"></div>
                <h1 className="topH1">TOP GAMES</h1>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={trendinglogo} />
                <div className="trendingLogoText1">FIFA</div>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={icontrendingone} />
                <div className="trendingLogoText1">DOTA 2</div>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={icontrendingtwo} />
                <div className="trendingLogoText1">ROCKET LEAGUE</div>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={icontrendingthree} />
                <div className="trendingLogoText1">CALL OF DUTY</div>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={icontrendingfour} />
                <div className="trendingLogoText1">LEAGUE OF LEGENDS</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="trendingDiv">
              <div className="trendingHeadingDiv">
                <div className="dashDiv"></div>
                <h1 className="topH1">TRENDY GAMES</h1>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={PesLogo} />
                <div className="trendingLogoText1">PES 2021</div>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={BrawlLogo} />
                <div className="trendingLogoText1">BRAWL STARS</div>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={MarioLog} />
                <div className="trendingLogoText1">MARIO KART 8 DELUXE</div>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={AnimalLogo} />
                <div className="trendingLogoText1">ANIMAL CROSSING</div>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={NbaLogo} />
                <div className="trendingLogoText1">NBA 2K22</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="trendingDiv">
              <div className="trendingHeadingDiv">
                <div className="dashDiv"></div>
                <h1 className="topH1">NFT Games</h1>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={IdleLogo} />
                <div className="trendingLogoText1">IDLE CYBER</div>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={AxieLogo} />
                <div className="trendingLogoText1">AXIE INFINITY</div>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={MetawarsLogo} />
                <div className="trendingLogoText1">METAWARS</div>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={SplintLogo} />
                <div className="trendingLogoText1">SPLINTERLANDS</div>
              </div>
              <div className="topIconHeading">
                <img className="imglogocarosal" src={SandboxLogo} />
                <div className="trendingLogoText1">SANDBOX</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default UserLandingPageTrending;
