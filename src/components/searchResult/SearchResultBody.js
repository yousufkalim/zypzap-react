import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import Course1 from '../../assets/img/course1.png'
import Course2 from '../../assets/img/course2.png'
import Course3 from '../../assets/img/course3.png'
import Course4 from '../../assets/img/course4.png'
import StarIcon from "@material-ui/icons/Star";

import {
    Card,
    CardContent,
    Typography,
    CardHeader
} from "@material-ui/core/";


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
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const SearchResultBody = () => {
// export default function CardComprow() {
//     const data = {
//         name: [
//             { quarter: 1, earnings: 13000 },
//             { quarter: 2, earnings: 16500 },
//             { quarter: 3, earnings: 14250 },
//             { quarter: 4, earnings: 19000 }
//         ],
//         id: [1, 2, 3, 4]
//     }

    const text = ["Categories", "Grammer Level", "Price"]
    return (
        <Box style={{ margin: "3% 5%", overflowX:"hidden", overflowY:"hidden" }} sx={{ flexGrow: 1, display: 'flex' }}>
            <Box   sx={{ width: "25%" }}>
                <Grid >
                    <Item style={{backgroundColor:"#0E0F1E", color:"#fff"}}>
                        <Typography align="left" variant="h6" component="h2">
                            Filter By
                        </Typography>
                        <Divider sx/>
                        <List sx={{ width: '100%', maxWidth: 360  }}>
                            {text.map((value) => (
                                <ListItem
                                    key={value}
                                    disableGutters
                                    secondaryAction={
                                        <IconButton>
                                            <CommentIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText primary={` ${value}`} />
                                </ListItem>
                            ))}
                        </List>
                        <Typography align="left" variant="h6" component="h2">
                            Didn't found the <br /> course
                        </Typography>
                        <Box textAlign='left'>
                        <Button
    style={{
        backgroundColor: "#e7411b",
        padding: "5px 18px",
        fontSize: "14px",
        margin :"10px 0"
    }}
    variant="contained"
    >
    Request now
</Button>
                           </Box>
                    </Item>
                </Grid>
            </Box>
            <Box style={{ border: "1px solid black", backgroundColor:"#212E58"}} sx={{ width: "75%", padding:"10px" }}>
            <Typography align="left" variant="h6" component="h2">
                            CS-GO GAME
                        </Typography>
                        <Typography align="left" variant="span" component="span">
                            110 course result
                        </Typography>
                <Grid style={{ padding: "0 20px" }} container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {items.map((item, i) => (
                        <Grid style={{}} item xs={2} sm={4} md={4}>
                            
                             <div className="cardGrid">
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
              </div>
    

                        </Grid>
                    ))}
                </Grid>
                <Box textAlign='center'> 
                <Button
    style={{
        backgroundColor: "#e7411b",
        padding: "5px 18px",
        fontSize: "14px",
        margin :"10px 0"
    }}
    variant="contained"
    >
    View more
</Button>
                
                
                </Box>
            </Box>
        </Box>
    );
}

export default SearchResultBody