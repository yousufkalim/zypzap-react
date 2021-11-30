import React from 'react'
import UserLandingPageHeader from '../components/UserLandingPageHeader'
import LandingPartnerBody from '../components/LandingPartner/LandingPartnerBody'
import Footer from "../components/blog/BlogFooter";
const LandingPartner = () => {
    return (
        <>
        <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
           <UserLandingPageHeader/>
            <LandingPartnerBody/>
           <Footer/>  
           </div>
        </>
    )
}

export default LandingPartner
