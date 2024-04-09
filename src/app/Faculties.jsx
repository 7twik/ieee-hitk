"use client";
import React from "react"
import Heading from "@com/heading/Heading"
import "./style.css"

const Faculties = () => {
  const [team, setTeam] = React.useState([]);

  React.useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch("/api/com");
        const data = await response.json();
        let dd = data.data;
        let ddd=[];
        for(let i =0 ;i<dd.length;i++){
         if ( dd[i].Type === "Fac" && dd[i].Status === "Cur")
         ddd.push(dd[i]);
        }
        console.log(ddd)
        setTeam(ddd);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchTeam();
  }, []);
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
        <Heading  title='Our Faculty Advisor'  />
          <div className='content dflex151'>
            {team.map((val,key) => (
              <div key={key} className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img className="img22" src={val.Image} alt='' />
                    
                  </div>
                  <div className='name'>
                    <h2>{val.Name}</h2>
                    <span>{val.Post}</span>
                    <h4>{val.Gm}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Faculties;
