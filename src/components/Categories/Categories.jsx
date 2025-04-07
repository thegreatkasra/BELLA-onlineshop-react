import React from 'react'
import './Categories.css'

import arrow from '../../assets/Icons/arrow.png'
import KNITWEAR from '../../assets/Collection/KNITWEAR.png'
import CLOTHING from '../../assets/Collection/CLOTHING.png'
import HANDBAG from '../../assets/Collection/HANDBAG.png'
import SCARF from '../../assets/Collection/SCARF.png'
import DRESSES from '../../assets/Collection/DRESSES.png'
import ACCESORIES from '../../assets/Collection/ACCESORIES.png'
import JEWERLY from '../../assets/Collection/JEWERLY.png'
import FOOTWEARS from '../../assets/Collection/FOOTWEARS.png'

const Categories = () => {
  return (
        <div className="collections">

            <div className="topic">
                <p>/ COLLECTIONS</p>
                <div><span>See All</span><img src={arrow} /></div>
            </div>

        <div className="cards_wrap">

            
                <div className="card">
                    <div className="pic">
                        <img src={KNITWEAR} />
                    </div>
                    <div className="info">
                        <span class="text">KNITWEAR</span>
                    </div>
                </div>

                <div className="card">
                    <div className="pic">
                        <img src={CLOTHING} />
                    </div>
                    <div className="info">
                        <span class="text">CLOTHING</span>
                    </div>
                </div>
                <div class="card">
                        <div class="pic">
                            <img src={HANDBAG} />
                        </div>
                        <div class="info">
                            <span class="text">HANDBAG</span>
                        </div>
                    </div>

                    <div class="card">
                        <div class="pic">
                            <img src={SCARF} />
                        </div>
                        <div class="info">
                            <span class="text">SCARF</span>
                        </div>
                    </div>

                    <div class="card">
                        <div class="pic">
                            <img src={DRESSES} />
                        </div>
                        <div class="info">
                            <span class="text">DRESSES</span>
                        </div>
                    </div>

                    <div class="card">
                        <div class="pic">
                            <img src={ACCESORIES} />
                        </div>
                        <div class="info">
                            <span class="text">ACCESORIES</span>
                        </div>
                    </div>

                    <div class="card">
                        <div class="pic">
                            <img src={JEWERLY} />
                        </div>
                        <div class="info">
                            <span class="text">JEWERLY</span>
                        </div>
                    </div>

                    <div class="card">
                        <div class="pic">
                            <img src={FOOTWEARS} />
                        </div>
                        <div class="info">
                            <span class="text">FOOTWEARS</span>
                        </div>
                    </div>
                
                
            </div>
        </div>

                
  )
}

export default Categories
