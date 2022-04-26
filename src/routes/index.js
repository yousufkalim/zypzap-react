// Init
import React from "react";
import { Route, Switch } from "react-router-dom";
// Routes
import Home from "../containers/Home";
import Blog from "../containers/Blog";
import Article from "../containers/Article";
import About from "../containers/About.js";
import Contenthome from "../containers/ContentHome.js";
import SearchResult from "../containers/SearchResult";
import LandingPage from "../containers/Landingpage";
import StandbyPage from "../containers/StandbyPage";
import UserLandingPage from "../containers/UserLandingPage";
import ContentCreatorLandingPage from "../containers/ContentCreatorLandingPage";
import LandingPartner from "../containers/LandingPartner";
import ProtectedRoutes from "./ProtectedRoutes.js";
import UserProfile from "../containers/UserProfilePage";
import OverView from "../containers/OverView";
import Policy from "../containers/Policy";
import LegalNotice from "../containers/LegalNotice";
import PrivacyPolicy from "../containers/PrivacyPolicy";
import Team from "../containers/Team";
import CreatorProfile from "../containers/CreatorProfile";

import UserDashboard from "../containers/UserDashboard";
import SettingCreatorProfile from "../containers/SettingCreatorProfile.js";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={StandbyPage} />
      <Route exact path="/home" component={Home} />
      {/* blogs */}
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/:id" component={Article} />
      <Route exact path="/about" component={About} />
      {/* landing pages */}
      <Route exact path="/landingpartner" component={LandingPartner} />
      <Route exact path="/landingpage" component={LandingPage} />
      <Route exact path="/userlanding" component={UserLandingPage} />

      <Route exact path="/policy" component={Policy} />
      <Route
        exact
        path="/contentcreator"
        component={ContentCreatorLandingPage}
      />
      {/* content creator */}
      <Route exact path="/contenthome" component={Contenthome} />
      <Route exact path="/searchresult" component={SearchResult} />
      <Route exact path="/userprofile" component={UserProfile} />
      <Route exact path="/OverView/:id" component={OverView} />
      <Route exact path="/LegalNotice" component={LegalNotice} />
      <Route exact path="/Team" component={Team} />
      <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
      <Route exact path="/CreatorProfile" component={CreatorProfile} />
      <Route exact path="/*" render={() => <ProtectedRoutes />} />
      <Route exact path="/CreatorProfile/:id" component={CreatorProfile} />
      {/* <Route exact path="/CreatorProfile" component={CreatorProfile} /> */}
      <Route
        exact
        path="/SettingCreatorProfile"
        component={SettingCreatorProfile}
      />
    </Switch>
  );
};

export default index;
