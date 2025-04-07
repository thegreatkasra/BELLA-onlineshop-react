import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import menu from '../../assets/Icons/icons8-menu-50.png'
import arrow from '../../assets/Icons/arrow.png'
import bascket from '../../assets/Icons/bascket.png'
import fav from '../../assets/Icons/fav.png'
import search from '../../assets/Icons/search.png'
import account from '../../assets/Icons/account.png'

const Header = () => {
  return (
    <div className="header">

      <div className="note">
        <span>Free shipping in IRAN for order over 200$</span>
      </div>

      <div className="banner">

        <div className="nav">
            

                <div className="pages">
                    <a href="#"><img className="menu" src={menu} alt=""/></a>
                    <ul>
                        <li><Link to="/" >New arrivals</Link></li>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Beauty</a></li>
                        <li><a href="#">Footwear</a></li>
                    </ul>
                </div>

                <div className="logo">
                  <Link to="/" >BELLA</Link>
                </div>

                <div className="buttons">
                    <div className="lan"><span>United States</span><img src={arrow} alt="languages"/></div>
                    <a href="#"><img src={bascket} alt="buy"/></a>
                    <a href="#"><img src={fav} alt="favorites"/></a>
                    <a href="#"><img src={search} alt="search"/></a>
                    <Link to="/account" ><img src={account} alt="account"/></Link>
                </div>
            
        </div>
      </div>

    </div>
  )
}

export default Header



