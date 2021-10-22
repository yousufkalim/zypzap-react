// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import Course1 from "../assets/img/course1.png";

export default function Construction() {
  return (
    <div className="latestCoursescontainer">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="latestcourseheading">Latest Course</p>
        <p className="latestcourseheading">View All</p>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={3} md={3}>
          <div className="cardGrid">
            <img src={Course1} />
          </div>
        </Grid>
        <Grid item xs={3} md={3}>
          <div className="cardGrid">b</div>
        </Grid>
        <Grid item xs={3} md={3}>
          <div className="cardGrid">c</div>
        </Grid>
        <Grid item xs={3} md={3}>
          <div className="cardGrid">d</div>
        </Grid>
      </Grid>
    </div>
  );
}
