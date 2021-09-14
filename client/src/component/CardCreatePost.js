import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import pay4 from '../img/pay4.jpeg';
import './myStyle.css'


export default class CardCreatePost extends Component {

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
    if(holdername == "" || cvv == "" || card == "" || cardname == "" || expiredate == "" || status==""){
      swal("Please fill the form correctly", "Form values cannot be empty", "error");
    }


     else if((!con.test(String(card))) || (card.length != 16))
    {swal("Invalid Card Number !", "card number should be valide pattern", "error");}
   
   else if((!cv.test(String(cvv))) || (cvv.length != 3)){
    
      swal("Invalid Cvv !", "Do not enter less than 6 letters !", "error");
   }
    else{
      swal({
        title: "Are you sure?",
        text: `Name: ${this.state.holdername} | Cvv: ${this.state.cvv} | Card Number: ${this.state.card} | Card name: ${this.state.cardname} | Expire Date: ${this.state.expiredate} | Status: ${this.state.status}}` ,
        icon: "info",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {

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

          // swal("Order Added Successfully!", "Your oder will be accepted"+ `${this.state.status}`, "success");

        }

      })

      swal("Order Added Successfully!", {

        icon: "success",

      });

    } else {

      swal("Your Order is not completed!");

    }

  });
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
    
      <img src="https://cdn.dribbble.com/users/1280935/screenshots/6974685/media/ec4c386222b837da0ff6eabec3f59ba3.gif" width="90%" height="78%" />
    </div>
    <div class="col-6">
      <div className="mycard">
    <div className="card" >

<div className="card-body">

  

        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Card New Payment</h1>


          
          <br/>
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

          <marquee direction="left"><h2 class="display-3"><img src="http://gifgifs.com/animations/jobs-people/office-and-businessmen/Handshake.gif"/>Secure Payment With Estilo Online Shopping Center </h2></marquee>
          </div>
          </div>
          </div>
        </div>
        </div>
        <footer class="page-footer font-small special-color-dark pt-4" style={{ backgroundColor: '#999999' }} >


<div class="container">


  <ul class="list-unstyled list-inline text-center">
    <li class="list-inline-item">
      <a class="btn-floating btn-fb mx-1">
        <i class="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-tw mx-1">
        <i class="fab fa-twitter"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-gplus mx-1">
        <i class="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-li mx-1">
        <i class="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-dribbble mx-1">
        <i class="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>



</div>


<div class="footer-copyright text-center py-3">© 2021 Copyright:
  <a href="https://mdbootstrap.com/">estiloonline@gmail.com</a>
</div>


</footer>
        </div>
    )
  }
}