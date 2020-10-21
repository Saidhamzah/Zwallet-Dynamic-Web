import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthLogout } from "../../redux/actions/Auth";

// console.log(this.props.data.id)
const SideBar = (props) => {
  return (
    <div className="bg-white navigation d-flex flex-column justify-content-between rounded-14 p-4 shadow_box ">
      <ul className="m-0 pl-4">
        <li className="d-flex align-items-center py-4 ">
          <img src="/Assets/Icon/Dashboard.svg" alt="" />
          <Link to={{ pathname: `/home` }} className="ml-3 text-secondary">
            {" "}
            Dashboard
          </Link>
        </li>
        <li className="d-flex align-items-center py-4 active">
          <img src="/Assets/Icon/arrow-up-active.svg" alt="" />
          <Link to={{ pathname: `/transfer` }} className="ml-3 text-secondary">
            {" "}
            Transfer
          </Link>
        </li>
        <li className="d-flex align-items-center py-4">
          <img src="/Assets/Icon/plus.svg" alt="" />
          <Link to="/topup" className="ml-3 text-secondary">
            {" "}
            Top Up
          </Link>
        </li>
        <li className="d-flex align-items-center py-4">
          <img src="/Assets/Icon/user.svg" alt="" />
          <Link to={{ pathname: `/profile` }} className="ml-3 text-secondary">
            {" "}
            Profile
          </Link>
        </li>
      </ul>
      <ul className="m-0 pl-4 pt-5">
        <li className="d-flex align-items-center py-2">
          <img src="/Assets/Icon/log-out.svg" alt="" />
          <Link
            onClick={() => props.onLogout()}
            className="ml-3 text-secondary"
          >
            {" "}
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Menu = (props) => {
  let location = useLocation();
  let history = useHistory();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(AuthLogout());
    history.replace("/login");
  };
  return (
    // <SidebarMobile />
    <SideBar location={location} onLogout={onLogout} />
  );
};

export default Menu;
