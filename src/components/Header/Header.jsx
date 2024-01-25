import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
import bars from '../../assets/bars.png'
import { useEffect } from 'react'
export const Header = () => {
  const [toggle , setToggle] = useState(false)
  const mobile = window.innerWidth<= 786? true : false;

  const handleToggle=()=>{
    console.log(toggle , "toggle")
setToggle((prev)=> !prev)
  }

  return (
  <section className='h-wrapper flexCenter'>
<img src={logo} alt="" className='logo'/>

<div  className='toggleContainer' onClick={handleToggle}>
  <img src={bars} alt="" className="toggleButton" />
</div>  

 
<ul  className={`h-menu  flexCenter  ${toggle ? 'hidden ' : ''}  `}  >
    <li>Home</li>
    <li>Programs</li>
    <li>Why Us</li>
    <li>Plans</li>
    <li>Testimonials</li>
</ul>
  </section>
  )
}
