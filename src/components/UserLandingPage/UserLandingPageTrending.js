import React from "react";
import trendinglogo from "../../assets/img/trendinglogo.png";
import icontrendingone from "../../assets/img/icontrendingone.png";
import icontrendingtwo from "../../assets/img/icontrendingtwo.png";
import icontrendingthree from "../../assets/img/icontrendingthree.png";
import icontrendingfour from "../../assets/img/icontrendingfour.png";
import Grid from "@mui/material/Grid";
import VerticalCarousel from "./VerticalCarousal";

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
      <Grid container spacing={3} className="trendingGrid">
 
        {/* {gamesHeading.map((item) => (
          <Grid item xs={12} sm={4}>
            <VerticalCarousel data={trending} item={item} />
          </Grid>
        ))} */}
      </Grid>
    </>
  );
};

export default UserLandingPageTrending;
