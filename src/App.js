// Init
import React, { useEffect } from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import api from './api';

// Files
import Index from './routes/index';

import './css/index.css';

import SetAuthToken from './utils/SetAuthToken';

import { Store, UpdateStore } from './StoreContext';

// Component
function App() {
  // init
  const updateStore = UpdateStore();

  const { learner, creator } = Store();
  const token = localStorage.getItem('token');
  // const storage = localStorage.setItem('learner', true : false);
  useEffect(() => {
    if (token) {
      SetAuthToken(token);
      getdata();
    }
  }, [token]);

  let getdata = async () => {
    try {
      const res = await api('get', '/users/getuserbytoken');
      if (res) {
        let resCreator;
        if (res?.data?.role === 'Creator') {
          resCreator = await api('get', `/creators/${res.data.creator}`);
        }
        // const storage = localStorage.setItem('learner', res?.data?.role === 'User' ? true : false);
        let learner = res?.data?.role === 'User' ? true : false;
        let storage = localStorage.getItem('learner');

        if (storage) {
          storage = JSON.parse(storage);
          console.log('Storage --> ', typeof storage);
          learner = storage;
        } else {
          localStorage.setItem('learner', learner);
        }

        updateStore({
          user: res?.data,
          creator: resCreator?.data?.creator,
          learner,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="App">
      {/* toastify Container for Notification */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        transition={Flip}
      />
      {/* Routes */}
      <Index />
      {/* <Cookies /> */}
    </div>
  );
}

// Export
export default App;
