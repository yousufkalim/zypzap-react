import React, { useState } from "react";
import GameVideo from "../../assets/GameVideo.mp4";
// import VideoPlayIcon from "../../assets/icons/VideoPlayIcon.png";

const compLiData = [
  {
    title: "CS-GO Ep 1 Complete Course",
    videoLink: GameVideo,
    content: "0/6 | 15 min",
  },
  {
    title: "CS-GO Ep 1 Complete Course",
    videoLink: GameVideo,
    content: "0/6 | 15 min",
  },
  {
    title: "CS-GO Ep 1 Complete Course",
    videoLink: GameVideo,
    content: "0/6 | 15 min",
  },
  {
    title: "CS-GO Ep 1 Complete Course",
    videoLink: GameVideo,
    content: "0/6 | 15 min",
  },
  {
    title: "CS-GO Ep 1 Complete Course",
    videoLink: GameVideo,
    content: "0/6 | 15 min",
  },
  {
    title: "CS-GO Ep 1 Complete Course",
    videoLink: GameVideo,
    content: "0/6 | 15 min",
  },
  {
    title: "CS-GO Ep 1 Complete Course",
    videoLink: GameVideo,
    content: "0/6 | 15 min",
  },
  {
    title: "CS-GO Ep 1 Complete Course",
    videoLink: GameVideo,
    content: "0/6 | 15 min",
  },
  {
    title: "CS-GO Ep 1 Complete Course",
    videoLink: GameVideo,
    content: "0/6 | 15 min",
  },
];

const CompleteCourse = () => {
  const [video1, setVideo1] = useState(GameVideo);
  return (
    <>
      <div className="completeCourse">
        <div className="completeCourse-center-div">
          <div className="completeCourse-colm1">
            <h2 className="completeCourseH2">CS-GO Ep 1 Complete Course</h2>
            <video
              controls
              autoplay
              className="completeCourse-Video"
              src={video1}
            ></video>
          </div>
          <div className="completeCourse-colm2">
            <h3 className="completeCourseH3">Course Content</h3>
            <div className="completeCourseScroll">
              <LiDAta setVideo1={setVideo1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteCourse;

const LiDAta = (props) => {
  const { setVideo1 } = props;

  const handleClick = (item) => {
    setVideo1(item.videoLink);
    console.log("dfghj", item.videoLink);
  };
  return (
    <>
      {compLiData.map((item) => {
        return (
          <>
            <li
              className="completeCourse-videoList"
              onClick={() => {
                handleClick(item);
              }}
            >
              <video
                // poster={VideoPlayIcon}
                className="completeCourse-playVideo"
                src={item.videoLink}
              ></video>
              <div className="playVideoHeading">
                <h3 className="playVideoH3">{item.title}</h3>
                <p className="playVideoP">{item.content}</p>
              </div>
              <i className="PlayVideo-DownArrow fas fa-angle-down"></i>
            </li>
          </>
        );
      })}
    </>
  );
};
