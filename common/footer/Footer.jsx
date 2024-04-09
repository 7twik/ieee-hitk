import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { AnimatedTooltipS, AnimatedTooltipA } from "./Tips";

const Footer = () => {
  return (
    <>
      <footer className="py-12 bg-gray-900">
        <div className="footer151">
          <div className="box logo">
            <h1 className="text-white text-2xl font-bold ta158">IEEE-HITK</h1>
            <span className="text-gray-400 text-sm ta158">
              Advancing Technology for Humanity
            </span>
            <div className="dflex124 mt-4">
              <a href="https://www.linkedin.com/company/ieee-mtts-hitk-sbc/" className="mr-4">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-white text-lg hover:text-blue-400 transition duration-300"
                />
              </a>
              <a href="https://www.facebook.com/ieee.mtts.sbc.hitk?mibextid=ZbWKwL" className="mr-4">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white text-lg hover:text-blue-400 transition duration-300"
                />
              </a>
              <a href="https://www.instagram.com/ieee_mtts.hitk?igsh=c2x5bHZvcWxlbXJi" className="mr-4">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white text-lg hover:text-blue-400 transition duration-300"
                />
              </a>
            </div>
          </div>
          
          <div className="box developer">
            <h2 className="text-white mb-4 md:mb-0 text-mm ta158">Meet the devs!</h2>

            

            <div className="flex md:flex-row flex-col md:justify-between">
            <div className="devbox151">
                
                <AnimatedTooltipA />
                <div className="box151">
                  <h1 className="text-white text-mm">Arnab Chakraborty</h1>
                  <p className="text-gray-400 text-smm">
                    1x Hackathon🏆<br/>
                    Fullstack Dev  🛠️ <br/> 
                    Devops Enthusiast 🔄 <br/> 
                    MERN 🖥️| Next ⚛️ <br/>
                    NeonDB 💡 | DrizzleORM 💧 <br/> 
                    ECE '25 📱🔌
                  </p>
                  <h3 className="text-white mt-4">Connect with Arnab</h3>
                  <div className="dflex124 smmid151">
                      <a href="https://www.linkedin.com/in/arnab-chakraborty-737492230" className="mr-4">
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          className="text-white text-lg hover:text-blue-400 transition duration-300"
                        />
                      </a>
                      <a href="https://twitter.com/ArnabCh82095943?t=JE8eauXYuvyWjnPc8jIHEA&s=08" className="mr-4">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="text-white text-lg hover:text-blue-400 transition duration-300"
                        />
                      </a>
                      <a href="https://www.instagram.com/arnab_chakraborty_black_jack" className="mr-4">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-white text-lg hover:text-blue-400 transition duration-300"
                        />
                      </a>
                  </div>
                </div>
              
            </div>
              <div className="devbox151">
                <AnimatedTooltipS />
                <div className="box151">
                  <h1 className="text-white text-mm">Sattwik Das</h1>
                  <p className="text-gray-400 text-smm">
                    2x Hackathon🏆<br/>
                    Ex @IQApexLabs👨‍💻<br/>Ex @GDSC-Core'24 🚀<br/>
                    MERN 🖥️ | Next ⚛️ | GenAI 🧠<br/>
                    Flask🐍 | FastAPI⚡| Solidity 🔗<br/>
                    ECE'25 📱🔌
                  </p>
                  <h3 className="text-white mt-4">Connect with Sattwik</h3>
                  <div className="dflex124 smmid151">
                    <a href="https://in.linkedin.com/in/sattwik-das-90aa75249" className="mr-4">
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="text-white text-lg hover:text-blue-400 transition duration-300"
                      />
                    </a>
                    <a href="https://twitter.com/07twik" className="mr-4">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="text-white text-lg hover:text-blue-400 transition duration-300"
                      />
                    </a>
                    <a href="https://www.instagram.com/7twik/" className="mr-4">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-white text-lg hover:text-blue-400 transition duration-300"
                        />
                      </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="box link">
            <h3 className="text-white">Explore</h3>
            <ul className="text-white hover:text-cyan-600">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/event">Events</a>
              </li>
              <li>
                <a href="/team">Meet the Team</a>
              </li>
              <li>
                <a href="/contact">Feedback</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal bg-gray-800 text-center py-4">
        <p className="text-gray-400 text-sm">
          © 2024 All rights reserved | For any changes or collaboration, contact{" "}
          <a
            href="mailto:07twik@gmail.com"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            07twik@gmail.com
          </a>{" "}
          or{" "}
          <a
            href="mailto:arnabc857@gmail.com"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            arnabc857@gmail.com
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
