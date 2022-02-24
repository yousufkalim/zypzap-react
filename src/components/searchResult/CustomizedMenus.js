import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "#fff",
    backgroundColor: "#14162C",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus(props) {
  const { updateStore, searchCourse } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    console.log("value", e.target.value);
  };

  let countViews = (course) => {
    const Videos = course?.videos;

    let count = 0;
    Videos.map((video) => {
      count += video.views;
    });

    return count;
  };

  const filterByRating = async (e) => {
    e.preventDefault();
    console.log("coueses", searchCourse);
    const Courses = searchCourse.sort(function (a, b) {
      if (a.rating === undefined) a.rating = 0;
      if (b.rating === undefined) b.rating = 0;
      var c = a.rating;
      var d = b.rating;
      return d - c;
    });
    console.log("items", Courses);
    updateStore({ searchCourse: Courses });
    handleClose();
  };

  const filterByDate = async (e) => {
    e.preventDefault();

    const Courses = searchCourse.sort(function (a, b) {
      var c = new Date(a.createdAt);
      var d = new Date(b.createdAt);
      return d - c;
    });
    updateStore({ searchCourse: Courses });
    handleClose();
  };

  const filterByViews = async (e) => {
    e.preventDefault();

    const Courses = searchCourse.sort(function (a, b) {
      var c = countViews(a);
      var d = countViews(b);
      return d - c;
    });
    updateStore({ searchCourse: Courses });
    handleClose();
  };
  const filterByLevel = async (e) => {
    e.preventDefault();
    const i = searchCourse.filter((course) => course.level === "Advance Level");
    const j = searchCourse.filter((course) => course.level === "medium Level");
    const k = searchCourse.filter((course) => course.level === "inital Level");
    const Courses = [...i, ...j, ...k];
    updateStore({ searchCourse: Courses });
    handleClose();
  };
  return (
    <div>
      <button
        className="btn-sort-by"
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <div className="btn-icon-container">
          {" "}
          <span> Sort by </span>{" "}
          <KeyboardArrowDownIcon
            sx={{
              color: "#fff",
              opacity: "0.6",
              width: "2px",
              marginTop: "2px",
              height: "0.8em !important",
            }}
          />{" "}
        </div>
      </button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          sx={{ opacity: "0.7" }}
          onClick={filterByRating}
          value={"Rating"}
          onChange={handleOnClick}
          disableRipple
        >
          Rating
        </MenuItem>
        <MenuItem
          sx={{ opacity: "0.7" }}
          onClick={filterByDate}
          onChange={handleOnClick}
          disableRipple
        >
          Date Posted
        </MenuItem>
        <MenuItem
          sx={{ opacity: "0.7" }}
          onClick={filterByViews}
          onChange={handleOnClick}
          disableRipple
        >
          Number Of Views
        </MenuItem>
        <MenuItem
          sx={{ opacity: "0.7" }}
          onClick={filterByLevel}
          onChange={handleOnClick}
          disableRipple
        >
          Level
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
