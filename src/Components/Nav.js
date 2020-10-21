import React from "react";
import { Container, Navbar } from "react-bootstrap";
// import BellIcon from "../Assets/Icon/bell.svg";
import axios from "axios";
import { TextBlock } from "react-placeholder/lib/placeholders";
import { Users } from "../redux/actions/Users";
import { useDispatch, useSelector } from "react-redux";

const Nav =()=> {
  
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((s) => s.Users);
    const Auth = useSelector((s) => s.Auth);
    // console.log(Auth.data.data.token, 'hmmm')
    React.useEffect(()=>{
        dispatch(Users({
            token: "Bearer "+Auth.data.token
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
            <img src={data[0].img} 
            width="50px" height="50px" alt="" />
            <div className="mx-3">

              <div className="font-weight-bold">
                {data[0].firstName+" "+data[0].lastName}
                </div>
              <div className="small">+
              {data[0].phoneNumber}
              </div>
            </div>
            <img src="/Assets/Icon/bell.svg" alt="" />
          </nav>
        </Container>
      </Navbar>
    );
  }


export default Nav;
