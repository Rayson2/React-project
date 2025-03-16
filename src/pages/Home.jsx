import React, { useState, useEffect } from "react";
import "./style/Home.scss";
import Slider_img_1 from "../assets/image/Slider-img-1.png";
import Slider_img_2 from "../assets/image/Slider-img-2.png";
import Slider_img_3 from "../assets/image/Slider-img-3.png";
import Slider_img_4 from "../assets/image/Slider-img-4.png";

const images = [Slider_img_1, Slider_img_2, Slider_img_3, Slider_img_4];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="Content_container">
        <div className="text_Container_main">
          <h5>
            Innovating Your <span className="Color_text">Digital</span>{" "}
            Presence.
          </h5>

          <p>
            Cutting-edge design to data-driven strategies, we help brands
            elevate their online presence and audience.
          </p>

          <button
            className="Contact_link"
            onClick={() => (window.location.href = "#")}
            type="button"
          >
            Get In Touch
          </button>
        </div>

        <div className="Image_container">
          <img src={currentImage} alt="Random Image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
