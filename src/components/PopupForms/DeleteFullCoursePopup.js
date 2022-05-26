import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import DeletedFullCoursePopup from "./DeletedFullCoursePopup";
import DeleteCourseIcon from "../../assets/icons/DeleteCourseIcon.svg";
import api from "../../api";
import { useHistory, useLocation } from "react-router-dom";
import { Store, UpdateStore } from "../../StoreContext";
const DeleteFullCoursePopup = ({ open, setOpen, course }) => {
  const updateStore = UpdateStore();
  const history = useHistory();
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDeleteCourse = async () => {
    console.log("delete course", course);
    let res = await api("delete", `/courses/${course._id}`);
    if (res) {
      console.log("creator", res.data);
      // updateStore({ creator: res?.data?.creator });
      setShowDeletePopup(true);
      setOpen(false);
    } else {
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <DeletedFullCoursePopup
        open={showDeletePopup}
        setOpen={setShowDeletePopup}
        course={course}
      />

      <Dialog
        open={open}
        setOpe={setOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="uploadSuccessDiv">
          <div className="uploadSuccess-centerDiv">
            <img src={DeleteCourseIcon} alt="" className="uloadSuccessIMG" />
            <div className="deletePupop-content">
              <p className="deletePupopP">
                Will You want to Delete {course?.course_name} Complete Course
              </p>
              <div className="deletePupop-buttons">
                <button className="deletePupopBtn" onClick={handleDeleteCourse}>
                  Yes
                </button>
                <button className="deletePupopBtn" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteFullCoursePopup;
