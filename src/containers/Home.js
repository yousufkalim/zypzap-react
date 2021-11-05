// Init
import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Body />
    </div>
  );
}
