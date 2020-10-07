import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import BellIcon from '../Assets/Icon/bell.svg'
import axios from 'axios'
class Bar extends Component{
    // state = {
    //     data: []
    // }

    // async componentDidMount() {
    //     const getId= window.location.href.split('/')
    //     const id = getId[getId.length-1]
    //     const res = await axios.get(`http://localhost:7000/user/${id}`)
    //     this.setState({ data: res.data.data })
    // }
    render(){
        console.log(this.props.data)
        return(
            <Navbar className="mb-5 nav">
                <Container className="d-flex justify-content-between align-items-center font_nunito">
                    <Navbar.Brand className="font_bold m-0 text-primary ">
                        Zwallet
                    </Navbar.Brand>
                    
                        <Nav className="d-flex align-items-center">                        
                            <img src={this.props.img} width="50px" height="50px" alt=""/>
                                <div className="mx-3">
                        <div className="font-weight-bold">{this.props.fullName}</div>
                        <div className="small">+{this.props.phoneNumber}</div>
                                 </div>
                                <img src={BellIcon} alt=""/>
                    </Nav>
                    

                        
    
                </Container>
            </Navbar>
        )
    }
}

export default Bar