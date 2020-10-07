import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import arrowUpIcon from '../Assets/Icon/arrow-up-white.svg'


class Footer extends Component{
    render(){
        return(
            <div className="pl-lg-2 mt-2 mt-lg-0 font_nunito">
                <div className="zwallet_color rounded-14 p-4">
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="font_softGrey">Balance</div>
                            <h1 className="text-white my-3">Rp120.000</h1>
                            <div className="font_softGrey">+89 4523 1234</div>
                        </div>

                        <div>
                            <Link to="/transfer/" >
                                <button className="btn bg-outline-white text-white font-weight-bold py-3 d-block mb-3 rounded-14 btn_balance " style={{background: 'rgba(255, 255, 255, 0.3)', border:'1px solid white'}}>
                                    <img src={arrowUpIcon} alt=""/>Transfer

                                </button>
                            </Link>
                            <Link to="/topup/" >
                                <button className="btn bg-outline-white text-white font-weight-bold py-3 d-block mb-3 rounded-14 btn_balance " style={{background: 'rgba(255, 255, 255, 0.3)', border:'1px solid white'}}>
                                    <img src={arrowUpIcon} alt=""/>Topup
                                </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-7">
                        <div className="bg-white rounded-14 p-4 shadow_box">
                            <div className="row">
                                <div className="col-6 ">
                                    <img src="assets/Img/arrow-down-green.svg" alt=""/>
                                    <div className="small my-2">Income</div>
                                    <div className="font-weight-bold"> Rp2.120.000</div>
                                </div>
                                <div className="col-6">
                                    <img src="assets/Img/arrow-up-red.svg" alt=""/>
                                    <div className="small my-2">Expense</div>
                                    <div className="font-weight-bold"> Rp1.560.000</div>
                                </div>
                            </div>
                            <div>
                                <div className="mt-5">
                                    <div className="d-flex justify-content-center">
                                        <div className="py-2 px-3 text-success shadow-sm font-weight-bold rounded-14">
                                            Rp50.000
                                        </div>
                                    </div>
                                    <canvas id="canvas"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-white rounded-14 p-4 shadow_box">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="font-weight-bold">Transaction History</div>
                                <Link className="small text-primary" to='/transaction' >
                                    See All
                                </Link>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-3">
                                <div className="d-flex">
                                    <img height="56px" width="56px" src="assets/Img/samuel-suhi.svg" alt=""/>
                                    
                                    <div className="ml-2">
                                        <div className="font-weight-bold">Samuel Suhi</div>
                                        <div className="small mt-2">Transfer</div>
                                    </div>
                                </div>

                                <div className="text-success font-weight-bold">+Rp50.000</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-3">
                                <div className="d-flex">
                                    <img height="56px" width="56px" src="assets/Img/Netflix.svg" alt=""/>
                                    
                                    <div className="ml-2">
                                        <div className="font-weight-bold">Netflix</div>
                                        <div className="small mt-2">Subcription</div>
                                    </div>
                                </div>

                                <div className="text-danger font-weight-bold">-Rp149.000</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-3">
                                <div className="d-flex">
                                    <img height="56px" width="56px" src="assets/Img/Christine-Mar....svg" alt=""/>
                                    
                                    <div className="ml-2">
                                        <div className="font-weight-bold">Christine Mar...</div>
                                        <div className="small mt-2">Transfer</div>
                                    </div>
                                </div>

                                <div className="text-success font-weight-bold">+Rp150.000</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-3">
                                <div className="d-flex">
                                    <img height="56px" width="56px" src="assets/Img/Adobe.svg" alt=""/>
                                    
                                    <div className="ml-2">
                                        <div className="font-weight-bold">Adobe Inc.</div>
                                        <div className="small mt-2">Transfer</div>
                                    </div>
                                </div>

                                <div className="text-danger font-weight-bold">-Rp249.000</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer