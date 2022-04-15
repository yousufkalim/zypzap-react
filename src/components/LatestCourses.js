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
import { useHistory } from "react-router-dom";
export default function LatestCourses(props) {
  const history = useHistory();
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
    let timeInSecond = 0;
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
  const postedTime = (item) => {
    const date1 = new Date(item?.createdAt);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
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
  const handleLatestCourses = () => {
    history.push({
      pathname: "/searchResult",
      param: {
        name: "Top 10 Trendy Games",
        value: "1",
      },
    });
  };
  return (
    <div className="latestCoursescontainer">
      <div className="latestcourseHeadingDiv">
        <p className="latestcourseheading">Latest Course</p>
        <p className="latestcourseheadings" onClick={handleLatestCourses}>
          View All
        </p>
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
                        {item?.rating ? `${item.rating} Rating` : "0 Rating"}
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
                      <p className="latestCourse-p">
                        {" "}
                        {`(${countViews(item)})`}
                      </p>
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
                      <p className="latestCourse-p">{`${postedTime(
                        item
                      )} Days ago`}</p>
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
