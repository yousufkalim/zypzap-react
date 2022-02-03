// Init
import React, { useState, useEffect } from "react";
import BlogBodyimg from "../../assets/img/blogBody2.png";
import LatestArticle from "./LatestArticles";
import YouMayLike from "./YouMayLike";
import BlogFooter from "./BlogFooter";
import api from "../../api";
import { Store, UpdateStore } from "../../StoreContext";

export default function BlogBody() {
  const [loading, setLoading] = useState(false);
  // init
  const updateStore = UpdateStore();
  const { blogs } = Store();
  useEffect(() => {
    // get blogs
    getBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let getBlogs = async () => {
    setLoading(true);

    let res = await api("get", "/blogs");
    if (res) {
      updateStore({ blogs: res?.data }); 
    }
    setLoading(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="BlogBodycontainer">
        <img src={BlogBodyimg} className="BlogbodyImage" />
        <div className="BlogtextonImg">
          <h1 className="BlogtextimgH1">Blog</h1>
          <p className="BlogtextonImgP">Tag Line Here</p>
        </div>
      </div>
      <LatestArticle blogs={blogs} loading={loading} setLoading={setLoading} />
      {/* <YouMayLike blogs={blogs} loading={loading} setLoading={setLoading} /> */}
      <BlogFooter />
    </>
  );
}
