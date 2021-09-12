import React, { Component } from 'react';
import pay1 from '../img/pay1.jpeg'
import pay2 from '../img/pay2.jpeg'
import pay3 from '../img/pay3.jpeg'


export default class PayHome extends Component {
    render() {
        return (

            
            
            <div className="container">
                <h2 className="text-center">Pay Now</h2>
                <div class="card-group">
  
</div>

<div className = "container border"
              style = {{marginTop:"30px",
              width:'60%',
              
              }}>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pay1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img src={pay2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Luxury, unique Designing</h5>
              <p className="newtext">Our unique, luxury designs make City Furniture a quality brand.....</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pay3} className="d-block w-100" alt="AAAA" />
            <div className="carousel-caption d-none d-md-block">
              <h5>City Furniture Work-shop</h5>
              <p className="newtext">We have around 40 human resources which are experts in making furniture... Moratuwa, SriLanka.....</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

              </div>
               
                <br/>
                <br/>
                <br/>
                <div class="text-center">
                <button type="button" class="btn btn-primary btn-lg"><a href="/add" style={{ textDecoration: 'none', color: 'white' }}>Card Payment</a></button>
                <br/>
                <br/>
                <button type="button" class="btn btn-primary btn-lg"><a href="/refund/add" style={{ textDecoration: 'none', color: 'white' }}>Paypal Payment</a></button>
                </div>
                <section id="hire">

                    <br/>
                    <br/>

<div class="container-fluid">

  <div class="Jumbotron jumbotron-fluid">
    
    <div className="container hire ">
               
      <marquee direction="left"><h2 class="display-3"><img src="http://gifgifs.com/animations/jobs-people/office-and-businessmen/Handshake.gif"/>Secure Payment With Estilo Online Shopping Center </h2></marquee>
        </div>
    </div>
    
  </div>




</section>
            </div>
        )
    }
}

