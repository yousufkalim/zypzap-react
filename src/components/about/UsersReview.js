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
