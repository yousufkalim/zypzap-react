import React from "react";
import Checkbox from "@mui/material/Checkbox";

const Notification = () => {
  return (
    <>
      <div className="dash_col2">
        <div className="basic_info">
          <h3 className="basicH3">Notification</h3>
          <hr className="hr_password" />
          <div className="checked_div">
            <Checkbox style={{ color: "white" }} />
            <p className="notificatinP">Updates from courses You're Taking</p>
          </div>
          <div className="checked_div">
            <Checkbox style={{ color: "white" }} />
            <p className="notificatinP">Updates from creators</p>
          </div>
          <div className="checked_div">
            <Checkbox style={{ color: "white" }} />
            <p className="notificatinP">New courses by Someone You Follow</p>
          </div>
          <div className="checked_div">
            <Checkbox style={{ color: "white" }} />
            <p className="notificatinP">Updates from courses You're Taking</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
