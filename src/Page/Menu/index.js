import React, { Component } from "react";
import { Link } from "react-router-dom";
class Menu extends Component {
  render() {
      // console.log(this.props.data.id)
    return (
      <div className="bg-white navigation d-flex flex-column justify-content-between rounded-14 p-4 shadow_box ">
        <ul className="m-0 pl-4">
          <li className="d-flex align-items-center py-4 ">
            <img src="/Assets/Icon/Dashboard.svg" alt=""/>
            {/* <Link to={{pathname:`/home/${this.props.data.id}`}} className="ml-3 text-secondary"> Dashboard</Link> */}
          </li>
          <li className="d-flex align-items-center py-4 active">
            <img src="/Assets/Icon/arrow-up-active.svg" alt=""/>
            {/* <Link to={{pathname:`/transfer/${this.props.data.id}`}} className="ml-3 text-secondary"> Transfer</Link> */}
          </li>
          <li className="d-flex align-items-center py-4">
            <img src="/Assets/Icon/plus.svg" alt=""/>
            {/* <Link to={{pathname:`/topup/${this.props.data.id}`}} className="ml-3 text-secondary"> Top Up</Link> */}
          </li>
          <li className="d-flex align-items-center py-4">
            <img src="/Assets/Icon/user.svg" alt=""/>
            {/* <Link to={{pathname:`/profile/${this.props.data.id}`}} className="ml-3 text-secondary"> Profile</Link> */}
          </li>
        </ul>
        <ul className="m-0 pl-4 pt-5">
          <li className="d-flex align-items-center py-2">
            <img src="/Assets/Icon/log-out.svg" alt=""/>
            <Link className="ml-3 text-secondary"> Logout</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
