import React from 'react'
import ig  from   '../../assets/ig.png'
import fb   from   '../../assets/fb.png'
import link   from   '../../assets/link.png'
import mail  from   '../../assets/mail.png'
import './Footer.css'
export const Footer = () => {
  return (
    <>
    <footer>
        <div className="para">
          <p>© 2024 Aditi Gupta- All Rights Reserved. </p>
          </div>
          <div className="icon">
           <a href="https://www.facebook.com/Vogue/"><img src={fb} alt="" /></a>
           <a href="https://www.instagram.com/voguemagazine/"><img src={ig} alt="" /></a>
           <a href="https://www.linkedin.com/in/aditi-gupta-13624124a/"><img src={link} alt="" /></a>
           <a href="mailto:agpt2026@gmail.com"><img src={mail} alt="" /></a>
          </div>
        </footer>
    </>
  )
}
