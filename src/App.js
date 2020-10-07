import React, { Component } from "react";
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/'
import Footer from './Components/Footer/'
import Menu from './Components/Menu/'
import Search from './Components/Transfer'
import Topup from './Components/Topup/'
import Home from './Components/Home/'
import Transaction from "./Components/Transaction History";

class App extends Component {
  state={
    data:[]
  }
  async componentDidMount(){
    const getId= window.location.href.split('/')
    const id= getId[getId.length-1]
    const res = await Axios.get(`http://localhost:7000/user/${id}`)
    this.setState({data: res.data.data[0]})
  }
  
  render() {
    return (
    document.body.className="body",
    <Router >
      <Navbar data={this.state.data}/>
        <Container className='font_nunito'>
          <Row>
            <Col lg="3">
              <Menu data={this.state.data}/>
            </Col>
            <Col lg="9">
              <Switch>
                <Route exact path="/home/:id" component={()=><Home data={this.state.data} /> }/>
                <Route exact path="/transfer/:id" component={Search}/>
                <Route exact path="/topup/" component={Topup}/>
                <Route exact path="/transaction/:id" component={Transaction}/>
              </Switch>
            </Col>
          </Row>
        </Container>
      <Footer/>
    </Router>
    )
  }
}

export default App;
