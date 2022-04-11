import React, { useState } from "react";
import Header from "../components/Header";
import Dashboard2 from "../components/UserDashboard/Dashboard2";
import { Store, UpdateStore } from "../StoreContext";
import "../css/dashboard/Dashbord2Responsive.css";

const UserDashboard = () => {
  const { creator } = Store();
  const [openlogin, setOpenLogin] = useState(false);
  const [opensignup, setOpenSignup] = useState(false);
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] = useState(false);
  return (
    <div>
      <Header
        setOpenLogin={setOpenLogin}
        setOpenSignup={setOpenSignup}
        openlogin={openlogin}
        opensignup={opensignup}
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
      />
      <Dashboard2 id={creator?._id} />
    </div>
  );
};

export default UserDashboard;
