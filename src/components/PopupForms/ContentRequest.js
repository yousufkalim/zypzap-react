import React from "react";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";

const ContentRequest = ({ openContentRequest, setOpenContentRequest }) => {
  const handleClose = () => {
    setOpenContentRequest(false);
  };
  return (
    <>
      <Dialog open={openContentRequest} onClose={handleClose}>
        <div className="requestMainDiv">
          <div className="requestCenterDiv">
            {/* /* --------------------------------- oneDiv --------------------------------- */}
            <div className="requestDiv-box">
              <h1 className="requestDivH1">Request a Course Content</h1>
              <ClearIcon className="requestDivIcon" onClick={handleClose} />
            </div>
            {/* /* --------------------------------- oneDiv --------------------------------- */}
            <div className="requestDiv-box2">
              <label htmlFor=""> Game name </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Course title here"
              />
            </div>
            {/* /* --------------------------------- oneDiv --------------------------------- */}
            <div className="requestDiv-box2">
              <label htmlFor=""> Game Level </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Course title here"
              />
            </div>
            {/* /* --------------------------------- oneDiv --------------------------------- */}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ContentRequest;
