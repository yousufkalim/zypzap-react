import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import Carousel from "react-material-ui-carousel";

import imgN1 from "../../assets/img/n1.png";
import imgN2 from "../../assets/img/n2.png";
import imgN3 from "../../assets/img/n3.png";
import imgN4 from "../../assets/img/n4.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SubscriptionPopup from "../PopupForms/SubscriptionPopup";

const scrollToTop = () => {
  window.scrollTo({
    top: 1,
    behavior: "smooth",
  });
};

const onChange = (a, b) => {
  console.log(a, b);
};

const UserLandingPageAdvantages = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  var items = [
    {
      text: t("Obtenez les meilleurs conseils "),
      img: imgN1,
    },
    {
      text: "Suivez une Roadmap personnalisée",
      img: imgN2,
    },
    {
      text: "Suivez une Roadmap personnalisée",
      img: imgN3,
    },
    {
      text: "Progressez à votre rythme",
      img: imgN4,
    },
  ];
  return (
    <>
      {open && <SubscriptionPopup open={open} setOpen={setOpen} />}
      <Box className="box-user">
        <Box className="userlandingpageheaderspacing">
          <Typography align="center" variant="h5">
            {t("Win your games")}
          </Typography>
          <div className="offerdashline"> </div>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Carousel
              autoPlay={true}
              interval={3000}
              activeIndicatorIconButtonProps={{
                className: "activeIndicator",
              }}
              animation={"fade"}
              duration={9000}
              indicators={false}
              stopAutoPlayOnHover={false}
            >
              {items.map((item, i) => (
                <CarousalTextComponent key={i} item={item} />
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={12} md={6}>
            <Carousel
              autoPlay={true}
              interval={3000}
              navButtonsAlwaysVisible={false}
              activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
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
          <button className="btn-advantages" onClick={() => setOpen(true)}>
            {t("Early access to courses")}
          </button>
          <Link
            to="/contentcreator"
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            <button className="btn-advantages">
              {t("Become content creator")}
            </button>
          </Link>
        </Grid>
      </Box>
    </>
  );
};

function CarousalTextComponent({ item }) {
  return (
    <div className="textmainDiv">
      <div>
        <p className="list-text "> {item.text}</p>
        <p className="list-text "> {item.text}</p>
        <p className="list-text "> {item.text}</p>
        <p className="list-text "> {item.text}</p>
      </div>
    </div>
  );
}

function CarousalComponent({ item }) {
  return (
    <>
      <img className="carousel-img" src={item.img} />
    </>
  );
}

export default UserLandingPageAdvantages;
