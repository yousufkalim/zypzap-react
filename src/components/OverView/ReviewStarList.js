import React from "react";
import { ReactComponent as Star1 } from "../../assets/icons/star2.svg";

const ReviewStarList = (props) => {
  return (
    <div>
      <li className="reviewStarLi">
        {" "}
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
        <p className="ReviewsPersntage">{props.text}</p>
      </li>
    </div>
  );
};

export default ReviewStarList;
