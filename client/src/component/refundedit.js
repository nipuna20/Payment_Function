import React, { Component } from 'react';
import axios from 'axios';

export default class EditPost extends Component {


  constructor(props){
    super(props);
    this.state={
      firstn:"",
      lastn:"",
      email:"",
      phone:"",
      card:"",
      expiredate:"",
      Cvv:""
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
    const id = this.props.match.params.id;
    const {firstn,lastn,email,phone,card,expiredate,Cvv,} = this.state;

    const data ={
      firstn:firstn,
      lastn:lastn,
      email:email,
      phone:phone,
      card:card,
      expiredate:expiredate,
      Cvv:Cvv
    }

    console.log(data)

    axios.put(`http://localhost:8000/refund/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Post Updated Successfully")
        this.setState(
          {
            firstn:"",
            lastn:"",
            email:"",
            phone:"",
            card:"",
            expiredate:"",
            Cvv:""
          }
        )
      }
    })


  }


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          firstn:res.data.post.firstn,
          lastn:res.data.post.lastn,
          email:res.data.post.email,
          phone:res.data.post.phone,
          card:res.data.post.card,
          expiredate:res.data.post.expiredate,
          Cvv:res.data.post.Cvv,
        });

        console.log(this.state.post);
      }

    });

  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Create new Payment</h1>
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





            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update
            </button>
            <br/>
            <button className="btn btn-success"><a href="/addd" style={{textDecoration:'none',color:'white'}}>Create New Payment</a></button>
          </form>
          
        </div>
    )
  }
}