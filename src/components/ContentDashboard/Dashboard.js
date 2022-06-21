import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DashboardLeftSideBar from "./DashboardLeftSideBar";
import DashboardRightSideBar from "./DashboardRightSideBar";
import settings from "../../assets/img/settings.svg";
import Youtube from "../../assets/img/youtube.svg";
import { Store, UpdateStore } from "../../StoreContext";
import api from "../../api";
import { useHistory, useLocation } from "react-router-dom";
const Dashboard = ({ id }) => {
  const history = useHistory();

  const { creator, contentDashboardButton } = Store();
  const updateStore = UpdateStore();
  const [activeButton, setActiveButton] = useState("Courses");
  const [createCourse, setcreateCourse] = useState(false);

  const location = useLocation();

  useEffect(() => {
    getCreator();
  }, [contentDashboardButton]);
  useEffect(() => {
    if (history.location.state.createCourse) {
      console.log("aaa");
      setcreateCourse(true);
      updateStore({ contentDashboardButton: "" });
    }
  }, []);
  const getCreator = async () => {
    let res = await api("get", `/creators/${creator?._id}`);

    if (res) {
      updateStore({ creator: res?.data?.creator });
    }
  };

  const items = [
    { name: "Courses", img: Youtube },
    // { name: "Performance", img: performance },
    // { name: "Earning", img: dollar },
    { name: "Setting", img: settings }
  ];
  const onSideBtnClick = (e) => {
    console.log("aa");
    const course = e.target.textContent;

    setcreateCourse(false);
    setActiveButton(course);
    updateStore({ contentDashboardButton: course });
  };
  return (
    <>
      <Box
        className="dashboard-container"
        sx={{ flexGrow: 1, display: "flex" }}
      >
        {/* dashboard SideBar */}
        <Box className="dashboard-sidebar">
          <Grid>
            <DashboardLeftSideBar
              items={items}
              activeButton={activeButton}
              trigerOnClickEmpSideBtn={onSideBtnClick}
            />
          </Grid>
        </Box>
        {/* dashboardBody */}
        <DashboardRightSideBar
          setcreateCourse={setcreateCourse}
          createCourse={createCourse}
        />
      </Box>
    </>
  );
};

export default Dashboard;
