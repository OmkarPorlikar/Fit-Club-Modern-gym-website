import React from 'react'
import './Hero.css'
import NumberCounter from 'number-counter'
import { Header } from '../Header/Header'
import heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'

export const Hero = () => {
  const transition = {type:'spring',duration:3}

  return (

<div className='hContainer flexCenter innerWidth '>
<div className='orangeGradient'> </div>
{/* left Section  */}
<div className='left-container flexColStart'>
  <Header/> 

<div className='best-ad flexStart'>
<motion.div
 transition={{type:"tween" , duration:3} } 
 className='slider'
 initial={{left:"230px"}}
 whileInView={{left:"10px"}}
 > 
</motion.div>
<span> THE BEST FITNESS 
 CLUB IN THE TOWN</span>
</div>


<div className="hero-text">
              <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal body</span>
              </div>
              <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
              </div>
            </div>

<div className="figurs flexCenter">
              <div >
                <span><NumberCounter end={140} start={100} delay='4' preFix='+'/></span>
                <span>EXPERT COACHES</span>
              </div>
              <div>
                <span><NumberCounter end={978} start={800} delay='4' preFix='+'/></span>
                <span>MEMBERS JOINED</span>
              </div>
              <div>
                <span><NumberCounter end={50} start={10} delay='4' preFix='+'/></span>
                <span>FITNESS PROGRAMS</span>
              </div>
            </div>

            <div className="hero-buttons flexCenter">
              <button className="btn">Get Started</button>
              <button className="btn">learn More</button>
            </div>
</div>

{/* right Section */}

<div className='right-container '>
    
<button className='btn'>Join Now</button>

<motion.div
transition={transition}
whileInView={{right:'4rem'}}
initial={{right:'-1rem'}}
className="heart-rate">
  <img src={heart} alt="heart flexColStart" />
  <span>Heart Rate</span>
  <span>116 BPM</span>
</motion.div>

<img src={hero_image} alt="hero-image" className="hero-image" />
<motion.img
initial={{right:'11rem'}}
whileInView={{right:'20rem'}}
transition={transition}
src={hero_image_back} alt="hero-image-back" className="hero-image-back" />

<motion.div
transition={transition}
whileInView={{right:'28rem'}}
initial={{right:'37rem'}}
className="calories">
  <img src={calories} alt="calories" />
  <div>
    <span>Calories burned</span><span>220 kcal</span>
  </div>
</motion.div>




</div>


</div>
    )
}
