import React, { useState, useEffect } from "react";
import Course1 from "../../assets/img/course1.png";
import Course2 from "../../assets/img/course2.png";
import "react-multi-carousel/lib/styles.css";
import { ReactComponent as Star1 } from "../../assets/icons/star2.svg";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Store, UpdateStore } from "../../StoreContext";
import { useHistory } from "react-router-dom";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  width: "80%",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#17192D"
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: (theme.palette.mode =
      "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(50.06deg, #662F88 50.05%, #20BF55 131.69%);")
  }
}));

var items = [
  {
    title: "CS-GO Ep 2 Complete Course 1",
    img: Course1,
    name: "James Wiik",
    rating: "5.0",
    // price: "19.99 | 50 min",
    test: "1"
  },
  {
    title: "PUBG GamePlay Course",
    img: Course2,
    name: "Ifaf ghori ",
    rating: "rating",
    // price: "19.99 | 50 min",
    test: "2"
  }
];

const StartedCourse = () => {
  const { user, contentDashboardButton } = Store();
  const history = useHistory();
  const [lodding, setLodding] = useState(true);
  const [User, setUser] = useState(user ? user : {});
  const [start_courses, setStartedCourses] = useState([]);
  useEffect(() => {
    console.log("statred course useeffect");
    setUser(user ? user : {});
    setStartedCourses(
      user?.enrolled_courses?.filter((courses) => courses.started === true)
    );
  }, [contentDashboardButton]);
  const handleStartCourses = (id) => {
    history.push({
      pathname: `/OverView/${id}`
    });
  };
  console.log("start_courses", start_courses);
  return (
    <div className="wishlistDiv">
      <p className="wishCardh3">Started Courses</p>
      <div className="carousalOuterDiv2 ">
        {User?.enrolled_courses?.length !== 0 ? (
          <>
            {start_courses?.map((item, i) => (
              <>
                <Link to="#" className="startcourse2 " course={item}>
                  <a className="courseDetail2" key={i}>
                    <div className="cardGrid2">
                      <div className="wishCarImgDiv">
                        <img
                          src={
                            item?.course_id?.thumbnail
                              ? item.course_id.thumbnail
                              : Course1
                          }
                          className="startcourseimg"
                          alt="img"
                        />
                      </div>
                      <div className="wishList-container">
                        <p className="wishListh4">
                          {item?.course_id?.course_name
                            ? item.course_id.course_name
                            : "Fight Course"}
                        </p>

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
                                key: { item }
                              }}
                            />
                          ))}
                          &nbsp; &nbsp; &nbsp;
                          {item?.course_id?.student
                            ? `( ${item.course_id.student.length} )`
                            : `( 0 )`}
                        </p>
                        <div className="wishCard-progrss">
                          <BorderLinearProgress
                            variant="determinate"
                            value={30}
                          />
                        </div>
                        <div className="wishCard-progrss-prsntage">
                          16% Complete1
                        </div>
                      </div>

                      <div className="wishButtonDiv">
                        <button
                          className="wishListBtn"
                          onClick={() =>
                            handleStartCourses(item?.course_id?._id)
                          }
                        >
                          Continue the course
                        </button>
                      </div>
                    </div>
                  </a>
                </Link>
              </>
            ))}
          </>
        ) : (
          <>
            <h1>No Course Started right now!</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default StartedCourse;
