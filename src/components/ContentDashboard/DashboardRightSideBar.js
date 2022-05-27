import React, { useState, useEffect } from "react";
import DashboardUploadCourses from "./courses/DashboardUploadCourses";
import CreateYourCourse from "./courses/CreateYourCourse";
import Earning from "./earning/Earning";
import Performance from "./performance/Performance";
import CreateCourseForm from "./createCourse/CreateCourseForm";
// import Setting from "./setting/Setting";
// import Setting from "./Setting";

import Box from "@mui/material/Box";
import { Store, UpdateStore } from "../../StoreContext";
import MyProfileData from "../UserProfile/MyProfileData";
import Setting from "../UserDashboard/Setting";
const DashboardRightSideBar = ({
  createCourse,
  setcreateCourse,
  games,
  creator,
}) => {
  const { contentDashboardButton } = Store();
  const [activeUploadButton, setActiveUploadButton] = useState(1);

  const handleActiveUploadButton = (i) => {
    setActiveUploadButton(i);
  };

  return (
    <>
      {contentDashboardButton === "Course" ? (
        <Box className="upload-courses-container">
          <CreateYourCourse setcreateCourse={setcreateCourse} />
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
              &nbsp; &nbsp;
              <h2
                className={`
             ${activeUploadButton == 2 && "ActiveLine"} 
             upload-courses-headings`}
                onClick={() => handleActiveUploadButton(2)}
              >
                Draft Courses
              </h2>
              &nbsp; &nbsp;
              <h2
                className={`
             ${activeUploadButton == 3 && "ActiveLine"} 
             upload-courses-headings`}
                onClick={() => handleActiveUploadButton(3)}
              >
                Not Approved Courses
              </h2>
              &nbsp; &nbsp;
              <h2
                className={`
             ${activeUploadButton == 4 && "ActiveLine"} 
             upload-courses-headings`}
                onClick={() => handleActiveUploadButton(4)}
              >
                Under evaluation
              </h2>
              &nbsp; &nbsp;
              <h2
                className={`
             ${activeUploadButton == 5 && "ActiveLine"} 
             upload-courses-headings`}
                onClick={() => handleActiveUploadButton(5)}
              >
                Requested courses
              </h2>
              &nbsp; &nbsp;
            </div>
            {/* <h1 className="upload-courses-heading"> My Uploaded Courses</h1> */}
            {activeUploadButton == 1 ? (
              <DashboardUploadCourses pageName={"publish"} creator={creator} />
            ) : null}
            {activeUploadButton == 2 ? (
              <DashboardUploadCourses pageName={"draft"} />
            ) : null}
            {activeUploadButton == 3 ? (
              <DashboardUploadCourses pageName={"Not Approve"} />
            ) : null}
            {activeUploadButton == 4 ? (
              <DashboardUploadCourses pageName={"Under Evalution"} />
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
      {contentDashboardButton == "" && createCourse && games.length > 0 && (
        <CreateCourseForm />
      )}
      {/* {defaultCompState === "Performance" ? <Performance /> : null}
      {defaultCompState === "Earning" ? <Earning /> : null} */}
      {contentDashboardButton === "Setting" ? <Setting /> : null}
    </>
  );
};

export default DashboardRightSideBar;
