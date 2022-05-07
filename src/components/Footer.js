import React, { Component } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YoutubeIcon from "@material-ui/icons/YouTube";
import "../style/Footer.css";

export default class Footer extends Component {
   render() {
      return (
         <div className="footer">
            <div className="socialMedia">
               <InstagramIcon />
               <TwitterIcon />
               <FacebookIcon />
               <YoutubeIcon />
            </div>
            <p>&copy; 2021 bird.vean</p>
         </div>
      );
   }
}
