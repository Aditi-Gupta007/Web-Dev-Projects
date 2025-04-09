import './Landing.css'
import arrow from '../../assets/arrow.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'
const  Landing = ({ setPlayStatus,landingData, LandCount,setLandCount,PlayStatus})=>{
 
  return (
    <div className='landing'>

<div className="text">
<p>{landingData.text1}</p>
<p>{landingData.text2}</p>
</div>
<div className="explore">
   <p>Newly Launched</p>
   <img src={arrow} alt="" />
</div>
<div className="dot-play">
  <ul className="dots">
    <li onClick={()=>setLandCount(0)} className={LandCount===0?"dot orange":"dot"}></li>
    <li onClick={()=>setLandCount(1)} className={LandCount===1?"dot orange":"dot"}></li>
    <li onClick={()=>setLandCount(2)} className={LandCount===2?"dot orange":"dot"}></li>

  </ul>
<div className="play">
  <img onClick={()=>setPlayStatus(!PlayStatus)} src={PlayStatus?pause_icon:play_icon}alt="" />
  <p>Play Video</p>
</div>
</div>
</div>
  )
}

export default Landing