import React from "react";
import Box from "@mui/material/Box";
import createcourse from "../../../assets/img/createcourse.png";
import CreateACoursePopup from "../../PopupForms/CreateACoursePopup";
import Tooltip from "@mui/material/Tooltip";
import CreatePlushIcon from "../../../assets/icons/CreatePlushIcon.svg";
import ClearIcon from "@mui/icons-material/Clear";
import "../../../css/form/CreateACourse.css";
import Popover from "@mui/material/Popover";

const CreateYourCourse = ({ setcreateCourse, setDefaultCompState }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

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
                setDefaultCompState("");
              }}
              onMouseEnter={setAnchorEl}
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
