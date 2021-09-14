import react, {Component} from 'react';
import axios from 'axios';


export default class PaypalPostDetails extends Component {
    constructor(props){
        super(props);
        
        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/refund/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });

    }

  render(){
    const {firstn,lastn,email,phone,card,expiredate,Cvv}= this.state.post;

    return(
    <div style={{marginTop:'20px'}}>
        <h4>{firstn}</h4>
        <hr/>

        <dl className="row">
            <dt className="col-sm-3">First Name</dt>
            <dd className="col-sm-9">{lastn}</dd>

            <dt className="col-sm-3">Last Name</dt>
            <dd className="col-sm-9">{email}</dd> 

            <dt className="col-sm-3">Email</dt>
            <dd className="col-sm-9">{phone}</dd>

            <dt className="col-sm-3">Phone Number</dt>
            <dd className="col-sm-9">{card}</dd>

            <dt className="col-sm-3">Card Number</dt>
            <dd className="col-sm-9">{expiredate}</dd>

            <dt className="col-sm-3">Cvv</dt>
            <dd className="col-sm-9">{Cvv}</dd>

            
        </dl>
        
    </div>
    )
  }
}

