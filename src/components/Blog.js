// Init
import React from "react";
import Homeblog1 from "../assets/img/Homeblog1.png";
import Homeblog2 from "../assets/img/Homeblog2.png";
import Homeblog3 from "../assets/img/Homeblog3.png";
import Game4 from "../assets/img/game4.png";

import "react-multi-carousel/lib/styles.css";
import Grid from "@material-ui/core/Grid";

export default function TopRatedContent() {
  var items = [
    {
      title: "Blog Title Here",
      img: Homeblog1,
      detail:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      btn:"Read more"
    },
    {
      title: "Blog Title Here",
      img: Homeblog2,
      detail:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      btn:"Read more"
      
    },
    {
      title: "Blog Title Here",
      img: Homeblog3,
      detail:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      btn:"Read more"
      
    },
    {
      title: "Blog Title Here",
      img: Homeblog3,
      detail:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      btn:"Read more"
      
    },
  ];

  return (
    <div className="blogcontainer">
      <div className="blogHeadingDiv">
        <p className="blogheading">Blog</p>
        <p className="blogheading">View All</p>
      </div>
      <div className="blogGridOuterDiv">
        <Grid container spacing={4}>
          {items.map((item, i) => (
            <Grid item xs={6} md={3}>
              <div className="blogGrid">
                <img src={item.img} className="blogcourseimg" />
                <h5 className="blogcourseh5">{item.title}</h5>
                <p className="blogcoursep1">{item.detail}</p>
                <p className="blogcourseh6">{item.btn}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
