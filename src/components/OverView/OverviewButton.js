import React, { useState, useEffect } from "react";

const OverviewButton = (props) => {
  const { singlCourse } = props;
  // const [Course, setCourse] = useState(singleCourse ? singleCourse : "");
  // useEffect(() => {
  //   setCourse(singleCourse ? singleCourse : "");
  // }, []);
  return (
    <div>
      <div className="overView_description">
        <div className="overView-descripiton-centerDiv">
          <div>
            <div className="overView-description-content">
              <h3 className="overDescriptionH3">Description</h3>
              <p className="overDescriptionP">
                {singlCourse?.description ? singlCourse.description : ""}
              </p>
            </div>
            <div className="overRequirements">
              <h3 className="overRequirement_h3">Requirements</h3>
              {singlCourse?.requirement?.length > 0 ? (
                singlCourse?.requirement.map((req, index) => {
                  if (req) {
                    return (
                      <li className="overRequirementsLi" key={index}>
                        {req}
                      </li>
                    );
                  }
                })
              ) : (
                <li className="overRequirementsLi">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </li>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewButton;
