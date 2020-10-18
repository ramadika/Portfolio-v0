// Dependencies
import React from "react";
// import {
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
// } from "react-icons/fa";
import {AiOutlineCopyright} from 'react-icons/ai'
// Internals
import "assets/css/bootstrap.css";
import 'components/baselayout/footer/index.css'

export default function index() {
    return (
        <div>
            <footer className="foot text-center mt-4">
                <h6><AiOutlineCopyright></AiOutlineCopyright> 2020 Rizky Ramadika.</h6>
                {/* <a href="https://github.com/ramadika">
                <AiFillInstagram size={20} style={{ fill: 'gray' }}></AiFillInstagram>
                </a>
                <a href="https://twitter.com/akidamarykzir">
                <FaTwitter size={20} style={{ fill: 'gray' }}></FaTwitter>
                </a>
                <a href="https://www.instagram.com/rtrizky/">
                <FaInstagram size={20} style={{ fill: 'gray' }}></FaInstagram>
                </a>
                <a href="https://www.linkedin.com/in/rizkyramadika/">
                <FaLinkedin size={20} style={{ fill: 'gray' }}></FaLinkedin>
                </a> */}
            </footer>
        </div>
    )
}
