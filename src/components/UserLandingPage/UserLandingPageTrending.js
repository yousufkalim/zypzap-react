import React from 'react'
import trendinglogo from "../../assets/img/trendinglogo.png";
import icontrendingone from "../../assets/img/icontrendingone.png";
import icontrendingtwo from "../../assets/img/icontrendingtwo.png";
import icontrendingthree from "../../assets/img/icontrendingthree.png";
import icontrendingfour from "../../assets/img/icontrendingfour.png";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const UserLandingPageTrending = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
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
      <Box className="trending-block" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid className="trending-heading-container" container>
          <Grid sx={{ textAlign: "center" }} item xs={4} md={4}>
            <div className="top-games-header top-games-text">  <h4 >Top Games </h4>  </div>
          </Grid>
          <Grid sx={{ textAlign: "center" }} item xs={4} md={4}>
            <div className="top-trendy-games top-games-text"><h4>Top Trendy Games </h4>  </div>
          </Grid>
          <Grid sx={{ textAlign: "center" }} item xs={4} md={4}>
            <div className="nft-games-header top-games-text">  <h4 >NFT Games </h4>  </div>
          </Grid>
        </Grid>
        <Grid className="trending-box-border" container>
          {
            items.map((item) => (
              <Grid item xs={4} md={4}>
                <div class="table-img-text">
                  <img src={item.img} />
                  <div className="trending-text-width">{item.heading} </div>
                </div>
              </Grid>
            )
            )
          }
        </Grid>
      </Box>
    </>
  )
}

export default UserLandingPageTrending
