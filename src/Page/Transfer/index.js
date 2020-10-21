import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../Components";
import { Menu, Footer } from "../";
import { Container, Row, Col } from "react-bootstrap";
import { GetTransferSearch } from "../../redux/actions/getUser";
import { useDispatch, useSelector } from "react-redux";

class Search extends Component {
  render() {
    const ContentSearch = () => {
      const dispatch = useDispatch();
      const { data, loading, error } = useSelector((s) => s.getUser);
      const Auth = useSelector((s) => s.Auth);
    //   const [search, setSearch]= React.useState("")
      // console.log(Auth.data.data.token, 'hmmm')
      React.useEffect(() => {
        dispatch(
          GetTransferSearch({
            token: "Bearer " + Auth.data.token
          })
        );
        console.log(data, "sini cuy");
      }, []);
      console.log(data, "arung");
      return (
        <div className="col-lg-12">
          <div className="bg-white p-4">
            <div>
              <div>
                <div className="font-weight-bold">Search Receiver</div>
                <div className="form-group pt-3">
                  <input 
                //   onChange={(e)=>setSearch(e.target.value)}
                    type="text"
                    className="form-search py-1 w-100"
                    placeholder="Search receiver here"
                  />
                </div>
              </div>
              {data.map((item, index) => {
                return (
                  <Link  key={index} className="font_bold text-dark">
                    <div className="d-flex justify-content-between align-items-center py-3 px-3 bg-white rounded-14 font_nunito">
                      <div className="d-flex">
                        <img height="56px" width="56px" src={item.img} alt="" />
                        <div className="ml-2">
                          <div className="font-weight-bold">
                            {item.fullName}
                          </div>
                          <div className="small mt-2">+{item.phoneNumber}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
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
            <Col lg="9" className="pl-lg-2 mt-2 mt-lg-0">
              <div className="d-flex justify-content-between rounded-10 shadow_box">
                <ContentSearch />
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Search;
