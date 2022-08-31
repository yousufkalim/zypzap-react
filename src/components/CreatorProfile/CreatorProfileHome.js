import React, { useState, useEffect } from 'react';
import '../../components/UserProfile/UserProfile.css';
import UserHomeProfleImg2 from '../../assets/img/UserHomeProfleImg2.svg';
import creatorcover from '../../assets/img/creatorcover.svg';
import dummyCourse from '../../assets/img/dummycourseimg.png';
import moment from 'moment';
import CreatorPrifileImg from '../../assets/img/CreatorPrifileImg.svg';
import PropfileInformation from '../PopupForms/PropfileInformation';
import ProGamer from '../../assets/icons/ProGamer.svg';
import ViewCourse from '../../assets/icons/ViewCourse.svg';
import ViewStudent from '../../assets/img/ViewStudent.svg';
import LatestCourseGameIcon from '../../assets/icons/LatestCourseGameIcon.svg';
import LatestCourseStarBadgeIcon from '../../assets/icons/LatestCourseStarBadgeIcon.svg';
import LatestCourseLavelIcon from '../../assets/icons/LatestCourseLavelIcon.svg';
import LatestCourseStarIcon from '../../assets/icons/LatestCourseStarIcon.svg';
import LatestCourseVideoIcon from '../../assets/icons/LatestCourseVideoIcon.svg';
import LatestCourseTimingIcon from '../../assets/icons/LatestCourseTimingIcon.svg';

import ViewRank from '../../assets/img/ViewRank.svg';
import { Link } from 'react-router-dom';

import api from '../../api';
import Course1 from '../../assets/img/course1.png';
import { ReactComponent as Star1 } from '../../assets/icons/star2.svg';
const CreaterDatav = [
  {
    imgSrc: ProGamer,
    content: 'Pro Gamer',
  },
  {
    imgSrc: ViewCourse,
    content: '8 Courses',
  },
  {
    imgSrc: ViewStudent,
    content: '2287 Students',
  },
  {
    imgSrc: ViewRank,
    content: '2nd Rank',
  },
];

const CreatorProfileHome = (props) => {
  const { id } = props;
  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useState();
  const [courses, setCourses] = useState();
  useEffect(() => {
    getCreator();
  }, [id]);
  let countViews = (course) => {
    const Videos = course?.videos;

    let count = 0;
    Videos.map((video) => {
      count += video.views;
    });

    return count;
  };

  const getDateIs = (d) => {
    var date = new Date(d);
    return moment(date).fromNow();
  };
  const secondToTime = (second) => {
    // Hours, minutes and seconds
    var hrs = ~~(second / 3600);
    var mins = ~~((second % 3600) / 60);
    var secs = ~~second % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = '';
    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
      ret += '' + mins + ':' + (secs < 10 ? '0' : '');
      ret += '' + secs + ' hr';
    } else if (mins > 0) {
      ret += '' + mins + ':' + (secs < 10 ? '0' : '');
      ret += '' + secs + ' min';
    } else {
      ret += ' 0:' + secs + ' sec';
    }
    return ret;
  };
  const getCreator = async () => {
    let res = await api('get', `/users/${id}`);
    if (res) {
      setUser(res?.data);
      const courses = res?.data?.creator?.courses;
      setCourses(courses);
    }
  };
  const handleClickOpen = () => {
    setOpenProfile(true);
  };
  const totalStudent = (courses) => {
    let std = [];
    courses?.map((c) => {
      if (c?.student?.length > 0) std.push(...c.student);
    });
    std = [...new Set(std)];
    return std.length;
  };
  return (
    <>
      <div className="userProfileDiv">
        <div className="userProfile-centerDiv">
          <div className="profile-image" id="mobprofileimage">
            {console.log('user', user)}
            {window.innerWidth < 601 ? (
              user?.cover_photo ? (
                <img
                  src={user?.cover_photo}
                  alt=""
                  style={{
                    opacity: '0.7',
                    position: 'relative',
                    top: '-23vh',
                    objectFit: 'cover',
                    height: '34vh',
                    width: '100vw',
                    overflow: 'hidden',
                  }}
                />
              ) : (
                <img
                  src={creatorcover}
                  alt=""
                  style={{
                    opacity: '0.7',
                    position: 'relative',
                    top: '-23vh',
                    objectFit: 'cover',
                    height: '34vh',
                    width: '100vw',
                    overflow: 'hidden',
                  }}
                />
              )
            ) : user?.cover_photo ? (
              <img src={user?.cover_photo} alt="" className="profileBackgroun-Image" />
            ) : (
              <img src={UserHomeProfleImg2} alt="" className="profileBackgroun-Image" />
            )}
          </div>
          {window.innerWidth < 601 ? (
            <>
              <div
                style={{
                  color: 'white',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: '1300',
                  top: '22px',
                }}
              >
                <div>
                  <img
                    src={user?.profile_photo ? user.profile_photo : CreatorPrifileImg}
                    alt=""
                    className="DP-img"
                  />
                  <div>
                    <h1 style={{ fontSize: '22px', fontWeight: '600', padding: '1%' }}>
                      {user ? user.username : 'Atif Khan'}
                    </h1>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: 'rgba(255, 255, 255, 0.5)',
                        padding: '1%',
                      }}
                    >
                      Expertise Games
                    </p>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: 'rgba(255, 255, 255, 0.5)',
                        padding: '1%',
                      }}
                    >
                      {user?.gameType?.length > 0 ? `${user.gameType} Player` : 'Taken Player'}
                    </p>{' '}
                  </div>
                </div>

                <div
                  className="creatorProfileDiv"
                  style={{ display: 'flex', justifyContent: 'space-around', padding: '2%' }}
                >
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div className="creatorLogos">
                        <img className="CreatorProfileImg" src={ProGamer} alt="" />
                      </div>

                      <div className="creatorProfileContent">
                        <p className="creatorProfileP">
                          {user?.creator?.courses.length > 1
                            ? `${user?.creator?.courses.length} Courses`
                            : `${user?.creator?.courses.length} Course`}
                        </p>
                      </div>
                    </div>
                    <span class="vl"></span>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div className="creatorLogos">
                        <img className="CreatorProfileImg" src={ViewStudent} alt="" />
                      </div>
                      <div className="creatorProfileContent">
                        <p className="creatorProfileP">
                          {/* todo populate issue  ----> */}
                          {user?.creator?.courses
                            ? totalStudent(user.creator.courses) > 1
                              ? totalStudent(user.creator.courses) + ' Students'
                              : totalStudent(user.creator.courses) + ' Student'
                            : 'No Student'}
                        </p>
                      </div>{' '}
                    </div>

                    <span class="vl"></span>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div className="creatorLogos">
                        <img className="CreatorProfileImg" src={ViewRank} alt="" />
                      </div>
                      <div className="creatorProfileContent">
                        <p className="creatorProfileP">
                          {/* {user?.creator?.gameLevel
                        ? user.creator.gameLevel
                        : "2nd Rank"} */}
                          2nd Rank
                        </p>
                      </div>
                    </div>
                  </>
                </div>
              </div>
              <p style={{ color: 'white', padding: ' 4%', marginTop: '8%', textAlign: 'justify' }}>
                Hi, I am {user?.username ? user.username : 'User1'}
                <br />
                {user?.creator?.bio
                  ? user.creator.bio
                  : 'I am a Professional Taken player 2 times world champion last year i was choosen to be red bull athelete too i am here to help you win the game and have a fun.'}
              </p>
            </>
          ) : (
            <>
              {' '}
              <div className="Profile-DP2">
                <img
                  src={user?.profile_photo ? user.profile_photo : CreatorPrifileImg}
                  alt=""
                  className="DP-img"
                />
              </div>
              {/* profile Div */}
              <div className="profile-container2">
                <div className="prfile-name-heading">
                  <h1 className="profile-name">{user ? user.username : 'Atif Khan'}</h1>
                  <p className="pofileP">
                    {user?.gameType?.length > 0 ? `${user.gameType} Player` : 'Taken Player'}
                  </p>
                  <p className="prfile-lavelP">
                    Hi, I am {user?.username ? user.username : 'User1'}
                    <br />
                    {user?.creator?.bio
                      ? user.creator.bio
                      : 'I am a Professional Taken player 2 times world champion last year i was choosen to be red bull athelete too i am here to help you win the game and have a fun.'}
                  </p>
                  {/* <div className="profileEditButton">
                <a to="">
                  <button
                    className="editProfiel-btn2"
                    onClick={handleClickOpen}
                  >
                    Follow
                  </button>
                </a>
              </div> */}
                  <div className="creatorProfileDiv">
                    <>
                      <div className="creatorLogos">
                        <img className="CreatorProfileImg" src={ProGamer} alt="" />
                      </div>

                      <div className="creatorProfileContent">
                        <p className="creatorProfileP">
                          {user?.creator?.courses.length > 1
                            ? `${user?.creator?.courses.length} Courses`
                            : `${user?.creator?.courses.length} Course`}
                        </p>
                      </div>
                      <div className="creatorLogos">
                        <img className="CreatorProfileImg" src={ViewStudent} alt="" />
                      </div>
                      <div className="creatorProfileContent">
                        <p className="creatorProfileP">
                          {/* todo populate issue  ----> */}
                          {user?.creator?.courses
                            ? totalStudent(user.creator.courses) > 1
                              ? totalStudent(user.creator.courses) + ' Students'
                              : totalStudent(user.creator.courses) + ' Student'
                            : 'No Student'}
                        </p>
                      </div>
                      <div className="creatorLogos">
                        <img className="CreatorProfileImg" src={ViewRank} alt="" />
                      </div>
                      <div className="creatorProfileContent">
                        <p className="creatorProfileP">
                          {/* {user?.creator?.gameLevel
                        ? user.creator.gameLevel
                        : "2nd Rank"} */}
                          2nd Rank
                        </p>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="creatorProfileCard">
        <h3 className="creatorProfileH3">Courses</h3>
        <div className="creatorProfileCart-centerDiv">
          {courses?.map((item, i) => (
            <div className="creatorCard">
              <Link
                to={{
                  pathname: `/OverView/${item?._id}`,
                  state: { course: `${item}` },
                }}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <div className="cardGrid" style={{ minHeight: '86%' }}>
                  {window.innerWidth < 601 ? (
                    <h4 className="latestCourse-h4">
                      {item?.course_name ? item.course_name : 'Fight Course'}
                    </h4>
                  ) : (
                    ''
                  )}
                  <div className="topRatedcardGrid-image">
                    {item?.thumbnail.slice(-3) == 'mp4' || item?.thumbnail.slice(-3) == 'mov' ? (
                      <video
                        muted
                        src={item?.thumbnail}
                        autoplay
                        // controls="controls"
                        onMouseOver={(event) => event.target.pause()}
                        onMouseOut={(event) => event.target.play()}
                        loop
                        className="topRatedcourseimg"
                      />
                    ) : (
                      <img
                        src={item?.thumbnail ? item.thumbnail : dummyCourse}
                        className="topRatedcourseimg"
                        alt="img"
                      />
                    )}
                  </div>
                  {window.innerWidth < 601 ? (
                    ''
                  ) : (
                    <h4 className="latestCourse-h4">
                      {item?.course_name ? item.course_name : 'Fight Course'}
                    </h4>
                  )}

                  <div className="latestCourseMain-Div">
                    <div className="latestCouse-colmn">
                      <div className="latestCourse-colmn-centerDiv">
                        <img src={LatestCourseGameIcon} alt="" className="LatestCourse-IMG" />
                        <p className="latestCourse-pHeading">
                          <strong id="latestCourse-pHeading"> {user?.username}</strong>
                        </p>
                      </div>
                      <div className="latestCourse-colmn-centerDiv">
                        <img src={LatestCourseStarIcon} alt="" className="LatestCourse-IMG" />
                        <p className="latestCourse-p">
                          {item?.rating ? `${item.rating.toFixed(1)} Rating` : '0.0 Rating'}
                        </p>
                      </div>
                    </div>
                    {/* ------------------------------- copy colmn -------------------------------  */}
                    <div className="latestCouse-colmn">
                      <div className="latestCourse-colmn-centerDiv">
                        <img src={LatestCourseStarBadgeIcon} alt="" className="LatestCourse-IMG" />
                        <p className="latestCourse-p"> {`(${countViews(item)})`}</p>
                      </div>
                      <div className="latestCourse-colmn-centerDiv">
                        <img src={LatestCourseVideoIcon} alt="" className="LatestCourse-IMG" />
                        <p className="latestCourse-p">
                          {/* {calTotalSecInVideos(item?.videos)} */}
                          {item?.videos && secondToTime(item?.videos[0]?.duration)}
                        </p>
                      </div>
                    </div>
                    {/* ------------------------------- copy colmn -------------------------------  */}
                    <div className="latestCouse-colmn">
                      <div className="latestCourse-colmn-centerDiv">
                        <img src={LatestCourseLavelIcon} alt="" className="LatestCourse-IMG" />
                        <p className="latestCourse-p">{item?.level}</p>
                      </div>
                      <div className="latestCourse-colmn-centerDiv">
                        <img src={LatestCourseTimingIcon} alt="" className="LatestCourse-IMG" />
                        <p className="latestCourse-p">{getDateIs(item?.createdAt)}</p>
                      </div>
                    </div>
                    {/* ------------------------------- copy colmn -------------------------------  */}
                  </div>
                  {/* /* -------------------------------- new card --------------------------------  */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CreatorProfileHome;
