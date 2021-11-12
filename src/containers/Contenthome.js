import React from 'react'
import Header from "../components/Header";
import ContentLendingPage from "../components/ContentHome/ContentLendingPage";

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
             <ContentLendingPage /></div>
        </>
    )
}

export default Contenthome
