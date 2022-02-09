// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
// import Carousel from "react-material-ui-carousel";
// import Avatar2 from "../../assets/icons/Picture.png";
import Instrucors from "../../assets/icons/instructors.png";
import Games from "../../assets/icons/games.png";
import Learners from "../../assets/icons/learners.png";
import Customers from "../../assets/icons/customers.png";
// import Colon from "../../assets/icons/colon.png";

export default function UserReview() {
  var items = [
    {
      name: "PUBG gameplay full course1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Taken gameplay full course2",
      description: "Hello World!",
    },
    {
      name: "Speed3",
      description: "Hello World!",
    },
  ];
  return (
    <>
      <div className="userReviewContainer">
        <div className="reviewHeadingdiv">
          <h1
            style={{
              fontSize: "28px",
              fontFamily: "Myriad Pro",
              textTransform: "uppercase",
            }}
          >
            Suivez-nous sur les reseaux sociaux
          </h1>
        </div>
        <Grid container spacing={4} className="keepgrowingGrid">
          <Grid item xs={12} md={3}>
            <div>
              <img src={Learners} alt="img" />
              <h3 className="reviewh3">44M+</h3>
              <p className="reviewP">Learners</p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div>
              <img src={Instrucors} alt="img" />
              <h3 className="reviewh3"> 2.1k</h3>
              <p className="reviewP">Instructors</p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div>
              <img src={Games} alt="img" />
              <h3 className="reviewh3">232</h3>
              <p className="reviewP">Games</p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div>
              <img src={Customers} alt="img" />
              <h3 className="reviewh3">2M+</h3>
              <p className="reviewP">Enterprise customers</p>
            </div>
          </Grid>
        </Grid>
        <div style={{ padding: "50px" }}>
          {/* <Carousel
            autoPlay={false}
            // navButtonsAlwaysVisible={true}
            animation={"fade"}
            activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
            className="topcoursecarousal"
          >
            {items.map((item, i) => (
              <Reviews key={i} item={item} />
            ))}
          </Carousel> */}
        </div>
      </div>
    </>
  );
}

function Reviews({ item }) {
  return (
    <>
      {/* <div className="reviewHeadingdiv">
        <h1 className="userHeadingReview">
          What our <span style={{ color: "red" }}>users</span> say
        </h1>
      </div>
      <Grid container spacing={2} className="">
        <Grid item xs={12} sm={4} className="">
          <div className="userReviewavatardiv">
            <img src={Avatar2} className="userReviewavatar" alt="img" />
            <div className="userReviewdiv2">
              <p className="userReviewp1">Jenny Wilson</p>
              <p className="userReviewp2">Vice President</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} className="">
          <div>
            <img src={Colon} className="colon" alt="img" />
            <p className="reviewText">
              We had an incredible experience working with Landify and were
              impressed they made such a big difference in only three weeks. Our
              team is so grateful for the wonderful improvements they made and
              their ability to get familiar with the product concept so quickly.
              It acted as a catalyst to take our design to the next level and
              get more eyes on our product.
            </p>
          </div>
        </Grid>
      </Grid> */}
    </>
  );
}
