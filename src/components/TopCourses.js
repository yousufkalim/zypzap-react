// Init
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import { ReactComponent as Star1 } from "../assets/icons/star2.svg";
import TopCourseImg from "../assets/img/topcourseimg.png";
import avatar from "../assets/img/avatar.png";
import StarIcon from "@material-ui/icons/Star";
import { Store, UpdateStore } from "../../src/StoreContext";
import api from "../api";
export default function TopCourses() {
  const [loading, setLoading] = useState(false);
  // init
  const updateStore = UpdateStore();
  const { courses } = Store();

  useEffect(() => {
    // get top courses
    getTopCourses();
  }, []);

  let getTopCourses = async () => {
    setLoading(true);

    let res = await api("get", "/courses");
    if (res) {
      updateStore({ courses: res?.data });
    }
    setLoading(false);
  };
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
        {courses?.map((item, i) => (
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

  return (
    <Grid
      container
      spacing={2}
      className="topCourseGrid"
      style={{ width: "auto" }}
    >
      <Grid item xs={12} sm={5} className="">
        <img src={TopCourseImg} className="topcourseimg" alt="img" />
      </Grid>
      <Grid item xs={12} sm={7} className="topcourseTextGrid">
        <Grid container spacing={2}>
          <Grid item xs={8} md={8}>
            <h3 className="h3heading">{item?.name}</h3>
            <p className="topcourseText">
              {item?.description
                ? item.description
                : "Description is not availiable for this courses"}
            </p>
          </Grid>
          <Grid item xs={4} md={4}>
            <h3 style={{ textAlign: "right" }}>{item?.price + " $"}</h3>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="topcourseuserGrid">
          <Grid item xs={6} md={6}>
            <div className="userprofilediv">
              <img src={avatar} className="avatar" alt="img" />
              <div className="div2">
                <p className="p1">{item?.creator?.user_id?.username}</p>
                <p className="p2">{item?.course_name + " player"}</p>
                <p className="p2">
                  {item?.rating ? item.rating : "0.0"} &nbsp;
                  {[1, 2, 3, 4, 5].map((item) => (
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
                  {"( " + countViews(item) + " )"}
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
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
