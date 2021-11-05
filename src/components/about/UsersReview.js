// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import { width } from "@mui/system";

export default function UserReview() {
  return (
    <>
      <div className="userReviewContainer">
        <div className="reviewHeadingdiv">
          <h1>
            We just keep <span style={{ color: "red" }}>growing</span>
          </h1>
        </div>
        <Grid container spacing={4} className="keepgrowingGrid">
          <Grid item xs={12} md={3}>
            <div>
              <h3>icon</h3>
              <h3>44M+</h3>
              <p>Learners</p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div>
              <h3>icon</h3>
              <h3>44M+</h3>
              <p>Learners</p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div>
              <h3>icon</h3>
              <h3>44M+</h3>
              <p>Learners</p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div>
              <h3>icon</h3>
              <h3>44M+</h3>
              <p>Learners</p>
            </div>
          </Grid>
        </Grid>
        <div style={{ padding: "50px" }}>
          <Carousel
            autoPlay={false}
            // navButtonsAlwaysVisible={true}
            animation={"fade"}
            activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
            className="topcoursecarousal"
          >
            <h1>one</h1>
            <h1>two</h1>
            <h1>three</h1>
          </Carousel>
        </div>
      </div>
    </>
  );
}

{
  /* <div style={{ display: "flex" }}>
<div>
  <div
    style={{
      width: "32px",
      height: "26px",
      border: "2px solid white",
      borderRadius: "50%",
    }}
  >
    1
  </div>
  <div
    style={{
      height: "40px",
      backgroundColor: "white",
      width: "1px",
      marginLeft: "15px",
    }}
  ></div>
  <div
    style={{
      width: "32px",
      height: "26px",
      border: "2px solid white",
      borderRadius: "50%",
    }}
  >
    2
  </div>
  <div
    style={{
      height: "40px",
      backgroundColor: "white",
      width: "1px",
      marginLeft: "15px",
    }}
  ></div>
  <div
    style={{
      width: "32px",
      height: "26px",
      border: "2px solid white",
      borderRadius: "50%",
    }}
  >
    3
  </div>
</div>
<div>
  <p>L</p>
  <p>S</p>
  <p>T</p>
</div>
</div> */
}
