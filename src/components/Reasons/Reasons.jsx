import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import Tick from '../../assets/tick.png'
import addidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import nb from '../../assets/nb.png'
export const Reasons = () => {
  return (
    <div className='r-container flexStart innerWidth paddings'>

<div className="images flexStart">
 <img src={image1} alt="" className='image1' />
<div className="allImg flexColCenter"> 
<span> <img src={image2} alt=""  className='image2'/></span>
<div className="twoImg flexCenter">  
<span> <img src={image3} alt=""  className='image3'/></span>
<span><img src={image4} alt="" className='image4' /></span>
</div>
</div>
</div>

<div className="que">

</div>

<div className="left-side flexColStart">
<span>SOME REASONS</span>
<div className='hero-text'>
    <span className='stroke-text'>   WHY</span>
  CHOOSE US?
</div>
<ul className='why-us '>
    <li> <img src={Tick} alt="" /> <span> OVER 140+ EXPERT COACHS</span></li>
    <li><img src={Tick} alt="" /> <span> TRAIN SMARTER AND FASTER THAN BEFORE</span></li>
    <li><img src={Tick} alt="" /><span>  1 FREE PROGRAM FOR NEW MEMBER</span></li>
    <li><img src={Tick} alt="" /> <span>RELIABLE PARTNERS</span></li>
</ul>

<div className="partners flexColStart">
<p>OUR PARTNERS</p>

<div className="allLogo">
<span> <img src={addidas} alt="" /> </span> 
<span> <img src={nb} alt="" /></span>
<span> <img src={nike} alt="" /> </span> 

</div>
</div>

</div>
    </div>
  )
}
