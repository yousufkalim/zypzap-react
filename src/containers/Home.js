// Init
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import Footer from "../components/blog/BlogFooter";
import Body from "../components/Body";
import { useLocation } from "react-router-dom";
import SetAuthToken from "../utils/SetAuthToken";
import Contactez from "../components/PopupForms/contactez";
import api from "../api";
import { Store, UpdateStore } from "../StoreContext";
export default function Home() {
  const [openContentRequest, setOpenContentRequest] = useState(false);
  const [games, setGames] = useState([]);
  const updateStore = UpdateStore();
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("user");
  if (localStorage.getItem !== token && token !== null) {
    localStorage.setItem("token", token);
  }
  useEffect(() => {
    getGames();
  }, []);
  const getGames = async () => {
    let res = await api("get", `/games/`);
    if (res) {
      updateStore({ Games: res.data });
      setGames(res.data);
    }
  };
  const [openlogin, setOpenLogin] = useState(false);
  const [opensignup, setOpenSignup] = useState(false);
  const [search, setSearch] = useState("course");
  const [input, setInput] = useState();
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] =
    React.useState(false);
  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Contactez
        openContentRequest={openContentRequest}
        setOpenContentRequest={setOpenContentRequest}
      />
      {/* <UserLandingPageHeader /> */}
      <Header
        openlogin={openlogin}
        setOpenLogin={setOpenLogin}
        opensignup={opensignup}
        setOpenSignup={setOpenSignup}
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
        games={games}
        search={search}
        setSearch={setSearch}
        input={input}
        setInput={setInput}
      />
      <Body
        openlogin={openlogin}
        setOpenLogin={setOpenLogin}
        opensignup={opensignup}
        setOpenSignup={setOpenSignup}
      />
      <Footer
        openContentRequest={openContentRequest}
        setOpenContentRequest={setOpenContentRequest}
      />
    </div>
  );
}
