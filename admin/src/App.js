import React, {Component} from 'react';
import CardHome from './component/CardHome';
import cardEditPost from './component/CardEditPost';
import CardPostDeatails from './component/CardPostDetails';
import PaypalHome from './component/PaypalHome';
import PaypalPostDetails from './component/PaypalPostDetails';
import PaypalEditPost from './component/PaypalEditPost';



export default class App extends Component {
  render() {
    return ( 
     <BrowserRouter>
      <div className="container">
        <NavBar/>

        <Route path="/cardpayment" exact component={CardHome}></Route>
        <Route path="/edit/:id" component={CardEditPost}></Route> 
        <Route path="/post/:id" component={CardPostDetails}></Route>

        <Route path="/refund" exact component={PaypalHome}></Route>
        <Route path="/refund/edit/:id" component={PaypalEditPost}></Route>
        <Route path="/refund/post/:id" component={PaypalPostDetails}></Route>

        </div>
      </BrowserRouter>

    )
  }
}








