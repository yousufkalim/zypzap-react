import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DashboardLeftSideBar from "./DashboardLeftSideBar";
import DashboardRightSideBar from "./DashboardRightSideBar";
import settings from "../../assets/img/settings.png";
import dollar from "../../assets/img/dollar.png";
import performance from "../../assets/img/performance.png";
import youtube from "../../assets/img/youtube.png";
import { Store, UpdateStore } from "../../StoreContext";
import api from "../../api";
import { useHistory } from "react-router-dom";
const Dashboard = ({ id }) => {
  const history = useHistory();
  useEffect(() => {
    if (history.location.param) {
      setDefaultCompState(history.location?.param.value);
    }
  }, []);
  const { creator } = Store();
  const updateStore = UpdateStore();
  const [activeButton, setActiveButton] = useState("Course");
  const [defaultCompState, setDefaultCompState] = useState(
    history?.location?.param ? history.location.param.value : "Course"
  );
  const [createCourse, setcreateCourse] = useState(false);
  const [games, setGames] = useState();
  useEffect(() => {
    getGames();
    // getCreator();
  }, []);
  const getCreator = async () => {
    let res = await api("get", `/creators/${creator._id}`);
    if (res) {
      updateStore({ creator: res.data });
    }
  };
  const getGames = async () => {
    let res = await api("get", `/games/`);
    if (res) {
      updateStore({ Games: res.data });
      setGames(res.data);
    }
  };
  const items = [
    { name: "Course", img: youtube },
    { name: "Performance", img: performance },
    { name: "Earning", img: dollar },
    { name: "Setting", img: settings },
  ];
  const onSideBtnClick = (e) => {
    const course = e.target.textContent;
    setDefaultCompState(course);
    setcreateCourse(false);
    setActiveButton(course);
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
              setDefaultCompState={setDefaultCompState}
            />
          </Grid>
        </Box>
        {/* dashboardBody */}
        <DashboardRightSideBar
          defaultCompState={defaultCompState}
          setDefaultCompState={setDefaultCompState}
          setcreateCourse={setcreateCourse}
          createCourse={createCourse}
          games={games}
          creator={creator}
          setDefaultCompState={setDefaultCompState}
        />
      </Box>
    </>
  );
};

export default Dashboard;
