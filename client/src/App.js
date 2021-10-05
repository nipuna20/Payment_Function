import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CardCreatePost from './component/CardCreatePost';
import CardHome from './component/CardHome';
import CardEditPost from './component/CardEditPost';
import CardPostDetails from './component/CardPostDetails';
import NavBar from './component/NavBar';
import PaypalCreatePost from './component/PaypalCreatePost';
import PaypalHome from './component/PaypalHome';
import PaypalPostDetails from './component/PaypalPostDetails';
import PaypalEditPost from './component/PaypalEditPost';
import PayHome from './component/PayHome';
import Footer from './component/Footer';

export default class App extends Component {
  render() {
    return ( 
      
      <BrowserRouter>
       <NavBar/>
        <div className="container">
         
          <Route path="/" exact component={PayHome}></Route>
          <Route path="/cardpayment" exact component={CardHome}></Route>  
          <Route path="/add" component={CardCreatePost}></Route>
          <Route path="/edit/:id" component={CardEditPost}></Route>
          <Route path="/post/:id" component={CardPostDetails}></Route>
         

          <Route path="/refund" exact component={PaypalHome}></Route>
          <Route path="/refund/edit/:id" component={PaypalEditPost}></Route>
          <Route path="/refund/post/:id" component={PaypalPostDetails}></Route> 
          <Route path="/refund/add" component={PaypalCreatePost}></Route>

       </div>
       <Footer/>
      </BrowserRouter>

    )
  }
}