import React from "react";
import DeshProfile from "../../../assets/icons/deshProfile.png";

const BasicInformation = () => {
  return (
    <>
      <div className="dash_col2">
        <div className="basic_info">
          <h3 className="basicH3">Basic Information</h3>
          <div>
            <img src={DeshProfile} alt="" className="desh_profilePic" />
          </div>
          <form action="" className="deshForm">
            <input
              type="fname"
              className="dashInput"
              placeholder="First name"
            />
            <input type="lname" className="dashInput" placeholder="Last name" />
            <input
              type="email"
              className="dashInput"
              placeholder="Email address"
            />
            <input
              type="phone"
              className="dashInput"
              placeholder="Phone number"
            />
          </form>
          <button className="dashBtn">Save Changes</button>
        </div>
      </div>
    </>
  );
};

export default BasicInformation;
