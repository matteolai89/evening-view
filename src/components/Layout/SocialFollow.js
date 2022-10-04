import React, { Fragment } from "react";
import classes from "./SocialFollow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  const clickLinkedinHandler = () => {
    window.open("https://www.linkedin.com/in/matteolaidev/");
  };
  const clickFacebookHandler = () => {
    window.open("https://www.facebook.com/matteolai1989/");
  };
  const clickInstagramHandler = () => {
    window.open("https://www.instagram.com/matteolai89/");
  };
  return (
    <Fragment>
      <div className={classes["social-container"]}>
        <h2 className={classes.socialText}>
          Get connected with me on social networks:
        </h2>
        <div>
          <button
            onClick={clickLinkedinHandler}
            className={`${classes.linkedin} ${classes.social}`}
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </button>
          <button
            onClick={clickFacebookHandler}
            className={`${classes.facebook} ${classes.social}`}
          >
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </button>
          <button
            onClick={clickInstagramHandler}
            className={`${classes.instagram} ${classes.social}`}
          >
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </button>
        </div>
      </div>
      <h2 className={classes.footerText}>
        Application designed and developed using React.js by Matteo Lai.
      </h2>
    </Fragment>
  );
}
