import React from 'react'
import Grid from '@mui/material/Grid';
import Avant from '../../assets/icons/Avant.png'

import Carousel from "react-material-ui-carousel";


const Avantages = () => {
    return (
        <>
            <div className="content_Avantages">
                <h2 className="Avantages_heading">Avantages Passtotrip</h2>
                <hr className="hr_line2" />
                <div className="Avantages_container">

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <div className="content_pera">
                                <p className="pera1">The first gaming online course creation platform <br /> open to all</p>
                                <p className="pera1">Content Creators are free to cover any game</p>
                                <p className="pera1">The monetization for each content created is immediate and easy to understand</p>
                                <p className="pera1">Each user has the opportunity to acquire a real expert status within the community</p>
                                  {/* /// down text ////////// */}
                                  <p className="pera1">The first gaming online course creation platform <br /> open to all</p>
                                <p className="pera1">Content Creators are free to cover any game</p>
                                <p className="pera1">The monetization for each content created is immediate and easy to understand</p>
                                <p className="pera1">Each user has the opportunity to acquire a real expert status within the community</p>
                                <p className="pera1">The first gaming online course creation platform <br /> open to all</p>
                                <p className="pera1">Content Creators are free to cover any game</p>
                                <p className="pera1">The monetization for each content created is immediate and easy to understand</p>
                                <p className="pera1">Each user has the opportunity to acquire a real expert status within the community</p>
                                <p className="pera1">The first gaming online course creation platform <br /> open to all</p>
                                <p className="pera1">Content Creators are free to cover any game</p>
                                <p className="pera1">The monetization for each content created is immediate and easy to understand</p>
                                <p className="pera1">Each user has the opportunity to acquire a real expert status within the community</p>
                                  
                            </div>
                        </Grid>

                        <Grid item xs={6}>

                            <Carousel
                                autoPlay={false}
                                //   navButtonsAlwaysVisible={true}
                                animation={"fade"}
                                activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
                                className="topcoursecarousal"
                            >
                                <div >
                                    <img src={Avant} alt="" className="avant_img" />
                                </div>

                                <div >
                                    <img src={Avant} alt="" className="avant_img"/>
                                </div>
                                <div >
                                    <img src={Avant} alt="" className="avant_img"/>
                                </div>
                                <div >
                                    <img src={Avant} alt="" className="avant_img"/>
                                </div>
                            </Carousel>
                        </Grid>

                    </Grid>
                </div>
            </div>
            <div className="avantbutton">
                    <button className="AvantBTN">Become Content Creator</button>
            </div>

        </>
    )
}

export default Avantages
