import React from "react";
import Grid from "@mui/material/Grid";
import Groups from "../../assets/icons/Groups.png";
import Vector from "../../assets/icons/Vector.png";
import Group from "../../assets/icons/Group.png";
import Vectors from "../../assets/icons/Vectors.png";
import Airbnb from "../../assets/icons/airbnb.png";
import Ola from "../../assets/icons/ola.png";
import Walmart from "../../assets/icons/Walmart.png";
import Oye from "../../assets/icons/oye.png";
import Amazon from "../../assets/icons/amazone.png";
import Fedex from "../../assets/icons/Fedex.png";
import Micrsoft from "../../assets/icons/Micrsoft.png";
import Google from "../../assets/icons/Google.png";

const ContentCreator = () => {
  return (
    <>
      <div className="content_creator">
        <h2 className="creator_heading">Content Creators in our Community</h2>

        <div className="offerdashline"></div>
        <div className="creator_container">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} sm={6}>
              <div className="creator_contain">
                <div className="creator_img">
                  <img src={Groups} alt="Groups" className="creator_img_icon" />
                </div>
                <p className="creator_P">
                  Serve The Community By Creating Relevont Video Content
                </p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div className="creator_contain">
                <div className="creator_img">
                  <img
                    src={Vectors}
                    alt="Vectors"
                    className="creator_img_icon"
                  />
                </div>
                <p className="creator_P">
                  Be A Pillor In The Progress Of Gamers At Their Own Pace
                </p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div className="creator_contain">
                <div className="creator_img">
                  <img src={Vector} alt="Group" className="creator_img_icon" />
                </div>
                <p className="creator_P">
                  Listening To The Community About Their Needs{" "}
                </p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div className="creator_contain">
                <div className="creator_img">
                  <img src={Group} alt="Vector" className="creator_img_icon" />
                </div>
                <p className="creator_P">
                  Participate In The Moderation And Validtion Of Content
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="partner_container">
        <div className=" our_partners" style={{ color: "#fff" }}>
          <div className="heading_container">
            <h1 className=" partners_hading">Our Partners</h1>
            <p className=" partners_pera">
              Become our partners biggest ambassador
            </p>
          </div>
          {/* 1 */}
          <div className="social_icon_one">
            <div className="one_container">
              <img src={Airbnb} alt="" className="one_icon" />
              <img src={Google} alt="" className="one_icon" />
            </div>
          </div>
          {/* 2 */}
          <div className="social_icon_one">
            <div className="one_container">
              <img src={Amazon} alt="" className="one_icon" />
              <img src={Ola} alt="" className="one_icon" />
            </div>
          </div>
          {/* 3 */}
          <div className="social_icon_one">
            <div className="one_container">
              <img src={Fedex} alt="" className="one_icon" />
              <img src={Walmart} alt="" className="one_icon" />
            </div>
          </div>
          {/* 4 */}
          <div className="social_icon_one">
            <div className="one_container">
              <img src={Micrsoft} alt="" className="one_icon" />
              <img src={Oye} alt="" className="one_icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCreator;
