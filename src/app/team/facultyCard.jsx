import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignalMessenger,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./team.css";
const facultyCard = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const fetchFaculty = async () => {
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
       setFaculty(ddd);
      } catch (error) {
        console.error("Error fetching faculty:", error);
      }
    };

    fetchFaculty();
  }, []);

  return (
    <div className="facultyflex12">
      {faculty.map((val, index) => (
        <div key={index} className="items12 shadow">
          <div className="img">
            <img src={val.Image} alt="" />
            <div className="overlay">
            <a href={val.Li} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href={val.Tw} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href={val.Gm} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faSignalMessenger} size="2x" />
                </a>
            </div>
          </div>
          <div className="details details12">
            <h2  style={{color:"white"}}>{val.Name}</h2>
            <h4 style={{color:"white"}}>{val.Post}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default facultyCard;