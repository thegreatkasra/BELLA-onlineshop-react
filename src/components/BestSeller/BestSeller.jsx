import React from 'react'
import './BestSeller.css'

import arrow from '../../assets/Icons/arrow.png'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'

const BestSeller = () => {
  return (
    <div className="best_seller">

        
    <div className="topic">
        <p>/ Best seller</p>
        <div><span>See All</span><img src={arrow} /></div>
    </div>

    <div className="cards">

        <div className="card">
            <div className="pic">
                <img src={one} />
            </div>
            <div className="info">
                <span className="text">Fully Dressed Merry Shirt</span>
                <span className="text-2">110 $</span>
                <span className="text-3">4 colors</span>
            </div>

        </div>

        <div className="card">
            <div className="pic">
                <img src={two} />
            </div>
            <div className="info">
                <span className="text">Skirt Six of June</span>
                <span className="text-2">95 $</span>
                <span className="text-3">1 colors</span>
            </div>

        </div>

        <div className="card">
            <div className="pic">
                <img src={three} />
            </div>
            <div className="info">
                <span className="text">Long Jacket Corolla</span>
                <span className="text-2">110 $</span>
                <span className="text-3">4 colors</span>
            </div>

        </div>

        <div className="card">
            <div className="pic">
                <img src={four} />
            </div>
            <div className="info">
                <span className="text">Tommy Hilfiger Denim Coat</span>
                <span className="text-2">110 $</span>
                <span className="text-3">4 colors</span>
            </div>

        </div>

        <div className="card">
            <div className="pic">
                <img src={one} />
            </div>
            <div className="info">
                <span className="text">Fully Dressed Merry Shirt</span>
                <span className="text-2">110 $</span>
                <span className="text-3">4 colors</span>
            </div>

        </div>

        <div className="card">
            <div className="pic">
                <img src={three} />
            </div>
            <div className="info">
                <span className="text">Fully Dressed Merry Shirt</span>
                <span className="text-2">110 $</span>
                <span className="text-3">4 colors</span>
            </div>

        </div>

        <div className="card">
            <div className="pic">
                <img src={two} />
            </div>
            <div className="info">
                <span className="text">Fully Dressed Merry Shirt</span>
                <span className="text-2">110 $</span>
                <span className="text-3">4 colors</span>
            </div>

        </div>

    </div>


    </div>
  )
}

export default BestSeller
