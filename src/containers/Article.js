// Init
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ArticleBody from "../components/article/ArticleBody";
import { useParams } from "react-router-dom";
import api from "../api";
import { Store, UpdateStore } from "../StoreContext";
import UserLandingPageHeader from "../components/UserLandingPageHeader";

export default function Article() {
  const [loading, setLoading] = useState(false);
  const [openlogin, setOpenLogin] = React.useState(false);
  const [opensignup, setOpenSignup] = React.useState(false);
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] =
    React.useState(false);
  // init
  const updateStore = UpdateStore();
  const { singlBlog, blogs } = Store();
  const { id } = useParams();
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
    getSingleBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let getSingleBlog = async () => {
    setLoading(true);

    let res = await api("get", `/blogs/${id}`);
    if (res) {
      updateStore({ singlBlog: res?.data });
    }
    setLoading(false);
  };
  return (
    <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      {/* <UserLandingPageHeader /> */}
      {/* <Header
        setOpenLogin={setOpenLogin}
        setOpenSignup={setOpenSignup}
        openlogin={openlogin}
        opensignup={opensignup}
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
      /> */}
      <ArticleBody singlBlog={singlBlog} loading={loading} blogs={blogs} />
    </div>
  );
}
