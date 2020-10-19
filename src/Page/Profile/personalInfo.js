import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    // const res = await axios.get('http://localhost:7000/topup')
    // this.setState({ data: res.data.data })
  }
  render() {
    return (
      <div className=" pl-lg-4 mt-2 mt-lg-0">
        <div class="row ">
          <div class="col-lg-12 bg-white rounded-10 border_line shadow_box">
            <h5 className="font_bold my-3">Personal Information</h5>
            <p className="font_med color_grey" style={{ width: "342px" }}>
              We got your personal information from the sign up process. If you
              want to make changes on your information. Contact our support.
            </p>
            <div className="pt-4 pb-4">
            <div className="border_line rounded-10 pl-3 py-3">
              <div className="small color_grey">Firstname</div>
              <div className="font_bold">{this.props.data.firstName}</div>
            </div>
            <div className="border_line rounded-10 pl-3 py-3">
              <div  className="small color_grey">Last Name</div>
              <div className="font_bold">{this.props.data.lastName}</div>
            </div>
            <div className="border_line rounded-10 pl-3 py-3">
              <div  className="small color_grey">Verified E-mail</div>
              <div className="font_bold">{this.props.data.email}</div>
            </div>
            <div className="border_line rounded-10 pl-3 py-3">
              <div  className="small color_grey">Phone Number</div>
              <div className="font_bold">+{this.props.data.phoneNumber}</div>
            </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
