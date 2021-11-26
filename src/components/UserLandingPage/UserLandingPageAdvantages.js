import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Carousel from "react-material-ui-carousel";
import carouselimg from "../../assets/img/carouselimg.png";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const UserLandingPageAdvantages = () => {
 
    return (
        <>
        <Box className="box-user">  
      <Box sx={{
        padding:"20px 0 20px 0"
      }}>  
        <Typography align="center" variant="h5">
        Advantages Passtotrip
        </Typography>
        <div className="userlandingpagediveider"> </div> 
      </Box>
      
         <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
  <List>
              {generate(
                <ListItem>
                  <ListItemText className="list-text"
                    primary="Single-line item Single-line item Single-line item Single-line item Single-line item Single-line item"
                  />
                </ListItem>,
              )}
            </List>
            
  </Grid>
  <Grid item xs={12} md={6}>
  <Carousel
        autoPlay={false}
        animation={"fade"}
      >
       <img className="carousel-img" src={carouselimg}/>
       <img className="carousel-img" src={carouselimg}/>
       <img className="carousel-img" src={carouselimg}/>
      </Carousel>
  </Grid>
  
</Grid>
<Grid  container justifyContent="center"> 
<button className="btn-advantages">Early access to courses</button>
<button className="btn-advantages">Become content creator</button>
</Grid>
</Box> 
        </>
    )
}

export default UserLandingPageAdvantages
