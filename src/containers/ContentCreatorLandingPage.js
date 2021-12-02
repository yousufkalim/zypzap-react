import React, { useEffect } from "react";
import CreateHome from "../components/ContentLending/CreateHome";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import ContentCreator from "../components/ContentLending/ContentCreator";
import Avantages from "../components/ContentLending/Avantages";
import Monitization from "../components/ContentLending/Monitization";
import UserLandingPageBlog from "../components/UserLandingPage/UserLandingPageBlog";
import Footer from "../components/blog/BlogFooter";

const ContentCreatorLandingPage = () => {
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
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <UserLandingPageHeader />
      <CreateHome />

      <ContentCreator />
      <Avantages />
      <Monitization />
      <UserLandingPageBlog />
      <Footer />
    </div>
  );
};

export default ContentCreatorLandingPage;
