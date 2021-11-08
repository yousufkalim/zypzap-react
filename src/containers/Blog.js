// Init
import React from "react";
import Header from "../components/Header";
import BlogBody from "../components/blog/BlogBody";

export default function Blog() {
  return (
    <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Header />
      <BlogBody />
    </div>
  );
}
