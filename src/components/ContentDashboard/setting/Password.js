import React from "react";

const Password = () => {
  return (
    <>
      <div className="dash_col2">
        <div className="basic_info">
          <h3 className="basicH3">Password</h3>
          <hr className="hr_password" />
          <form action="" className="deshForm">
            <input
              type="fname"
              className="dashInput"
              placeholder="Current password"
            />
            <input
              type="lname"
              className="dashInput"
              placeholder="New password"
            />
            <input
              type="email"
              className="dashInput"
              placeholder="Confirm new password"
            />
          </form>
          <button className="dashBtn">Save Changes</button>
        </div>
      </div>
    </>
  );
};

export default Password;
