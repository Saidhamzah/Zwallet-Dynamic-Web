import React, { Component } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Footer,
  Menu,
  Transfer,
  Topup,
  Home,
  TransactionHistory,
  Profile,
} from "./Page";
// import PersonalInfo from "./Page/Profile/personalInfo";
// import Changepw from "./Page/Profile/changePassword";
import { PrivateRoute, PublicRoute } from "./Components";
import Login from "./Page/Login";
import configureStore from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

// class App extends Component {
// state={
//   data:[]
// }
// async componentDidMount(){
//   const getId= window.location.href.split('/')
//   const id= getId[getId.length-1]
//   const res = await Axios.get(`http://localhost:7000/user/${id}`)
//   this.setState({data: res.data.data[0]})
// }

const Routes = () => {
  return (
    // (document.body.className = "body"),
    // (
      <Router>
        {/* <Navbar 
        // data={this.state.data} 
        /> */}
        <Container className="font_nunito">
          <Row>
            {/* <Col lg="3">
              <Menu 
              // data={this.state.data} 
              />
            </Col>
            <Col lg="9">
            </Col> */}
              <Switch>
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/transfer" component={Transfer} />
                {/* <Route exact path="/home" /> */}
                {/* <Route exact path="/transfer/:id" component={()=><Transfer data={this.state.data}/>}/>
                <Route exact path="/topup/:id" component={Topup}/>
                <Route exact path="/profile/:id" component={()=><Profile data={this.state.data}/>}/>
                <Route exact path="/profile/personal-info/:id" component={()=><PersonalInfo data={this.state.data}/>}/>
                <Route exact path="/profile/change-password/:id" component={()=><Changepw data={this.state.data}/>}/>
                <Route exact path="/transaction/:id" component={()=><TransactionHistory data={this.state.data}/>}/> */}
                <PrivateRoute component={Profile} path="/profile" />
                <PublicRoute component={Login} restricted={true} path="/login" />
              </Switch>
          </Row>
        </Container>
        {/* <Footer /> */}
      </Router>
    // )
  );
};
// }

const App = () => {
  const { store, persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;

// import Navbar from './Components/Navbar/'
// import Footer from './Components/Footer/'
// import Menu from './Components/Menu/'
// import Transfer from './Components/Transfer'
// import Topup from './Components/Topup/'
// import Home from './Components/Home/'
// import Transaction from "./Components/Transaction History";
// import Profile from "./Components/Profile";
