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
  creator,
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
                Published Courses
              </h2>
              &nbsp; &nbsp;&nbsp;
              <h2
                className={`
             ${activeUploadButton == 2 && "ActiveLine"} 
             upload-courses-headings`}
                onClick={() => handleActiveUploadButton(2)}
              >
                Draft Courses
              </h2>
              &nbsp; &nbsp;&nbsp;
              <h2
                className={`
             ${activeUploadButton == 3 && "ActiveLine"} 
             upload-courses-headings`}
                onClick={() => handleActiveUploadButton(3)}
              >
                Not Approved Courses
              </h2>
              &nbsp; &nbsp;&nbsp;
              <h2
                className={`
             ${activeUploadButton == 4 && "ActiveLine"} 
             upload-courses-headings`}
                onClick={() => handleActiveUploadButton(4)}
              >
                Under evaluation
              </h2>
              &nbsp; &nbsp;&nbsp;
              <h2
                className={`
             ${activeUploadButton == 5 && "ActiveLine"} 
             upload-courses-headings`}
                onClick={() => handleActiveUploadButton(5)}
              >
                Requested courses
              </h2>
              &nbsp; &nbsp;&nbsp;
            </div>
            {/* <h1 className="upload-courses-heading"> My Uploaded Courses</h1> */}
            {activeUploadButton == 1 ? (
              <DashboardUploadCourses pageName={"publish"} creator={creator} />
            ) : null}
            {activeUploadButton == 2 ? (
              <DashboardUploadCourses pageName={"draft"} />
            ) : null}
            {activeUploadButton == 3 ? (
              <DashboardUploadCourses pageName={"notApprove"} />
            ) : null}
            {activeUploadButton == 4 ? (
              <DashboardUploadCourses pageName={"underEvalution"} />
            ) : null}
            {activeUploadButton == 5 ? (
              <div className="request-data">
                <p className="request-data-p">No data to display</p>
              </div>
            ) : null}
            {/* {activeUploadButton == 6 ? (
              <>
                <button style={{ color: "#fff" }}>Commitng Soon</button>
              </>
            ) : null} */}
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
