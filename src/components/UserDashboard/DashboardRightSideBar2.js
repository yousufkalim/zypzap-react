import React, { useState } from "react";
import DashboardUploadCourses from "../ContentDashboard/courses/DashboardUploadCourses";
import CreateCourseForm from "../ContentDashboard/createCourse/CreateCourseForm";
import Box from "@mui/material/Box";
import StartedCourse from "./StartedCourse";
import EnrolledCourse from "./EnrolledCourse";
import Wishlist from "./Wishlist";
import ProgressionRoadmap from "./ProgressionRoadmap";
import MyWallet from "./MyWallet";
import Setting from "./Setting";
const DashboardRightSideBar2 = ({
  defaultCompState,
  createCourse,
  setcreateCourse,
  setDefaultCompState,
  games,
  creator,
  defaultCompStatedrop,
}) => {
  const [activeUploadButton, setActiveUploadButton] = useState(1);
  const handleActiveUploadButton = (i) => {
    setActiveUploadButton(i);
  };
  return (
    <>
      {defaultCompState === "Course" ? (
        <Box className="upload-courses-container">
          {/* <Box>
            <div className="uploadBtnDiv">
              <h2
                className={`
             ${activeUploadButton == 1 && "ActiveLine"} 
             upload-courses-headings`}
                onClick={() => handleActiveUploadButton(1)}
              >
                Published Courses
              </h2>
            </div>
            {activeUploadButton == 1 ? (
              <DashboardUploadCourses pageName={"publish"} creator={creator} />
            ) : null}
          </Box> */}
        </Box>
      ) : null}
      {defaultCompState == "" && createCourse && (
        <CreateCourseForm games={games} />
      )}

      {defaultCompState == "Started courses" && <StartedCourse />}
      {defaultCompState == "Enrolled courses" && <EnrolledCourse />}
      {defaultCompState == "Wishlist" && <Wishlist />}
      {defaultCompState == "My Wallet" && <MyWallet />}
      {defaultCompState == "Progression Roadmap" && <ProgressionRoadmap />}
      {defaultCompState == "Setting" && <Setting />}
    </>
  );
};

export default DashboardRightSideBar2;
