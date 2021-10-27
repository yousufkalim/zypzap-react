// Init
import React from "react";
import Game1 from "../assets/img/game1.png";
import Game2 from "../assets/img/game2.png";
import Game3 from "../assets/img/game3.png";
import Game4 from "../assets/img/game4.png";
import Game5 from "../assets/img/game5.png";
import "react-multi-carousel/lib/styles.css";
import Grid from "@material-ui/core/Grid";

export default function TopRatedContent() {
  var items = [
    {
      title: "fighting game player of Tekken",
      img: Game1,
      name: "Arslan Ash",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "1",
    },
    {
      title: "Undefeated PUBG player",
      img: Game2,
      name: "Jennifer Flagg",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "2",
    },
    {
      title: "Mincraft Expert",
      img: Game3,
      name: "Pewdiepie",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "3",
    },
    {
      title: "Pro player of CS:GO",
      img: Game4,
      name: "Dupreeh",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "4",
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
                <h5 className="blogcourseh5">{item.name}</h5>
                <p className="blogcoursep1">{item.title}</p>
                <p className="blogcoursep1">
                  {" "}
                  Level :<span style={{ color: "red" }}>{item.level}</span>
                </p>
                <p className="blogcourseh6">{item.students}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
