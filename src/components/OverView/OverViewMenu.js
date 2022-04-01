import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import EditIcon from "../../assets/icons/EditIcon.svg";
import DeleteIcon from "../../assets/icons/DeleteIcon.svg";
import EditCoursePopup from "../PopupForms/EditCoursePopup";
import DeleteEpisodePopup from "../PopupForms/DeleteEpisodePopup";

const OverViewMenu = ({ setActivebtn, btns, activebtn }) => {
  const [open, setOpen] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleChange = () => {
    setOpen(true);
  };
  const handleChange2 = () => {
    setShowDeletePopup(true);
  };
  return (
    <>
      <EditCoursePopup open={open} setOpen={setOpen} />
      <DeleteEpisodePopup open={showDeletePopup} setOpen={setShowDeletePopup} />
      <div className="overViewMenu">
        <div className="overViewMene_centerDiv">
          {btns.map((btn) => (
            <>
              <NavLink
                to="#"
                className={`overViewMenuButton ${
                  activebtn == btn.text && "activebtn"
                }`}
                onClick={() => setActivebtn(btn.text)}
              >
                {btn.text}
              </NavLink>
            </>
          ))}
          <a className="overViewMenuButton">Feedback</a>
          <span className="overViewMenuLogos">
            <img
              className="deleteIcon2"
              src={EditIcon}
              alt=""
              onClick={handleChange}
            />
            <img
              className="editIcon2"
              src={DeleteIcon}
              alt=""
              onClick={handleChange2}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default OverViewMenu;
