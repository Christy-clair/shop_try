import React from "react";
import Header from "./header";
import Footer from "./footer";

function Home() {
  return (
    <div>
      <div className="main-sec">
        <Header />
        <div className="banner-wthree-info container">
          <div className="row">
            <div className="col-lg-5 banner-left-info">
              <h3>
                The Largest Range of HandBags, Shop Now!
              </h3>              
            </div>
          </div>
        </div>
      </div>

      <section className="banner-bottom py-5">
        <div className="container py-md-3">
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

export default Home;
