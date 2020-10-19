import React, { Component } from "react";
import { Container, Navbar, Form } from "react-bootstrap";
import BellIcon from "../Assets/Icon/bell.svg";
import axios from "axios";
import { TextBlock } from "react-placeholder/lib/placeholders";
import { GetUsers } from "../redux/actions/Users";
import { useDispatch, useSelector } from "react-redux";

const Nav =()=> {
  
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((s) => s.Users);
    const Auth = useSelector((s) => s.Auth);
    React.useEffect(()=>{
        dispatch(GetUsers({
            page: 1,
            limit: 1,
            token: Auth.data.data.token
        }))
        console.log(data, 'sini cuy');
    }, [])
    return (
      <Navbar className="mb-5 nav">
        <Container className="d-flex justify-content-between align-items-center font_nunito">
          <Navbar.Brand className="font_bold m-0 text-primary ">
            Zwallet
          </Navbar.Brand>

          <nav className="d-flex align-items-center">
            <img src={data[0].img} width="50px" height="50px" alt="" />
            <div className="mx-3">

              <div className="font-weight-bold">{data[0].fullName}</div>
              <div className="small">+{data[0].phoneNumber}</div>
            </div>
            <img src={BellIcon} alt="" />
          </nav>
        </Container>
      </Navbar>
    );
  }


export default Nav;
