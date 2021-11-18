// Init
import React, { useState, useEffect } from "react";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Article1 from "../../assets/img/article1.png";
import Article2 from "../../assets/img/article2.png";
import Article3 from "../../assets/img/article3.png";
import Article4 from "../../assets/img/article4.png";

export default function LatestArticle({ blogs, loading, setLoading }) {
  let newdata = [];
  let data = [
    {
      heading: "Why Pubg Designed the way it is?",
      img: Article1,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page this is when looking at its layout game is best. The point of using Lorem Ipsum is that...",
      date: "December 17, 2021",
      By: "Baig Irfan",
    },
    {
      heading: "CoverFire Game || 2021",
      img: Article2,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when looking at its layout game is best. ",
      date: "December 17, 2021",
      By: " Moin Khan",
    },
    {
      heading: "Mass Efffect Game || 2021",
      img: Article3,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when looking at its layout game is best. ",
      date: "December 17, 2021",
      By: " Moin Khan",
    },
    {
      heading: "Alone in the Dark || 2021",
      img: Article4,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when looking at its layout game is best. ",
      date: "December 17, 2021",
      By: " Moin Khan",
    },
  ];

  return (
    <div className="LatestArticlecontainer">
      <p className="LatestArticleheading">Latest Articles</p>
      {loading ? (
        <h1>Loading..</h1>
      ) : blogs ? (
        <>
          {" "}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className="latestArticleLeft">
                <img
                  src={`http://localhost:5000/${blogs[0]?.blog_images}`}
                  className="article1img"
                />
                <div className="articledetail">
                  <p>
                    {moment(blogs[0]?.createdAt).format("dddd DD, YYYY")}
                    <span className="commentSpan">' 2 Comments</span>
                    <br />
                  </p>
                  <h2 className="articleheading">{blogs[0]?.blog_title}</h2>
                  <p className="textdescription1">
                    {blogs[0]?.blog_desc.length > 150
                      ? blogs[0]?.blog_desc.substring(0, 180) + "..."
                      : blogs[0]?.blog_desc}
                    <span className="seemore"> See more</span>
                  </p>
                  <p className="articleBy">
                    By{" "}
                    <span style={{ color: "red" }}>
                      {" "}
                      {blogs[0]?.blog_author.user_id.username
                        .charAt(0)
                        .toUpperCase() +
                        blogs[0]?.blog_author.user_id.username.slice(1)}
                    </span>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {blogs.slice(1, 4).map((item) => (
                <>
                  {console.log(
                    "item?.blog_desc.length",
                    item?.blog_desc.length
                  )}
                  <div className="latestArticleRight">
                    <img
                      src={process.env.REACT_APP_baseURL + item.blog_images}
                      className="article2img"
                    />
                    <div className="articleText">
                      <h3>{item.blog_title}</h3>
                      <p className="textdescription">
                        {item?.blog_desc.length > 186
                          ? item?.blog_desc.substring(0, 186) + ".."
                          : item?.blog_desc}
                      </p>

                      <p className="author1">
                        By<span style={{ color: "red" }}> Moin Khan</span>
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </Grid>
          </Grid>
        </>
      ) : (
        <h1>No Blogs available</h1>
      )}
    </div>
  );
}
