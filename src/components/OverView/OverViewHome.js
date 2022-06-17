import React, { useState } from "react";
import OverViewImg from "../../assets/img/OverviewImg.svg";
import OverViewCardImg from "../../assets/img/OverViewCardImg.svg";
import overViewIcon1 from "../../assets/icons/overViewIcon1.svg";
import overViewIcon2 from "../../assets/icons/overViewIcon2.svg";
import overViewIcon3 from "../../assets/icons/overViewIcon3.svg";
import overViewIcon4 from "../../assets/icons/overViewIcon4.svg";
import RegisterSuccessfully from "../PopupForms/RegisterSuccessfully";

import OverCardHurtLogo from "../../assets/icons/OverCardHurtLogo.svg";
import RatingStarIcon from "../../assets/icons/RatingStarIcon.svg";
import Star6 from "../../assets/icons/Star6.svg";

// import StarIcon from "@material-ui/icons/Star";
import { NavLink } from "react-router-dom";
import { Store, UpdateStore } from "../../StoreContext";
import api from "../../api";
import GuestSignUpPopUp from "../PopupForms/GuestSignUpPopUp";
const OverViewHome = (props) => {
  const { user, Games, learner } = Store();
  const [openCongratulation, setCongratulation] = useState(false);
  const updateStore = UpdateStore();
  const { singlCourse } = props;
  const [openGuestPopUp, setOpenGuestPopUp] = useState(false);
  const calTotalSecInVideos = (videos) => {
    let timeInSecond = 1;
    videos.map((videos) => (timeInSecond += parseInt(videos.duration)));
    return timeInSecond;
  };
  const calculateCourseDuration = (videos) => {
    const secsPerDay = 86400;
    const seconds = calTotalSecInVideos(videos);
    var days = Math.floor(seconds / secsPerDay);
    let week = 0;
    if (days < 7) week = 0;
    if (days > 7) week = days / 7;
    return week;
  };
  const handleStartCourse = async (u, course) => {
    const data = {
      courseId: course?._id,
      userId: u?._id,
    };
    let res = await api("post", "/users/enrolledCourseAndStarted", data);
    if (res) {
      updateStore({ user: res.data });
    }
  };
  const handleEnrolled = async (u, course) => {
    const data = {
      courseId: course?._id,
      userId: u?._id,
    };
    let res = await api("post", "/users/enrolledCourse", data);
    if (res) {
      updateStore({ user: res.data?.user });
      setCongratulation(true);
    }
  };
  console.log("overview user", user);
  console.log("overview singlCourse", singlCourse);

  return (
    <>
      <RegisterSuccessfully
        open={openCongratulation}
        setOpen={setCongratulation}
        text="You have been enrolled successfully !"
      />

      <div className="OverView">
        <div className="center_overViewDiv">
          <div className="overViewImage">
            <img className="overIMG" src={OverViewImg} alt="" />
          </div>
          <div className="overView_heading">
            <div className="overViewContent">
              <h1 className="overViewH1">
                Beat the Opponent&nbsp;
                {singlCourse?.course_name ? singlCourse.course_name : " CS GO "}
                &nbsp;Gameplay
              </h1>
              <p className="overViewContent">
                {singlCourse?.description ? singlCourse.description : ""}
              </p>
            </div>

            <div className="overViewTags">
              <li className="overViewLi">
                <img src={overViewIcon1} alt="" className="overViewIcon-1" />
                <p className="overViewIconP">
                  {singlCourse?.videos
                    ? calculateCourseDuration(singlCourse.videos) + " Weeks"
                    : "0 Weeks"}
                </p>
              </li>
              <li className="overViewLi">
                <img src={overViewIcon2} alt="" className="overViewIcon" />
                <p className="overViewIconP">
                  {singlCourse?.level ? singlCourse.level : "All Levels"}
                </p>
              </li>
              <li className="overViewLi">
                <img src={overViewIcon3} alt="" className="overViewIcon" />
                <p className="overViewIconP">
                  {singlCourse?.videos
                    ? singlCourse.videos.length + " Lessons"
                    : "0 Lessons"}
                </p>
              </li>
              <li className="overViewLi">
                <img src={overViewIcon4} alt="" className="overViewIcon" />
                <p className="overViewIconP">
                  {singlCourse?.student
                    ? singlCourse.student.length + " Students"
                    : "0 Students"}
                </p>
              </li>
              <li className="overViewLi">
                <img src={RatingStarIcon} alt="" className="overViewIcon" />
                <p className="overViewIconP">
                  {singlCourse?.rating
                    ? `${singlCourse.rating} Rating`
                    : " 3.5 Rating"}{" "}
                  {/* <img src={Star6} alt="" /> */}
                </p>
              </li>
            </div>
            <div className="overVeiwSlectBTN">
              <button className="overVeiwCS-btn">
                <p>
                  {" "}
                  {singlCourse?.course_name
                    ? `${singlCourse.course_name} course`
                    : "CS GO course"}{" "}
                </p>
              </button>
              <button className="overVeiwCS-btn">
                Created By <b>{singlCourse?.creator?.user_id?.username}</b>
              </button>
            </div>
          </div>

          <div className="overViewCard" style={{ width: "24%" }}>
            <div className="overViewCenterdiv">
              <div className="overViewCarImage">
                <img
                  style={{ maxWidth: "100%" }}
                  src={
                    singlCourse?.thumbnail ? singlCourse.thumbnail : OverViewImg
                  }
                  alt=""
                  className="overViewCardIMG"
                />
              </div>
              {singlCourse?.videos.length >= 1 && (
                <div className="overViewBuy">
                  {/* start heart icon for wish list */}
                  {/* <div className="overViewRateContent">
                  {user?.role === "User" && (
                    <img
                      src={OverCardHurtLogo}
                      alt=""
                      className="cardHurtLogo"
                    />
                  )}
                </div> */}
                  {/* end heart icon for wish list */}
                  {console.log("for view enroll user", user?.creator, user)}
                  {console.log(
                    "for view enroll singlCourse",
                    singlCourse?.creator._id
                  )}
                  {console.log("for view enroll learner", learner)}

                  {(user?.role === "Creator" && !learner) ||
                  user?.creator === singlCourse?.creator?._id ? (
                    <NavLink
                      to="#"
                      className="CardBuyBtn"
                      onClick={() => {
                        if (user) {
                          props.setShowVideo(true);
                        } else {
                          props.setOpenSignup(true);
                        }
                      }}
                    >
                      View
                    </NavLink>
                  ) : (
                    <>
                      {" "}
                      <NavLink
                        to="#"
                        className="CardBuyBtn"
                        onClick={() => {
                          if (user) {
                            handleStartCourse(user, singlCourse);
                            props.setShowVideo(true);
                          } else {
                            setOpenGuestPopUp(true);
                            // props.setOpenSignup(true);
                          }
                        }}
                      >
                        Start
                      </NavLink>
                      {!singlCourse?.student?.includes(user?._id) && (
                        <NavLink
                          to="#"
                          className="CardBuyBtn"
                          onClick={() => {
                            if (user) {
                              handleEnrolled(user, singlCourse);
                            } else {
                              setOpenGuestPopUp(true);

                              // props.setOpenSignup(true);
                            }
                          }}
                        >
                          Enroll Now
                        </NavLink>
                      )}
                    </>
                  )}
                  {/* <NavLink to="#" className="CardBuyBtn2">
                  Stock It In The Caddy
                  <button className="overComming-soonBTN">Comming Soon</button>
                </NavLink> */}
                </div>
              )}
              {/* <div1 className="overViewCard-content">
                <p className="overViewCard-contentP">The course includes</p>
                <li className="overContentLi">
                  <img
                    src={OverCardLogo1}
                    alt=""
                    className="overContentLiLogo"
                  />
                  Language
                </li>
                <li className="overContentLi">
                  <img
                    src={OverCardLogo2}
                    alt=""
                    className="overContentLiLogo"
                  />
                  Use on{" "}
                  {singlCourse?.plateform
                    ? singlCourse.plateform
                    : "desktop, tablet & mobile"}
                </li>
                <li className="overContentLi">
                  <img
                    src={OverCardLogo3}
                    alt=""
                    className="overContentLiLogo"
                  />
                  Lifetime access
                </li>
                <p className="overViewCard-contentP">Share this course</p>
              </div1> */}
              {/* <div className="overViewSocialIcon">
                <img
                  src={OverCardSocialIcon1}
                  alt=""
                  className="overSocialIcon"
                />
                <img
                  src={OverCardSocialIcon2}
                  alt=""
                  className="overSocialIcon"
                />
                <img
                  src={OverCardSocialIcon3}
                  alt=""
                  className="overSocialIcon"
                />
              </div> */}
            </div>
          </div>
        </div>
        <GuestSignUpPopUp
          open={openGuestPopUp}
          setOpen={setOpenGuestPopUp}
          setOpenSignup={props.setOpenSignup}
          setOpenLogin={props.setOpenLogin}
        />
      </div>
    </>
  );
};

export default OverViewHome;
