import React,{useState} from 'react'
import Header from "../components/Header";
import Footer from "../components/blog/BlogFooter";
import Dashboard from '../components/ContentDashboard/Dashboard'
const ContentDashboard = () => {
  const [footerState, setFooterState] = useState(true)
         console.log(footerState);
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
      <Dashboard setFooterState={setFooterState} />
     {
      footerState && <Footer />
     }  
      </div>
        </>
    )
}

export default ContentDashboard
