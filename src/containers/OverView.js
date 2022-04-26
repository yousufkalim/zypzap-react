import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import OverViewHome from "../components/OverView/OverViewHome";
import "../components/OverView/OverView.css";
import OverViewMenu from "../components/OverView/OverViewMenu";
import OverviewButton from "../components/OverView/OverviewButton";
import Curriculum from "../components/OverView/Curriculum";
import Instructor from "../components/OverView/Instructor";
import Reviews from "../components/OverView/Reviews";
import Footer from "../components/blog/BlogFooter";
import { useParams } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import CompleteCourse from "../components/CoursePage/CompleteCourse";
import api from "../api";
import { Store, UpdateStore } from "../StoreContext";
import LatestCourses from "../components/LatestCourses";
let btns = [
  { text: "Overview" },
  { text: "Cursus" },
  { text: "Instructor" },
  { text: "Feedback" },
];
const OverView = (props) => {
  const { id, value } = useParams();
  const [overView, setOverView] = useState(false);
  const [activebtn, setActivebtn] = useState("Overview");
  const [course, setCourse] = useState();
  const [rating, setRating] = useState();
  const [showVideo, setShowVideo] = useState(false);

  const [openlogin, setOpenLogin] = React.useState(false);
  const [opensignup, setOpenSignup] = React.useState(false);
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] = useState(false);
  const updateStore = UpdateStore();
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
    getSingleCourses();
    getRatingOfCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, showVideo]);

  let getSingleCourses = async () => {
    let res = await api("get", `/courses/${id}`);

    if (res) {
      setCourse(res?.data);
    }
  };
  let getRatingOfCourse = async () => {
    if (id) {
      let res = await api("get", `/ratings/forSingleCourses/${id}`);
      if (res) {
        setRating(res?.data);
      }
    }
  };
  return (
    <div>
      <Header
        openlogin={openlogin}
        setOpenLogin={setOpenLogin}
        opensignup={opensignup}
        setOpenSignup={setOpenSignup}
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
      />
      {!showVideo ? (
        <OverViewHome
          singlCourse={course}
          setShowVideo={setShowVideo}
          setOpenSignup={setOpenSignup}
        />
      ) : (
        <CompleteCourse singlCourse={course} />
      )}

      <OverViewMenu
        btns={btns}
        setActivebtn={setActivebtn}
        activebtn={activebtn}
        course={course}
      />
      {activebtn == "Overview" && <OverviewButton singlCourse={course} />}

      {activebtn == "Cursus" && (
        <Curriculum singlCourse={course} setShowVideo={setShowVideo} />
      )}

      {activebtn == "Instructor" && <Instructor singlCourse={course} />}

      {activebtn == "Feedback" && (
        <Reviews singlCourse={course} rating={rating} />
      )}
      {/* <LatestCourses courses={[course]} /> */}

      <Footer overView={overView} />
    </div>
  );
};

export default OverView;
