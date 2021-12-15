// Init
import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Avatar2 from "../../assets/icons/avatar2.png";
import ArticleBodyimg from "../../assets/img/articlebody.png";
import FbIcon from "../../assets/icons/fb2.svg";
import TwitterIcon from "../../assets/icons/twittericon.svg";
import PintrestIcon from "../../assets/icons/pin2.svg";
import Dot from "../../assets/icons/dot2.svg";
import LinkedinIcon from "../../assets/icons/linkedin2.svg";
import YouMayLike from "./YouMayLike";
import BlogFoote from "../blog/BlogFooter";
import moment from "moment";

export default function ArticleBody({ singlBlog, loading, blogs }) {
  function htmlfile() {
    return {
      __html: `<div class="htmlmaindiv">
      <p class="htmlp1">${singlBlog?.blog_desc}</p>
    
      <p class="htmlp2">Battlegrounds displayed new sorts of gameplay that could be effortlessly drawn nearer by players of any ability level and was very replayable. PUBG Corporation has run a few little competitions and acquainted in-amusement apparatuses with help with broadcasting the diversion to observers, as they wish for it to end up a well-known eSport.</p>
      <h4 class="htmlh4">PlayerUnknown’s Battlegrounds (PUBG) is an online</h4>
      <ul class="htmlul">
      <li>PUBG set the unbelievable record of reaching 1,342,857</li>
      <li>History was made in September 2017</li>
      <li>overtaking Dota 2, an esports game produced by Valve</li>
<li>Search the web directly from your Chrome New Tab Browser Extension.</li>      
<li>BM Edison has set a goal to answer diverse user needs that are spending</li>      
<li>All rights for the technology, design, and content developed belong to their respective owners.</li>      
<li>Get access to diffrent tools that will help you success all the way to the finish line</li>      

      </ul>
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
        <h1>Loading...</h1>
      ) : (
        <div className="articleBodycontainer">
          <img
            // src={ArticleBodyimg}
            src={process.env.REACT_APP_baseURL + singlBlog?.blog_images}
            className="articleimg"
            alt="img"
          />
          <div style={{ width: "85%" }}>
            <h1 className="h1article">
              Download {singlBlog?.blog_title} on PC/Laptop free [Windows
              10,8,9.1,7]
            </h1>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={8} sm={9}>
              <div className="articleavatardiv">
                <img src={Avatar2} className="articleavatar" alt="img" />
                <div className="articlediv2">
                  <p className="articlep1">
                    {singlBlog?.blog_author?.name.charAt(0).toUpperCase() +
                      singlBlog?.blog_author?.name.slice(1)}
                  </p>
                  {/* <p className="articlep2">May 15・1 min read</p> */}
                  <p className="articlep2">
                    {moment(singlBlog?.createdAt).format("MMMM DD HH:s")}
                  </p>
                </div>
              </div>
              <div className="articleavatardiv2">
                <div className="linediv"></div>
                <div>
                  <h3 className="a_h3">
                    Download {singlBlog?.blog_title} On PC/Laptop For Free
                    [WINDOWS 10, 8, 8.1, 7]. You Can Download{" "}
                    {singlBlog?.blog_title} In Windows 10.{" "}
                    {singlBlog?.blog_title} Download Free.
                  </h3>
                </div>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="articleSocialicon">
                <img
                  src={TwitterIcon}
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
      <BlogFoote />
    </>
  );
}
