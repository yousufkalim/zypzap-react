import React from "react";
import Popover from "@mui/material/Popover";
import ClearIcon from "@mui/icons-material/Clear";
import "../../css/form/CreateACourse.css";
import CreatePlushIcon from "../../assets/icons/CreatePlushIcon.svg";

const CreateACoursePopup = ({ anchorEl, setAnchorEl }) => {
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Popover
        className="createACourse-MainDiv"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="createACourse-div">
          <div className="createACourse-container">
            <div className="createACourse-header">
              <p className="createACourseP">Create A course</p>
              <ClearIcon className="createACourseClose" onClick={handleClose} />
            </div>
            <div className="createACourse-content">
              <img src={CreatePlushIcon} alt="" />
              <p className="createACourse-contentP">
                It is a long established fact that a at its reader will be
                distracted by the readable content of a page when looking at its
                layout.
              </p>
              <button className="creatACourseButton">Next</button>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default CreateACoursePopup;
