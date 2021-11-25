// Init
import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/blog/BlogFooter";
import Profile from "../auth/Profile";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Header setOpen={setOpen}/>
      <Body />
      <Profile open={open} setOpen={setOpen}/>
      <Footer />
    </div>
  );
}
