// Init
import React, { useEffect } from "react";
import Header from "../components/Header";
import ArticleBody from "../components/article/ArticleBody";

export default function Article() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
      <ArticleBody />
    </div>
  );
}
