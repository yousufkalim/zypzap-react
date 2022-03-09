import React from "react";
import CurriculumIcon from "../../assets/icons/CurriculumIcon.svg";

const Curriculum = () => {
  return (
    <div>
      <div className="overView_description">
        <div className="overView-descripiton-centerDiv">
          <div>
            <h1 className="curriculum-h1">Curriulum For this Course</h1>
            <div className="curriculum-div">
              <h1 className="curriculum-h3">Getting Started: Introduction</h1>
              <div className="curriculumLiDiv">
                <img src={CurriculumIcon} alt="" className="curriculumIMG" />
                <li className="curriculumLi">
                  Class no one: Introduction to cs-go
                </li>
                <p className="curriculumTime">1:00 min</p>
              </div>
              <div className="curriculumLiDiv">
                <img src={CurriculumIcon} alt="" className="curriculumIMG" />
                <li className="curriculumLi">
                  Class no one: Introduction to cs-go
                </li>
                <p className="curriculumTime">5:00 min</p>
              </div>
            </div>
            {/* 2? */}
            <div className="curriculum-div">
              <h1 className="curriculum-h3">Getting Started: Introduction</h1>
              <div className="curriculumLiDiv">
                <img src={CurriculumIcon} alt="" className="curriculumIMG" />
                <li className="curriculumLi">
                  Class no one: Introduction to cs-go
                </li>
                <p className="curriculumTime">14:00 min</p>
              </div>
              <div className="curriculumLiDiv">
                <img src={CurriculumIcon} alt="" className="curriculumIMG" />
                <li className="curriculumLi">
                  Class no one: Introduction to cs-go
                </li>
                <p className="curriculumTime">20:00 min</p>
              </div>
              <div className="curriculumLiDiv">
                <img src={CurriculumIcon} alt="" className="curriculumIMG" />
                <li className="curriculumLi">
                  Class no one: Introduction to cs-go
                </li>
                <p className="curriculumTime">5:00 min</p>
              </div>
              <div className="curriculumLiDiv">
                <img src={CurriculumIcon} alt="" className="curriculumIMG" />
                <li className="curriculumLi">
                  Class no one: Introduction to cs-go
                </li>
                <p className="curriculumTime"></p>
              </div>
            </div>
            {/* <div className="curriculumLiDiv">
              <img src={CurriculumIcon} alt="" className="curriculumIMG" />
              <li className="curriculumLi">
                Class no one: Introduction to cs-go
              </li>
              <p className="curriculumTime">5:00 min</p>
            </div> */}
          </div>

          {/* 2? */}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
