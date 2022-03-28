import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/blog/BlogFooter";
import Dashboard from "../components/ContentDashboard/Dashboard";
import CreateACoursePopup from "../components/PopupForms/CreateACoursePopup";
const ContentDashboard = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#0e0f1e",
          minHeight: "100vh",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <Header />
        <CreateACoursePopup />
        <Dashboard />

        {/* {!footerState && <Footer />} */}
      </div>
    </>
  );
};

export default ContentDashboard;
