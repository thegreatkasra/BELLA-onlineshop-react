import React from 'react'
import './Account.css'

import Header from './../Header/Header'
import Footer from './../Footer/Footer'

import account from '../../assets/account.png'
import apple from '../../assets/Icons/apple.svg'
import google from '../../assets/Icons/google.svg'

const Account = () => {
  return (
    <div className='Account-page'>
      <div>
        <Header />
      </div>
      <div className="account">
        <div className="left_container">
          <img src={account} alt="Account" />
        </div>
        <div className="right_container">
          <form action="#" method="post">
            <div className="signin">
              <h2>Log into your account</h2>
              <input type="email" id="email" name="email" placeholder="Email" />
              <input type="password" id="password" name="password" placeholder="Password" />
              <button type="submit" className="submit-btn">LOG IN</button>
              <label htmlFor="button">By login you accept our term of use and policy.</label>
              <div className="remmember">
                <div className="checkbox">
                  <input type="checkbox" id="remember-me" name="remember_me" />
                  <div><label htmlFor="remember-me">Remember Me</label></div>     
                </div>
                <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
              </div>
              <button className="apple_btn"><img src={apple} alt="Apple" /><span>Login with Apple</span></button>
              <button className="apple_btn"><img src={google} alt="Google" /><span>Login with Google</span></button>
            </div>
            <div className="or">
              <hr />
              <span>OR</span>
              <hr />
            </div>

            <div className="signin">
              <h2>Create an Account</h2>
              <input type="email" id="email2" name="email" placeholder="Email" />
              <input type="text" id="fullname" name="fullname" placeholder="Full Name" />
              <input type="password" id="password2" name="password" placeholder="Password" />
              <input type="password" id="repeat_password" name="Repeat_password" placeholder="Repeat Password" />
              <button type="submit" className="submit-btn">SIGN UP</button>

              <div className="remmember">
                <div className="checkbox">
                  <input type="checkbox" id="remember-me2" name="remember_me" />
                  <div><label htmlFor="remember-me2">Accept our term of use and policy</label></div>     
                </div>
              </div>
              <button className="apple_btn"><img src={apple} alt="Apple" /><span>Signup with Apple</span></button>
              <button className="apple_btn"><img src={google} alt="Google" /><span>Signup with Google</span></button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <hr id="before_footer" />
        <Footer />
      </div>
    </div>
  )
}

export default Account