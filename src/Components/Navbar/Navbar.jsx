import React from "react";
import "./Navbar.css";
import Logo from "../../img/logo.png";
import Grid from "@mui/material/Grid";

const Navbar = () => {
  return (
    <Grid container padding="20px">
      <Grid item xs={4}>
        <div className="l-navbar">
          <img className="logo" src={Logo} alt="Logo" width="55px" />
          <h1 className="font-face-gm">DietBowl</h1>
        </div>
      </Grid>
      <Grid item xs={8} className="right">
        <h2>Features</h2>
        <h2>Download</h2>
        <h2>About Us</h2>
      </Grid>
    </Grid>
  );
};

export default Navbar;
