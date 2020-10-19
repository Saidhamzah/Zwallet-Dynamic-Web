import axios from 'axios'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
// import PersonalInfo from './'
class Profile extends Component{
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
            <div class="row "> 
                <div class="col-lg-12 bg-white rounded-10 border_line shadow_box">
                        <div className="d-flex justify-content-center pt-3">   
                            <div class="pt-5">
                                <img height="80px" width="80px" src={this.props.data.img} alt="" />
                                <div className="d-flex pt-2 align-items-stretch">
                                    <img height="15px" width="15px" src='/Assets/Icon/edit.svg' alt=""/>
                                    <p className="small pl-2"> edit</p>
                                </div>
                                
                                <h5 className="font_bold ">{this.props.data.fullName}</h5>
                                <h5 className="color_grey small pr-5 pb-5">+{this.props.data.phoneNumber}</h5>
                            
                            </div>
                        </div>
                        <div className="d-flex justify-content-center ">   
                            <div class="pt-3 mr-5">
                                <div className="pb-2">
                                
                                <Link to={{pathname:`/profile/personal-info/${this.props.data.id}`}} className="bt_prf pl-3 text-black-50">Personal Information</Link>
                                </div>
                                <div className="pb-2">
                                <Link to={{pathname:`/profile/change-password/${this.props.data.id}`}} className="bt_prf pl-3 text-black-50">Change Password</Link>
                                </div>
                                <div className="pb-2">
                                <Link className="bt_prf pl-3 text-black-50">Change PIN</Link>
                                </div>
                                <div className="pb-5">
                                <Link className="bt_prf pl-3 text-black-50">Logout</Link>
                                </div>
                               
                                
                            </div>
                        </div>                   
                </div>
            </div>
                </div>
        )
    }
}
export default Profile