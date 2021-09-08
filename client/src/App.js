import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreatePost from './component/CreatePost';
import Home from './component/Home';
import EditPost from './component/EditPost';
import PostDetails from './component/PostDetails';
import NavBar from './component/NavBar';
import Refunding from './component/Refunding';

export default class App extends Component {
  render() {
    return ( 
      
      <BrowserRouter>
        <div className="container">
          <NavBar/>
          <Route path="/" exact component={Home}></Route>
          <Route path="/add" component={CreatePost}></Route>
          <Route path="/edit/:id" component={EditPost}></Route>
          <Route path="/post/:id" component={PostDetails}></Route>
          <Route path="/addd" component={Refunding}></Route>

       </div>
      </BrowserRouter>

    )
  }
}