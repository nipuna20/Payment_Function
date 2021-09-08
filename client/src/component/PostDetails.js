import react, {Component} from 'react';
import axios from 'axios';


export default class App extends Component {
    constructor(props){
        super(props);
        
        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });

    }

  render(){
    const {holdername,cardnumber,totalamount,cardvalidation,paymentmethod,expiredate}= this.state.post;

    return(
    <div style={{marginTop:'20px'}}>
        <h4>{holdername}</h4>
        <hr/>

        <dl className="row">
            <dt className="col-sm-3">CardNumber</dt>
            <dd className="col-sm-9">{cardnumber}</dd>

            <dt className="col-sm-3">Total Amount</dt>
            <dd className="col-sm-9">{totalamount}</dd> 

            <dt className="col-sm-3">Card Validation</dt>
            <dd className="col-sm-9">{cardvalidation}</dd>

            <dt className="col-sm-3">Payment Method</dt>
            <dd className="col-sm-9">{paymentmethod}</dd>

            <dt className="col-sm-3">Expire Date</dt>
            <dd className="col-sm-9">{expiredate}</dd>

            
        </dl>
        
    </div>
    )
  }
}

