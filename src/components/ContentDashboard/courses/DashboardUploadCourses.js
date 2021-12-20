import React from "react";
import Grid from "@mui/material/Grid";
import Course1 from "../../../assets/img/course1.png";
import Course2 from "../../../assets/img/course2.png";
import Course3 from "../../../assets/img/course3.png";
import Course4 from "../../../assets/img/course4.png";
import StarIcon from "@material-ui/icons/Star";

var items = [
  {
    id: 1,
    title: "CS-GO Ep 2 Complete Course",
    img: Course1,
    name: "James Wiik",
    rating: "rating",
    price: "19.99",
    test: "1",
  },
  {
    id: 2,
    title: "PUBG GamePlay Course",
    img: Course2,
    name: "Ifaf ghori",
    rating: "rating",
    price: "19.99",
    test: "2",
  },
  {
    id: 3,
    title: "Taken 5 Fight Course",
    img: Course3,
    name: "Arslan Ash",
    rating: "rating",
    price: "19.99",
    test: "3",
  },
  {
    id: 4,
    title: "Minicraft Full Course",
    img: Course4,
    name: "James Wiik",
    rating: "rating",
    price: "19.99",
    test: "4",
  },
  {
    id: 5,
    title: "5Minicraft Full Course",
    img: Course4,
    name: "5James Wiik",
    rating: "rating",
    price: "19.99",
    test: "5",
  },
  {
    id: 6,
    title: "6Minicraft Full Course",
    img: Course3,
    name: "6James Wiik",
    rating: "rating",
    price: "19.99",
    test: "6",
  },
  {
    id: 7,
    title: "7Minicraft Full Course",
    img: Course2,
    name: "7James Wiik",
    rating: "rating",
    price: "19.99",
    test: "7",
  },
  {
    id: 8,
    title: "8Minicraft Full Course",
    img: Course1,
    name: "8James Wiik",
    rating: "rating",
    price: "19.99",
    test: "8",
  },
];
const DashboardUploadCourses = () => {
  return (
    <>
      <Grid
        className="cardGrid-container"
        container
        spacing={{ xs: 1, md: 1, lg: 0 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      >
        {items.map((item) => (
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <div className="cardGrid-dashboard">
              <div className="favourite-icon-position">
                <img src={item.img} className="dashboardcourseimg" alt="img" />
              </div>
              <h5 className="latestcourseh5">{item.title}</h5>
              <p className="latestcoursep1">{item.name}</p>
              <p className="latestcoursep1">
                {" "}
                5.0
                {[1, 2, 3, 4, 5].map((item) => (
                  <StarIcon className="star-icon" />
                ))}
                (1809)
              </p>
              <h6 className="dashboardlatestcourseh6">$19.99</h6>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DashboardUploadCourses;
