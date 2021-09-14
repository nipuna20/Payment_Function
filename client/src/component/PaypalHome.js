import React, { Component } from 'react';
import axios from 'axios';

export default class PaypalHome extends Component {
constructor(props){
  super(props);

  this.state={
  posts: []
  };

}


componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/refund").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }


  });
}


onDelete = (id) =>{

  axios.delete(`http://localhost:8000/refund/delete/${id}`).then((res) =>{
    alert("Delete Succesfully");
    this.retrievePosts();
  })

}

filterData(posts,searchKey){

  const result = posts.filter((post) =>
    post.firstn.includes(searchKey) ||
    post.firstn.toLowerCase().includes(searchKey) ||
    post.lastn.includes(searchKey) ||
    post.lastn.toLowerCase().includes(searchKey) ||
    post.email.includes(searchKey) ||
    post.email.toLowerCase().includes(searchKey) ||
    post.phone.includes(searchKey) ||
    post.phone.toLowerCase().includes(searchKey) ||
    post.card.includes(searchKey) ||
    post.card.toLowerCase().includes(searchKey) ||
    post.expiredate.includes(searchKey) ||
    post.expiredate.toLowerCase().includes(searchKey) ||
    post.Cvv.includes(searchKey) ||
    post.Cvv.toLowerCase().includes(searchKey)
  )

  this.setState({posts:result})

}


handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/refund").then(res =>{
    if(res.data.success){
     
      this.filterData(res.data.existingPosts,searchKey)
    }
  });

}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
          <h4>Payment List For Admin </h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}>
            </input>
          </div>
        </div>
      
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Card Number</th>
              <th scope="col">Expire Date</th>
              <th scope="col">Cvv</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/refund/post/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.firstn}
                    </a>
                </td>
                <td>{posts.lastn}</td>
                <td>{posts.email}</td>
                <td>{posts.phone}</td>
                <td>{posts.card}</td>
                <td>{posts.expiredate}</td>
                <td>{posts.Cvv}</td>
                <td>{posts.status}</td>
                <td>
                  <a className="btn btn-warning" href={`/refund/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

        <button className="btn btn-success"><a href="/refund/add" style={{textDecoration:'none',color:'white'}}>Create New Payment</a></button>
        <br/>
        
      </div>
    )
  }
}
