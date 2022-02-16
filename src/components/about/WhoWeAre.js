// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import WhoWeAreimg from "../../assets/img/about1.png";
import VideoImg from "../../assets/img/videoimg.png";

export default function About() {
  return (
    <>
      <div className="whowearecontainer">
        <h1
          className="whowearecontainer_heading"
          style={{ textTransform: "uppercase", fontFamily: "Myriad Pro" }}
        >
          il etait une fois...
        </h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="whoweareimgdiv">
              <img src={WhoWeAreimg} className="whoweareimg" alt="img" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="whoweareText">
              <p className="whoweareP">
                It is a long established fact that a reader will be distracted
                by the readable content of a page this is when loovking at its
                layout game is best. The point of using Lorem Ipsum is that. It
                is a long established fact that a reader will be distracted by
                the readable content of a page this is when loovking at its
                layout game is best. The point of using Lorem Ipsum is that.
              </p>
              <p className="whoweareP">
                It is a long established fact that a reader will be distracted
                by the readable content of a page this is when loovking at its
                layout game is best. The point of using Lorem Ipsum is that.
              </p>
            </div>
          </Grid>
        </Grid>
        <div className="videoImgDiv">
          <img src={VideoImg} className="videoimg" />
        </div>
      </div>
    </>
  );
}
