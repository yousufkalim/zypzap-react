import React, { useState, useEffect, useMemo } from "react";
import Categories from "./Categories";
import GameType from "./GameType";
import Plateforms from "./Plateforms";
import Level from "./gameLevel";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Course1 from "../../assets/img/course1.png";
import Course2 from "../../assets/img/course2.png";
import Course3 from "../../assets/img/course3.png";
import Course4 from "../../assets/img/course4.png";
import StarIcon from "@material-ui/icons/Star";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomizedMenus from "./CustomizedMenus";
import HeartIcon from "./HeartIcon";
import LatestCourseGameIcon from "../../assets/icons/LatestCourseGameIcon.svg";
import LatestCourseStarBadgeIcon from "../../assets/icons/LatestCourseStarBadgeIcon.svg";
import LatestCourseLavelIcon from "../../assets/icons/LatestCourseLavelIcon.svg";
import LatestCourseStarIcon from "../../assets/icons/LatestCourseStarIcon.svg";
import LatestCourseVideoIcon from "../../assets/icons/LatestCourseVideoIcon.svg";
import LatestCourseTimingIcon from "../../assets/icons/LatestCourseTimingIcon.svg";
import { Store, UpdateStore } from "../../StoreContext";
import { useHistory } from "react-router-dom";
import api from "../../api";

import ResearchFaild from "./ResearchFaild";
import CreatorResult from "./CreatorResult";

const categories = [
  {
    name: "Top 10 Games",
    value: "1",
  },
  {
    name: "Top 10 Trendy Games",
    value: "1",
  },
  {
    name: "Top 10 NFT Games",
    value: "3",
  },
  {
    name: "Top 10 Metaverse Games",
    value: "4",
  },
  {
    name: "Latest Courses",
    value: "2",
  },
  {
    name: "Top Rated Content Creators",
    value: "5",
  },
  {
    name: "Top Courses",
    value: "1",
  },
  {
    name: "Top New Games",
    value: "6",
  },
  {
    name: "Top Reality Games",
    value: "7",
  },
];

