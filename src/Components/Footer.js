
import React, { useState } from 'react';
import '../Assert/Css/Footer.css'
import dog from '../Assert/img/dog.gif';
import cat from '../Assert/img/cat.gif';
const Footer = () => {
    const [isdog,setIsdog]=useState(true);
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, cbe</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>1029034650</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>ashwin@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  {/* <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" /></a> */}
                </div>
                <div className="footer-text"></div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <i className="fab fa-facebook-f facebook-bg"></i>
                  <i className="fab fa-twitter twitter-bg"></i>
                  <i className="fab fa-google-plus-g google-bg"></i>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <img src={isdog?dog:cat} onMouseOut={()=>{setIsdog(!isdog)}} onMouseOver={()=>{setIsdog(!isdog)}}></img>
                
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button><i className="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
  
         
            <div >
              <div className="copyright-text">
                <p>Copyright &copy; petfinder@2024</p>
           
            </div>
            
     
        </div>
      </div>
    </footer>
  );
};

export default Footer;
