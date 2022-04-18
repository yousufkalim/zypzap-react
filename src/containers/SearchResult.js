import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/blog/BlogFooter";
import SearchResultBody from "../components/searchResult/SearchResultBody";
import { useHistory, useLocation } from "react-router-dom";
const SearchResult = () => {
  const history = useHistory();
  const [openlogin, setOpenLogin] = useState(false);
  const [opensignup, setOpenSignup] = useState(false);
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Header
        setOpenLogin={setOpenLogin}
        setOpenSignup={setOpenSignup}
        openlogin={openlogin}
        opensignup={opensignup}
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
      />
      <SearchResultBody />
      <Footer />
    </div>
  );
};

export default SearchResult;
