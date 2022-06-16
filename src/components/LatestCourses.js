// Init
import React from "react";
import Course1 from "../assets/img/course1.png";
import moment from "moment";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { ReactComponent as Star1 } from "../assets/icons/star2.svg";
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
  const items = courses?.sort(function (a, b) {
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
  const getDateIs = (d) => {
    var date = new Date(d);
    return moment(date).fromNow();
  };
  const secondToTime = (second) => {
    // Hours, minutes and seconds
    var hrs = ~~(second / 3600);
    var mins = ~~((second % 3600) / 60);
    var secs = ~~second % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
      ret += "" + hrs + "." + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + "." + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  };
  const calTotalSecInVideos = (videos) => {
    let timeInSecond = 0;
    videos?.map((videos) => (timeInSecond += parseInt(videos.duration)));
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
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
  const handleLatestCourses = () => {
    history.push({
      pathname: "/searchResult",
      param: {
        name: "Latest Courses",
        value: "2",
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
          // autoPlay={true}
          autoPlaySpeed={3000}
          // transitionDuration={3000}
          infinite={true}
          className="latestcourseCarousel"
        >
          {items?.map((item, i) => (
            <Link
              to={{
                pathname: `OverView/${item?._id}`,
                state: { course: `${item}` },
              }}
              className="requestBt"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="cardGrid">
                <div className="topRatedcardGrid-image">
                  <img
                    src={item?.thumbnail ? item.thumbnail : Course1}
                    className="topRatedcourseimg"
                    alt="img"
                  />
                </div>
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
                      <p className="latestCourse-pHeading">
                        <strong> {item?.creator?.user_id?.username}</strong>
                      </p>
                    </div>
                    <div className="latestCourse-colmn-centerDiv">
                      <img
                        src={LatestCourseStarIcon}
                        alt=""
                        className="LatestCourse-IMG"
                      />
                      <p className="latestCourse-p">
                        {item?.rating ? `${item.rating} Rating` : "No Rating"}
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
                        {/* {calTotalSecInVideos(item?.videos)} */}
                        {item?.videos &&
                          secondToTime(item?.videos[0]?.duration)}
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
                        {getDateIs(item?.createdAt)}
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
