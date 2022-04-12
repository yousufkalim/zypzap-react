import React from "react";
import OverViewImg from "../../assets/img/OverviewImg.svg";
import OverViewCardImg from "../../assets/img/OverViewCardImg.svg";
import overViewIcon1 from "../../assets/icons/overViewIcon1.svg";
import overViewIcon2 from "../../assets/icons/overViewIcon2.svg";
import overViewIcon3 from "../../assets/icons/overViewIcon3.svg";
import overViewIcon4 from "../../assets/icons/overViewIcon4.svg";
import OverCardLogo1 from "../../assets/icons/OverCardLogo1.svg";
import OverCardLogo2 from "../../assets/icons/OverCardLogo2.svg";
import OverCardLogo3 from "../../assets/icons/OverCardLogo3.svg";
import OverCardHurtLogo from "../../assets/icons/OverCardHurtLogo.svg";
import OverCardSocialIcon1 from "../../assets/icons/OverCardSocialIcon1.svg";
import OverCardSocialIcon2 from "../../assets/icons/OverCardSocialIcon2.svg";
import OverCardSocialIcon3 from "../../assets/icons/OverCardSocialIcon3.svg";
import RatingStarIcon from "../../assets/icons/RatingStarIcon.svg";
import Star6 from "../../assets/icons/Star6.svg";
// import { ReactComponent as Star } from "../../assets/icons/star2.svg";
// import StarIcon from "@material-ui/icons/Star";
import { NavLink } from "react-router-dom";
import { Store, UpdateStore } from "../../StoreContext";
import api from "../../api";
const OverViewHome = (props) => {
  const { user } = Store();
  const updateStore = UpdateStore();
  const { singlCourse } = props;
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
  const handleClick = async (u, course) => {
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
      updateStore({ user: res.data });
    }
  };
  return (
    <>
      <div className="OverView">
        <div className="center_overViewDiv">
          <div className="overViewImage">
            <img
              className="overIMG"
              // singlCourse?.thumbnail ? singlCourse.thumbnail :  it is use for dynamic course thumbnail
              src={OverViewImg}
              alt=""
            />
          </div>
          <div className="overView_heading">
            <div className="overViewContent">
              <h1 className="overViewH1">
                Beat the Opponent
                {singlCourse?.course_name ? singlCourse.course_name : "CS GO"}
                Gameplay
              </h1>
              <p className="overViewContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis,Lorem
              </p>
              <p className="overViewContent">
                ipsum dolor sit amet, consectetur adipiscing
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
                  5.0 <img src={Star6} alt="" /> Rating
                </p>
              </li>
            </div>
            <div className="overVeiwSlectBTN">
              <button className="overVeiwCS-btn">CS:GO course</button>
              <button className="overVeiwCS-btn">
                Created by Jordan Gilbert
              </button>
            </div>
          </div>

          {/* ratting div */}
          <div className="overViewCard">
            <div className="overViewCenterdiv">
              <div className="overViewCarImage">
                <img src={OverViewCardImg} alt="" className="overViewCardIMG" />
              </div>
              <div className="overViewBuy">
                <div className="overViewRateContent">
                  <p className="cardP1">
                    {singlCourse?.price >= 0
                      ? "$" + singlCourse.price
                      : "$0.00"}
                  </p>
                  <p className="cardP2">$39.99</p>
                  <img src={OverCardHurtLogo} alt="" className="cardHurtLogo" />
                </div>
                <NavLink
                  to="#"
                  className="CardBuyBtn"
                  onClick={() => {
                    handleClick(user, singlCourse);
                    props.setShowVideo(true);
                  }}
                >
                  Start
                </NavLink>
                <NavLink
                  to="#"
                  className="CardBuyBtn"
                  onClick={() => {
                    handleEnrolled(user, singlCourse);
                  }}
                >
                  Enroll Now
                </NavLink>
                <NavLink to="#" className="CardBuyBtn2">
                  Stock It In The Caddy
                  <button className="overComming-soonBTN">Comming Soon</button>
                </NavLink>
              </div>
              <div className="overViewCard-content">
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
              </div>
              <div className="overViewSocialIcon">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverViewHome;
