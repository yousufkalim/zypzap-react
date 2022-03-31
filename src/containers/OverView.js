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
import CompleteCourse from "../components/CoursePage/CompleteCourse";
import api from "../api";
import { Store, UpdateStore } from "../StoreContext";
let btns = [
  { text: "Overview" },
  { text: "Curriculum" },
  { text: "Instructor" },
  { text: "Reviews" },
];
const OverView = () => {
  const { id } = useParams();
  const [overView, setOverView] = useState(false);
  const [activebtn, setActivebtn] = useState("Overview");
  const [course, setCourse] = useState();
  const [rating, setRating] = useState();
  const [showVideo, setShowVideo] = useState({});

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
  }, [id]);

  let getSingleCourses = async () => {
    let res = await api("get", `/courses/${id}`);
    if (res) {
       console.log("res", res);
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
      {!showVideo?.src_url ? (
        <OverViewHome singlCourse={course} />
      ) : (
        <CompleteCourse Videos={showVideo} singlCourse={course} />
      )}

      <OverViewMenu
        btns={btns}
        setActivebtn={setActivebtn}
        activebtn={activebtn}
      />
      {activebtn == "Overview" && <OverviewButton singlCourse={course} />}

      {activebtn == "Curriculum" && (
        <Curriculum singlCourse={course} setShowVideo={setShowVideo} />
      )}

      {activebtn == "Instructor" && <Instructor singlCourse={course} />}

      {activebtn == "Reviews" && (
        <Reviews singlCourse={course} rating={rating} />
      )}

      <Footer overView={overView} />
    </div>
  );
};

export default OverView;
