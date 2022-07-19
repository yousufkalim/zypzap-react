import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Dialog from '@mui/material/Dialog';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

import api from '../../api';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Home from '../../containers/Home';
import { useHistory, useParams } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 82,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: 'red',
      transform: 'translateX(22px)',

      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? 'green' : 'black',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    background:
      theme.palette.mode === 'dark'
        ? 'red'
        : 'linear-gradient(65.06deg, #662f88 9.05%, #20bf55 131.69%)',
    width: 28,
    height: 28,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'pink' : 'gray',
    borderRadius: 20 / 2,
    position: 'relative',
    left: '-21px',
  },
}));

export default function ForgetPassword() {
  let [passwords, setPasswords] = useState({ password: '', confirmPassword: '' });
  let [open, setOpen] = useState(false);
  const [values, setValues] = React.useState({
    showPassword: false,
    showPassword2: false,
  });
  let history = useHistory();
  let { token } = useParams();

  useEffect(() => {
    verifyToken();
  }, []);

  const verifyToken = async () => {
    try {
      await api('get', `/users/verify-token/${token}`);
      setOpen(true);
    } catch (err) {
      setOpen(false);
      toast.error('Link has been expired');
      history.push('/home');
    }
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowPassword2 = () => {
    setValues({
      ...values,
      showPassword2: !values.showPassword2,
    });
  };
  const handleClose = () => {
    setPasswords({
      password: '',
      confirmPassword: '',
    });
    setOpen(false);
  };

  const handleInput = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = passwords;

    if (password !== confirmPassword) {
      return toast.error('Password and confirm password are not same');
    } else if (password.length < 8) {
      return toast.error('Password should be minimum 8 characters long');
    }

    let res = await api('put', `/users/reset-password/${token}`, { password });
    if (res) {
      setOpen(false);
      toast.success('Password changed successfully, Please login to continue.');
    }
    setPasswords({
      password: '',
      confirmPassword: '',
    });
    history.push('/home');
  };

  return (
    <>
      <Home />

      <Dialog open={open}>
        <div className="login_form" style={{ paddingBottom: '25px' }}>
          <div className="form_container">
            <h1 className="loginH1">Create a new password</h1>
            <ClearIcon className="clearIcon" onClick={handleClose} />

            <div action="" style={{ marginTop: '10px' }}>
              <div>
                <label htmlFor="email" className="loginFH1">
                  New Password
                </label>

                <OutlinedInput
                  className="setting_C_inpt2"
                  disabledPadding
                  name="password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={passwords.password}
                  onChange={handleInput}
                  placeholder="********"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility className="setting_show_hide_icon" />
                        ) : (
                          <VisibilityOff className="setting_show_hide_icon" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>

              <div>
                <label htmlFor="email" className="loginFH1">
                  Confirm password
                </label>

                <OutlinedInput
                  className="setting_C_inpt2"
                  disabledPadding
                  name="confirmPassword"
                  type={values.showPassword2 ? 'text' : 'password'}
                  value={passwords.confirmPassword}
                  onChange={handleInput}
                  placeholder="********"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword2 ? (
                          <Visibility className="setting_show_hide_icon" />
                        ) : (
                          <VisibilityOff className="setting_show_hide_icon" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              {/* <input
                className="inputForm bldText"
                type="password"
                value={passwords.confirmPassword}
                onChange={handleInput}
                name="confirmPassword"
                required
              /> */}

              <button className="formbtns" type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
