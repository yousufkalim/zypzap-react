import { SingleBed } from "@material-ui/icons";
import React from "react";
import CurriculumIcon from "../../assets/icons/CurriculumIcon.svg";

const Curriculum = (props) => {
  const { singlCourse, setShowVideo } = props;

  return (
    <div>
      <div className="overView_description">
        <div className="overView-descripiton-centerDiv">
          <h1 className="curriculum-h1">Chapters</h1>
          <div className="curriculum-div">
            <h1 className="curriculum-h3">Getting Started: Introduction</h1>
            {singlCourse?.videos.length > 0 ? (
              singlCourse.videos.map((item, i) => (
                <Video key={i} video={item} setShowVideo={setShowVideo} />
              ))
            ) : (
              <div className="curriculumLiDiv">
                <li className="curriculumLi">No Video Posted!</li>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const Video = ({ video, setShowVideo }) => {
  const secondToTime = (second) => {
    // Hours, minutes and seconds
    var hrs = ~~(second / 3600);
    var mins = ~~((second % 3600) / 60);
    var secs = ~~second % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  };
  return (
    <>
      <div className="curriculumLiDiv">
        <img src={CurriculumIcon} alt="" className="curriculumIMG" />
        <li className="curriculumLi">
          Class no one: {video?.title ? video.title : "CS Go"}
        </li>
        <p className="curriculumTime">
          {video?.duration ? secondToTime(video.duration) : "1:00 min"}
        </p>
      </div>
    </>
  );
};

export default Curriculum;
