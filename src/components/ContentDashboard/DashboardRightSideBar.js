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
  games,
}) => {
  const [activeUploadButton, setActiveUploadButton] = useState(1);
  const handleActiveUploadButton = (i) => {
    setActiveUploadButton(i);
  };
  return (
    <>
      {defaultCompState === "Course" ? (
        <Box className="upload-courses-container">
          <CreateYourCourse
            setcreateCourse={setcreateCourse}
            setDefaultCompState={setDefaultCompState}
          />
          <Box>
            <div className="uploadBtnDiv">
              <h2
                className={`
             ${activeUploadButton == 1 && "ActiveLine"} 
             upload-courses-headings`}
                onClick={() => handleActiveUploadButton(1)}
              >
                My Uploaded Courses
              </h2>
              &nbsp; &nbsp;&nbsp;
              <h2
                className={`
             ${activeUploadButton == 2 && "ActiveLine"} 
             upload-courses-headings`}
                onClick={() => handleActiveUploadButton(2)}
              >
                Record Course
              </h2>
            </div>
            {/* <h1 className="upload-courses-heading"> My Uploaded Courses</h1> */}
            {activeUploadButton == 1 ? (
              <DashboardUploadCourses />
            ) : (
              <h1>sdfgjkl;'</h1>
            )}
          </Box>
        </Box>
      ) : null}
      {defaultCompState == "" && createCourse && (
        <CreateCourseForm games={games} />
      )}
      {defaultCompState === "Performance" ? <Performance /> : null}
      {defaultCompState === "Earning" ? <Earning /> : null}
      {defaultCompState === "Setting" ? <Setting /> : null}
    </>
  );
};

export default DashboardRightSideBar;
