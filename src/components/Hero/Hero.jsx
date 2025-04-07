import React from 'react'
import './Hero.css'


import heromobile from '../../assets/heromobile.webp'
import heroo from '../../assets/hero.webp'

const Hero = () => {
  return (
    <div className="hero">
        <img src={heromobile} className="hero-image-mobile" alt="Fall-Collection" />
        <img src={heroo} className="hero-image" alt="Fall-Collection" />
        <div className="hero-content">
            <p>Fall 2024</p>
            <h1>New Collection</h1>
            <a href="#" className="btn">Shop Now →</a>
        </div>

        
    </div>
  )
}


export default Hero;
