import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faTwitter, faInstagram, faHeart } from "@fortawesome/free-brands-svg-icons";
import { AnimatedTooltipPreview } from "./tips";

const Footer = () => {
  return (
    <>
      <footer className="py-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-start items-center">
            
            <div className="box logo">
              <h1 className="text-white text-2xl font-bold">IEEE-HITK</h1>
              <span className="text-gray-400 text-sm">Advance Technology for humanity</span>
              
              <div className="flex mt-4">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-500 text-2xl mr-4 hover:text-blue-500 transition duration-300" style={{color: "#1eb2a6"}} />
                <FontAwesomeIcon icon={faTwitter} className="text-blue-500 text-2xl mr-4 hover:text-blue-500 transition duration-300" style={{color: "#1eb2a6"}} />
                <FontAwesomeIcon icon={faInstagram} className="text-blue-500 text-2xl mr-4 hover:text-blue-500 transition duration-300" style={{color: "#1eb2a6"}} />
              </div>
              <div className="box link">
            <h3 className="text-white">Explore</h3>
            <ul>
              <li className="text-white">About Us</li>
              <li className="text-white">Services</li>
              <li className="text-white">Blog</li>
              <li className="text-white">Contact us</li>
            </ul>
          </div>
            </div>
          </div>
          <div className="boxxxx">
            <h2 style={{color:"white"}}>Meet the devs!</h2>
            <AnimatedTooltipPreview />
          </div>
          <div className="box contact-us mr-6">
              <h3 className="text-white text-lg font-semibold">Contact Us</h3>
              <div className="text-gray-400 text-sm mt-2">
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  <a href="mailto:support@admin.com" className="hover:text-blue-500">support@admin.com</a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                  <a href="tel:+917007886700" className="hover:text-blue-500">(+91)700-788-67-00</a>
                </p>
              </div>
            </div>
        </div>
      </footer>

      <div className="legal bg-gray-800 py-4 text-center">
        <p className="text-gray-400 text-sm">
          Copyright ©2024 All rights reserved | This template is made{" "}
          <FontAwesomeIcon icon={faHeart} className="text-red-500" /> by
        </p>
      </div>
    </>
  );
};

export default Footer;
