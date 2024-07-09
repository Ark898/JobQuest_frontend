import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiGoogle, SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Street 10 Bengaluru, India",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Google",
      location: "Street 10 Bengaluru, India",
      openPositions: 5,
      icon: <SiGoogle />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Street 10 Bengaluru, India",
      openPositions: 20,
      icon: <FaApple />,
    },
    {
      id: 4,
      title: "Microsoft",
      location: "Street 10 Bengaluru, India",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
   
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions : {element.openPositions}</button>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default PopularCompanies;