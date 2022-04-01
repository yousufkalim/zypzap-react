import React from "react";
import Grid from "@mui/material/Grid";
import Course1 from "../../../assets/img/course1.png";
import Course2 from "../../../assets/img/course2.png";
import Course3 from "../../../assets/img/course3.png";
import Course4 from "../../../assets/img/course4.png";
import StarIcon from "@material-ui/icons/Star";
import { ReactComponent as Star1 } from "../../../assets/icons/star2.svg";
import EditIcon from "../../../assets/icons/EditIcon.svg";
import DeleteIcon from "../../../assets/icons/DeleteIcon.svg";
import IIcon from "../../../assets/icons/IIcon.svg";

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
];
const DashboardUploadCourses = ({ pageName }) => {
  return (
    <>
      <Grid
        className="cardGrid-container"
        container
        spacing={{ xs: 1, md: 1, lg: 0 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      >
        {items.map((item) => (
          <Grid item xs={12} sm={12} md={4} lg={3} className="card_grids">
            <div className="cardGrid-dashboard">
              <div className="favourite-icon-position">
                <img src={item.img} className="dashboardcourseimg" alt="img" />
              </div>
              <div className="dashbordHeading-div">
                <h5 className="latestcourseh5">{item.title}</h5>
                <div className="dashbordIconsDiv">
                  {pageName === "publish" || pageName === "draft" ? (
                    <>
                      <img className="deleteIcon1" src={EditIcon} alt="" />
                      &nbsp;&nbsp;&nbsp;
                      <img className="editIcon1" src={DeleteIcon} alt="" />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <p className="latestcoursep1">{item.name}</p>
              <p className="latestcoursep1">
                {" "}
                5.0 &nbsp;
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star1 className="star-icon" />
                ))}
                &nbsp; (1809)
              </p>
              <h6
                className="dashboardlatestcourseh6"
                style={{ display: "inline-block" }}
              >
                $19.99 &nbsp; | &nbsp; 50 min
              </h6>
              <p
                className="dashboardlatestcourseh6"
                style={{
                  display: "inline-block",
                  marginLeft: "auto",
                  float: "right",
                  opacity: "0.5",
                }}
              >
                {pageName === "publish" || pageName === "draft" ? (
                  "D: 11/02/2022"
                ) : (
                  <img src={IIcon} alt="" />
                )}
              </p>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DashboardUploadCourses;
