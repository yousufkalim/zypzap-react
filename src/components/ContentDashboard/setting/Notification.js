import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const Notification = () => {
  const [checkBox, setcheckBox] = useState();
  const handleChange = (e) => {
    setcheckBox({
      ...checkBox,
      [e.target.name]: e.target.value,
    });
    console.log(checkBox);
  };
  return (
    <>
      <div className="dash_col2">
        <div className="basic_info">
          <h3 className="basicH3">Notification</h3>
          <hr className="hr_password" />
          <div className="checked_div">
            <Checkbox
              style={{ color: "white", padding: "9px 8px 9px 0" }}
              onChange={handleChange}
              name="checkbox"
              value="checkbox"
            />
            <p className="notificatinP">New Followers</p>
          </div>
          <div className="checked_div">
            <Checkbox
              style={{ color: "white", padding: "9px 8px 9px 0" }}
              onChange={handleChange}
              name="checkbox"
              value="checkbox"
            />
            <p className="notificatinP">Courses in progress</p>
          </div>
          <div className="checked_div">
            <Checkbox
              style={{ color: "white", padding: "9px 8px 9px 0" }}
              onChange={handleChange}
              name="checkbox"
              value="checkbox"
            />
            <p className="notificatinP">Passtotrip Updates</p>
          </div>
          <div className="checked_div">
            <Checkbox
              style={{ color: "white", padding: "9px 8px 9px 0" }}
              onChange={handleChange}
              name="checkbox"
              value="checkbox"
            />
            <p className="notificatinP">Sales of courses</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
