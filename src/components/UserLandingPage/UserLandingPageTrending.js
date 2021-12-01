import React from 'react'
import trendinglogo from "../../assets/img/trendinglogo.png";
import icontrendingone from "../../assets/img/icontrendingone.png";
import icontrendingtwo from "../../assets/img/icontrendingtwo.png";
import icontrendingthree from "../../assets/img/icontrendingthree.png";
import icontrendingfour from "../../assets/img/icontrendingfour.png";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const UserLandingPageTrending = () => {
  let items = [
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
    {
      heading: "META INFINITY",
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
  return (
    <>
     <div className="trending-block" container rowSpacing={1}>
        <Grid sx={{display:'flex', justifyContent: 'space-around'}} className="trending-heading-container" container>
          <Grid sx={{ textAlign: "center" }} item  md={4}>
            <div className="top-games-header top-games-text">  <h4 >Top Games </h4>  </div>
          </Grid>
          <Grid sx={{ textAlign: "center" }} item  md={4}>
            <div className="top-trendy-games top-games-text"><h4>Top Trendy Games </h4>  </div>
          </Grid>
          <Grid sx={{ textAlign: "center" }} item  md={4}>
            <div className="nft-games-header top-games-text">  <h4 >NFT Games </h4>  </div>
          </Grid>
        </Grid>
        <Grid className="trending-box-border" container>
          {
            items.map((item) => (
              <Grid  md={4} sm={4}>
                <div class="table-img-text">
                  <img src={item.img} />
                  <div className="trending-text-width">{item.heading} </div>
                </div>
              </Grid>
            )
            )
          }
        </Grid>
      </div>
    </>
  )
}

export default UserLandingPageTrending
