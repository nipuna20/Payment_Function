import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreatePost from './component/CreatePost';
import Home from './component/Home';
import EditPost from './component/EditPost';
import PostDetails from './component/PostDetails';
import NavBar from './component/NavBar';
import Refunding from './component/Refunding';
import refundhome from './component/refundhome';
import refundpost from './component/refundpost';
import refundedit from './component/refundedit';
import PayHome from './component/PayHome';

export default class App extends Component {
  render() {
    return ( 
      
      <BrowserRouter>
        <div className="container">
          <NavBar/>
          <Route path="/" exact component={PayHome}></Route>
          <Route path="/cardpayment" exact component={Home}></Route>
          <Route path="/add" component={CreatePost}></Route>
          <Route path="/edit/:id" component={EditPost}></Route>
          <Route path="/post/:id" component={PostDetails}></Route>
         

          <Route path="/refund" exact component={refundhome}></Route>
          <Route path="/refund/edit/:id" component={refundedit}></Route>
          <Route path="/refund/post/:id" component={refundpost}></Route>
          <Route path="/refund/add" component={Refunding}></Route>

       </div>
      </BrowserRouter>

    )
  }
}