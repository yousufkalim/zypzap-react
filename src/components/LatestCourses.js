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
  let countTime = (course) => {
    const Videos = course?.videos;

    let count = 0;
    if (Videos) {
      Videos.map((video) => {
        count += video.duration;
      });
    }
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
            <Link to="/CoursePage" className="requestBt" course={item}>
              <a className="courseDetail" key={i}>
                <div
                  className="cardGrid"
                  style={{
                    backgroundColor: " #202342",
                    margin: "12px",
                    borderRadius: "35px",
                  }}
                >
                  {/* {item?.creator?.user_id?.profile_photo?.item.creator.user_id.profile_photo:} courseimg img */}
                  <img
                    src={item?.thumbnail ? item.thumbnail : Course1}
                    className="courseimg"
                    alt="img"
                  />
                  <h5 className="latestcourseh5">
                    {item?.course_name ? item.course_name : "Fight Course"}
                  </h5>
                  <p className="latestcoursep1">
                    {item?.creator?.user_id?.username}
                  </p>
                  <p className="latestcoursep1">
                    {" "}
                    {item?.rating ? item.rating : "0.0"} &nbsp;
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star1
                        style={{
                          width: "15px",
                          height: "15px",
                          color: "red",
                          margintTop: "3px",
                          position: "relative",
                          top: "3px",
                          key: { item },
                        }}
                      />
                    ))}
                    &nbsp;{" "}
                    {item?.student
                      ? item.student.length + " Student"
                      : 0 + "   Student"}
                  </p>
                  <h6 className="latestcourseh6">{item?.price + " $"}</h6>
                </div>
              </a>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
