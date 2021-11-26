import React from 'react'
import Maylike1 from "../../assets/img/maylike1.png";
import Maylike2 from "../../assets/img/maylike1.png";
import Maylike3 from "../../assets/img/maylike1.png";
import Maylike4 from "../../assets/img/maylike1.png";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import Grid from "@material-ui/core/Grid";
const UserLandingPageBlog = () => {
    let items = [
        {
          heading: "Call of Duty || 2021",
          img: Maylike1,
          detail:
            "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
          date: "December 17, 2021",
          By: "Baig Irfan",
        },
        {
          heading: "Gears of War",
          img: Maylike2,
          detail:
            "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
          date: "December 17, 2021",
          By: " Moin Khan",
        },
        {
          heading: "Uncharted Amoung Thieves",
          img: Maylike3,
          detail:
            "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
          date: "December 17, 2021",
          By: " Moin Khan",
        }
      ];
    return (
        <>
         <Box className="box-user">  
      <Box sx={{
        padding:"20px 0 20px 0"
      }}>  
        <Typography align="center" variant="h5">
       Our Blog
        </Typography>
        <div className="userlandingpagediveider"> </div> 
      </Box>
      </Box>
          <div className="UserLandingPageBlogContainer">
    
      <div className="blogGridOuterDiv">
        <Grid container spacing={4}>
          {items.map((item, i) => (
            <Grid item xs={12} sm={4}>
              <>
                <div className="blogdiv1">
                  <img src={item.img} className="blogdivimg" />
                  <div className="blogdiv1text">
                    <h3 className="blogdiv1heading">
                      {item?.heading.length > 25
                        ? item?.heading.substring(0, 22) + "..."
                        : item?.heading}
                    </h3>

                    <p className="bloddiv1detail">
                      {item?.detail.length > 147
                        ? item?.detail.substring(0, 146) + ".."
                        : item?.detail}
                    </p>
                    <p>
                      {" "}
                      <span className="seemore"> Read More</span>
                    </p>
                  </div>
                </div>
              </>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>   
    <Box className="box-user">  
      <Box sx={{
        padding:"20px 0 20px 0"
      }}>  
        <Typography align="center" variant="h6">
       View all
        </Typography>
      </Box>
      </Box>
        </>
    )
}

export default UserLandingPageBlog
