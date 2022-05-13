import React, { useState, useEffect } from "react";
import Course1 from "../../assets/img/course1.png";
import Course2 from "../../assets/img/course2.png";
import Course3 from "../../assets/img/course3.png";
import Course4 from "../../assets/img/course4.png";
import StarIcon from "@material-ui/icons/Star";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ReactComponent as Star1 } from "../../assets/icons/star2.svg";
import { Link } from "react-router-dom";
import { Store, UpdateStore } from "../../StoreContext";
var items = [
  {
    title: "CS-GO Ep 2 Complete Course 1",
    img: Course1,
    name: "James Wiik",
    rating: "5.0",
    // price: "19.99 | 50 min",
    test: "1",
  },
  {
    title: "PUBG GamePlay Course",
    img: Course2,
    name: "Ifaf ghori ",
    rating: "rating",
    // price: "19.99 | 50 min",
    test: "2",
  },
];

const EnrolledCourse = () => {
  const { user } = Store();
  const [User, setUser] = useState(user ? user : {});
  const [enrolled_courses, setEnrolledCourses] = useState([]);
  useEffect(() => {
    setUser(user ? user : {});
    setEnrolledCourses(
      user?.enrolled_courses?.filter((courses) => courses.started === false)
    );
  }, []);
  return (
    <div className="wishlistDiv">
      <h3 className="wishCardh3"> Enrolled Courses</h3>
      <div className="carousalOuterDiv2 ">
        {User?.enrolled_courses?.length !== 0 ? (
          <>
            {enrolled_courses?.map((item, i) => (
              <>
                <Link
                  to="#"
                  className="courseDetail2"
                  course={item}
                  style={{ textDecoration: "none" }}
                >
                  <a className="courseDetail2" key={i}>
                    <div className="cardGrid2">
                      <div className="wishCarImgDiv">
                        <img
                          src={
                            item?.course_id?.thumbnail
                              ? item.course_id.thumbnail
                              : Course1
                          }
                          className="courseimg startcourseimg"
                          alt="img"
                        />
                      </div>
                      <div className="wishList-container">
                        <h4 className="wishListh4">
                          {item?.course_id?.course_name
                            ? item.course_id.course_name
                            : "Fight Course"}
                        </h4>
                        <br />

                        <p className="wishlistP2">
                          {item?.course_id?.creator?.user_id?.username}
                        </p>
                        <p className="wishlistP3">
                          {item?.course_id?.rating
                            ? item.course_id.rating
                            : "0.0"}{" "}
                          &nbsp;
                          {[1, 2, 3, 4, 5].map((item) => (
                            <Star1
                              className="wishCardStar"
                              style={{
                                key: { item },
                              }}
                            />
                          ))}
                          &nbsp; &nbsp; &nbsp;
                          {item?.course_id?.student
                            ? `( ${item.course_id.student.length} )`
                            : `( 0 )`}
                        </p>
                      </div>
                      <div className="wishButtonDiv">
                        <button className="wishListBtn">Start Now</button>
                      </div>
                    </div>
                  </a>
                </Link>
              </>
            ))}
          </>
        ) : (
          <>
            <h1>No Course Enrolled right now!</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default EnrolledCourse;
