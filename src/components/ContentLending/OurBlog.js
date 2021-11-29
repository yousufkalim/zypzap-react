import React from 'react'
import Grid from '@mui/material/Grid';
import Ourpic1 from '../../assets/img/Ourpic1.png'
import Ourpic2 from '../../assets/img/Ourpic2.png'
import Ourpic3 from '../../assets/img/Ourpic3.png'
import OurCard from './OurCard'

const OurBlog = () => {
    return (
        <>
            <div className="ourBlog">
                <h2 className="ourBlog_heading">Our Blog</h2>
                <hr className="hr_line4" />
                <div className="ourBlog_container">

                   
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="outerDiv">
                         <OurCard img={Ourpic1}/>            
                         <OurCard img={Ourpic2}/>            
                         <OurCard img={Ourpic3}/>           
                    </Grid>

                </div>
            </div>
            <div className="ourbutton">
                <button className="ourBTN">View all</button>
            </div>
        </>
    )
}

export default OurBlog
