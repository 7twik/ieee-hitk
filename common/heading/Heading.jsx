import React from "react"

const Heading = ({ subtitle, title }) => {
  
  return (
    <>
      <div id='heading'>
        <h3 className="headh1">{subtitle} </h3>
        <h1 className="headh1" style={{color:"white"}}>{title} </h1>
      </div>
    </>
  )
}

export default Heading
