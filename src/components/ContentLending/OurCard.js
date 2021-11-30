import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

const OurCard = (props) => {
  return (
    <>
      <Grid item xs={4}>
        {/* //////// card ////////// */}
        <Card
          sx={{ maxWidth: "95%" }}
          style={{ borderRadius: "15px", margin: "auto" }}
        >
          <CardMedia
            component="img"
            height="345px"
            image={props.img}
            alt="green iguana"
          />
          <CardContent
            style={{
              textAlign: "left",
              backgroundColor: "#1B1E39",
              color: "#fff",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="outHeading"
            >
              Blog Title Here
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: "#fff", opacity: "0.7" }}
              className="outP"
            >
              It is a long estabilshed fact that a reader will be distracted by
              the readoble content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </Typography>
          </CardContent>
          <CardActions
            style={{
              textAlign: "left",
              backgroundColor: "#1B1E39",
              color: "red",
              paddingLeft: "5px",
            }}
          >
            <Button
              style={{
                paddingLeft: "20px",
                fontSize: "15px",
                marginBottom: "10px",
              }}
              size="small"
            >
              Read More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default OurCard;
