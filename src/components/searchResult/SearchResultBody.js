import React, { useState } from 'react';
import Categories from './Categories'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Course1 from '../../assets/img/course1.png'
import Course2 from '../../assets/img/course2.png'
import Course3 from '../../assets/img/course3.png'
import Course4 from '../../assets/img/course4.png'
import StarIcon from "@material-ui/icons/Star";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomizedMenus from './CustomizedMenus'
import HeartIcon from './HeartIcon'


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
  }
];

const categories = [
  {
    name: "Action",
    value: "name"
  },
  {
    name: "Racing",
    value: "class"
  },
  {
    name: "Sports",
    value: "age"
  },
  {
    name: "Fighting",
    value: "subjects"
  },
  {
    name: "Puzzle",
    value: "school"
  },
  {
    name: "Offline",
    value: "schooltwo"
  }
];
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const SearchResultBody = () => {
  const [CategoriesState, setCategoriesState] = useState(false)
  const [SelectInputState, setSelectInputState] = useState(false)
  const [sliderState, setSliderState] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)
  const [activeButton, setActiveButton] = useState();
  const [radioBtnValue, setRadioBtnValue] = useState();
  const [FvrtIconCount, setFvrtIconCount] = useState([]);
  console.log(FvrtIconCount);
  //sidebar list togle
  const onClickSideBarHeaders = (e) => {
    const id = e.target.id
    if (id == 1) {
      setCategoriesState(!CategoriesState)
    }
    if (id == 2) {
      setSelectInputState(!SelectInputState)
    }
    if (id == 3) {
      setSliderState(!sliderState)
    }
  }
  // sidebar list togle
  // making list item active by chnaging background
  const onSideBtnClick = e => {
    const name = e.target.textContent;
    console.log(name);
    setActiveButton(name);
  }
  // making list item active by changing background
  //get radio values
  const onChangeRadioBtn = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    setRadioBtnValue((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }
  //get radio values
  // To get slider value
  const onChangeSliderValue = (e) => {
    setSliderValue(e.target.value);
  }
  // To get slider value
  return (
    <Box className="search-result-container" sx={{ flexGrow: 1, display: 'flex' }}>
      <Box className="side-bar-filter">
        <Grid >
          <Item sx={{ textAlign: "left", backgroundColor: "#0E0F1E", color: "#fff" }}>
            <h4 >
              Filter by
            </h4>
            <hr className="filterby-divider" />
            <div id="1" onClick={onClickSideBarHeaders} className="dropdown-headers">
              Categories
              {CategoriesState ?
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important"
                  }}
                />
                :
                <KeyboardArrowUpIcon
                  sx={{
                    color: "#fff",
                    marginTop: "5px",
                    opacity: "0.6",
                    width: "2px",
                    height: "1em !important"
                  }}
                />
              }
            </div>
            {
              CategoriesState ? (
                <Categories
                  categories={categories}
                  activeButton={activeButton}
                  trigerOnClickEmpSideBtn={onSideBtnClick}
                />
              ) : null
            }
            <div id="2" onClick={onClickSideBarHeaders} className="dropdown-headers">
              Gamer Level
              {
                SelectInputState ?
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "#fff",
                      marginTop: "5px",
                      opacity: "0.6",
                      width: "2px",
                      height: "1em !important"
                    }}
                  /> :
                  <KeyboardArrowUpIcon
                    sx={{
                      color: "#fff",
                      marginTop: "5px",
                      opacity: "0.6",
                      width: "2px",
                      height: "1em !important"
                    }}
                  />
              }
            </div>
            {
              SelectInputState ? (
                <div>
                  <form>
                    <div class="radio-item">
                      <input type="radio" onChange={onChangeRadioBtn} id="entrylevel" name="active" value="entrylevel" />
                      <label for="entrylevel">Entry level</label>
                    </div>
                    <div class="radio-item">
                      <input type="radio" onChange={onChangeRadioBtn} id="intermediatelevel" name="active" value="intermediatelevel" />
                      <label for="intermediatelevel">Intermediate level</label>
                    </div>
                    <div class="radio-item">
                      <input type="radio" onChange={onChangeRadioBtn} id="advancelevel" name="active" value="advancelevel" />
                      <label for="advancelevel">Advance level</label>
                    </div>
                  </form>
                </div>
              ) : null
            }
            <div id="3" onClick={onClickSideBarHeaders} className="dropdown-headers">
              Price
              {
                sliderState ?
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "#fff",
                      marginTop: "5px",
                      opacity: "0.6",
                      width: "2px",
                      height: "1em !important"
                    }}
                  />
                  :
                  <KeyboardArrowUpIcon
                    sx={{
                      color: "#fff",
                      marginTop: "5px",
                      opacity: "0.6",
                      width: "2px",
                      height: "1em !important"
                    }}
                  />
              }
            </div>
            {
              sliderState ? (
                <Box
                  sx={{
                    position: "relative"
                  }}>
                  <div className="slider">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValue}
                      onChange={onChangeSliderValue}
                      className="slider-input" />
                    <div>
                      <span
                        style={{
                          position: "absolute",
                          top: "25px",
                          left: `${sliderValue * 0.9}%`
                        }}
                      >
                        {sliderValue}$+
                      </span>
                    </div>
                  </div>
                </Box>
              ) : null
            }
            <h4 className="didnt-find-text">
              Didn't found the <br /> course
            </h4>
            <Box>
              <Button
                sx={{
                  backgroundColor: "#e7411b",
                  padding: "5px 12px",
                  fontSize: "13px",
                  margin: "10px 0"
                }}
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
          <div> <CustomizedMenus /> </div>
        </div>
        <Grid
          sx={{ padding: "0 20px" }}
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 2, sm: 8, md: 12 }}>
          {
            items.map((item) => (
              <Grid item xs={12} sm={6} md={4}>
                <div className="cardGrid">
                  <div className="favourite-icon-position">
                    <img src={item.img} className="courseimg" alt="img" />
                    <HeartIcon
                      id={item.id}
                      FvrtIconCount={FvrtIconCount}

                    />
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
            ))
          }

        </Grid>
        <Box textAlign='center'>
          <button className="btn-search-result"
          >
            View more
          </button>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchResultBody