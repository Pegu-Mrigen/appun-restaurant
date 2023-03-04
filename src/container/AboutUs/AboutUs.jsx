import React from "react";

import "./AboutUs.css";
import images from "../../constants/images";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.A} alt="a-letter" />
    </div>
    <div className="app__aboutus-content flex__center ">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repudiandae vel odio ipsam consequatur molestiae.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quos
          doloremque, saepe necessitatibus non aliquam blanditiis aperiam
          magnam.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
