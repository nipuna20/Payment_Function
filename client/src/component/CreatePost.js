import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePost extends Component {

  constructor(props){
    super(props);
    this.state={
      holdername:"",
      cardnumber:"",
      totalamount:"",
      cardvalidation:"",
      paymentmethod:"",
      expiredate:"",
      status:""
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

    const {holdername,cardnumber,totalamount,cardvalidation,paymentmethod,expiredate,status} = this.state;

    const data ={
      holdername:holdername,
      cardnumber:cardnumber,
      totalamount:totalamount,
      cardvalidation:cardvalidation,
      paymentmethod:paymentmethod,
      expiredate:expiredate,
      status:status
    }

    console.log(data)

    axios.post("/post/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            holdername:"",
            cardnumber:"",
            totalamount:"",
            cardvalidation:"",
            paymentmethod:"",
            expiredate:"",
            status:""

          }
        )
      }
    })


  }

  render() {
    return (
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Create new Payment</h1>
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
              <label style={{marginBottom:'5px'}}>Card Number</label>
              <input type="text"
              className="form-control"
              name="cardnumber"
              placeholder="Enter card Number"
              value={this.state.cardnumber}
              onChange={this.handleInputChange}/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Total Amount</label>
              <input type="text"
              className="form-control"
              name="totalamount"
              placeholder="Total amount"
              value={this.state.totalamount}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Card Validation</label>
              <input type="text"
              className="form-control"
              name="cardvalidation"
              placeholder="Card Validationt"
              value={this.state.cardvalidation}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Payment Method</label>
              <input type="text"
              className="form-control"
              name="paymentmethod"
              placeholder="Payment Method"
              value={this.state.paymentmethod}
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
    )
  }
}