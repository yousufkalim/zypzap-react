import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Password = () => {
  const [password, setPaassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const { currentPassword, newPassword, confirmPassword } = password;

  const handleChange = (e) => {
    setPaassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();

    if (currentPassword == "") {
      return toast.error("Enter your current password");
    }
    if (newPassword == "") {
      return toast.error("Enter your new password");
    }
    if (confirmPassword == "") {
      return toast.error("Enter your confirm new password");
    }
    setPaassword({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
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
              name="currentPassword "
              value={currentPassword}
              onChange={handleChange}
            />
            <input
              type="password"
              className="dashInput"
              placeholder="New password"
              name="newPassword"
              value={newPassword}
              onChange={handleChange}
            />
            <input
              type="password"
              className="dashInput"
              placeholder="Confirm new password"
              name="confirmPassword"
              value={confirmPassword}
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
