import React,{Component} from 'react'
import axios from 'axios'

class Transaction extends Component{
    state={
        data:[]
      }
  async componentDidMount() {
    const id = this.props.data.id;
    const res = await axios.get(`http://localhost:7000/transfer/${id}`);
    this.setState({ data: res.data.data });
  }
    render(){
        return(
            <div class="row d-flex pl-lg-2 mt-2 mt-lg-0">               
            <div class="col-lg-12 bg-white rounded-14 shadow_box">
                <div class=" p-4">
                   <div>
                       <div>
                           <div class="font-weight-bold">Transaction History</div>
                           <div class="my-3 small color_grey">This Week</div>
                       </div>
                       {this.state.data.map((item, index) => {
                return (
                  <div key={index} className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex">
                      <img
                        height="56px"
                        width="56px"
                        src={item.img}
                        alt=""
                      />
                      <div className="ml-2">
                        <div className="font-weight-bold">{item.receiver == this.props.data.id ? item.sender : item.receiveBy}</div>
                        <div className="small mt-2">{item.status}</div>
                      </div>
                    </div>
                    {item.receiver == this.props.data.id ?  
                    <div className="text-danger font-weight-bold">
                      -{item.amountTransfer}
                    </div>
                    :
                    <div id="changeColor" className="text-success font-weight-bold">
                      +{item.amountTransfer}
                    </div>
                     }
                  </div>
                );
              })}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Transaction