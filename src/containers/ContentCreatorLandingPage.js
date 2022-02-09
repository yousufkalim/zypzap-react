import React, { useEffect } from "react";
import CreateHome from "../components/ContentLending/CreateHome";
import UserLandingPageHeader from "../components/UserLandingPageHeader";
import ContentCreator from "../components/ContentLending/ContentCreator";
// import Avantages from "../components/ContentLending/Avantages";

import Monitization from "../components/ContentLending/Monitization";
import UserLandingPageBlog from "../components/UserLandingPage/UserLandingPageBlog";
import UserLandingPageAdvantages from "../components/UserLandingPage/UserLandingPageAdvantages";

import Footer from "../components/blog/BlogFooter";
import { useTranslation } from "react-i18next";

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
      <UserLandingPageAdvantages
      type="content"
        text1="Monetisation maximale, transparente et diversifiee"
        text2="Creation de cours en ligne ouverte à tous"
        text3="Cadre de creation libre: tous les jeux sont abordés"
        text4="Acces à une communaute de gamers étendue"
        text5="Visibilite sur l'ensemble des sujets soumis "
        text6="
        par les gamers"
      />
      {/* <Avantages /> */}
      <Monitization />
      <UserLandingPageBlog />
      <Footer />
    </div>
  );
};

export default ContentCreatorLandingPage;
