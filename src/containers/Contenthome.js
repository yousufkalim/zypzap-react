import React from 'react'
import Header from "../components/Header";
import ContentLendingPage from "../components/ContentHome/ContentLendingPage";
import WhyTechWith from "../components/ContentHome/WhyTechWith";
import HappyInstructor from "../components/ContentHome/HappyInstructor";

const Contenthome = () => {
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
             <Header />
             <ContentLendingPage />
             <WhyTechWith />
             <HappyInstructor/>
             </div>
        </>
    )
}

export default Contenthome
