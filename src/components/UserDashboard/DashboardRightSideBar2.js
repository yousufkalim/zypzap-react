import React, { useEffect } from "react";

import StartedCourse from "./StartedCourse";
import EnrolledCourse from "./EnrolledCourse";
import Wishlist from "./Wishlist";
import ProgressionRoadmap from "./ProgressionRoadmap";
import { Store, UpdateStore } from "../../StoreContext";

import MyWallet from "./MyWallet";
import Setting from "./Setting";

const DashboardRightSideBar2 = ({}) => {
  const { contentDashboardButton } = Store();
  const updateStore = UpdateStore();

  useEffect(() => {
    if (contentDashboardButton == "Setting") {
      updateStore({ contentDashboardButton: "Setting" });
    }
  }, []);
  console.log("contentDashboardButton", contentDashboardButton);

  return (
    <>
      {contentDashboardButton == "Courses" && <StartedCourse />}
      {contentDashboardButton == "Started Courses" && <StartedCourse />}
      {contentDashboardButton == "Enrolled Courses" && <EnrolledCourse />}
      {contentDashboardButton == "Wishlist" && <Wishlist />}
      {contentDashboardButton == "My Walle" && <MyWallet />}
      {contentDashboardButton == "Progression Roadma" && <ProgressionRoadmap />}
      {contentDashboardButton == "Setting" && <Setting />}

      {/* {contentDashboardButton === "Setting" ? <Setting /> : null} */}
    </>
  );
};

export default DashboardRightSideBar2;
