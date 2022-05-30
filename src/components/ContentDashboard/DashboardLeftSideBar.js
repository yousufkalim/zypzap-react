import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Store, UpdateStore } from "../../StoreContext";
const DashboardLeftSideBar = ({
  items,
  activeButton,
  trigerOnClickEmpSideBtn
}) => {
  const { contentDashboardButton } = Store();
  const updateStore = UpdateStore();
  return (
    <>
      {items.map((item, i) => {
        const className =
          contentDashboardButton === item.name ? "dashboard" : "";
        return (
          <div
            key={item.course}
            onClick={trigerOnClickEmpSideBtn}
            className={`sidebar-course-opt ${className} paddingClass`}
          >
            <div className="img-text-container">
              <img src={item.img} />
              {item.name}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DashboardLeftSideBar;
