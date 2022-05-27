import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import EditIcon from "../../assets/icons/EditIcon.svg";
import DeleteIcon from "../../assets/icons/DeleteIcon.svg";
import EditCoursePopup from "../PopupForms/EditCoursePopup";
import DeleteEpisodePopup from "../PopupForms/DeleteEpisodePopup";
import CourseAproved from "../PopupForms/CourseAproved";
import { Store, UpdateStore } from "../../StoreContext";
import DeleteEpisode from "../ContentDashboard/createCourse/DeleteEpisode";
const OverViewMenu = ({ setActivebtn, btns, activebtn, course }) => {
  const { user } = Store();
  const [open, setOpen] = useState(false);
  const [openEpisode, setOpenEpisode] = useState(false);
  const [opens, setOpens] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [userRole, setUserRole] = useState(user?.role ? user.role : "User");
  const handleChange = () => {
    setOpen(true);
  };
  const handleChange2 = () => {
    setShowDeletePopup(true);
  };
  useEffect(() => {
    setUserRole(user?.role ? user.role : "User");
  }, [user]);
  return (
    <>
      <CourseAproved
        open={opens}
        setOpen={setOpens}
        text="Course Edit Successfully!"
      />
      <DeleteEpisode
        setOpen={setOpenEpisode}
        open={openEpisode}
        course={course}
      />
      <EditCoursePopup
        open={open}
        setOpen={setOpen}
        course={course}
        setOpenS={setOpens}
      />
      <DeleteEpisodePopup
        open={showDeletePopup}
        setOpen={setShowDeletePopup}
        course={course}
        setOpenEpisode={setOpenEpisode}
      />
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
          {/* {userRole === "Creator" ? (
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
          ) : (
            <></>
          )} */}
        </div>
      </div>
    </>
  );
};

export default OverViewMenu;
