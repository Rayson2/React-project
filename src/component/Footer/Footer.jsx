import React from "react";
import logo from "../../assets/image/logo.png";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.scss";
import Subscribeletter from "./Subscritionletter";

const Footer = () => {
  return (
    <footer>
      <div className="Main_container">
        <div className="container_1 container_content">
          <div className="Footer_heading">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div>
            <p>
              Explore comprehensive service including blockchain-based tokens
              that each represent a unique asset like a piece of art, digital
              content, or media.
            </p>
          </div>
          <div>
            <ul>
              <li>
                <a href="mailto:raysonmurray2@gmail.com">
                  <IoMdMail className="icon" />
                  Info@NFT
                </a>
              </li>
              <li>
                <a href="tel:91999999999">
                  <FaPhoneVolume className="icon" />
                  +91 999-9999-999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container_2 container_content">
          <div className="Footer_heading">
            <h3>Quicl Links</h3>
          </div>
          <div>
            {" "}
            <ul className="NavOptions">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container_3 container_content">
          <div className="Footer_heading">
            <h3>Follow me</h3>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">
                  <FaInstagramSquare className="icon" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <FaXTwitter className="icon" />X
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <FaGithub className="icon" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container_4 container_content">
          <div className="Footer_heading">
            <h2>Subscribe</h2>
          </div>
          <div>
            <p>
              {" "}
              Explore comprehensive service including blockchain-based tokens
              that each represent a unique asset like a piece of art, digital
              content, or media.
            </p>
          </div>
          <div>
            <Subscribeletter />
          </div>
        </div>
      </div>

      <div className="CopyRight_Container">
        <h6>
          CopyRight © Rayson Murray| Design And Develop By Rayson Murray,
          Bilaspur, Chhattisgarh, India
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
