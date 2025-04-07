import React from 'react'
import './Article.css'

import arrow from '../../assets/Icons/arrow.png'
import asd from '../../assets/Rectangle_3.png'
import qwe from '../../assets/Rectangle_2.png'

const Article = () => {
  return (
        <div className="feature">
        <div className="topic">
            <p>/ FEATURE ARTICLE</p>
        <div><span>See All</span><img src={arrow} /></div>
        </div>

        <div className="brand">
        
            <div className="leftContent">
                <h1>Brand Present</h1>
                <div> <img className="images" src={asd} /></div>
                <h2>We started our store to bring joy 
                    for woman</h2>
                <p>Here you can find a lot of High-quality
                    clothing of famous brands, as well as
                    accessories, face and hair products.
                    we love our customers so we offer free
                    shipping when you reach a certain amount.
                    we also often provide promotional codes and
                    gift cards. Here you can find 
                    everything that will
                    make you little happier.</p>
                    <div className="read"><a href="#">Read the Article</a><img src={arrow} /></div>
                
                

            </div>
            <div className="rightContent">
                <div><img className="images" src={qwe} /></div>
            </div>

        </div>
            

    </div>
  )
}

export default Article
