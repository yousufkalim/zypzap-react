import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import imgN1 from "../../assets/img/n1.png";
import imgN2 from "../../assets/img/n2.png";
import imgN3 from "../../assets/img/n3.png";
import imgN4 from "../../assets/img/n4.png";
import Star from "../../assets/icons/Star.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SubscriptionPopup from "../PopupForms/SubscriptionPopup";

const scrollToTop = () => {
  window.scrollTo({
    top: 1,
    behavior: "smooth",
  });
};

const onChange = (a, b) => {};

const UserLandingPageAdvantages = (props) => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  var items = [
    {
      text: t("1 Obtenez les meilleurs conseils "),
      text2: "2 Obtenez les meilleurs conseils ",
      text3: "3 Obtenez les meilleurs conseils ",
      text4: "4 Obtenez les meilleurs conseils ",

      img: imgN1,
    },
    {
      text: "Suivez une Roadmap personnalisée",
      text2: "2 Suivez une Roadmap personnalisée",
      text3: "3 Suivez une Roadmap personnalisée",
      text4: "4 Suivez une Roadmap personnalisée",
      img: imgN2,
    },
    {
      text: "Tous vos jeux sont abordés",
      text2: "2 Tous vos jeux sont abordés",
      text3: "3 Tous vos jeux sont abordés",
      text4: "4 Tous vos jeux sont abordés",
      img: imgN3,
    },
    {
      text: "Progressez à votre rythme",
      text2: "2 Progressez à votre rythme",
      text3: "3 Progressez à votre rythme",
      text4: "4 Progressez à votre rythme",

      img: imgN4,
    },
  ];
  return (
    <>
      {open && <SubscriptionPopup open={open} setOpen={setOpen} />}
      <Box className="box-user">
        <Box className="userlandingpageheaderspacing">
          <Typography align="center" variant="h5">
            {t("Federez une nouvelle communaute")}
          </Typography>
          <div className="offerdashline"> </div>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="carousalContainer">
              <div className="carousalText">
                <img src={Star} alt="" />
                <div className={`${!props.text5 && "landingtext"} carousalP`}>
                  <p className={`${!props.text5 && "list-text2"} list-text`}>
                    {props.text1}
                  </p>
                </div>
              </div>
              <div className="carousalText">
                <img src={Star} alt="" />
                <div className={`${!props.text5 && "landingtext"} carousalP`}>
                  <p className={`${!props.text5 && "list-text2"} list-text`}>
                    {props.text2}
                  </p>
                </div>
              </div>
              <div className="carousalText">
                <img src={Star} alt="" />
                <div className={`${!props.text5 && "landingtext"} carousalP`}>
                  <p className={`${!props.text5 && "list-text2"} list-text`}>
                    {props.text3}
                  </p>
                </div>
              </div>
              <div className="carousalText">
                <img src={Star} alt="" />
                <div className={`${!props.text5 && "landingtext"} carousalP`}>
                  <p className={` ${!props.text5 && "list-text2"} list-text`}>
                    {props.text4}
                  </p>
                </div>
              </div>
              {props.text5 && (
                <div className="carousalText">
                  <img src={Star} alt="" />
                  <div className={`${!props.text5 && "landingtext"} carousalP`}>
                    <p className={`list-text`}>{props.text5}</p>
                    <p
                      className={`list-text`}
                      style={{ padding: "0", paddingLeft: "7px" }}
                    >
                      {props.text6}
                    </p>
                  </div>
                </div>
              )}
              {/* <div className="carousalText">
                <img src={Star} alt="" />
                <div className="carousalP">
                  <p className="list-text ">
                    Visibilite sur l'ensemble des sujets soumis par les gamers
                  </p>
                </div>
              </div> */}
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Carousel
              autoPlay={true}
              interval={3000}
              navButtonsAlwaysVisible={false}
              activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
              // indicatorContainerProps={{ className: "carousalforRight" }}
              animation={"fade"}
              duration={900}
              stopAutoPlayOnHover={false}
              onChange={(now, prev) => onChange(now, prev)}
            >
              {items.map((item, i) => (
                <CarousalComponent key={i} item={item} />
              ))}
            </Carousel>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          {props.type == "landing" && (
            <button className="btn-advantages" onClick={() => setOpen(true)}>
              {t("Early access to courses")}
            </button>
          )}

          <Link
            to="/contentcreator"
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            <button className="btn-advantages" onClick={scrollToTop}>
              {t("Become content creator")}
            </button>
          </Link>
        </Grid>
      </Box>
    </>
  );
};

function CarousalComponent({ item }) {
  return (
    <>
      <div className="carousalContainer">
        <img className="carousel-img" src={item.img} />
      </div>
    </>
  );
}

export default UserLandingPageAdvantages;
