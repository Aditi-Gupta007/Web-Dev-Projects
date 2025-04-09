import React from 'react'
import Cdata from './Cdata'
import './Card.css'
export const Card = () => {
  return (
    <>
   <div className="card grid top">
    {Cdata.map((value)=>{
        return(
 <div className="box" key={value.id}>
 <div className="img">
     <img src= {value.cover} alt="" />
 </div>
 <span> {value.catagory}</span>
 <h2> {value.title}</h2>
</div>

        )
    })}
   
   </div>
    </>
  )
}
