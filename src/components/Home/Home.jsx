import React from 'react'
import './Home.css'

import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import BestSeller from '../BestSeller/BestSeller'
import Article from '../Article/Article'
import Categories from '../Categories/Categories'

const Home = () => {
  return (
    <div className="home-page">

        <Header />
        <Hero/>
        <BestSeller />
        <Article />
        <Categories />

    </div>
  )
}

export default Home
