import React from "react";
import "../App.scss";
import pic from "../media/personal-pic.jpg";
import linkedinIcon from "../media/linkedin.svg";
import twitterIcon from "../media/twitter.svg";
import behanceIcon from "../media/behance.svg";
import heroArrow from "../media/heroArrow.svg";
import meArrow from "../media/meArrow.svg";
import ctaArrow from "../media/ctaArrow.svg";

window.addEventListener("load", () => {
  document.querySelector("body").classList.add("loaded");
});

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="main-section" id="main-section">
        <div className="photo-container">
          <img src={pic} alt="Me" className="photo" />
          <img src={meArrow} alt="" className="me-arrow"/>
        </div>
        <div className="hero-text">
          <h1>Hola, my name is Filip. <span className="wave">👋</span></h1>
          <h1>I am a product designer & front-end developer.</h1>
          <img src={heroArrow} alt="" className="hero-arrow" />
        </div>
        <div className="buttons">
          <a href="#">
            <svg
              id="stroke"
              xmlns="http://www.w3.org/2000/svg"
              width="0"
              height="0"
            >
              <defs>
                <path
                  id="line"
                  d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  vector-effect="non-scaling-stroke"
                />
              </defs>
            </svg>
            <svg className="button-stroke" viewBox="0 0 154 13">
              <use href="#line"></use>
            </svg>
            About me
          </a>
          <a href="#">
            <svg
              id="stroke"
              xmlns="http://www.w3.org/2000/svg"
              width="0"
              height="0"
            >
              <defs>
                <path
                  id="line"
                  d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  vector-effect="non-scaling-stroke"
                />
              </defs>
            </svg>
            <svg className="button-stroke" viewBox="0 0 154 13">
              <use href="#line"></use>
            </svg>
            Work
          </a>
          <a href="#">
            <svg
              id="stroke"
              xmlns="http://www.w3.org/2000/svg"
              width="0"
              height="0"
            >
              <defs>
                <path
                  id="line"
                  d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  vector-effect="non-scaling-stroke"
                />
              </defs>
            </svg>
            <svg className="button-stroke" viewBox="0 0 154 13">
              <use href="#line"></use>
            </svg>
            <img src={ctaArrow} alt="" className={"cta-arrow"} />
            Contact
          </a>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/filiptsolov/" target="_blank">
            <img src={linkedinIcon} alt="" />
          </a>
          <a href="https://www.behance.net/filiptsolov" target="_blank">
            <img src={behanceIcon} alt="" />
          </a>
          <a href="" target="_blank">
            <img src={twitterIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
