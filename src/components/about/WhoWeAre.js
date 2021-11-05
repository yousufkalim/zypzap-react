// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import WhoWeAreimg from "../../assets/img/ss2.png";

export default function About() {
  return (
    <>
      <div className="whowearecontainer">
        <h1>
          Who <span style={{ color: "red" }}>we are</span>
        </h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="whoweareimgdiv">
              <img src={WhoWeAreimg} className="whoweareimg" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <h1 style={{ color: "white" }}>img</h1>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
