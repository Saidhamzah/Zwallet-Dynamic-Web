import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "../Assets/Icon/Dashboard.svg";
import TransferIcon from "../Assets/Icon/arrow-up-active.svg";
import PlusIcon from "../Assets/Icon/plus.svg";
import ProfileIcon from "../Assets/Icon/user.svg";
import LogoutIcon from "../Assets/Icon/log-out.svg";
class Menu extends Component {
  render() {
    return (
      <div className="bg-white navigation d-flex flex-column justify-content-between rounded-14 p-4 shadow_box ">
        <ul className="m-0 pl-4">
          <li className="d-flex align-items-center py-4 ">
            <img src={DashboardIcon} alt=""/>
            <Link to="/home/" className="ml-3 text-secondary"> Dashboard</Link>
          </li>
          <li className="d-flex align-items-center py-4 active">
            <img src={TransferIcon} alt=""/>
            <Link to="/transfer/" className="ml-3 text-secondary"> Transfer</Link>
          </li>
          <li className="d-flex align-items-center py-4">
            <img src={PlusIcon} alt=""/>
            <Link to="/topup/" className="ml-3 text-secondary"> Top Up</Link>
          </li>
          <li className="d-flex align-items-center py-4">
            <img src={ProfileIcon} alt=""/>
            <Link className="ml-3 text-secondary"> Profile</Link>
          </li>
        </ul>
        <ul className="m-0 pl-4 pt-5">
          <li className="d-flex align-items-center py-2">
            <img src={LogoutIcon} alt=""/>
            <Link className="ml-3 text-secondary"> Logout</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
