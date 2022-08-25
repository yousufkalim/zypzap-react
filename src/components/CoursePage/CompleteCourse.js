import React, { useRef, useState, useEffect } from 'react';
import './CoursePage.css';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import api from '../../api/index';
import { Store } from '../../StoreContext';
import prevD from '../../assets/icons/prevD.svg';
import next from '../../assets/icons/next.svg';

const CompleteCourse = ({ singlCourse, setShowRatingPopup }) => {
  const ref = useRef();
  const { user } = Store();

  const [videos, setVideos] = useState(singlCourse?.videos ? singlCourse.videos : 0);
  // const [id, setId] = useSate();
  const [playVideo, setPlayVideo] = useState(singlCourse?.videos[0]);
  const [index, setIndex] = useState(0);
  const [videoCount, setVideoCount] = useState(singlCourse?.videos ? singlCourse.videos.length : 0);
  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: playVideo?.src_url,
      },
    ],
  };

  useEffect(() => {
    ref.current.plyr.on('ended', (e) => {
      // If the last video ended, then we have to show the rating popup
      if (index === videos.length - 1) {
        // making smooth ux xD
        setTimeout(() => {
          setShowRatingPopup(true);
        }, 700);
      }
    });
  }, [index]);

  const handleNext = () => {
    setPlayVideo(videos[index + 1]);
    setIndex(index + 1);
  };

  const handlePrev = () => {
    setPlayVideo(videos[index - 1]);
    setIndex(index - 1);
  };

  return (
    <>
      <div className="completeCourse">
        <div className="completeCourse-center-div">
          <div className="completeCourse-colm1">
            {window.innerWidth < 601 ? (
              ''
            ) : (
              <h2 className="completeCourseH2">
                {playVideo?.title ? playVideo.title : 'CS Go'} Ep {index + 1} Complete Course
              </h2>
            )}

            {/* <ReactPlayer src={playVideo?.src_url} /> */}
            {/* <ReactPlayer
              url={playVideo?.src_url}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload"
                  }
                }
              }}
              controls
              autoplay
              className="completeCourse-Video"
              width="100%"
              // height="100%"
            /> */}
            <Plyr ref={ref} id="videplayer" source={videoSrc} />
          </div>
          <div className="completeCourse-colm2">
            <h3 className="completeCourseH3">Course Content </h3>
            {window.innerWidth < 601 ? (
              <div
                style={{
                  width: '16%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '5%',
                  marginTop: '-5%',
                }}
              >
                {index < 1 ? (
                  <img src={prevD} alt="prev" />
                ) : (
                  <img
                    src={next}
                    style={{ transform: 'rotateY(180deg)' }}
                    onClick={handlePrev}
                    alt="prev"
                  />
                )}
                {index !== videos.length - 1 ? (
                  <img src={next} onClick={handleNext} alt="next" />
                ) : (
                  <img src={prevD} style={{ transform: 'rotateY(180deg)' }} alt="next" />
                )}
              </div>
            ) : (
              ''
            )}
            <div className="completeCourseScroll">
              <div className="completeCourseScroll2">
                {videos?.map((clip, index) => {
                  return (
                    <LiDAta
                      clip={clip}
                      index={index}
                      setIndex={setIndex}
                      value={index + 1}
                      videoCount={videoCount}
                      setPlayVideo={setPlayVideo}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {window.innerWidth < 601 ? (
          ''
        ) : (
          <div className="Pre-next-btn">
            {index > 0 && (
              <button className="preBTN" onClick={handlePrev}>
                Previous
              </button>
            )}
            {index !== videos.length - 1 && (
              <button className="nextBTN" onClick={handleNext}>
                Next
              </button>
            )}
            {/* <hr className="pre_next_line" /> */}
          </div>
        )}
      </div>
    </>
  );
};

export default CompleteCourse;

const LiDAta = ({ clip, videoCount, setPlayVideo, value, index, setIndex }) => {
  const secondToTime = (second) => {
    // Hours, minutes and seconds
    var hrs = ~~(second / 3600);
    var mins = ~~((second % 3600) / 60);
    var secs = ~~second % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = '';
    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }
    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
  };

  return (
    <li
      className="completeCourse-videoList"
      onClick={() => {
        setPlayVideo(clip);
        setIndex(index);
      }}
      style={{ cursor: 'pointer' }}
    >
      {/* onClick={() => setPlayVideo(clip)} */}
      <video
        // poster={VideoPlayIcon}
        className="completeCourse-playVideo"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        src={
          clip?.src_url
            ? clip.src_url
            : 'https://pass-to-trip.s3.eu-west-3.amazonaws.com/1647410128211'
        }
      ></video>
      <div className="playVideoHeading">
        <h3 className="playVideoH3">
          {window.innerWidth < 601
            ? clip?.title
              ? clip.title.length > 26
                ? clip.title.substring(0, 14) + ' Ep ' + (index + 1) + ' Complete Course'
                : clip.title + ' Ep ' + (index + 1) + ' Complete Course'
              : ' CS Go ' + ' Ep ' + (index + 1) + ' Complete Course'
            : clip?.title
            ? clip.title + ' Ep ' + (index + 1) + ' Complete Course'
            : 'CS Go ' + ' Ep ' + (index + 1) + ' Complete Course'}
        </h3>
        <span className="playVideonumber">{value + '/' + videoCount} </span>
        <span>{'|'}</span>
        <span className="playVideomint" style={{ margin: '10px' }}>
          {clip?.duration ? secondToTime(clip.duration) + ' min' : '1:00 min'}
        </span>
      </div>
    </li>
  );
};
