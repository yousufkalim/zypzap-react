import React, { useEffect } from "react";

import StartedCourse from "./StartedCourse";
import EnrolledCourse from "./EnrolledCourse";
import Wishlist from "./Wishlist";
import ProgressionRoadmap from "./ProgressionRoadmap";
import { Store, UpdateStore } from "../../StoreContext";

import MyWallet from "./MyWallet";
import Setting from "./Setting";

const DashboardRightSideBar2 = ({ defaultCompState, setDefaultCompState }) => {
  const { contentDashboardButton } = Store();

  useEffect(() => {
    if (contentDashboardButton == "Setting") {
      setDefaultCompState("Setting");
    }
  }, []);

  return (
    <>
      {defaultCompState == "Courses" && <StartedCourse />}
      {defaultCompState == "Started Courses" && <StartedCourse />}
      {defaultCompState == "Enrolled Courses" && <EnrolledCourse />}
      {defaultCompState == "Wishlist" && <Wishlist />}
      {defaultCompState == "My Walle" && <MyWallet />}
      {defaultCompState == "Progression Roadma" && <ProgressionRoadmap />}
      {defaultCompState == "Setting" && <Setting />}

      {/* {contentDashboardButton === "Setting" ? <Setting /> : null} */}
    </>
  );
};

export default DashboardRightSideBar2;
