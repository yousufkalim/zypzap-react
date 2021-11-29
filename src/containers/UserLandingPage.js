import React from 'react'
import UserLandingPageHeader from '../components/UserLandingPageHeader'
import UserLandingPageBody from '../components/UserLandingPage/UserLandingPageBody'
import Footer from "../components/blog/BlogFooter";
const SearchAppBar = ()=> {
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
   <UserLandingPageBody/>
   <Footer/>
   </div>
  </>
  );
}
export default  SearchAppBar;
