// Init
import React from "react";
import Header from "../components/Header";
import ArticleBody from "../components/article/ArticleBody";

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
      <ArticleBody />
    </div>
  );
}
