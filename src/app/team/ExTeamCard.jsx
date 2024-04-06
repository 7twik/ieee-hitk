"use client"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignalMessenger,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./team.css";
const ExTeamCard = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch("/api/com");
        const data = await response.json();
        let dd = data.data;
        let ddd=[];
        for(let i =0 ;i<dd.length;i++){
         if ( dd[i].Type === "Stu" && dd[i].Status === "Ex")
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
            <a href={val.Li} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href={val.Tw} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                  href={`mailto:${val.Gm}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faSignalMessenger} size="2x" />
                </a>
            </div>
          </div>
          <div className="details details12">
            <h2 className="text-white">{val.Name}</h2>
            <h4 className="text-white">{val.Post}</h4>

          </div>
        </div>
      
        </div>
      ))}
    

     
    </div>
  );
};

export default ExTeamCard;
