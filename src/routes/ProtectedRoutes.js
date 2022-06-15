import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Store, UpdateStore } from "../StoreContext";
import ContentDashboard from "../containers/ContentDashboard";
import UserDashboard from "../containers/UserDashboard";
import UserProfile from "../containers/UserProfilePage";

import api from "../api";

const ProtectedRoutes = () => {
  const updateStore = UpdateStore();
  const { user, creator } = Store();
  useEffect(() => {
    // checkAuth();
  }, []);
  let checkAuth = async () => {
    let res = await api("get", `admin/auth/check-auth`);
    if (res.status === 200) {
      updateStore({ authorization: true });
    } else {
      localStorage.removeItem("token");
      updateStore({ authorization: null });
    }
  };

  return (
    <>
      {user && (
        <>
          {creator ? (
            <Switch>
              <Route exact path="/dashboard" component={ContentDashboard} />
              <Route exact path="/UserDashboard" component={UserDashboard} />
              <Route exact path="/userprofile" component={UserProfile} />
              <Redirect to="/home" />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/UserDashboard" component={UserDashboard} />
              <Route exact path="/userprofile" component={UserProfile} />
              <Redirect to="/home" />
            </Switch>
          )}
        </>
      )}
    </>
  );
};

export default ProtectedRoutes;
