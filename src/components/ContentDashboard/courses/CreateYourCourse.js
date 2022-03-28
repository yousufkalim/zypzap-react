import React from "react";
import Box from "@mui/material/Box";
import createcourse from "../../../assets/img/createcourse.png";
import CreateACoursePopup from "../../PopupForms/CreateACoursePopup";

const CreateYourCourse = ({ setcreateCourse, setDefaultCompState }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    <>
      <Box className="create-course-container">
        <CreateACoursePopup anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        <Box className="create-course-img-text">
          <img className="img-create-course" src={createcourse} />
          <div className="create-course-btn-text">
            <span>Are Ready To Begin</span>
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
          </div>
        </Box>
      </Box>
    </>
  );
};

export default CreateYourCourse;
