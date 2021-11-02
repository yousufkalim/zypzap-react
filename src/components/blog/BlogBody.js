// Init
import React, { useEffect } from "react";
import BlogBodyimg from "../../assets/img/blogBody.png";
import LatestArticle from "./LatestArticles";
import YouMayLike from "./YouMayLike";
import BlogFooter from "./BlogFooter";

export default function BlogBody() {
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
      <LatestArticle />
      <YouMayLike />
      <BlogFooter />
    </>
  );
}
