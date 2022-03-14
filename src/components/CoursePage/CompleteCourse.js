import React from "react";
import GameVideo from "../../assets/GameVideo.mp4";
// import VideoPlayIcon from "../../assets/icons/VideoPlayIcon.png";

const CompleteCourse = () => {
  return (
    <>
      <div className="completeCourse">
        <div className="completeCourse-center-div">
          <div className="completeCourse-colm1">
            <h2 className="completeCourseH2">CS-GO Ep 1 Complete Course</h2>
            <video
              controls
              className="completeCourse-Video"
              src={GameVideo}
            ></video>
          </div>
          <div className="completeCourse-colm2">
            <h3 className="completeCourseH3">Course Content</h3>
            <div className="completeCourseScroll">
              <LiDAta />
              <LiDAta />
              <LiDAta />
              <LiDAta />
              <LiDAta />
              <LiDAta />
              <LiDAta />
              <LiDAta />
              <LiDAta />
              <LiDAta />
              <LiDAta />
              <LiDAta />
            </div>
          </div>
        </div>
        <div className="Pre-next-btn">
          <button className="preBTN">Previous</button>
          <button className="nextBTN">Next</button>
          {/* <hr className="pre_next_line" /> */}
        </div>
      </div>
    </>
  );
};

export default CompleteCourse;

const LiDAta = () => {
  return (
    <li className="completeCourse-videoList">
      <video
        // poster={VideoPlayIcon}
        className="completeCourse-playVideo"
        src={GameVideo}
      ></video>
      <div className="playVideoHeading">
        <h3 className="playVideoH3">CS-GO Ep 1 Complete Course</h3>
        <p className="playVideoP">0/6 | 15 min</p>
      </div>
      <i className="PlayVideo-DownArrow fas fa-angle-down"></i>
    </li>
  );
};
