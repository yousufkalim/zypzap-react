import React, { useState, useEffect } from 'react';
import DeshProfile from '../../../assets/icons/deshProfile.png';
import { toast } from 'react-toastify';
import api from '../../../api';
import { Store, UpdateStore } from '../../../StoreContext';

const BasicInformation = () => {
  const { user } = Store();
  const updateStore = UpdateStore();
  const [formData, setFormData] = useState({
    username: user?.username ? user.username : '',
    email: user?.email ? user.email[0] : '',
    phone_number: user?.phone_number ? user.phone_number : '',
  });
  const { username, email, phone_number } = formData;
  useEffect(() => {
    setFormData({
      username: user?.username ? user.username : '',
      email: user?.email ? user.email[0] : '',
      phone_number: user?.phone_number ? user.phone_number : '',
    });
  }, [user]);

  const chnageEvent = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const SubmitEvent = async (e) => {
    e.preventDefault();
    var n =
      /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;

    if (username == '') {
      return toast.error('Enter your user name');
    }
    if (email == '') {
      return toast.error('Enter your email');
    }
    if (phone_number == '') {
      return toast.error('Enter your Phone Number');
    }
    if (!username) {
      return toast.error('User ID is required');
    }
    if (!phone_number.match(n)) {
      return toast.error('Please enter a valid phone number');
    }
    let res = await api('post', `/users/basicInfo/${user?._id}`, formData);
    if (res) {
      updateStore({ user: res.data.user });
      toast.success('Modifier le profil avec succès');
      setFormData({
        username: '',
        email: '',
        phone_number: '',
      });
    }
  };
  return (
    <>
      <div className="dash_col2">
        <div className="basic_info">
          <h3 className="basicH3">Basic Information</h3>
          <div>
            <img src={DeshProfile} alt="" className="desh_profilePic" />
          </div>
          <p>@{username}</p>
          <br />
          <form action="" className="deshForm">
            <input
              type="text"
              className="dashInput"
              placeholder="First name"
              onChange={chnageEvent}
              value={username}
              name="username"
            />
            <input
              type="email"
              className="dashInput"
              placeholder="Email address"
              onChange={chnageEvent}
              name="email"
              value={email}
            />
            <input
              type="phone"
              className="dashInput"
              placeholder="Phone number"
              onChange={chnageEvent}
              name="phone_number"
              value={phone_number}
            />
          </form>
          <button className="basicProfile" onClick={SubmitEvent}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default BasicInformation;
