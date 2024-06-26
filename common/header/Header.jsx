"use client";
import React, { useState, useEffect } from "react";
import Head from "./Head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    console.log(click)
  },[click])
  useEffect(() => {
    // Simulate content loading delay
    const timeout = setTimeout(() => {
      setLoading(false); // Hide the loader after content has loaded
    }, 3200);

    return () => clearTimeout(timeout); // Clear the timeout if component unmounts
  }, []);

  return (
    <>
      <Head />
      {loading &&
      <div id="loader">
        <h1>Love Electronics?</h1>
        <h1>Well..Look no further</h1>
        <h1>Welcome to IEEE!</h1>
      </div>
}
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/team'>Team</Link>
            </li>
            
            <li>
              <Link href='/event'>Events</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button"><Link className="button" href='https://forms.gle/8rpqXe8EAPHWjDHi7'>Join IEEE</Link></div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ?  <FontAwesomeIcon  icon={ faTimes } />:  <FontAwesomeIcon  icon={ faBars } />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header
