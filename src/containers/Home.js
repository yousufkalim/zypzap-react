// Init
import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Carousal from "../utils/Carousal";

export default function Construction() {
  return (
    <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Header />
      {/* <Carousal /> */}
      <Body />
    </div>
  );
}
