import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import landingpartnerarrowlogo from "../../assets/img/landingpartnerarrowlogo.png";
import landingpartnericonone from "../../assets/img/landingpartnericonone.png";
import landingpartnericontwo from "../../assets/img/communityImgtwoo.png";
import landingpartnericonthree from "../../assets/img/landingpartnericonthree.png";
import landingpartnericonfour from "../../assets/img/landingpartnericonfour.png";
import landingpartnericonfive from "../../assets/img/landingpartnericonfive.png";
import landingpartnericonsix from "../../assets/img/landingpartnericonsix.png";
import ButtonBecomeAPartner from './LandingPartnerButton'

const LandingPartnerWays = () => {
  return (
    <>
      <Box className="box-user">
        <Box sx={{
          padding: "20px 0 20px 0"
        }}>
          <Typography align="center" variant="h5">
            Many ways to become a partner
          </Typography>
          <div className="userlandingpagediveider"> </div>
        </Box>
      </Box>
      <Grid className="community" container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="community-block">
            <img src={landingpartnericonone} />
            <h5 className="community-content-header">Community Development</h5>
            <span className="community-content-pargraph">
              Participates in the growth of the community and its economy
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="community-block">
            <img src={landingpartnericontwo} />
            <h5 className="community-content-header">Community Development</h5>
            <span className="community-content-pargraph">
              Participates in the growth of the community and its economy
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="community-block community-block-border">
            <img src={landingpartnericonthree} />
            <h5 className="community-content-header">Collaboration Between Users</h5>
            <span className="community-content-pargraph">
              Inform content creators of hot topics to be addressed
            </span>
          </div>
        </Grid>
        <Grid sx={{ textAlign: 'center' }} item xs={12} md={4}>
          <img className="landing-partner-arrow" src={landingpartnerarrowlogo} />
        </Grid>
        <Grid sx={{ textAlign: 'center' }} item xs={12} md={4}>
          <img className="landing-partner-arrow" src={landingpartnerarrowlogo} />
        </Grid>
        <Grid sx={{ textAlign: 'center' }} item xs={12} md={4}>
          <img className="landing-partner-arrow" src={landingpartnerarrowlogo} />
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="community-block">
            <img src={landingpartnericonfour} />
            <h5 className="community-content-header">Community Development</h5>
            <span className="community-content-pargraph">
              Participates in the growth of the community and its economy
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="community-block">
            <img src={landingpartnericonfive} />
            <h5 className="community-content-header">Community Development</h5>
            <span className="community-content-pargraph">
              Participates in the growth of the community and its economy
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="community-block community-block-border">
            <img src={landingpartnericonsix} />
            <h5 className="community-content-header">Collaboration Between Users</h5>
            <span className="community-content-pargraph">
              Inform content creators of hot topics to be addressed
            </span>
          </div>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', width: 1 }}>
          <ButtonBecomeAPartner />
        </Box>
      </Grid>
    </>
  )
}

export default LandingPartnerWays
