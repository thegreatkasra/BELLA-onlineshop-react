import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>

            <div className="logo">
                <a href="#">BELLA</a>
            </div>

            <div className="footerNav">
                <ul>
                    <li><h1>Information</h1></li>
                    <li>Shipping</li>
                    <li>FAQ</li>
                    <li>Returns</li>
                    <li>Size Guide</li>
                </ul>
                <ul>
                    <li><h1>Account</h1></li>
                    <li>My Account</li>
                    <li>Order History</li>
                    <li>Wishlist</li>
                    <li>Track Order</li>
                </ul>
                <ul>
                    <li><h1>Social</h1></li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>TikTok</li>
                </ul>        <ul>
                    <li><h1>Account</h1></li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Wishlist</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>

            <div className="subscribe">
                <h1>Subscribe For Updates</h1>
                <input placeholder="Emai Address" type="email"/>
                <p>By subscribing , you Agree our terms<br/> of use and privacy policy and conditions !</p>
            </div>


            </footer>
            <hr/>
            <div className="copyright">
            <span>COPY RIGHT © 2024 ALL RIGHTS RESERVED-Designed By Kasra Torabi Mansour</span>
            </div>
    </div>
  )
}

export default Footer
