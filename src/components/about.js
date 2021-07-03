import React from 'react'
import Footer from "./footer";
import './about.css'

function About() {
  return (
    <div>
      <div className="main-sec inner-page">
      
      </div>
      <section className="banner-bottom py-5">
        <div className="container py-md-5">
          <div className="row grids-wthree-info">
           
            <div className="col-lg-6 ab-info-con ab-inf-page text-left">
              <h4>About Our Products</h4>
              <p>
                The best in the markets. Good quality.  
              </p>
              
            </div>
          </div>
          <div className="row grids-wthree-info text-center">
            <div className="col-lg-4 ab-content">
              <div className="ab-info-con">
                <h4>Fast & Free Delivery</h4>
                
              </div>
            </div>
            <div className="col-lg-4 ab-content">
              <div className="ab-info-con">
                <h4>Safe & Secure Payments</h4>
                
              </div>
            </div>
            <div className="col-lg-4 ab-content">
              <div className="ab-info-con">
                <h4>100% Money Back Guarantee</h4>
                
              </div>
            </div>
          </div>
        </div>
      </section>

         
      <Footer />
    </div>
  );
}

export default About;
