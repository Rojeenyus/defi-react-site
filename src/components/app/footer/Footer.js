import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = ({ click }) => {
  return (
    <div className="footer footers">
      <div className={click ? "dropdown active" : "dropdown"}>
        <div className="boxs">
          <div className="icons">
            <ul className="footer-ul">
              <li>
                <div className="flex">
                  <SocialIcon
                    network="twitter"
                    bgColor="#00d8ff"
                    className="footer-icon"
                  ></SocialIcon>
                  <span>Twitter</span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <SocialIcon
                    network="github"
                    bgColor="#00d8ff"
                    className="footer-icon"
                  ></SocialIcon>
                  <span>Github</span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <SocialIcon
                    network="telegram"
                    bgColor="#00d8ff"
                    className="footer-icon"
                  ></SocialIcon>
                  <span>Telegram</span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <SocialIcon
                    network="discord"
                    bgColor="#00d8ff"
                    className="footer-icon"
                  ></SocialIcon>
                  <span>Discord</span>
                </div>
              </li>
              <li>
                <h3>Docs</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container containers">
        <div className="icons">
          <ul className="navs footer-ul">
            <li>
              <SocialIcon
                network="twitter"
                bgColor="#00d8ff"
                className="footer-icon"
              ></SocialIcon>
            </li>
            <li>
              <SocialIcon
                network="github"
                bgColor="#00d8ff"
                className="footer-icon"
              ></SocialIcon>
            </li>
            <li>
              <SocialIcon
                network="telegram"
                bgColor="#00d8ff"
                className="footer-icon"
              ></SocialIcon>
            </li>
            <li>
              <SocialIcon
                network="discord"
                bgColor="#00d8ff"
                className="footer-icon"
              ></SocialIcon>
            </li>
          </ul>
        </div>
        <h3>Docs</h3>
        <div className="nav-item">© 2022 Defi</div>
      </div>
    </div>
  );
};

export default Footer;
