// Init
import React from "react";
import Course1 from "../assets/img/course1.png";
import Course2 from "../assets/img/course2.png";
import Course3 from "../assets/img/course3.png";
import Course4 from "../assets/img/course4.png";
import StarIcon from "@material-ui/icons/Star";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ReactComponent as Star1 } from "../assets/icons/star2.svg";
import { Link } from "react-router-dom";
import LatestCourseGameIcon from "../assets/icons/LatestCourseGameIcon.svg";
import LatestCourseStarBadgeIcon from "../assets/icons/LatestCourseStarBadgeIcon.svg";
import LatestCourseLavelIcon from "../assets/icons/LatestCourseLavelIcon.svg";
import LatestCourseStarIcon from "../assets/icons/LatestCourseStarIcon.svg";
import LatestCourseVideoIcon from "../assets/icons/LatestCourseVideoIcon.svg";
import LatestCourseTimingIcon from "../assets/icons/LatestCourseTimingIcon.svg";
export default function LatestCourses(props) {
  const { courses } = props;
  const items = courses.sort(function (a, b) {
    var c = new Date(a.createdAt);
    var d = new Date(b.createdAt);
    return d - c;
  });
  let countViews = (course) => {
    const Videos = course?.videos;

    let count = 0;
    Videos.map((video) => {
      count += video.views;
    });

    return count;
  };
  const calTotalSecInVideos = (videos) => {
    let timeInSecond = 1;
    videos.map((videos) => (timeInSecond += parseInt(videos.duration)));
    var hrs = ~~(timeInSecond / 3600);
    var mins = ~~((timeInSecond % 3600) / 60);
    var secs = ~~timeInSecond % 60;
    let time;
    if (hrs > 0) {
      time = `${hrs} : ${mins} :${secs} hrs`;
    } else if (mins > 0) {
      time = `${mins}:${secs} mins`;
    } else {
      time = `${secs} sec`;
    }

    return time;
  };
  const timeInday = (videos) => {
    const secsPerDay = 86400;
    const seconds = calTotalSecInVideos(videos);
    var days = Math.floor(seconds / secsPerDay);
    let week = 0;
    if (days < 7) week = 0;
    if (days > 7) week = days / 7;
    return week;
  };
  // var items = [
  //   {
  //     title: "CS-GO Ep 2 Complete Course 1",
  //     img: Course1,
  //     name: "James Wiik",
  //     rating: "rating",
  //     price: "19.99",
  //     test: "1",
  //   },
  //   {
  //     title: "PUBG GamePlay Course",
  //     img: Course2,
  //     name: "Ifaf ghori",
  //     rating: "rating",
  //     price: "19.99",
  //     test: "2",
  //   },
  //   {
  //     title: "Taken 5 Fight Course",
  //     img: Course3,
  //     name: "Arslan Ash",
  //     rating: "rating",
  //     price: "19.99",
  //     test: "3",
  //   },
  //   {
  //     title: "Minicraft Full Course",
  //     img: Course4,
  //     name: "James Wiik",
  //     rating: "rating",
  //     price: "19.99",
  //     test: "4",
  //   },
  //   {
  //     title: "5Minicraft Full Course",
  //     img: Course4,
  //     name: "5James Wiik",
  //     rating: "rating",
  //     price: "19.99",
  //     test: "5",
  //   },
  //   {
  //     title: "6Minicraft Full Course",
  //     img: Course3,
  //     name: "6James Wiik",
  //     rating: "rating",
  //     price: "19.99",
  //     test: "6",
  //   },
  //   {
  //     title: "7Minicraft Full Course",
  //     img: Course2,
  //     name: "7James Wiik",
  //     rating: "rating",
  //     price: "19.99",
  //     test: "7",
  //   },
  //   {
  //     title: "8Minicraft Full Course",
  //     img: Course1,
  //     name: "8James Wiik",
  //     rating: "rating",
  //     price: "19.99",
  //     test: "8",
  //   },
  //   {
  //     title: "9Minicraft Full Course",
  //     img: Course1,
  //     name: "9James Wiik",
  //     rating: "rating",
  //     price: "19.99",
  //     test: "3",
  //   },
  //   {
  //     title: "10Minicraft Full Course",
  //     img: Course2,
  //     name: "10James Wiik",
  //     rating: "rating",
  //     price: "19.99",
  //     test: "3",
  //   },
  //   {
  //     title: "11Minicraft Full Course",
  //     img: Course3,
  //     name: "11James Wiik",
  //     rating: "rating",
  //     price: "19.99",
  //     test: "3",
  //   },
  //   {
  //     title: "12Minicraft Full Course",
  //     img: Course4,
  //     name: "12James Wiik",
  //     rating: "rating",
  //     price: "19.99",
  //     test: "3",
  //   },
  // ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="latestCoursescontainer">
      <div className="latestcourseHeadingDiv">
        <p className="latestcourseheading">Latest Course</p>
        <p className="latestcourseheading">View All</p>
      </div>
      <div className="carousalOuterDiv">
        <Carousel
          responsive={responsive}
          infinite={true}
          className="latestcourseCarousel"
        >
          {items.map((item, i) => (
            <Link
              to={{
                pathname: `OverView/${item?._id}`,
                state: { course: `${item}` },
              }}
              className="requestBt"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div
                className="cardGrid"
                style={{
                  backgroundColor: " #202342",
                  margin: "12px",
                  borderRadius: "35px",
                }}
              >
                <img
                  src={item?.thumbnail ? item.thumbnail : Course1}
                  className="courseimg"
                  alt="img"
                />
                <h4 className="latestCourse-h4">
                  {item?.course_name ? item.course_name : "Fight Course"}
                </h4>
                <div className="latestCourseMain-Div">
                  <div className="latestCouse-colmn">
                    <div className="latestCourse-colmn-centerDiv">
                      <img
                        src={LatestCourseGameIcon}
                        alt=""
                        className="LatestCourse-IMG"
                      />
                      <p className="latestCourse-p">
                        {item?.creator?.user_id?.username}
                      </p>
                    </div>
                    <div className="latestCourse-colmn-centerDiv">
                      <img
                        src={LatestCourseStarIcon}
                        alt=""
                        className="LatestCourse-IMG"
                      />
                      <p className="latestCourse-p">
                        {" "}
                        {item?.rating ? item.rating : "0"}
                      </p>
                    </div>
                  </div>
                  {/* ------------------------------- copy colmn -------------------------------  */}
                  <div className="latestCouse-colmn">
                    <div className="latestCourse-colmn-centerDiv">
                      <img
                        src={LatestCourseStarBadgeIcon}
                        alt=""
                        className="LatestCourse-IMG"
                      />
                      <p className="latestCourse-p"> {countViews(item)}</p>
                    </div>
                    <div className="latestCourse-colmn-centerDiv">
                      <img
                        src={LatestCourseVideoIcon}
                        alt=""
                        className="LatestCourse-IMG"
                      />
                      <p className="latestCourse-p">
                        {calTotalSecInVideos(item?.videos)}
                      </p>
                    </div>
                  </div>
                  {/* ------------------------------- copy colmn -------------------------------  */}
                  <div className="latestCouse-colmn">
                    <div className="latestCourse-colmn-centerDiv">
                      <img
                        src={LatestCourseLavelIcon}
                        alt=""
                        className="LatestCourse-IMG"
                      />
                      <p className="latestCourse-p">{item?.level}</p>
                    </div>
                    <div className="latestCourse-colmn-centerDiv">
                      <img
                        src={LatestCourseTimingIcon}
                        alt=""
                        className="LatestCourse-IMG"
                      />
                      <p className="latestCourse-p">
                        {timeInday(item?.videos)}5 Days ago
                      </p>
                    </div>
                  </div>
                  {/* ------------------------------- copy colmn -------------------------------  */}
                </div>
                {/* /* -------------------------------- new card --------------------------------  */}
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
