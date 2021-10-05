import React, { Component } from 'react';
import pay1 from '../img/pay1.jpeg'
import pay2 from '../img/pay2.jpeg'
import pay3 from '../img/pay3.jpeg'
import './myStyle.css'



export default class PayHome extends Component {
  render() {
    return (

    
      <div class="bodyh">
      

      <div class="row" > 




        <marquee direction="left"><h2 class="display-3"><img src="" />Secure Payment With Estilo Online Shopping Center </h2></marquee>

        <div class="col-6">
          <br />
          <br />
          <br />
          <br />

          <img src="https://i.pinimg.com/originals/f8/c4/22/f8c422a0a0e6793b3f9113d419c5143a.gif" width="90%" height="78%" />
          
        </div>
        <div class="col-6">

          <br />
          <br />


          <div className="container">
            <h2 className="text-center color: #4CAF50;"><font face="Comic sans MS" size="9" style={{ color: 'green' }}>Pay Now</font></h2>
            <div class="card-group">



            </div>

            <div className="container border"
              style={{
                marginTop: "40px",
                width: '90%',

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
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={pay3} className="d-block w-100" alt="AAAA" />
                    <div className="carousel-caption d-none d-md-block">
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

            <br />
            <br />
            <br />
            <div class="text-center">
              <button type="button" class="btn btn-primary btn-lg"><a href="/add" style={{ textDecoration: 'none', color: 'white' }}>Card Payment</a></button>
              <br />
              <br />
              <button type="button" class="btn btn-primary btn-lg"><a href="/refund/add" style={{ textDecoration: 'none', color: 'white' }}>Paypal Payment</a></button>
            </div>
          </div>
        </div>
        <section id="hire">

          <br />
          <br />

          <div class="container-fluid">

            <div class="Jumbotron jumbotron-fluid">

              <div className="container hire ">
                <div>


                </div>
              </div>

            </div>


            

          </div>




        </section>

       



      </div>
      </div>




    )
  }
}

