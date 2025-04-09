
import React from 'react';
import card2data from './card2data';
import '../Slider/Slider.css'; 

export const CardTwo = () => {
  return (
    <div className="CardTwo top slide "> 
      {card2data.map((value) => (
        <div className="box" > 
          <div className="img">
            <img src={value.cover} alt="" />
          </div>
          <div className="text">
            <span>{value.catagory}</span>
            <h2>{value.title}</h2>
            <p>{value.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};