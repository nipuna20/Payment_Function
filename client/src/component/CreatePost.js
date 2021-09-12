import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import pay1 from '../img/pay1.jpeg';
import './myStyle.css'


export default class CreatePost extends Component {

  constructor(props){
    super(props);
    this.state={
      holdername:"",
      cvv:"",
      card:"",
      cardname:"",
      expiredate:"",
      status:"pending"
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{

    e.preventDefault();

    const {holdername,cvv,card,cardname,expiredate,status} = this.state;

    const data ={
      holdername:holdername,
      cvv:cvv,
      card:card,
      cardname:cardname,
      expiredate:expiredate,
      status:status
    }

    console.log(data)
  
    //const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    const con = /^[0-9\b]+$/;
    const cv =  /^[0-9\b]+$/;

    if((!con.test(String(card))) || (card.length != 16))
    {swal("Invalid Card Number !", "card number should be valide pattern", "error");}
   
   else if((!cv.test(String(cvv))) || (cvv.length != 3)){
    
      swal("Invalid Cvv !", "Do not enter less than 6 letters !", "error");
   }
    else{
    axios.post("http://localhost:8000/post/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            holdername:"",
            cvv:"",
            card:"",
            cardname:"",
            expiredate:"",
            status:""

          }
        )
        swal("Payment Successful!", "Your payment successfully done with Paypal", "success");
      }
    })
  }

  }

  render() {
    return (
<div class="row">
  
    <div class="col-6">
      <br/>
      <br/>
      <br/>
      <br/>
    
      <img src={pay1} width="90%" height="78%" />
    </div>
    <div class="col-6">

    <div className="card" >

<div className="card-body">

        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Card New Payment</h1>


          
          
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Card Holdeer Name</label>
              <input type="text"
              className="form-control"
              name="holdername"
              placeholder="Holder Name"
              value={this.state.holdername}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Cvv</label>
              <input type="text"
              className="form-control"
              name="cvv"
              placeholder="XXX"
              value={this.state.cvv}
              onChange={this.handleInputChange}/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}> Card Number</label>
              <input type="text"
              className="form-control"
              name="card"
              placeholder="0000 0000 0000 0000"
              value={this.state.card}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Card Name</label>
              <input type="text"
              className="form-control"
              name="cardname"
              placeholder="Card Name"
              value={this.state.cardname}
              onChange={this.handleInputChange}/>
            </div>
        
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Expire Date</label>
              <input type="date"
              className="form-control"
              name="expiredate"
              placeholder="Expire Date"
              value={this.state.expiredate}
              onChange={this.handleInputChange}/>
            </div>

            

            <label style={{marginBottom:'5px'}}>Order Status: Pending </label>
            <br/>

            

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
          
          </form>
          </div>
          </div>
        </div>
        </div>
        </div>
    )
  }
}