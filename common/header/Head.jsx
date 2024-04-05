import React from "react"
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Head = () => {
  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
});
  return (
    <>
    <AnimatedCursor
    innerSize={0}
    outerSize={8}
    color='89, 11, 111'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    showSystemCursor={true} />
      <section className='head'>
        <div className='container flexSB toptop justify-between alignmid'>
          <div className='logo'>
            <h1 style={{display:"flex"}}><p style={{width:"20px",minWidth:"20px"}}></p>IEEE</h1>
            <span style={{display:"flex"}}> <p style={{width:"20px",minWidth:"20px"}}></p>IEEE MTT-S HITK SBC CHAPTER</span>
          </div>
          <div>
            <img className="hitksym" src="./images/hitksym.png" alt="ieee logo" />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Head;
