import React from 'react'
// import HeaderUserLandingPage from '../components/HeaderUserLandingPage'
// import CreateHome from "../components/content/CreateHome";
// import UserLandingPageBody from '../components/UserLandingPage/UserLandingPageBody'
import CreateHome from '../components/ContentLending/CreateHome'
import ContentCreator from "../components/ContentLending/ContentCreator"
import Avantages from "../components/ContentLending/Avantages"
import Monitization from "../components/ContentLending/Monitization"
import OurBlog from "../components/ContentLending/OurBlog"
import Footer from "../components/blog/BlogFooter";
import Header from "../components/Header";
// import BlogBody from "../components/blog/BlogBody";


const ContentCreatorLandingPage = () => {
    return (
        <div
        style={{
          minHeight: "100vh",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
         <Header />
         <CreateHome/>
         
      {/* <BlogBody /> */}
           {/* <HeaderUserLandingPage/> */}
           {/* <UserLandingPageBody/> */}
            {/* <CreateHome /> */}
            <ContentCreator />
            <Avantages />
            <Monitization />
            <OurBlog />
            <Footer />
            
        </div>
    )
}

export default ContentCreatorLandingPage
