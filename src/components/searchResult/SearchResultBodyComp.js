import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Course1 from '../../assets/img/course1.png'
import Course2 from '../../assets/img/course2.png'
import Course3 from '../../assets/img/course3.png'
import Course4 from '../../assets/img/course4.png'
import StarIcon from "@material-ui/icons/Star";
const SearchResultBody = () => {
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
        },
        {
          title: "10Minicraft Full Course",
          img: Course2,
          name: "10James Wiik",
          rating: "rating",
          price: "19.99",
          test: "3",
        },
        {
          title: "11Minicraft Full Course",
          img: Course3,
          name: "11James Wiik",
          rating: "rating",
          price: "19.99",
          test: "3",
        },
        {
          title: "12Minicraft Full Course",
          img: Course4,
          name: "12James Wiik",
          rating: "rating",
          price: "19.99",
          test: "3",
        },
      ];
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        // <div style={{ display: 'flex', backgroundColor: "gray" }}>
        //     <div>
        //         <ul>
        //             <li>Filter By</li>
        //             <li>Categories</li>
        //             <li>Grammer level </li>
        //             <li> Price </li>
        //             <li> Didn't found the course </li>
        //             <li> <a type="button">Request Now</a> </li>
        //         </ul>
        //     </div>


           
        // </div>
        
<Grid container rowSpacing={1}>
<Grid item xs={3}>
    <Item>
        <ul>
            <li>Filter By </li>
            <li style={{display:"flex"}}> <span> Categories </span> <span> <StarIcon/> </span> </li>
            <li> Gammer Level </li>
            <li>Price </li>
            <li>Didn't find the course </li>
            <li><a type="button">Request Now </a></li>
        </ul>
    </Item>
  </Grid>
  <Grid container item xs={9}>
  {items.map((item, i) => (
    <Item>
      <img src={item.img} className="courseimg" alt="img" />
              <h5 className="latestcourseh5">{item.title}</h5>
              <p className="latestcoursep1">{item.name}</p>
              <p className="latestcoursep1">
                {" "}
                5.0
                {[1, 2, 3, 4, 5].map((item) => (
                  <StarIcon
                    style={{
                      width: "15px",
                      height: "15px",
                      color: "red",
                      margintTop: "3px",
                      position: "relative",
                      top: "3px",
                    }}
                  />
                ))}
                (1809)
              </p>
              <h6 className="latestcourseh6">$19.99</h6>
    </Item>

    ))}
  </Grid>

</Grid>


      
    )
}

export default SearchResultBody
