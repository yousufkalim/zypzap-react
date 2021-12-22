import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Password = () => {
  const [password, setPsassword] = useState({
    crntpassword: "",
    newpassword: "",
    cnfrmpassword: "",
  });
  const { crntpassword, newpassword, cnfrmpassword } = password;

  const handleChange = (e) => {
    setPsassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();

    if (crntpassword == "") {
      return toast.error("Enter your current password");
    }
    if (newpassword == "") {
      return toast.error("Enter your new password");
    }
    if (cnfrmpassword == "") {
      return toast.error("Enter your confirm new password");
    }
    setPsassword({
      crntpassword: "",
      newpassword: "",
      cnfrmpassword: "",
    });
  };
  return (
    <>
      <div className="dash_col2">
        <div className="basic_info">
          <h3 className="basicH3">Password</h3>
          <hr className="hr_password" />
          <form action="" className="deshForm">
            <input
              type="password"
              className="dashInput"
              placeholder="Current password"
              name="crntpassword"
              value={crntpassword}
              onChange={handleChange}
            />
            <input
              type="password"
              className="dashInput"
              placeholder="New password"
              name="newpassword"
              value={newpassword}
              onChange={handleChange}
            />
            <input
              type="password"
              className="dashInput"
              placeholder="Confirm new password"
              name="cnfrmpassword"
              value={cnfrmpassword}
              onChange={handleChange}
            />
          </form>
          <button className="dashBtn2" onClick={handleClick}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default Password;
