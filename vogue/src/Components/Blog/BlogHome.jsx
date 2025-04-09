import React from 'react'
import cover from '../../assets/cover.png'
import { Slide } from '../Slider/Slide'
import { Card } from './Card'
import { Footer } from '../Footer/Footer'
import { CardTwo } from './CardTwo'

export const BlogHome = () => {

  const data=[
    {
      id:1,
      titleOne:"VOGUE'S MOST ICONIC",
      titleTwo:"MAKING HISTORY",
      paraOne:"Before it's in Fashion, it's in Vogue",
      paraTwo:"From Manhattan To the World",
      name:"By Aditi Gupta",
      subtitle:"Since 1892",
      
    }
  ]

  return (
   <>
   <section className="home"></section>
   <div className="left-content">
    {
      data.map((value)=>{
        return(
          <div className="content">
            <div className="home-img">
              <img src={cover} alt="" />
            </div>
            <div className="text">
              <h1>{value.titleOne}</h1>
              <p>{value.paraOne}</p>
              <span>{value.name}</span>
            </div>
            <div className="text text2">
              <h1>{value.titleTwo}</h1>
              <p>{value.paraTwo}</p>
              <span>{value.subtitle}</span>
            </div>
          </div>
        )
      })
    }
   </div>
   <div className="right-content"  ><Slide/>
   <Card/>
   <CardTwo/>
   <Footer/>
   
   </div>

   </>
  )
}
