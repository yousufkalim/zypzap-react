// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import Article1 from "../../assets/img/article1.png";
import Article2 from "../../assets/img/article2.png";
import Article3 from "../../assets/img/article3.png";
import Article4 from "../../assets/img/article4.png";

export default function LatestArticle() {
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
  let newData = () => {
    data.shift();
    return data;
  };
  return (
    <div className="LatestArticlecontainer">
      <p className="LatestArticleheading">Latest Articles</p>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="latestArticleLeft">
            <img src={Article1} className="article1img" />
            <div className="articledetail">
              <p>
                {data[0].date}
                <span className="commentSpan">' 2 Comments</span>
              </p>
              <h2 className="articleheading">{data[0].heading}</h2>
              <p>
                {data[0].detail}
                <span className="seemore"> See more</span>
              </p>
              <p className="articleBy">
                By <span style={{ color: "red" }}> {data[0].By}</span>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          {newData()?.map((item) => (
            <>
              <div className="latestArticleRight">
                <img src={item.img} className="article2img" />
                <div className="articleText">
                  <h3>{item.heading}</h3>
                  <p className="textdescription">{item.detail}</p>
                  <p>
                    By<span style={{ color: "red" }}> {item.By}</span>
                  </p>
                </div>
              </div>
            </>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
