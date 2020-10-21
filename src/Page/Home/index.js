import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Nav } from "../../Components";
import { Menu, Footer } from "../";
import { Container, Row, Col } from "react-bootstrap";
import { Users } from "../../redux/actions/Users";
import { useDispatch, useSelector } from "react-redux";

class Home extends Component {
  render() {
    const Content = () => {
      const dispatch = useDispatch();
      const { data, loading, error } = useSelector((s) => s.Users);
      const Auth = useSelector((s) => s.Auth);
      // console.log(Auth.data.data.token, 'hmmm')
      React.useEffect(() => {
        dispatch(
          Users({
            token: "Bearer " + Auth.data.token,
          })
        );
        console.log(data, "sini cuy");
      }, []);
      return (
        <>
          <div className="pl-lg-2 mt-2 mt-lg-0 font_nunito"></div>
          <div className="zwallet_color rounded-14 p-4">
            <div className="d-flex justify-content-between">
              <div>
                <div className="font_softGrey">Balance</div>
                <h1 className="text-white my-3 font_bold">
                  Rp
                  {data[0].balance}
                </h1>
                <div className="font_softGrey">+{data[0].phoneNumber}</div>
              </div>

              <div>
                <button
                  className="btn bg-outline-white text-white font-weight-bold py-3 d-block mb-3 rounded-14 btn_balance "
                  style={{
                    background: "rgba(255, 255, 255, 0.3)",
                    border: "1px solid white",
                  }}
                >
                  <img src="/Assets/Icon/arrow-up-white.svg" alt="" />
                  Transfer
                </button>
                <Link to={{ pathname: `/transfer` }}></Link>
                <button
                  className="btn bg-outline-white text-white font-weight-bold py-3 d-block mb-3 rounded-14 btn_balance "
                  style={{
                    background: "rgba(255, 255, 255, 0.3)",
                    border: "1px solid white",
                  }}
                >
                  <img src="/Assets/Icon/arrow-up-white.svg" alt="" />
                  Topup
                </button>
                <Link to={{ pathname: `/topup` }}></Link>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-7">
              <div className="bg-white rounded-14 p-4 shadow_box">
                <div className="row">
                  <div className="col-6 ">
                    <img src="/Assets/Img/arrow-down-green.svg" alt="" />
                    <div className="small my-2">Income</div>
                    <div className="font-weight-bold"> Rp2.120.000</div>
                  </div>
                  <div className="col-6">
                    <img src="/Assets/Img/arrow-up-red.svg" alt="" />
                    <div className="small my-2">Expense</div>
                    <div className="font-weight-bold"> Rp1.560.000</div>
                  </div>
                </div>
                <div>
                  <div className="mt-5">
                    <div className="d-flex justify-content-center">
                      <div className="py-2 px-3 text-success shadow-sm font-weight-bold rounded-14">
                        Rp50.000
                      </div>
                    </div>
                    <canvas id="canvas"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-white rounded-14 p-4 shadow_box">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="font-weight-bold">Transaction History</div>
                  <Link
                    className="small text-primary"
                    to={{ pathname: `/transaction` }}
                  >
                    See All
                  </Link>
                </div>
                {/* {this.state.data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex justify-content-between align-items-center py-3"
                    >
                      <div className="d-flex">
                        <img height="56px" width="56px" src={item.img} alt="" />
                        <div className="ml-2">
                          <div className="font-weight-bold">
                            {item.receiver == this.props.data.id
                              ? item.sender
                              : item.receiveBy}
                          </div>
                          <div className="small mt-2">{item.status}</div>
                        </div>
                      </div>
                      {item.receiver == this.props.data.id ? (
                        <div className="text-danger font-weight-bold">
                          -{item.amountTransfer}
                        </div>
                      ) : (
                        <div
                          id="changeColor"
                          className="text-success font-weight-bold"
                        >
                          +{item.amountTransfer}
                        </div>
                      )}
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
        </>
      );
    };

    return (
      <>
        <Nav />
        <Container>
          <Row>
            <Col lg="3">
              <Menu />
            </Col>
            <Col lg="9">
              <Content />
            </Col>
          </Row>
        </Container>
        <Footer/>
      </>
    );
  }
}

export default Home;
