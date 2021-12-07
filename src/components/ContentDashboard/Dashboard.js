import React, { useState,useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DashboardLeftSideBar from './DashboardLeftSideBar'
import DashboardRightSideBar from './DashboardRightSideBar'
import settings from '../../assets/img/settings.png'
import dollar from '../../assets/img/dollar.png'
import performance from '../../assets/img/performance.png'
import youtube from '../../assets/img/youtube.png'

const Dashboard = ({setFooterState}) => {
  const [activeButton, setActiveButton] = useState();
  const [defaultCompState, setDefaultCompState] = useState('Course')
  useEffect(() => {
   setFooterState(false)
  }, [])
  const items = [
    { name: "Course",
      img:youtube
    },
    { name: "Performance",
      img:performance
    },
    { name: "Earning",
      img:dollar
     },
    { name: "Setting",
      img: settings
    },
  ]
  const onSideBtnClick = e => {
    const course = e.target.textContent;
    setDefaultCompState(course)
    setFooterState(course)
    console.log(course);
    setActiveButton(course);
  }
  return (
    <>
      <Box className="dashboard-container" sx={{ flexGrow: 1, display: 'flex' }}>
        <Box className="dashboard-sidebar">
          <Grid >
            <DashboardLeftSideBar items={items} activeButton={activeButton} trigerOnClickEmpSideBtn={onSideBtnClick} />
          </Grid>
        </Box>
        <DashboardRightSideBar defaultCompState={defaultCompState}/>
       
      </Box>
    </>
  )
}

export default Dashboard
