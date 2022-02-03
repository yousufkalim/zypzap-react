// Init
import React, { useEffect } from "react";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation, Trans } from "react-i18next";
import Cookies from "./utils/Cookies";
import api from "./api";

// Files
import Index from "./routes/index";
import "./css/index.css";

import SetAuthToken from "./utils/SetAuthToken";

import { Store, UpdateStore } from "./StoreContext";

// Component
function App() {
  // init
  const updateStore = UpdateStore();

  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      SetAuthToken(token);
      getdata();
    }
  }, [token]);
  let getdata = async () => {
    try {
      let res = await api("get", "/users/getuserbytoken");
      if (res) {
        updateStore({ user: res?.data, creator: res?.data?.creator });
      }
    } catch (error) {}
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
