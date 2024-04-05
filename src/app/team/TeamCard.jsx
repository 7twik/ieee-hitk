"use client"
import { useState, useEffect } from "react";

const TeamCard = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch("/api/com");
        const data = await response.json();
        let dd = data.data;
        let ddd=[];
        for(let i =0 ;i<dd.length;i++){
         if ( dd[i].Type === "Stu" && dd[i].Status === "Cur")
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
    <div className="teamflex12">
        {team.map((val, index) => (
        <div key={index}>
         
        <div className="items12 shadow">
          <div className="img">
            <img src={val.Image} alt="" />
            <div className="overlay">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-tiktok icon"></i>
            </div>
          </div>
          <div className="details details12">
            <h2 style={{color:"white"}} >{val.Name}</h2>
            <h4 style={{color:"white"}}>{val.Post}</h4>

          </div>
        </div>
      
        </div>
      ))}
    

     
    </div>
  );
};

export default TeamCard;
