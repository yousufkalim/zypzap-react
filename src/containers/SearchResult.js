import React from 'react'
import Header from '../components/Header'
import Footer from '../components/blog/BlogFooter'
import SearchResultBody from '../components/searchResult/SearchResultBody'
const SearchResult = () => {
    return (
        
         <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}>
         <Header/> 
         <SearchResultBody/>
        <Footer/>
         </div>
        
    )
}

export default SearchResult
