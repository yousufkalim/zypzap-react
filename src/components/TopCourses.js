// Init
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import { ReactComponent as Star1 } from "../assets/icons/star2.svg";
import TopCourseImg from "../assets/img/topcourseimg.png";
import avatar from "../assets/img/avatar.png";
import StarIcon from "@material-ui/icons/Star";

export default function TopCourses(props) {
  const [loading, setLoading] = useState(false);
  const { courses } = props;

  const Courses = courses.sort(function (a, b) {
    var c = a.rating;
    var d = b.rating;
    return d - c;
  });
  var items = [
    {
      name: "PUBG gameplay full course",
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
    <div className="topCoursescontainer">
      <p className="topcourseheading">Top Courses</p>
      <Carousel
        autoPlay={false}
        animation={"fade"}
        activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
        className="topcoursecarousal"
      >
        {Courses?.slice(0, 3).map((item, i) => (
          <TopCoursesComponent key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function TopCoursesComponent({ item }) {
  let countViews = (course) => {
    const Videos = course?.videos;

    let count = 0;
    Videos.map((video) => {
      count += video.views;
    });

    return count;
  };
  let countTime = (course) => {
    const Videos = course?.videos;

    let count = 0;
    if (Videos) {
      Videos.map((video) => {
        count += video.duration;
      });
    }

    return count;
  };
  const postedTime = (item) => {
    const date1 = new Date(item?.createdAt);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  return (
    <Grid
      container
      spacing={2}
      className="topCourseGrid"
      style={{ width: "auto" }}
    >
      <Grid item xs={12} sm={5} className="topCoursesDiv">
        {/*  make it dynamic  */}
        <img
          src={item?.thumbnail ? item.thumbnail : TopCourseImg}
          className="topcourseimg"
          alt="img"
        />
      </Grid>
      <Grid item xs={12} sm={8} className="topcourseTextGrid">
        <Grid container spacing={2}>
          <Grid item xs={8} md={8}>
            <h3 className="h3heading">
              {item?.name ? item.name : "PUBG gameplay full course"}
            </h3>
            <p className="topcourseText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              semper mi feugiat quis tellus arcu. Rutrum non vitae id urna nunc,
              egestas. Tempus aliquam, at fusce facilisi gravida lacus faucibus
              felis, aliquet. Condimentum aenean nulla morbi euismod non vel
              arcu sapien magna.
            </p>
          </Grid>
          <Grid item xs={4} md={4}>
            {/* <h3 style={{ textAlign: "right" }}>{item?.price + " $"}</h3> */}
          </Grid>
        </Grid>
        <Grid container spacing={2} className="topcourseuserGrid">
          <Grid item xs={6} md={6}>
            <div className="userprofilediv">
              <img
                src={
                  item?.creator?.user_id?.profile_photo
                    ? item.creator.user_id.profile_photo
                    : avatar
                }
                className="avatar"
                alt="img"
              />
              <div className="div2">
                <p className="p1">{item?.creator?.user_id?.username}</p>
                <p className="p2">{item?.course_name + " player"}</p>
                <p className="p2">
                  {item?.rating ? item.rating : "0.0"} &nbsp;
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star1
                      className="starID"
                      style={{
                        width: "15px",
                        height: "15px",
                        // color: "red",
                        top: "3px",
                      }}
                    />
                  ))}
                  {" ( " + countViews(item) + " )"}
                  {/* &nbsp; (382,420) */}
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={6} className="topcourseuserRightGrid">
            <div style={{ textAlign: "right" }}>
              <span className="marginRight">
                {item?.level ? item.level : "inital level"}
              </span>
              <span className="marginRight">|</span>
              <span className="marginRight">
                {countTime(item) ? countTime(item) + "min" : "0 min"}
              </span>
              <span className="marginRight">|</span>
              <span className="marginRight">
                {item?.student
                  ? item.student.length + " Student"
                  : 0 + "   Student"}
              </span>
              <span className="marginRight">|</span>
              <span className="marginRight">
                {`${postedTime(item)} days ago`}
              </span>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