const GameTypes = [
  {
    name: "Action",
    value: "name",
  },
  {
    name: "Adventure",
    value: "class",
  },
  {
    name: "Metaverse",
    value: "age",
  },
  {
    name: "MMOG",
    value: "subjects",
  },
  {
    name: "Car Racing",
    value: "school",
  },
  {
    name: "Versus Fighting",
    value: "schooltwo",
  },
  {
    name: "FPS",
    value: "schooltwo",
  },
  {
    name: "RTS",
    value: "schooltwo",
  },
  {
    name: "RPG",
    value: "schooltwo",
  },
  {
    name: "Turn by Turn Strategy",
    value: "schooltwo",
  },
  {
    name: "Simulation",
    value: "schooltwo",
  },
  {
    name: "Sport",
    value: "schooltwo",
  },
  {
    name: "Trading card",
    value: "schooltwo",
  },
  {
    name: "Puzzle",
    value: "schooltwo",
  },
];
const PlateformsAry = [
  {
    name: "Retro Consoles",
    value: "name",
  },
  {
    name: "PS1/2/3/4/5",
    value: "class",
  },
  {
    name: "Xbox/360/One/X",
    value: "age",
  },
  {
    name: "PC",
    value: "subjects",
  },
  {
    name: "Portable Consoles",
    value: "school",
  },
  {
    name: "Mobile Games",
    value: "schooltwo",
  },
];
const levelAry = [
  {
    name: "Casual",
    value: "Casual",
  },
  {
    name: "Confirmed",
    value: "Confirmed",
  },
  {
    name: "Hardcore",
    value: "Hardcore",
  },
  {
    name: "Esporter",
    value: "Esporter",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SearchResultBody = () => {
  const history = useHistory();
  useEffect(() => {
    if (history.location.param) {
      onSideBtnClick(history.location?.param);
    }
  }, []);
  // initalize variables
  const [selectedCategories, setselectedCategories] = useState(false);
  const [selectedGame, setSelectedGame] = useState(false);
  const [selectedPlateforms, setSelectedPlateforms] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(false);
  const [selectedGameplay, setSelectedGameplay] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(false);
  const [sliderValue, setSliderValue] = useState("");
  const [selectedActiveButton, setSelectedActiveButton] = useState("");
  const [selectedGameBtn, setSelectedGameBtn] = useState("");
  const [selectedPlateformsBtn, setselectedPlateformsBtn] = useState("");
  const [selectedlevelBtn, setselectedlevelBtn] = useState("");
  const [radioBtnValue, setRadioBtnValue] = useState("");
  const [FvrtIconCount, setFvrtIconCount] = useState([]);
  // recieving context __data

  const { searchCreator, searchCourse, searchState, searchInput } = Store();
  useEffect(() => {}, [searchState, searchCourse, searchCreator]);
  const updateStore = UpdateStore();

  //sidebar list togle
  const onClickSideBarHeaders = (e) => {
    const id = e.target.id;
    if (id == 1) {
      setselectedCategories(!selectedCategories);
    }
    if (id == 2) {
      setSelectedGame(!selectedGame);
    }
    if (id == 3) {
      setSelectedPlateforms(!selectedPlateforms);
      // setSelectedPrice(!selectedPrice);
    }
    if (id == 4) {
      setSelectedGameplay(!selectedGameplay);
      //setSelectedGame(!selectedGame);
      // change1
    }
    if (id == 5) {
      setSelectedPrice(!selectedPrice);
      //setSelectedPlateforms(!selectedPlateforms);
    }
    if (id == 6) {
      setSelectedLevel(!selectedLevel);
    }
  };
  // sidebar list togle
  // making list item active by chnaging background
  const onSideBtnClick = async (e) => {
    // const name = e.target.textContent;
    const name = e.name;
    const value = e.value;
    let res = await api("get", `/courses/topGames?type=${value}`);
    if (res) {
      if (value == "5") {
        updateStore({
          searchState: "creator",
          searchCourse: [],
          searchCreator: res?.data,
          searchInput: name,
        });
        setSelectedActiveButton("");
      }
      if (value !== "5") {
        updateStore({
          searchState: "course",
          searchCourse: res.data,
          searchCreator: [],
          searchInput: name,
        });
        setSelectedActiveButton("");
      }
    }
    setSelectedActiveButton(name);
  };
  const onSideBtnClick2 = (e) => {
    const name = e.target.textContent;
    setSelectedGameBtn(name);
  };
  const onSideBtnClick3 = (e) => {
    const name = e.target.textContent;
    setselectedPlateformsBtn(name);
  };
  const onSideBtnClick6 = (e) => {
    const name = e.target.textContent;
    setselectedlevelBtn(name);
  };

  let countViews = (course) => {
    const Videos = course?.videos;
    let count = 0;
    Videos?.map((video) => {
      count += video.views;
    });
    return count;
  };
  const calTotalSecInVideos = (videos) => {
    let timeInSecond = 0;
    videos.map((videos) => (timeInSecond += parseInt(videos.duration)));
    var hrs = ~~(timeInSecond / 3600);
    var mins = ~~((timeInSecond % 3600) / 60);
    var secs = ~~timeInSecond % 60;
    let time;
    if (hrs > 0) {
      time = `${hrs} : ${mins} :${secs} hrs`;
    } else if (mins > 0) {
      time = `${mins}:${secs} mins`;
    } else {
      time = `${secs} sec`;
    }
    return time;
  };
  const postedTime = (item) => {
    const date1 = new Date(item?.createdAt);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  const onChangeRadioBtn = (e) => {
    const value = e.target.value;
    setRadioBtnValue(e.target.value);
  };
  const onChangeSliderValue = (e) => {
    setSliderValue(e.target.value);
  };
  const RequestClikEvent = async (e) => {
    let res = await api(
      "get",
      `/courses/filteredCourses?&&gameType=${selectedGameBtn}&&plateForm=${selectedPlateformsBtn}&&level=${selectedlevelBtn}&&mode=${radioBtnValue}&&price=${sliderValue}`
    );
    if (res) {
      const course = res?.data.filter((c, index) => c.index < 12);
      updateStore({ searchCourse: res?.data });
    }
  };
  // To get slider value
  return (
    <Box
      className="search-result-container"
      sx={{ flexGrow: 1, display: "flex" }}
    >
      <Box className="side-bar-filter">
        <Grid>
          <Item
            sx={{
              textAlign: "left",
              backgroundColor: "black",
              color: "#fff",
              padding: "10px 20px 20px 40px",
            }}
          >
            <h4>Filter By</h4>
            <hr className="filterby-divider" />
            <div
              id="1"
              onClick={onClickSideBarHeaders}
              className="dropdown-headers"
            >
              Categories
              {selectedCategories ? (
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    width: "30px",
                    height: "1em !important",
                  }}
                  id="1"
                  onClick={onClickSideBarHeaders}
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    width: "30px",
                    height: "1em !important",
                  }}
                  id="1"
                  onClick={onClickSideBarHeaders}
                />
              )}
            </div>
            {selectedCategories ? (
              <Categories
                categories={categories}
                activeButton={selectedActiveButton}
                trigerOnClickEmpSideBtn={onSideBtnClick}
              />
            ) : null}
            <div
              id="2"
              onClick={onClickSideBarHeaders}
              className="dropdown-headers"
            >
              Game Type
              {selectedGame ? (
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",

                    width: "30px",
                    height: "1em !important",
                  }}
                  id="2"
                  onClick={onClickSideBarHeaders}
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",

                    width: "30px",
                    height: "1em !important",
                  }}
                  id="2"
                  onClick={onClickSideBarHeaders}
                />
              )}
            </div>
            {selectedGame ? (
              <GameType
                GameTypes={GameTypes}
                gameBtn={selectedGameBtn}
                trigerOnClickEmpSideBtn2={onSideBtnClick2}
              />
            ) : null}
            <div
              id="3"
              onClick={onClickSideBarHeaders}
              className="dropdown-headers"
            >
              Plateforms
              {selectedPlateforms ? (
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",

                    width: "30px",
                    height: "1em !important",
                  }}
                  id="3"
                  onClick={onClickSideBarHeaders}
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",

                    width: "30px",
                    height: "1em !important",
                  }}
                  id="3"
                  onClick={onClickSideBarHeaders}
                />
              )}
            </div>

            {selectedPlateforms ? (
              <Plateforms
                PlateformsAry={PlateformsAry}
                PlateformsBtn={selectedPlateformsBtn}
                trigerOnClickEmpSideBtn3={onSideBtnClick3}
              />
            ) : null}
            {/* ////////////////////
             */}
            <div
              id="6"
              onClick={onClickSideBarHeaders}
              className="dropdown-headers"
            >
              Gameplay Level
              {!selectedLevel ? (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",

                    width: "30px",
                    height: "1em !important",
                  }}
                  id="6"
                  onClick={onClickSideBarHeaders}
                />
              ) : (
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    width: "30px",
                    height: "1em !important",
                  }}
                  id="6"
                  onClick={onClickSideBarHeaders}
                />
              )}
            </div>
            {selectedLevel ? (
              <Level
                PlateformsAry={levelAry}
                PlateformsBtn={selectedlevelBtn}
                trigerOnClickEmpSideBtn3={onSideBtnClick6}
              />
            ) : null}

            {/*  */}
            <div
              id="4"
              onClick={onClickSideBarHeaders}
              className="dropdown-headers"
            >
              Gameplay mode
              {selectedGameplay ? (
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    width: "30px",
                    height: "1em !important",
                  }}
                  id="4"
                  onClick={onClickSideBarHeaders}
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    width: "30px",
                    height: "1em !important",
                  }}
                  id="4"
                  onClick={onClickSideBarHeaders}
                />
              )}
            </div>
            {selectedGameplay ? (
              <div>
                <form>
                  <div class="radio-item">
                    <input
                      type="radio"
                      onChange={onChangeRadioBtn}
                      id="Single"
                      name="active"
                      value="Single"
                    />
                    <label for="Single">Single mode</label>
                  </div>
                  <div class="radio-item">
                    <input
                      type="radio"
                      onChange={onChangeRadioBtn}
                      id="Multiplayer"
                      name="active"
                      value="Multiplayer"
                    />
                    <label for="Multiplayer">Multiplayer mode</label>
                  </div>
                </form>
              </div>
            ) : null}
            <div
              id="5"
              onClick={onClickSideBarHeaders}
              className="dropdown-headers"
            >
              Price
              {selectedPrice ? (
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    width: "30px",
                    height: "1em !important",
                  }}
                  id="5"
                  onClick={onClickSideBarHeaders}
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    width: "30px",
                    height: "1em !important",
                  }}
                  id="5"
                  onClick={onClickSideBarHeaders}
                />
              )}
            </div>
            {selectedPrice ? (
              <form>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="0"
                    name="active"
                    value="0"
                  />
                  <label for="0">Free/Subscription</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="10€"
                    name="active"
                    value="10"
                  />
                  <label for="10€">10 €</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="20€"
                    name="active"
                    value="20"
                  />
                  <label for="20€">20 €</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="30€"
                    name="active"
                    value="30"
                  />
                  <label for="30€">30 €</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="40€"
                    name="active"
                    value="40"
                  />
                  <label for="40€">40 €</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="50€"
                    name="active"
                    value="50"
                  />
                  <label for="50€">50 €</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="100€"
                    name="active"
                    value="100"
                  />
                  <label for="100€">100 €</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="all"
                    name="active"
                    value="all"
                  />
                  <label for="all">+100 €</label>
                </div>
              </form>
            ) : null}
            {/* 111111 */}
            {/* <h4 className="didnt-find-text">
              Didn't found the <br /> course
            </h4> */}
            <label for="Multiplayer" className="dropdown-headers">
              Didn’t found the <br /> course
            </label>
            <Box>
              <Button
                className="reqstStateBTN"
                onClick={RequestClikEvent}
                variant="contained"
              >
                Request now
              </Button>
            </Box>
          </Item>
        </Grid>
      </Box>
      {/*  */}
      {searchState === "course" ? (
        <>
          {" "}
          {searchCourse?.length === 0 ? (
            <ResearchFaild />
          ) : (
            <>
              <Box className="cards-container">
                <div className="cards-box">
                  <div className="cards-header-text">
                    {/* <h2>{`${searchInput} GAMES`}</h2> */}
                    <span>
                      {searchCourse.length +
                        " course result for " +
                        ` ${searchInput} `}
                    </span>
                  </div>
                  <div>
                    {searchCourse.length != 0 && (
                      <CustomizedMenus
                        // todo: should manage by store file
                        searchCourse={searchCourse}
                        updateStore={updateStore}
                      />
                    )}
                  </div>
                </div>
                <Grid
                  sx={{ padding: "0 20px" }}
                  container
                  spacing={{ xs: 1, md: 1 }}
                  columns={{ xs: 2, sm: 8, md: 12 }}
                >
                  {/* course search ..data */}
                  {searchCourse?.map((item) => (
                    <Grid item xs={12} sm={6} md={4}>
                      <div className="cardGrid searchcard">
                        <div className="favourite-icon-position">
                          <img
                            src={item?.thumbnail ? item.thumbnail : Course1}
                            className="courseimg"
                            alt="img"
                          />
                          <HeartIcon
                            id={item.id}
                            FvrtIconCount={FvrtIconCount}
                          />
                        </div>
                        <h5 className="latestcourseh5">
                          {" "}
                          {item?.course_name
                            ? item.course_name
                            : "Fight Course"}
                        </h5>
                        <div className="latestCourseMain-Div">
                          <div className="latestCouse-colmn">
                            <div className="latestCourse-colmn-centerDiv">
                              <img
                                src={LatestCourseGameIcon}
                                alt=""
                                className="LatestCourse-IMG"
                              />
                              <h1
                                className="latestCourse-pHeading"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "700",
                                  paddingLeft: "5px",
                                }}
                              >
                                {item?.creator?.user_id?.username}
                              </h1>
                            </div>
                            <div className="latestCourse-colmn-centerDiv">
                              &nbsp;{" "}
                              <img
                                src={LatestCourseStarIcon}
                                alt=""
                                className="LatestCourse-IMG"
                              />
                              <p className="latestCourse-p">
                                {" "}
                                {item?.rating
                                  ? `${item.rating} Ratting`
                                  : "0 Rattig"}
                              </p>
                            </div>
                          </div>
                          {/* ------------------------------- copy colmn -------------------------------  */}
                          <div className="latestCouse-colmn">
                            <div className="latestCourse-colmn-centerDiv">
                              &nbsp;{" "}
                              <img
                                src={LatestCourseStarBadgeIcon}
                                alt=""
                                className="LatestCourse-IMG"
                              />
                              <p className="latestCourse-p">
                                {" "}
                                {item?.videos ? `(${countViews(item)})` : ""}
                              </p>
                            </div>
                            <div className="latestCourse-colmn-centerDiv">
                              <img
                                src={LatestCourseVideoIcon}
                                alt=""
                                className="LatestCourse-IMG"
                              />
                              <p className="latestCourse-p">
                                {calTotalSecInVideos(item?.videos)}
                              </p>
                            </div>
                          </div>
                          {/* ------------------------------- copy colmn -------------------------------  */}
                          <div className="latestCouse-colmn">
                            <div className="latestCourse-colmn-centerDiv">
                              <img
                                src={LatestCourseLavelIcon}
                                alt=""
                                className="LatestCourse-IMG"
                              />
                              <p className="latestCourse-p">{item?.level}</p>
                            </div>
                            <div className="latestCourse-colmn-centerDiv">
                              <img
                                src={LatestCourseTimingIcon}
                                alt=""
                                className="LatestCourse-IMG"
                              />
                              <p className="latestCourse-p">{`${postedTime(
                                item
                              )} days ago`}</p>
                            </div>
                          </div>
                          {/* ------------------------------- copy colmn -------------------------------  */}
                        </div>
                      </div>
                    </Grid>
                  ))}
                </Grid>
                {searchCourse.length != 0 && (
                  <Box textAlign="center">
                    <button className="btn-search-result">View more</button>
                  </Box>
                )}
              </Box>
            </>
          )}
        </>
      ) : (
        <></>
      )}
      {searchState === "creator" ? (
        searchCreator?.length === 0 ? (
          <ResearchFaild />
        ) : (
          <>
            {/* <CreatorResult input={input} /> */}
            <CreatorResult input={searchInput} />
          </>
        )
      ) : (
        <></>
      )}
    </Box>
  );
};

export default SearchResultBody;
