import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';



export default class Refunding extends Component {

  constructor(props){
    super(props);
    this.state={
      firstn:"",
      lastn:"",
      email:"",
      phone:"",
      card:"",
      expiredate:"",
      Cvv:"",
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

    const {firstn,lastn,email,phone,card,expiredate,Cvv,status} = this.state;

    const data ={
      firstn:firstn,
      lastn:lastn,
      email:email,
      phone:phone,
      card:card,
      expiredate:expiredate,
      Cvv:Cvv,
      status:status
    }

    console.log(data)
    const re = /^[0-9\b]+$/;
    const em = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const cv = /^[0-9\b]+$/;

    if((!re.test(String(phone))) || (phone.length != 10))
    {swal("Contact Number invaide", "contact number should be valide pattern", "error");}
    else if((!em.test(String(email)))){
      swal("Invalid email address !", "Please enter valid email address !", "error");}
    else if((!cv.test(String(Cvv))) || (Cvv.length != 3)){
      swal("Invalid Cvv !", "Do not enter less than 6 letters !", "error");

    }
    else {
    axios.post("http://localhost:8000/refund/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            firstn:"",
            lastn:"",
            email:"",
            phone:"",
            card:"",
            expiredate:"",
            Cvv:"",
            status:""

          }
        )

        swal("Order Added Successfully!", "Your oder will be accepted", "success");
      }
    })


  }
  }
  render() {
    return (
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Paypal New Payment</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >First Name</label>
              <input type="text"
              className="form-control"
              name="firstn"
              placeholder="First Name"
              value={this.state.firstn}
              onChange={this.handleInputChange}/>
            </div>
            
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Last Name</label>
              <input type="text"
              className="form-control"
              name="lastn"
              placeholder="Last Name"
              value={this.state.lastn}
              onChange={this.handleInputChange}/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Email</label>
              <input type="text"
              className="form-control"
              name="email"
              placeholder="xxxx@gmail.com"
              value={this.state.email}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Phone Number</label>
              <input type="text"
              className="form-control"
              name="phone"
              placeholder="0XX-XXXXXXX "
              value={this.state.phone}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Card</label>
              <input type="text"
              className="form-control"
              name="card"
              placeholder="0000 0000 0000 0000"
              value={this.state.card}
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

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Cvv</label>
              <input type="text"
              className="form-control"
              name="Cvv"
              placeholder="Cvv"
              value={this.state.Cvv}
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