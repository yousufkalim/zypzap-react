import React from "react";
import Box from "@mui/material/Box";
import createcourse from "../../../assets/img/createcourse.svg";
import CreateACoursePopup from "../../PopupForms/CreateACoursePopup";
import "../../../css/form/CreateACourse.css";
import { Store, UpdateStore } from "../../../StoreContext";
// import Popover from "@mui/material/Popover";

const CreateYourCourse = ({ setcreateCourse }) => {
  const { contentDashboardButton } = Store();
  const updateStore = UpdateStore();
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <>
      <Box className="create-course-container">
        <CreateACoursePopup anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        <Box className="create-course-img-text">
          <img className="img-create-course" src={createcourse} />
          <div className="create-course-btn-text">
            <span>Are Ready To Begin</span>
            {/* <Tooltip
              className="tooltipDiv"
              title={
                <>
                  <div className="createACourse-div">
                    <div className="createACourse-container">
                      <div className="createACourse-header">
                        <p className="createACourseP">Create A course</p>
                        <ClearIcon
                          className="createACourseClose"
                          onClick={handleClose}
                        />
                      </div>
                      <div className="createACourse-content">
                        <img src={CreatePlushIcon} alt="" />
                        <p className="createACourse-contentP">
                          It is a long established fact that a at its reader
                          will be distracted by the readable content of a page
                          when looking at its layout.
                        </p>
                        <button className="creatACourseButton">Next</button>
                      </div>
                    </div>
                  </div>
                </>
              }
              arrow
            > */}
            <button
              className="create-course-btn"
              onClick={() => {
                setcreateCourse(true);
                updateStore({ contentDashboardButton: "" });
              }}
            >
              Create Your Course
            </button>
            {/* </Tooltip> */}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default CreateYourCourse;
