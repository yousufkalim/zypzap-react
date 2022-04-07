import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import "../../css/form/UploadingTheCourse.css";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import UploadCancalled from "./UploadCancalled";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#17192D",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: (theme.palette.mode =
      "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(50.06deg, #662F88 50.05%, #20BF55 131.69%);"),
  },
}));

const UploadingTheCourse = ({ open, setOpen }) => {
  const [showPopup, setShowPopup] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const CancelHandleClick = () => {
    setShowPopup(true);
    setOpen(false);
  };

  return (
    <div>
      <UploadCancalled open={showPopup} setOpen={setShowPopup} />
      <Dialog
        open={open}
        setOpe={setOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <p className="uploadingtheCourse-p">Uploading The Course</p>
        <div className="uploadSuccessDiv">
          <div className="uploadSuccess-centerDiv">
            <div className="uploadTheCourse-mainDiv">
              <div className="uploadTheCourse-Heading">
                <p className="uploadTheCourse-content">
                  Lorem ipsum dolor sit amet, adipiscing mp.4{" "}
                </p>
                <span className="uploadTheCourse-span">52%</span>
              </div>
              <Box sx={{ flexGrow: 1 }}>
                <br />
                <BorderLinearProgress variant="determinate" value="50" />
              </Box>
              <div className="uploadTheCourse-Headings">
                <p className="uploadTheCourse-content">Speed: 10 MB/s</p>
                <span className="uploadTheCourse-span">Time: 2 min left</span>
              </div>
              <button
                className="uploadTheCourseBTN"
                onClick={CancelHandleClick}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default UploadingTheCourse;
