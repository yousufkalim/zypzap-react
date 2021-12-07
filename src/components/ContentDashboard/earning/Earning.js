import React from "react";
import EarningData from "./EarningData";

const Earning = () => {
  return (
    <>
      <div className="earning_container">
        <div className="earnings">
          <div className="erHding_content">
            <h2 className="earing_heading">Overview</h2>
            <p className="earning_pera">Get Your earning reports</p>
          </div>
          <div className="earning_content">
            <div className="earning_box">
              <EarningData />
              <EarningData />
              <EarningData />
            </div>
            <div className="addMonth">Lorem ipsum dolor sit amet.</div>
            <div className="dataP">No Data To Display</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Earning;
