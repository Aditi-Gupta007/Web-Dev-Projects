import React, { useEffect } from "react";
import {useState} from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";

const App = () => {
  let landingData =[
    {text1:"Drops of",text2:"Heaven"},
     {text1:"Woodland",text2:"Glow"},
    {text1:"Seraphic ",text2:"Spark" },
    
  ]
  const[LandCount, setLandCount]= useState(1);
  const[PlayStatus,setPlayStatus]=useState(false);

  return (
    <div>
      
      <Background PlayStatus={PlayStatus} LandCount={LandCount}/>
      <Navbar/>
      <Landing
      setPlayStatus={setPlayStatus} 
      landingData={landingData[LandCount]}
       LandCount={LandCount}
      setLandCount={setLandCount}
      PlayStatus={PlayStatus}
      />
    </div>
  )
}

export default App