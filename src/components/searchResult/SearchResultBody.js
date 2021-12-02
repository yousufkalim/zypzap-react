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
import Slider from '@mui/material/Slider';


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

var items = [
  {
    title: "CS-GO Ep 2 Complete Course",
    img: Course1,
    name: "James Wiik",
    rating: "rating",
    price: "19.99",
    test: "1",
  },
  {
    title: "PUBG GamePlay Course",
    img: Course2,
    name: "Ifaf ghori",
    rating: "rating",
    price: "19.99",
    test: "2",
  },
  {
    title: "Taken 5 Fight Course",
    img: Course3,
    name: "Arslan Ash",
    rating: "rating",
    price: "19.99",
    test: "3",
  },
  {
    title: "Minicraft Full Course",
    img: Course4,
    name: "James Wiik",
    rating: "rating",
    price: "19.99",
    test: "4",
  },
  {
    title: "5Minicraft Full Course",
    img: Course4,
    name: "5James Wiik",
    rating: "rating",
    price: "19.99",
    test: "5",
  },
  {
    title: "6Minicraft Full Course",
    img: Course3,
    name: "6James Wiik",
    rating: "rating",
    price: "19.99",
    test: "6",
  },
  {
    title: "7Minicraft Full Course",
    img: Course2,
    name: "7James Wiik",
    rating: "rating",
    price: "19.99",
    test: "7",
  },
  {
    title: "8Minicraft Full Course",
    img: Course1,
    name: "8James Wiik",
    rating: "rating",
    price: "19.99",
    test: "8",
  },
  {
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
  const onClick = (e) => {
    const id = e.target.id
    if (id == 1) {
      setCategoriesState(!CategoriesState)
    }
    if (id == 2) {
      setSelectInputState(!SelectInputState)
    }
    if ( id== 3){
      setSliderState(!sliderState)
    }
  } 

  const onSideBtnClick = e => {
    const name = e.target.textContent;
    console.log(name);
    setActiveButton(name);
  }
  const onChangeSliderValue =(e)=>{
    console.log(e.target.value);
  }
  return (
    <Box className="search-result-container" sx={{ flexGrow: 1, display: 'flex' }}>
      <Box className="side-bar-filter">
        <Grid >
          <Item sx={{ textAlign: "left", backgroundColor:"#0E0F1E", color:"#fff" }}>
            <h4 >
              Filter by
            </h4>
            <hr className="filterby-divider" />
            <div id="1" onClick={onClick} className="dropdown-headers">
              Categories
              <KeyboardArrowDownIcon  sx={{ color: "#fff", marginTop: "5px", opacity: "0.6", width: "2px", height: "1em !important" }} />
            </div>
            {
              CategoriesState ? (<Categories categories={categories} activeButton={activeButton} trigerOnClickEmpSideBtn={onSideBtnClick} />
              ) : null
            }

            <div id="2" onClick={onClick}  className="dropdown-headers">
              Gamer Level
              <KeyboardArrowDownIcon sx={{ color: "#fff", marginTop: "5px", opacity: "0.6", width: "2px", height: "1em !important" }} />
            </div>
            {
              SelectInputState ? (
                <div>
                  <form className="radio-inputs"> 
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label className="radio-btn-label" for="html">Entry Level</label> <br />
                    <input type="radio" id="css" name="fav_language" value="CSS" />
                    <label className="radio-btn-label" for="css">Intermediate Level</label> <br />
                    <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                    <label className="radio-btn-label" for="javascript">Advance Level</label>
                  </form>
                </div>
              ) : null
            }
            <div id="3" onClick={onClick} className="dropdown-headers">
              Price
              <KeyboardArrowDownIcon  sx={{ color: "#fff", opacity: "0.6", marginTop: "5px", width: "2px", height: "1em !important" }} />
            </div>
            {
              sliderState? (
                <Box >
                <Slider onChange={onChangeSliderValue} className="slider-color" defaultValue={sliderValue} aria-label="Default" valueLabelDisplay="auto" />
              </Box>
              ):null
            }
            <h4 className="didnt-find-text">
              Didn't found the <br /> course
            </h4>
            <Box>
              <Button sx={{backgroundColor:"#e7411b", padding:"5px 12px", fontSize:"13px", margin:"10px 0"}}
                variant="contained"
              >
                Request now
              </Button>
            </Box>
          </Item>
        </Grid>
      </Box>
      <Box className="cards-container">
        <div className="cards-header-text">
          <h2> CS-GO GAME</h2>
          <span>110 course result</span>
        </div>

        <Grid sx={{padding:"0 20px" }} container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {items.map((item, i) => (
            <Grid item xs={12} sm={6} md={4}>
              <div className="cardGrid">
                <img src={item.img} className="courseimg" alt="img" />
                <h5 className="latestcourseh5">{item.title}</h5>
                <p className="latestcoursep1">{item.name}</p>
                <p className="latestcoursep1">
                  {" "}
                  5.0
                  {[1, 2, 3, 4, 5].map((item) => (
                    <StarIcon className="star-icon" 
                    />
                  ))}
                  (1809)
                </p>
                <h6 className="latestcourseh6">$19.99</h6>
              </div>
            </Grid>
          ))}
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