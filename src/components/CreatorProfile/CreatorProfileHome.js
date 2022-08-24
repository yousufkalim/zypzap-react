import React, { useState, useEffect } from 'react';
import '../../components/UserProfile/UserProfile.css';
import UserHomeProfleImg2 from '../../assets/img/UserHomeProfleImg2.svg';
import CreatorPrifileImg from '../../assets/img/CreatorPrifileImg.svg';
// import dummycreator from '../../assets/img/dummycreator.png';
import PropfileInformation from '../PopupForms/PropfileInformation';
import ProGamer from '../../assets/icons/ProGamer.svg';
import ViewCourse from '../../assets/icons/ViewCourse.svg';
import ViewStudent from '../../assets/img/ViewStudent.svg';
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
          <div className="profile-image">
            <img src={UserHomeProfleImg2} alt="" className="profileBackgroun-Image" />
          </div>

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
                <div
                  className="cardGrid"
                  style={{
                    backgroundColor: ' #202342',
                    borderRadius: '35px',
                  }}
                >
                  <div className="topRatedcardGrid-image">
                    <img
                      src={item?.thumbnail ? item.thumbnail : CreatorPrifileImg}
                      className="courseimg"
                      alt="img"
                      onError={() =>
                        setCourses((prev) => {
                          prev[i].thumbnail = CreatorPrifileImg;
                          return [...prev];
                        })
                      }
                    />
                  </div>
                  <h5 className="latestcourseh5">{item?.course_name} GamePlay Course</h5>
                  <p className="latestcoursep1">{user && user.username}</p>
                  <p className="latestcoursep1">
                    {' '}
                    {`${item?.rating} `}
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star1
                        style={{
                          width: '15px',
                          height: '15px',
                          color: 'red',
                          margintTop: '3px',
                          position: 'relative',
                          top: '3px',
                          key: { item },
                        }}
                      />
                    ))}
                    {' (' + countViews(item) + ')'}
                  </p>
                  <h6 className="latestcourseh6">{item?.price}$</h6>
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
