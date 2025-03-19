import React from "react";
import image from "../assets/image/Slider-img-2.png";
import "./style/About.scss";

const About = () => {
  return (
    <section className="About_Section">
      <div className="About_Heading_Container">
        <h2>About us</h2>
      </div>
      <div className="About_Sub_Heading_container">
        <p>
          As a Forward-Thinking Digtial Agency, we Specialize in{" "}
          <span className="Color_text">Creative Solutions.</span>
        </p>
      </div>
      <div className="About_Content_Container">
        <div className="Half_Circle"></div>
        <div className="Image_Container">
          <img src={image} alt="Image" />
        </div>
        <div className="Content_Container">
          <p>
            At NFT, we are passionate about transforming ideas into impactful
            digital experiences. As a forward-thinking digital agency, we
            specialize in delivering creative solutions, innovative strategies,
            and user-centric designs that help brands thrive in an ever-evolving
            digital landscape.
          </p>

          <p>
            Our mission is to empower businesses by blending creativity,
            technology, and expertise to craft meaningful connections with their
            audiences.
          </p>

          <p>
            With a commitment to excellence and a collaborative approach, NFT is
            dedicated to bringing your vision to life and driving success
            through the power of digital innovation.
          </p>
          <button
            className="Contact_link"
            onClick={() => (window.location.href = "#")}
            type="button"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
