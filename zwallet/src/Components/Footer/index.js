import React,{Component} from 'react'
import {Container} from 'react-bootstrap'

class Footer extends Component{
    render(){
        return(
            <footer className="page-footer font-small footer_bg py-4">
                <div   div className="container">
                    <div className="d-flex justify-content-between align-items-center font_softGrey">
                        <div className="small">
                            © 2020 Zwallet. All right reserved
                        </div>
                        <div className="d-flex ">
                            <div className="small">
                                +62 5637 8882 9901
                            </div>
                            <div className="small mx-3">
                                contact@zwallet.com
                            </div>
                         </div>
                    </div>
                </div>
          </footer>
        )
    }
}

export default Footer