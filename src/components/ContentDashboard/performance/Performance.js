import React from "react";
import PerformanceData from "./PerformanceData";

const Performance = () => {
  return (
    <>
      <div className="earning_container">
        <div className="earnings">
          <div className="erHding_content">
            <h2 className="earing_heading">Performance</h2>
            <p className="earning_pera">
              Get top insights about your performance
            </p>
          </div>
          <div className="earning_content">
            <div className="earning_box">
              <PerformanceData />
              <PerformanceData />
              <PerformanceData />
            </div>
            <div className="addMonth">Lorem ipsum dolor sit amet.</div>
            <div className="dataP">No Data To Display</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
