import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import avatar from "../../assets/img/avatar.png";
import { ReactComponent as Star1 } from "../../assets/icons/star2.svg";
import ReviewStarList from "./ReviewStarList";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

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

const Reviews = () => {
  return (
    <div>
      <div className="overView_description">
        <div className="overView-descripiton-centerDiv">
          <div className="reviews">
            {/* 1Div */}
            <div className="studentFeedBack">
              <p className="student-feedback-h3">Student feedback</p>
              <div className="courseRating">
                <h1 className="courseRatingH1">4.8</h1>
                <div className="courseRating-images">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star1
                      className="starID"
                      style={{
                        width: "15px",
                        height: "15px",
                        top: "3px",
                      }}
                    />
                  ))}
                </div>
                <p className="courseRatingP">Course Rating</p>
              </div>
            </div>
            <div className="reviews-lines">
              <Box sx={{ flexGrow: 1 }}>
                <br />
                <BorderLinearProgress variant="determinate" value={55} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <br />
                <BorderLinearProgress variant="determinate" value={15} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <br />
                <BorderLinearProgress variant="determinate" value={20} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <br />
                <BorderLinearProgress variant="determinate" value={8} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <br />
                <BorderLinearProgress variant="determinate" value={2} />
              </Box>
            </div>
            <div className="reviews-all-star-image">
              <div className="reviewsStarIcon">
                <ReviewStarList text="55%" />
                <ReviewStarList text="15%" />
                <ReviewStarList text="20%" />
                <ReviewStarList text="08%" />
                <ReviewStarList text="02%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
