import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import communityImgone from "../../assets/img/communityImgone.png";
import communityImgtwo from "../../assets/img/communityImgtwo.png";
const UserLandingPageCommunity = () => {
    return (
        <>
      
      <Box className="box-user">  
      <Box sx={{
        padding:"20px 0 20px 0"
      }}>  
        <Typography align="center" variant="h5">
       Be a part of our community
        </Typography>
        <div className="userlandingpagediveider"> </div> 
      </Box>
      </Box>

     <Grid className="community" container spacing={2}>
  <Grid item xs={12} md={4}>
  <div className="community-block"> 
  <img src={communityImgone}/>
      <h5 className="community-content-header">Evaluation of courses</h5>
      <span className="community-content-pargraph">
          Evaluate the courses for continous improvement of the creators 
      </span>
   </div>
  </Grid>
  <Grid item xs={12} md={4}>
  <div className="community-block"> 
  <img src={communityImgone}/>
      <h5 className="community-content-header">Evaluation of courses</h5>
      <span className="community-content-pargraph">
          Evaluate the courses for continous improvement of the creators 
      </span>
   </div>
  </Grid>
  <Grid item xs={12} md={4}>
  <div className="community-block"> 
  <img src={communityImgone}/>
      <h5 className="community-content-header">Evaluation of courses</h5>
      <span className="community-content-pargraph">
          Evaluate the courses for continous improvement of the creators 
      </span>
   </div>
  </Grid>
</Grid>  


        </>
    )
}

export default UserLandingPageCommunity
