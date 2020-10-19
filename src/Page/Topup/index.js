import axios from 'axios'
import React, {Component} from 'react'


class Topup extends Component{
    state = {
        data: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:7000/topup')
        this.setState({ data: res.data.data })
    }
    render() {
        
        return (
            <div className=" pl-lg-4 mt-2 mt-lg-0">
            <div className="row "> 
                <div className="col-lg-12  bg-white rounded-10 border_line">
                    <div className="font_med font_bold mt-3 mb-3 pl-4">
                        How To Top Up
                    </div>
                {this.state.data.map((item, index) => {
                    return (
                        <div className="d-flex align-items-center rounded-14 pl-3 ml-3 mb-2 border_line ">   
                            <div className="my-2 pt-1">
                                <p className="font_purple font_med primary pr-3">{item.stepNumber}</p>
                            </div>
                            <div className="pt-2">
                                <p className="font_med color_grey">{item.instruction}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
                </div>
        )
    }
}
export default Topup