"use client";
import React from "react";
import Back from "@com/back/Back";
import "./contact.css";
import Testimonial from "../Faculties"
const Contact = () => {
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
      <Back title="Contact us" />
    
      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe
  width="100%"
  height="100%"
  className="absolute inset-0"
  frameborder="0"
  title="map"
  marginHeight="0"
  marginWidth="0"
  scrolling="no"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.652835478224!2d88.41622057501438!3d22.517204934998915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f58b9feec5%3A0x30f8067b73c45d8!2sThe%20Heritage%20College!5e0!3"
  style={{ filter: "none" }} // Remove the filter here
></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Heritage Institute of Technology<br />
Chowbaga Road, Anandapur<br/>
PO:East Kolkata Township, Kolkata 700 107</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">admin@heritageit.edu</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">9830201234</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 testimonal">
    <div className='content grid2 flex124'>
            {team.map((val,key) => (
              <div key={key} className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.Image} alt='' />
                    
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
  </div>
</section>

    </>
  );
};

export default Contact;
