import React, { useState } from "react";
import Categories from "./Categories";
import GameType from "./GameType";
import Plateforms from "./Plateforms";
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

var items = [
  {
    id: 1,
    title: "CS-GO Ep 2 Complete Course",
    img: Course1,
    name: "James Wiik",
    rating: "rating",
    price: "19.99",
    test: "1",
  },
  {
    id: 2,
    title: "PUBG GamePlay Course",
    img: Course2,
    name: "Ifaf ghori",
    rating: "rating",
    price: "19.99",
    test: "2",
  },
  {
    id: 3,
    title: "Taken 5 Fight Course",
    img: Course3,
    name: "Arslan Ash",
    rating: "rating",
    price: "19.99",
    test: "3",
  },
  {
    id: 4,
    title: "Minicraft Full Course",
    img: Course4,
    name: "James Wiik",
    rating: "rating",
    price: "19.99",
    test: "4",
  },
  {
    id: 5,
    title: "5Minicraft Full Course",
    img: Course4,
    name: "5James Wiik",
    rating: "rating",
    price: "19.99",
    test: "5",
  },
  {
    id: 6,
    title: "6Minicraft Full Course",
    img: Course3,
    name: "6James Wiik",
    rating: "rating",
    price: "19.99",
    test: "6",
  },
  {
    id: 7,
    title: "7Minicraft Full Course",
    img: Course2,
    name: "7James Wiik",
    rating: "rating",
    price: "19.99",
    test: "7",
  },
  {
    id: 8,
    title: "8Minicraft Full Course",
    img: Course1,
    name: "8James Wiik",
    rating: "rating",
    price: "19.99",
    test: "8",
  },
  {
    id: 9,
    title: "9Minicraft Full Course",
    img: Course1,
    name: "9James Wiik",
    rating: "rating",
    price: "19.99",
    test: "3",
  },
];
const categories = [
  {
    name: "Top 10 Games ",
    value: "name",
  },
  {
    name: "Top 10 Trendy Games",
    value: "class",
  },
  {
    name: "Top 10 NFT Games",
    value: "age",
  },
  {
    name: "Top 10 Metaverse Games",
    value: "subjects",
  },
  {
    name: "Top New Games",
    value: "school",
  },
  {
    name: "Top Reality Games",
    value: "schooltwo",
  },
];
const GameTypes = [
  {
    name: "Action ",
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
    name: "Retro Consoles  ",
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
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const SearchResultBody = () => {
  const [selectedCategories, setselectedCategories] = useState(false);
  const [selectedGame, setSelectedGame] = useState(false);
  const [selectedPlateforms, setSelectedPlateforms] = useState(false);
  const [selectedGameplay, setSelectedGameplay] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(false);
  const [SelectInputState, setSelectInputState] = useState(false);
  const [sliderState, setSliderState] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedActiveButton, setSelectedActiveButton] = useState();
  const [selectedGameBtn, setSelectedGameBtn] = useState();
  const [selectedPlateformsBtn, setselectedPlateformsBtn] = useState();
  const [radioBtnValue, setRadioBtnValue] = useState();
  const [FvrtIconCount, setFvrtIconCount] = useState([]);

  console.log(FvrtIconCount);
  //sidebar list togle
  const onClickSideBarHeaders = (e) => {
    const id = e.target.id;
    if (id == 1) {
      setselectedCategories(!selectedCategories);
    }
    if (id == 2) {
      setSelectInputState(!SelectInputState);
    }
    if (id == 3) {
      setSelectedPrice(!selectedPrice);
    }
    if (id == 4) {
      setSelectedGame(!selectedGame);
    }
    if (id == 5) {
      setSelectedPlateforms(!selectedPlateforms);
    }
    if (id == 6) {
      setSelectedCourse(!selectedCourse);
    }
    if (id == 7) {
      setSelectedGameplay(!selectedGameplay);
    }
  };
  // sidebar list togle
  // making list item active by chnaging background
  const onSideBtnClick = (e) => {
    const name = e.target.textContent;
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
  // making list item active by changing background
  //get radio values
  const onChangeRadioBtn = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setRadioBtnValue((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  //get radio values
  // To get slider value
  const onChangeSliderValue = (e) => {
    setSliderValue(e.target.value);
  };
  const RequestClikEvent = (e) => {
    console.log("activeButton categori", selectedActiveButton);
    console.log("gameBtn gametype", selectedGameBtn);
    console.log("PlateformsBtn plateform", selectedPlateformsBtn);
    console.log("GameplayStateBtn GameplayState", selectedGameplay);
    console.log("PriceStatebtn PriceState", selectedPrice);
    console.log("CourseStatebtn CourseState", selectedCourse);
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
              backgroundColor: "#0E0F1E",
              color: "#fff",
            }}
          >
            <h4>Filter by</h4>
            <hr className="filterby-divider" />
            <div
              id="1"
              onClick={onClickSideBarHeaders}
              className="dropdown-headers"
            >
              Categories
              {selectedCategories ? (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important",
                  }}
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
              id="4"
              onClick={onClickSideBarHeaders}
              className="dropdown-headers"
            >
              Game Type
              {selectedGame ? (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important",
                  }}
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
              id="5"
              onClick={onClickSideBarHeaders}
              className="dropdown-headers"
            >
              Plateforms
              {selectedPlateforms ? (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important",
                  }}
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
            <div
              id="7"
              onClick={onClickSideBarHeaders}
              className="dropdown-headers"
            >
              Gameplay mode
              {selectedGameplay ? (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important",
                  }}
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
              id="3"
              onClick={onClickSideBarHeaders}
              className="dropdown-headers"
            >
              Price
              {selectedPrice ? (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important",
                  }}
                />
              )}
            </div>
            {selectedPrice ? (
              <form>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="free"
                    name="active"
                    value="free"
                  />
                  <label for="free">Free/Subscription</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="10€"
                    name="active"
                    value="10€"
                  />
                  <label for="10€">-10 €</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="20€"
                    name="active"
                    value="20€"
                  />
                  <label for="20€">-20 €</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="30€"
                    name="active"
                    value="30€"
                  />
                  <label for="30€">-30 €</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="40€"
                    name="active"
                    value="40€"
                  />
                  <label for="40€">-40 €</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="50€"
                    name="active"
                    value="50€"
                  />
                  <label for="50€">-50 €</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="100€"
                    name="active"
                    value="100€"
                  />
                  <label for="100€">-100 €</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="+100€"
                    name="active"
                    value="+100€"
                  />
                  <label for="+100€">- +100 €</label>
                </div>
              </form>
            ) : null}
            {/* 111111 */}

            <div
              id="6"
              onClick={onClickSideBarHeaders}
              className="dropdown-headers"
            >
              Course type
              {selectedCourse ? (
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important",
                  }}
                />
              )}
            </div>
            {selectedCourse ? (
              <form>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="Subscription"
                    name="active"
                    value="Subscription"
                  />
                  <label for="Subscription">Subscription Courses</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    onChange={onChangeSliderValue}
                    id="Courses"
                    name="active"
                    value="Courses"
                  />
                  <label for="Courses">Courses on Demand</label>
                </div>
              </form>
            ) : null}
            {/* 22222 */}
            <h4 className="didnt-find-text">
              Didn't found the <br /> course
            </h4>
            <Box>
              <Button
                className="reqstStateBTN"
                onClick={RequestClikEvent}
                // sx={{
                //   backgroundColor: "#e7411b",
                //   padding: "5px 12px",
                //   fontSize: "13px",
                //   margin: "10px 0",
                // }}
                variant="contained"
              >
                Request now
              </Button>
            </Box>
          </Item>
        </Grid>
      </Box>
      {/*  */}
      <Box className="cards-container">
        <div className="cards-box">
          <div className="cards-header-text">
            <h2> CS-GO GAME</h2>
            <span>110 course result</span>
          </div>
          <div>
            {" "}
            <CustomizedMenus />{" "}
          </div>
        </div>
        <Grid
          sx={{ padding: "0 20px" }}
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={4}>
              <div className="cardGrid">
                <div className="favourite-icon-position">
                  <img src={item.img} className="courseimg" alt="img" />
                  <HeartIcon id={item.id} FvrtIconCount={FvrtIconCount} />
                </div>
                <h5 className="latestcourseh5">{item.title}</h5>
                <p className="latestcoursep1">{item.name}</p>
                <p className="latestcoursep1">
                  {" "}
                  5.0
                  {[1, 2, 3, 4, 5].map((item) => (
                    <StarIcon className="star-icon" />
                  ))}
                  (1809)
                </p>
                <h6 className="latestcourseh6">$19.99</h6>
              </div>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center">
          <button className="btn-search-result">View more</button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchResultBody;
