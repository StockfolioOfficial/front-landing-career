import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/templates/Nav";
import Landing from "./components/pages/Landing";
import Footer from "./components/templates/Footer";
import Recruit from "./components/pages/Recruit";
import AdminMain from "./components/pages/AdminMain";
import AdminLogin from "./components/pages/AdminLogin";
import AdminAccount from "./components/templates/AdminAccount";
import AdminNotification from "./components/templates/AdminNotification";
import AdminNotiUpload from "./components/templates/AdminNotiUpload";
import AdminApplicantList from "./components/pages/AdminApplicantList";
import AdminApplicant from "./components/templates/AdminApplicant";
import AdminNav from "./components/pages/AdminNav";
import Admin from "./components/pages/Admin";
import AdminCurrent from "./components/pages/AdminCurrent";
import AdminApplyNotice from "./components/pages/AdminApplyNotice";

const RecruitNav = [
  "/recruit",
  "/recruit/apply",
  "/recruit/apply/:id",
  "/",
  "/recruit/apply/:id/register",
  "/recruit/apply/:id/modify",
  "/recruit/apply/:id/resume",
  "/recruit/process",
  "/recruit/team",
];

const AdminNavbar = [
  "/admin/login",
  "/admin/account",
  "/admin",
  "/admin/:id",
  "/admin/applicant/:id",
  "/admin/apply",
  "/admin/apply/:id",
  "/admin/notification",
  "/admin/notification/write",
  "/admin/applicant",
  "/admin/applicant/:id",
  "/admin/current",
  "/admin/applynotice",
  "/admin",
  "/admin/applicantlist",
  "/admin/applicantlist/:id",
];

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RecruitNav} component={Nav} />
        <Route exact path={AdminNavbar} component={AdminNav} />
      </Switch>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/recruit" component={Recruit} />
        <Route exact path="/login" component={AdminLogin} />
        <Route exact path="/admin" component={AdminMain} />
        <Route exact path="/admin/account" component={AdminAccount} />
        <Route exact path="/admin/apply" component={Admin} />
        <Route exact path="/admin/apply/:id" component={Admin} />
        <Route exact path="/admin/applicant" component={AdminApplicant} />
        <Route exact path="/admin/applicant/:id" component={AdminApplicant} />
        <Route exact path="/admin/account" component={AdminAccount} />
        <Route exact path="/admin/notification" component={AdminNotification} />
        <Route exact path="/admin/applynotice" component={AdminApplyNotice} />
        <Route
          exact
          path="/admin/notification/write"
          component={AdminNotiUpload}
        />
        <Route exact path="/admin/account" component={AdminAccount} />
        <Route
          exact
          path="/admin/applicantlist"
          component={AdminApplicantList}
        />
        <Route
          exact
          path="/admin/applicantlist/:id"
          component={AdminApplicantList}
        />
        <Route exact path="/admin/current" component={AdminCurrent} />
      </Switch>
      <Switch>
        <Route exact path={RecruitNav} component={Footer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
