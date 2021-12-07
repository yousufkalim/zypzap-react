import React from 'react'
import DashboardUploadCourses from './courses/DashboardUploadCourses'
import CreateYourCourse from './courses/CreateYourCourse'
import Earning from './earning/Earning'
import Performance from './performance/Performance'
import Setting from './setting/Setting'
import Box from '@mui/material/Box';
const DashboardRightSideBar = ({defaultCompState}) => {
    return (
        <>
        {
          defaultCompState==="Course"?(
            <Box className="upload-courses-container">
          <CreateYourCourse />
          <Box >
            <div className="upload-courses-heading" > <h2> My Uploaded Courses</h2>  </div>
            <DashboardUploadCourses />
          </Box>
        </Box> 
          ):null
        }
        {defaultCompState==="Performance"?(<Performance/>):null}
        {defaultCompState==="Earning"?(<Earning/>):null}
        {defaultCompState==="Setting"?(<Setting/>):null}  
        </>
    )
}

export default DashboardRightSideBar
