import React, { useState } from 'react'
import {testimonialsData} from '../../data/testimonialsData.js'
import './Testimonials.css'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow  from '../../assets/leftArrow.png'
import {motion} from 'framer-motion'
export const Testimonials = () => {
    const [inc , setInc] = useState(0);
    // const testL = testimonialsData.length;
  return (
    <div className='t-wrapper flexCenter' style={{color:"white"}}>

<div className="left-t flexColStart paddings innerWidth">
<span>TESTIMONIALS</span>
<span className='stroke-text'>WHAT THEY</span>
<span>SAY ABOUT US</span>
<span> {testimonialsData[inc].review} </span>
<span>
<span>    {testimonialsData[inc].name}  </span> - {testimonialsData[0].status}
</span>
</div>

<div className="right-t">
  <div className='right-t-container'> 
    <motion.div
    initial={{left:"-30rem"}}
    whileInView={{left:"-25rem"}}
    transition={{type:"spring" ,duration:3}}

    ></motion.div>
    <motion.div></motion.div>
<motion.img
key={inc}
transition={{type:"spring" ,duration:3}}
initial={{right:"2rem"}}
whileInView={{right:"7.5rem"}}
animate={{opacity:1,x:0}}
exit={{opacity:0,x:-100}}
src={testimonialsData[inc].image}
/> 
</div>
<div className="arrows">
<img src={leftArrow} alt="Left Arrow " onClick={()=> {setInc(( (inc <2 )? inc +1 : inc  )) }} />
<img src={rightArrow} alt="Right Arro"  onClick={()=> {setInc(( (inc >0 )? inc -1 : inc  )) }} />
</div>
</div>
    </div>
  )
}
