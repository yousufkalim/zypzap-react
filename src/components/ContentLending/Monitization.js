import React from 'react'
import Grid from '@mui/material/Grid';
import Moni1 from '../../assets/icons/moni1.png'
import Moni2 from '../../assets/icons/moni2.png'
import Moni3 from '../../assets/icons/moni3.png'
import Moni4 from '../../assets/icons/moni4.png'
import Reddotline1 from '../../assets/icons/reddotline1.png'
import Reddotline2 from '../../assets/icons/reddotline2.png'

const Monitization = () => {
    return (
        <>
             <div className="monitization">
                <h2 className="monitization_heading">Monitization Process</h2>
                <hr className="hr_line3" />
                <div className="monitization_container">

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <div className="moniBox">
              <div  className="moniImage">
                  <img className="moni_icon" src={Moni1} alt="" />
              </div>
              <div className="moni_heading">
                  <h3 className="moni_h3">Prepare a Course</h3>
                  <p className="moni_p">The creator prepares and registers his cours</p>

              </div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="lineImg">
            <img src={Reddotline1} alt="" />
        </div>
        <div className="moniBox">
              <div  className="moniImage" >
                  <img className="moni_icon" src={Moni2} alt="" />
              </div>
              <div className="moni_heading">
                  <h3 className="moni_h3">Submit Evaluation</h3>
                  <p className="moni_p">He submits the course for evaluation</p>

              </div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="moniBox">
              <div  className="moniImage">
                  <img className="moni_icon" src={Moni3} alt="" />
              </div>
              <div className="moni_heading">
                  <h3 className="moni_h3">Get Validated</h3>
                  <p className="moni_p">The course is validated by the evaluator</p>

              </div>
          </div>
          <div className="lineIm2">
            <img src={Reddotline2} alt="" />
        </div>
        </Grid>
        <Grid item xs={3}>
        <div className="lineImg3">
            <img src={Reddotline1} alt="" />
        </div>
        <div className="moniBox">
              <div  className="moniImage">
                  <img className="moni_icon" src={Moni4} alt="" />
              </div>
              <div className="moni_heading">
                  <h3 className="moni_h3">Publish</h3>
                  <p className="moni_p">He can then follow the performance of the course. as well as the earning generated</p>

              </div>
          </div>
        </Grid>
      </Grid>               


                </div> 
                </div> 
            <div className="monibutton">
                    <button className="moniBTN">Monitize Your Skills</button>
            </div>
        </>
    )
}

export default Monitization
