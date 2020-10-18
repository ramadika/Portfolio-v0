// Dependencies
import React from 'react'
// import ImgPrfl from 'assets/images/me.png'
// import Row from 'react-bootstrap/Row'
import { NavLink } from 'react-router-dom'
import Footer from 'components/baselayout/footer'

// Internals
import "assets/css/bootstrap.css";
import 'components/home/index.css'
import Socmed from 'components/home/socmed'

export default function index() {
    return (
        <div>
            <div className="row mt-4">
                <div className="col tes">
                    {/* <h1>Hello.</h1> */}
                </div>
                <div className=" col home">
                    <h1>He-</h1>
                    <h2>llo.</h2>
                    <h5 className="text-center">I'm Rizky Ramadika </h5>
                    <h6 className="text-center">Check out more about me<NavLink to="/about"> here</NavLink></h6>
                    {/* <h5 className="text-center">I'm Rizky Ramadika and I have work and project experiences in Product Development (web-based) according to user requirements.</h5> */}
                    {/* <h6 className="text-center">I like to solve a problem and I really enjoy the challenge of creating and develop products that bring delight and satisfaction to people.</h6> */}
                    {/* <img src={ImgPrfl} alt="PicOfMe" className="model"></img> */}
                </div>
            </div>
            <Socmed></Socmed>
            <Footer></Footer>
        </div>
    )
}
