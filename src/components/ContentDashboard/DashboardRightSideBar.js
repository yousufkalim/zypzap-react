import React, { useState } from "react";
import DashboardUploadCourses from "./courses/DashboardUploadCourses";
import CreateYourCourse from "./courses/CreateYourCourse";
import Earning from "./earning/Earning";
import Performance from "./performance/Performance";
import CreateCourseForm from "./createCourse/CreateCourseForm";
import Setting from "./setting/Setting";
import Box from "@mui/material/Box";
const DashboardRightSideBar = ({
  defaultCompState,
  createCourse,
  setcreateCourse,
  setDefaultCompState,
}) => {
  return (
    <>
      {defaultCompState === "Course" ? (
        <Box className="upload-courses-container">
          <CreateYourCourse
            setcreateCourse={setcreateCourse}
            setDefaultCompState={setDefaultCompState}
          />
          <Box>
            <h1 className="upload-courses-heading"> My Uploaded Courses</h1>

            <DashboardUploadCourses />
          </Box>
        </Box>
      ) : null}
      {defaultCompState == "" && createCourse && <CreateCourseForm />}
      {defaultCompState === "Performance" ? <Performance /> : null}
      {defaultCompState === "Earning" ? <Earning /> : null}
      {defaultCompState === "Setting" ? <Setting /> : null}
    </>
  );
};

export default DashboardRightSideBar;
