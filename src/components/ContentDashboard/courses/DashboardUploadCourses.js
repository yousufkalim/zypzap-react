import React, { useState, useEffect } from "react";
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
import { CompressOutlined } from "@mui/icons-material";
import api from "../../../api";
import { Link } from "react-router-dom";
import { Store, UpdateStore } from "../../../StoreContext";
const calTotalSecInVideos = (videos) => {
  let timeInSecond = 1;
  videos?.map((videos) => (timeInSecond += parseInt(videos.duration)));
  var hrs = ~~(timeInSecond / 3600);
  var mins = ~~((timeInSecond % 3600) / 60);
  var secs = ~~timeInSecond % 60;
  let time;
  if (hrs > 0) {
    time = `${hrs} : ${mins} :${secs} hrs`;
  } else if (mins > 0) {
    time = `${mins} : ${secs} mins`;
  } else {
    time = `${mins} : ${secs} sec`;
  }

  return time;
};
const formated = (date) => {
  const newDate = new Date(date);
  let format = `D: ${newDate.getMonth() + 1}/${
    newDate.getDay() + 3
  }/${newDate.getFullYear()}`;
  return format;
};
const DashboardUploadCourses = ({ pageName }) => {
  const { creator } = Store();
  useEffect(() => {
    // getCourses();
  }, [creator]);
  const hanldleClick = (e, item) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };
  return (
    <>
      <Grid
        className="cardGrid-container"
        container
        spacing={{ xs: 1, md: 1, lg: 0 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      >
        {pageName === "publish" ? (
          <>
            {" "}
            {creator?.courses?.map((item) => (
              <Grid item xs={12} sm={12} md={4} lg={3} className="card_grids">
                <Link
                  to={{
                    pathname: `OverView/${item?._id}`,
                    state: { course: `${item}` },
                  }}
                  className="requestBt"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="cardGrid-dashboard">
                    <div className="favourite-icon-position">
                      <img
                        src={item?.thumbnail ? item.thumbnail : Course1}
                        className="dashboardcourseimg"
                        alt="img"
                      />
                    </div>
                    <div className="dashbordHeading-div">
                      <h5 className="latestcourseh5">{item.course_name}</h5>
                      <div className="dashbordIconsDiv">
                        {pageName === "publish" || pageName === "draft" ? (
                          <>
                            <img
                              className="deleteIcon1"
                              src={EditIcon}
                              alt=""
                            />
                            &nbsp;&nbsp;&nbsp;
                            <img
                              className="editIcon1"
                              src={DeleteIcon}
                              alt=""
                              // onClick={(e) => hanldleClick(e, item)}
                            />
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <p className="latestcoursep1">
                      {creator?.user_id?.username}
                    </p>
                    <p className="latestcoursep1">
                      {" "}
                      {item?.rating === 0
                        ? item?.rating + ".0"
                        : item?.rating}{" "}
                      &nbsp;
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Star1 className="star-icon" />
                      ))}
                      &nbsp;{" "}
                      {`(${
                        item?.student?.length > 0
                          ? item?.student?.length
                          : ` 0 `
                      })`}
                    </p>
                    <h6
                      className="dashboardlatestcourseh6"
                      style={{ display: "inline-block" }}
                    >
                      {"$" + item.price} &nbsp; | &nbsp;{" "}
                      {calTotalSecInVideos(item?.videos)}
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
                        <> {formated(item?.createdAt)}</>
                      ) : (
                        <img src={IIcon} alt="" />
                      )}
                    </p>
                  </div>
                </Link>
              </Grid>
            ))}{" "}
          </>
        ) : (
          <div className="request-data">
            <p className="request-data-p">{pageName} course not aviliable </p>
          </div>
        )}
      </Grid>
    </>
  );
};

export default DashboardUploadCourses;
