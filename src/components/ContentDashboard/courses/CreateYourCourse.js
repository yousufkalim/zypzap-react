import React from 'react'
import Box from '@mui/material/Box';
import createcourse from '../../../assets/img/createcourse.png'

const CreateYourCourse = () => {
    return (
        <>
         <Box className="create-course-container">
          <Box className="create-course-img-text">
            <img className="img-create-course" src={createcourse}/> 
            <div className="create-course-btn-text">
            <span>Are Ready To Begin</span>  
            <button className="create-course-btn">Create Your Course</button>  
            </div> 
          </Box>   
        </Box>   
        </>
    )
}

export default CreateYourCourse
