import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visa from "../../assets/icons/Visa.svg";
import MasterCard from "../../assets/icons/MasterCard.svg";
import Switch from "@mui/material/Switch";
import HeaderLogoutIcon from "../../assets/icons/HeaderLogoutIcon.svg";
import api from "../../api";
import { useHistory } from "react-router-dom";
import { Store, UpdateStore } from "../../StoreContext";
const MyPrifileSetting = () => {
  const history = useHistory();
  const updateStore = UpdateStore();
  const { user, creator, searchState, searchInput } = Store();
  const [values, setValues] = React.useState(false);

  const handleClickShowPassword = () => {
    setValues(!values);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogout = async () => {
    let res = await api("post", "/users/logout/all");
    if (res) {
      updateStore({ user: null, creator: null });
      localStorage.removeItem("token");
      history.push("/home");
    }
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
            <div>
              <p
                style={{
                  marginTop: "10px",
                }}
              >
                Subscription Status
              </p>{" "}
              <div className="membrship-card">
                <p style={{ color: "#979797", margin: "10px 0px" }}>Monthly</p>
                <h2 style={{ marginBottom: "10px" }}>Active</h2>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#979797",
                    marginTop: "10px",
                  }}
                >
                  Expires soon 31 march, 2022
                </span>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "15px 0px",
                  }}
                >
                  {" "}
                  <button
                    className="formbtnbtn"
                    type="submit"
                    style={{ width: "100px" }}
                  >
                    Renew
                  </button>
                  <button className="formbtn-o" style={{ width: "160px" }}>
                    Suspend Subscription
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p
                style={{
                  marginTop: "10px",
                }}
              >
                Gift Card
              </p>{" "}
              <div className="membrship-card">
                <p style={{ color: "#979797", margin: "10px 0px" }}>You Have</p>
                <h2 style={{ marginBottom: "10px" }}>$10.00</h2>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#979797",
                    marginTop: "10px",
                  }}
                >
                  Expires soon 31 march, 2022
                </span>

                <div
                  style={{
                    margin: "15px 0px",
                  }}
                >
                  <button className="formbtnbtn" style={{ width: "100px" }}>
                    Bye More
                  </button>
                </div>
              </div>
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
            <button
              className="formbtn2"
              type="submit"
              style={{
                background: "linear-gradient(326deg, #662F88 8%, #20BF55 132%)",
                color: "white",
                fontWeight: "400",
                borderRadius: " 4px",
                cursor: "pointer",
                border: "none",
                width: " 100px",
                height: "39px",
                fontSize: "14px",
                marginLeft: "4px",
                marginTop: "14px",
              }}
            >
              Save
            </button>
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
