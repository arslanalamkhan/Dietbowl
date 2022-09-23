import React from "react";
import Grid from "@mui/material/Grid";
import "./Intro.css";
import roundedIntro from "../../img/rounded-intro.png";
import LeafOne from "../../img/leaf01.png";
import LeafTwo from "../../img/leaf02.png";
import MainPlatter from "../../img/mainplatter.png";

const Intro = () => {
  return (
    <Grid container padding="20px" height="auto">
      <Grid item xs={12} md={6} className="l-grid">
        <div className="l-intro">
          <h1>Healthy Food,</h1>
          <h1>Healthy Life.</h1>
          <p>
            Order food according to nutrition values and get food
            recommendations based on your health conditions.
          </p>
          <div className="scroll">
            <div className="line"></div>
            <div className="scroll_text">SCROLL</div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6} className="r-intro">
        <img src={roundedIntro} alt="" />
        <img src={LeafOne} alt="" />
        <img src={LeafTwo} alt="" />
        <img src={MainPlatter} alt="" />
      </Grid>
    </Grid>
  );
};

export default Intro;
