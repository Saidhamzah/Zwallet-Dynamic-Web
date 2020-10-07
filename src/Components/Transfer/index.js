import React, {Component} from 'react'
import axios from 'axios'
import Searchicon from "../Assets/Icon/search-icon.svg"
class Search extends Component{
    constructor(props) {
        super()
        this.state = {
            query: '',
            data: []
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    async componentDidMount() {
            const getId= (window.location.href).split('/')
            console.log(getId[getId.length-1])
        
        const res = await axios.get('http://localhost:7000/user/3')
        this.setState({ data: res.data.data})
    }

    async handleChange(e) {
        this.setState({ query:e.target.value })
        const res = await axios.get(`http://localhost:7000/user/search/3`, {
            params: {
                search: this.state.query
            }
        })

        if(res.data.data.length > 0) {
            this.setState({ data: res.data.data })
        }
    }
    render(){
        console.log(window.location.href)
        return(  
            <div className=" pl-lg-2 mt-2 mt-lg-0">
            <div className=" rounded-14 shadow_box bg-white">
            <div className="pt-4 mx-4">
                <div className="font-weight-bold mb-4">Search Receiver</div>
                <div className="form-group input ">
                    <input type="text" autoComplete="off" className="form-control pl-5" placeholder="Search receiver here"/>
                    <img src={Searchicon} alt=""/>
                </div>

                <div className="pb-2">
                    <div  style={{overflowY:'scroll', height: '60vh'}}>
                        {this.state.data.map((item, index) => {
                        return (
                            
                            <div key={index} className="row mx-4">
                                <div className="col-lg-12 d-flex border_line rounded-10 mx-3 ">
                                    <div className="d-flex align-item-center ">
                                        <img className="my-3" width="50px" height="50px" src={item.photo} alt="" />
                                        <div className=" font_nunito mx-3 pt-3">
                                            <div className="font_med">{item.fullName}</div>
                                            
                                            <div className="color_grey"> +{item.phoneNumber}</div>
                                        </div>
                                    </div>
                                </div>
                                    
                            </div>
                            
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
    }
}
export default Search