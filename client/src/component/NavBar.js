import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Payments</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/cardpayment/">Card Payment Table</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/refund">Paypal Payment Table</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Payment List</a>
            </li>
            <li class="nav-item">
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
        
    )
  }
}
          
    
