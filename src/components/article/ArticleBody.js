// Init
import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Avatar2 from "../../assets/icons/Avatar2.svg";
import ArticleBodyimg from "../../assets/img/articlebody.png";
import FbIcon from "../../assets/icons/fb2.svg";
import TwitterIcon from "../../assets/icons/twittericon.svg";
import PintrestIcon from "../../assets/icons/pin2.svg";
import Dot from "../../assets/icons/dot2.svg";
import LinkedinIcon from "../../assets/icons/linkedin2.svg";
import YouMayLike from "./YouMayLike";
import BlogFoote from "../blog/BlogFooter";
import TwitterIcon2 from "../../assets/icons/TwitterIcon2.svg";
import moment from "moment";

export default function ArticleBody({ singlBlog, loading, blogs }) {
  function htmlfile() {
    return {
      __html: `<div class="htmlmaindiv">
      <p class="htmlp1">${singlBlog?.blog_desc}</p>
      <p class="htmlp1">${singlBlog?.blog_content}</p>
      </div>`,
    };
  }
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
      {loading ? (
        <h1>Chargement en cours...</h1>
      ) : (
        <div className="articleBodycontainer">
          <img
            // src={ArticleBodyimg}
            src={process.env.REACT_APP_baseURL + singlBlog?.blog_images}
            className="articleimg"
            alt="img"
          />
          <div style={{ width: "85%" }}>
            <h1 className="h1article">{singlBlog?.blog_title}</h1>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={8} sm={9}>
              <div className="articleavatardiv">
                <img src={Avatar2} className="articleavatar" alt="img" />
                <div className="articlediv2">
                  <p className="articlep1">
                    {/* {singlBlog?.blog_author?.name.charAt(0).toUpperCase() +
                      singlBlog?.blog_author?.name.slice(1)} */}
                    ZypZap
                  </p>
                  {/* <p className="articlep2">May 15・1 min read</p> */}
                  <p className="articlep2">
                    {moment(singlBlog?.createdAt).format("MMMM DD HH:s")}
                  </p>
                </div>
              </div>
              {/* <div className="articleavatardiv2">
                <div className="linediv"></div>
                <div>
                  <h3 className="a_h3">
                    Download {singlBlog?.blog_title} On PC/Laptop For Free
                    [WINDOWS 10, 8, 8.1, 7]. You Can Download{" "}
                    {singlBlog?.blog_title} In Windows 10.{" "}
                    {singlBlog?.blog_title} Download Free.
                  </h3>
                </div>
              </div> */}
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="articleSocialicon">
                <img
                  src={TwitterIcon2}
                  className="articlesocialicon"
                  alt="img"
                />
                <img
                  src={LinkedinIcon}
                  className="articlesocialicon"
                  alt="img"
                />
                <img src={FbIcon} className="articlesocialicon" alt="img" />
                <img
                  src={PintrestIcon}
                  className="articlesocialicon"
                  alt="img"
                />
                <img src={Dot} className="articlesocialicon" alt="img" />
              </div>
            </Grid>
          </Grid>
          <div dangerouslySetInnerHTML={htmlfile()} />
          <YouMayLike blogs={blogs} loading={loading} />
        </div>
      )}
      {/* <BlogFoote /> */}
    </>
  );
}
