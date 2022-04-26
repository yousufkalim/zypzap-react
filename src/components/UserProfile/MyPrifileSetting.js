import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visa from "../../assets/icons/Visa.svg";
import MasterCard from "../../assets/icons/MasterCard.svg";
import Switch from "@mui/material/Switch";

const MyPrifileSetting = () => {
  const [values, setValues] = React.useState(false);

  const handleClickShowPassword = () => {
    setValues(!values);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <>
      <div className="profileSetting">
        <div className="profileSetting-centerDiv">
          <div className="profileSetting-Col">
            <div className="profileSetting_Input">
              <label htmlFor="" className="profileSetting-label">
                Edit ID
              </label>
              <input
                type="text"
                className="profileInputs"
                placeholder="@johnsmith1"
              />
              <p className="profileInput-p">This email is already taken</p>
            </div>
            <div className="profileSetting_Input passIcon">
              <label htmlFor="" className="profileSetting-label">
                Change The Password
              </label>
              <input
                type={values ? "text" : "password"}
                className="profileInputs "
                placeholder="*************"
              />
              <button
                className="paswordIcon"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values ? <VisibilityOff /> : <Visibility />}
              </button>
            </div>
            <div className="profileSetting_Input">
              <label htmlFor="" className="profileSetting-label">
                Change Email Address
              </label>
              <input
                type="gmail"
                className="profileInputs"
                placeholder="example@gmail.com"
              />
            </div>
          </div>
          {/* /* ---------------------------------- col2 ----------------------------------  */}
          <div className="profileSetting-Col">
            <p className="profileSetting-heading">Edit Payment Information</p>
            <div className="cardTypeDiv">
              <p className="cardType-p">Card Type</p>
              <img className="cardTypeImg" src={Visa} alt="" />
              <img className="cardTypeImg2" src={MasterCard} alt="" />
            </div>
            <div className="profileSetting_Input">
              <label htmlFor="" className="profileSetting-label">
                Card Holder Name
              </label>
              <input
                type="text"
                className="profileInputs"
                placeholder="Walter White"
              />
            </div>
            <div className="profileSetting_Input">
              <label htmlFor="" className="profileSetting-label">
                Card Number
              </label>
              <input
                type="text"
                className="profileInputs"
                placeholder="XXXX  XXXX  XXXX  1234"
              />
            </div>
            <div className="empiryDiv">
              <p className="profileSetting-label">Expiry Date</p>
              <div className="empiryColmn">
                <select name="cars" id="cars" className="empirydata">
                  <option value="">January</option>
                  <option value="">February</option>
                  <option value="">March</option>
                  <option value="">April</option>
                  <option value="">May</option>
                  <option value="">June</option>
                  <option value="">July</option>
                  <option value="">August</option>
                  <option value="">September</option>
                  <option value="">October</option>
                  <option value="">November</option>
                  <option value="">December</option>
                </select>

                <select name="cars" id="cars" className="empirydata">
                  <option value="">2022</option>
                  <option value="">2023</option>
                  <option value="">2024</option>
                  <option value="">2025</option>
                  <option value="">2026</option>
                  <option value="">2028</option>
                  <option value="">2029</option>
                  <option value="">2030</option>
                </select>
              </div>
            </div>
            <div className="cvvDiv">
              <p className="profileSetting-label">CVV</p>
              <input type="text" className="empirydata" placeholder="123" />
            </div>
          </div>
          {/* /* ---------------------------------- col3 ----------------------------------  */}
          <div className="profileSetting-Col">
            <div className="profile-notificaitonDiv">
              <p className="profile-notification">Notification</p>
              <Switch {...label} defaultChecked size="small" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPrifileSetting;
