import React from "react";
import "./style/CryptoMarquee.scss";

import Marquee from "react-fast-marquee";
import { SiBitcoinsv } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiDogecoin } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { SiTether } from "react-icons/si";
import { SiSolana } from "react-icons/si";
import { SiLitecoin } from "react-icons/si";
import { RiNftFill } from "react-icons/ri";

const CryptoMarquee = () => {
  return (
    <section className="Crypto_marquee">
      <Marquee className="Crtpo_icon_Container">
        <ul>
          <li>
            <RiNftFill className="Crytpo_icon" />{" "}
          </li>
          <li>
            <SiBitcoinsv className="Crytpo_icon" />{" "}
          </li>
          <li>
            <FaEthereum className="Crytpo_icon" />{" "}
          </li>
          <li>
            <SiDogecoin className="Crytpo_icon" />{" "}
          </li>
          <li>
            <SiBinance className="Crytpo_icon" />{" "}
          </li>
          <li>
            <SiTether className="Crytpo_icon" />{" "}
          </li>
          <li>
            <SiSolana className="Crytpo_icon" />{" "}
          </li>
          <li>
            <SiLitecoin className="Crytpo_icon" />{" "}
          </li>
        </ul>
      </Marquee>
    </section>
  );
};

export default CryptoMarquee;
