import React,{Component} from 'react'
import axios from 'axios'

class Transaction extends Component{
    render(){
        console.log("tes");
        return(
            <div class="row d-flex pl-lg-2 mt-2 mt-lg-0">               
            <div class="col-lg-12 bg-white rounded-14 shadow_box">
                <div class=" p-4">
                   <div>
                       <div>
                           <div class="font-weight-bold">Transaction History</div>
                           <div class="my-5 small color_grey">This Week</div>
                       </div>
                       <div class="d-flex justify-content-between align-items-center py-3">
                           <div class="d-flex">
                               <img height="56px" width="56px" src="assets/Img/samuel-suhi.svg" alt=""/>
                               
                               <div class="ml-2">
                                   <div class="font-weight-bold">Samuel Suhi</div>
                                   <div class="small mt-2">Transfer</div>
                               </div>
                           </div>

                           <div class="text-success font-weight-bold">+Rp50.000</div>
                       </div>
                    <div>
                    
                    <div class="my-5 small color_grey">This Week</div>
                    
                    </div>
                       <div class="d-flex justify-content-between align-items-center py-3">
                           <div class="d-flex">
                               <img height="56px" width="56px" src="assets/Img/Christine-Mar....svg" alt=""/>
                               
                               <div class="ml-2">
                                   <div class="font-weight-bold">Christine Mar...</div>
                                   <div class="small mt-2">Transfer</div>
                               </div>
                           </div>

                           <div class="text-success font-weight-bold">+Rp150.000</div>
                       </div>
                       <div class="d-flex justify-content-between align-items-center py-3">
                           <div class="d-flex">
                               <img height="56px" width="56px" src="assets/Img/Adobe.svg" alt=""/>
                               
                               <div class="ml-2">
                                   <div class="font-weight-bold">Adobe Inc.</div>
                                   <div class="small mt-2">Transfer</div>
                               </div>
                           </div>

                           <div class="text-danger font-weight-bold">-Rp249.000</div>
                       </div>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}
export default Transaction