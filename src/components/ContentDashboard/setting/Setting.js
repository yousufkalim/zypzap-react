import { Payment } from "@material-ui/icons";
import React from "react";
import { useState, useEffect } from "react";
import BasicInformation from "./BasicInformation";
import Password from "./Password";
import Notification from "./Notification";
import Payments from "./Payments";

const Setting = () => {
  const [active, setActive] = useState("Personal Information");
  const items = [
    { name: "Personal Information" },
    { name: "Password" },
    { name: "Notification" },
    { name: "Payments" },
  ];
  const clickEvent = (item) => {
    setActive(item);
  };

  return (
    <>
      <div className="dashboard_setting">
        <div className="dashboard_container">
          {/* manu */}
          <div className="dash_col1">
            <div className="deshMenu">
              <h2 className="deshH2">Account Setting</h2>
              <ul className="dashUl">
                {items.map((item) => {
                  let classIs = active == item.name ? "actvieClassOne" : "";
                  return (
                    <li
                      className={`${classIs} deshLi `}
                      onClick={() => clickEvent(item.name)}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {active == "Personal Information" && <BasicInformation />}
          {active == "Password" && <Password />}
          {active == "Notification" && <Notification />}
          {active == "Payments" && <Payments />}
        </div>
      </div>
    </>
  );
};

export default Setting;
