import React from "react"
import "./stylesheet/Hero.css"
import mobileGif from './assets/redMobile.gif'

export default function Hero() {
  return(
    
 <>
<main className='hp-container '>  
<img className= "mobile-img" src={mobileGif} alt="no alternative text"  />
<div className="sq"></div>
<div className='title-mobile'> 
<div className='name'> <span className="dsk-name meet">
meet</span><div style={{fontSize:'2.1rem'}}>meet</div>rachel</div>
<div className="sub-title">CREATIVE DEVELOPER</div>

</div>

</main>



</>
    
  )

}