import React from 'react'
import Box from '@mui/material/Box';
import landingpartnerheaderimg from '../../assets/img/landingpartnerheaderimg.png'
import LandingPartnerButton from './LandingPartnerButton'
const LandingPartnerHeader = () => {
    return (
        <>
            <Box className="landing-partner-img-container">
                <img className="landing-partner-header-img" src={landingpartnerheaderimg} />
                <div class="slider container">
                    <div class="landing-partner-text-container">
                        <h1 className="landing-partner-header">Partner with Us</h1>
                        <p className="landing-partner-pargraph">Here what we can create together</p>
                        <LandingPartnerButton />
                    </div>
                </div>
            </Box>

        </>
    )
}

export default LandingPartnerHeader
