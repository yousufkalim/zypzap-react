// Init
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ArticleBody from "../components/article/ArticleBody";
import { useParams } from "react-router-dom";
import api from "../api";
import { Store, UpdateStore } from "../StoreContext";

export default function Article() {
  const [loading, setLoading] = useState(false);
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
      <Header />
      <ArticleBody singlBlog={singlBlog} loading={loading} blogs={blogs} />
    </div>
  );
}
