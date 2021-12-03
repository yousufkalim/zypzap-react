import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
import StarIcon from "@material-ui/icons/Star";
const HeartIcon = ({items,activeIcon,trigerOnClickEmpSideBtn,ClassColor}) => {
    
    return (
        <>
        {
        items.map((item)=>{
            return(

                <Grid item xs={12} sm={6} md={4}>
                <div className="cardGrid">
                  <div className="favourite-icon-position">
                    <img src={item.img} className="courseimg" alt="img" />
                    <span key={item.id} className="favourite-icon-container"> 
                     <i onClick={trigerOnClickEmpSideBtn} key={item.id} className={`fa fa-heart favourite-icon`} id={item.id} ></i>   
                    </span>   
                  </div>
                  <h5 className="latestcourseh5">{item.title}</h5>
                  <p className="latestcoursep1">{item.name}</p>
                  <p className="latestcoursep1">
                    {" "}
                    5.0
                    {[1, 2, 3, 4, 5].map((item) => (
                      <StarIcon className="star-icon"
                      />
                    ))}
                    (1809)
                  </p>
                  <h6 className="latestcourseh6">$19.99</h6>
                </div>
              </Grid>

           
        )})
         
        }
            
        </>
    )
}

export default HeartIcon
