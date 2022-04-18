import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import InstructorIcon from "../../assets/icons/InstructorIcon.svg";
// import overViewIcon1 from "../../assets/icons/overViewIcon1.svg";
import overViewIcon2 from "../../assets/icons/overViewIcon2.svg";
import overViewIcon3 from "../../assets/icons/overViewIcon3.svg";
import { Store, UpdateStore } from "../../StoreContext";

import api from "../../api";
import overViewIcon4 from "../../assets/icons/overViewIcon4.svg";
const Instructor = (props) => {
  const { singlCourse } = props;
  const [follow, setFollow] = useState(false);
  const updateStore = UpdateStore();
  const { user } = Store();
  const totalStudent = (courses) => {
    let total = 0;
    console.log("singlCourse ----->Instructor", singlCourse);
    courses?.map((c) => {
      if (c?.student?.length > 0) total += c.student.length;
    });
    console.log("total", total);
    return total;
  };
  // const followMe = async (creator) => {
  //   const data = { user_id: user?._id, creator_id: creator?._id };
  //   let res = await api("post", "/creators/addFollower", data);
  //   if (res) {
  //     setFollow(true);
  //   }
  // };
  // const showFollowButton = (creator) => {
  //   return user?.following?.includes(creator?.user_id?._id) ? true : false;
  // };
  return (
    <div>
      <div className="overView_description">
        <div className="overView-descripiton-centerDiv">
          {/* <div className="overView-description-content">
            <h3 className="overDescriptionH3">Description</h3>
            <p className="overDescriptionP">Welcome to Instructor</p>
          </div> */}
          <div className="Instructor">
            <div className="instructor-co1">
              <Link
                to={{
                  pathname: `/CreatorProfile/${singlCourse?.creator?.user_id?._id}`,
                  // state: { course: `${item}` },
                }}
                className="requestBt"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="instructor-image">
                  <img src={InstructorIcon} alt="" className="instructorLogo" />
                </div>
              </Link>
              <div className="instructor-heading">
                <h3 className="instructorH2">
                  {singlCourse?.creator?.user_id?.username
                    ? singlCourse.creator.user_id.username
                    : "Arslan Ash"}
                </h3>
                {/* <p className="instructorP">
                  Player of {singlCourse?.course_name}
                </p> */}
                <p className="instructor-lavel">
                  Level:
                  <span className="instructor-span">
                    {singlCourse?.creator?.gameLevel
                      ? singlCourse.creator.gameLevel
                      : "Pro"}
                  </span>
                </p>
                <p className="instructor-student">
                  {/* {singlCourse?.creator?.courses
                    ? totalStudent(singlCourse.creator.courses) + " Students"
                    : "0 Students"} */}
                  {console.log("singlCourse", singlCourse)}
                  {singlCourse?.student?.length
                    ? `${singlCourse.student.length} Student`
                    : "0 Student"}
                </p>
              </div>
              {/* 
              {showFollowButton(singlCourse?.creator) || follow ? (
                <button className="Instructor-followBtn">Following</button>
              ) : (
                <button
                  className="Instructor-followBtn"
                  onClick={() => {
                    followMe(singlCourse?.creator);
                  }}
                >
                  Follow
                </button>
              )} */}
            </div>
            <div className="instructor-co">
              <div className="instructor-about-Heading">
                <p className="instructor-aboutH2">About the Instructor</p>
                <p className="instructor-aboutP">{singlCourse?.course_name}</p>
              </div>
              <div className="instructorProfile-heading">
                <p className="instructorProfile-Name">
                  Hi, I am
                  {singlCourse?.creator?.user_id?.username
                    ? singlCourse.creator.user_id.username
                    : "Arslan Ash"}
                </p>
                <p className="instructorProfile-P">
                  {singlCourse?.description
                    ? singlCourse.description
                    : "NO discription right know"}
                </p>
              </div>
              <div className="overViewTags">
                {/* <li className="overViewLi">
                  <img src={overViewIcon1} alt="" className="overViewIcon-1" />
                  <p className="overViewIconP">10 Weeks</p>
                </li> */}
                <li className="overViewLi">
                  <img src={overViewIcon2} alt="" className="overViewIcon-1" />
                  <p className="overViewIconP">
                    {singlCourse?.level ? singlCourse.level : "All Levels"}
                  </p>
                </li>
                <li className="overViewLi">
                  <img src={overViewIcon3} alt="" className="overViewIcon" />
                  <p className="overViewIconP">
                    {singlCourse?.videos
                      ? singlCourse.videos.length + " Lessons"
                      : "8 Lessons"}
                    s
                  </p>
                </li>
                <li className="overViewLi">
                  <img src={overViewIcon4} alt="" className="overViewIcon" />
                  <p className="overViewIconP">
                    {/* {singlCourse?.creator?.courses
                      ? totalStudent(singlCourse.creator.courses) + " Students"
                      : "0 Students"} */}
                    {console.log("singlCourse", singlCourse)}
                    {singlCourse?.student?.length
                      ? `${singlCourse.student.length} Student`
                      : "0 Student"}
                  </p>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
