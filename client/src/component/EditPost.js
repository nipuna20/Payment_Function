import React, { Component } from 'react';
import axios from 'axios';

export default class EditPost extends Component {


  constructor(props){
    super(props);
    this.state={
      holdername:"",
            cvv:"",
            card:"",
            cardname:"",
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
    const id = this.props.match.params.id;
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

    axios.put(`/post/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Post Updated Successfully")
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
      }
    })


  }


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          holdername:res.data.post.holdername,
          cvv:res.data.post.cvv,
          card:res.data.post.card,
          cardname:res.data.post.cardname,
          expiredate:res.data.post.expiredate,
          status:res.data.post.status,
        });

        console.log(this.state.post);
      }

    });

  }

  render() {
    return (
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
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
              <label style={{marginBottom:'5px'}}>Card Number</label>
              <input type="text"
              className="form-control"
              name="card"
              placeholder="Card Number"
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

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Status</label>
              <input type="text"
              className="form-control"
              name="status"
              placeholder="Pending"
              value={this.state.status}
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