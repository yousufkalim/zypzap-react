import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../../api';
import { Store, UpdateStore } from '../../StoreContext';
import Dialog from '@mui/material/Dialog';
import ClearIcon from '@mui/icons-material/Clear';

const GuestSignUpPopUp = ({ open, setOpen, setOpenSignup, setOpenLogin }) => {
  const updateStore = UpdateStore();
  const { user } = Store();
  //   const { singlCourse } = props;
  const handleClick = async (u, course) => {
    const data = {
      courseId: course?._id,
      userId: u?._id,
    };
    let res = await api('post', '/users/enrolledCourseAndStarted', data);
    if (res) {
      updateStore({ user: res.data });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Dialog open={open} className="regPopUp">
          <div className="create_container" style={{ padding: '6%' }}>
            <ClearIcon className="clearIcon3" onClick={handleClose} />

            <p className="text-center" id="regText">
              You must be a registered user <br /> to continue
            </p>
            <div className="regBtns">
              <button
                id="signupBtn"
                onClick={() => {
                  setOpenSignup(true);
                  handleClose();
                }}
              >
                Sign Up Now
              </button>
              <button
                id="loginFormbtn"
                type="submit"
                onClick={() => {
                  setOpenLogin(true);
                  handleClose();
                }}
              >
                Log in Now
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default GuestSignUpPopUp;
