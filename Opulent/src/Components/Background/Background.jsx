import React from 'react';
import './Background.css'
import vid1 from '../../assets/vid1.mp4'
import vid2 from '../../assets/vid2.mp4'
import vid3 from '../../assets/vid3.mp4'
import vid4 from '../../assets/vid4.mp4'
import vid5 from '../../assets/vid5.mp4'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import bg from '../../assets/bg.jpg'
const Background = ({PlayStatus,LandCount}) => {
 
    if(PlayStatus){

     return(
        <video  className="background" autoPlay loop muted>
            <source src={vid4} type='video/mp4'/>
        </video>
     );
    }

    
        else if(LandCount===0)
            {
                return <img src={img3} alt="" className="background fade-in" />
            }

        else if(LandCount===1)
            {
                return <img src={img1} alt="" className="background fade-in" />
            }

            else if(LandCount===2)
                {
                    return <img src={img2} alt="" className="background fade-in" />
                }
            }
export default Background