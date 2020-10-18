// Dependencies
import React from 'react'
import {
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {AiFillInstagram,AiFillGithub} from 'react-icons/ai'
// Internals
import "assets/css/bootstrap.css";
import 'components/home/socmed/index.css'

export default function index() {
    return (
        <div>
          <div className="a-social-b">
            <a href="https://github.com/ramadika">
              <AiFillGithub size={20} style={{ fill: 'gray' }}></AiFillGithub>
            </a>
            <a href="https://twitter.com/akidamarykzir">
              <FaTwitter size={20} style={{ fill: 'gray' }}></FaTwitter>
            </a>
            <a href="https://www.instagram.com/rtrizky/">
              <AiFillInstagram size={20} style={{ fill: 'gray' }}></AiFillInstagram>
            </a>
            <a href="https://www.linkedin.com/in/rizkyramadika/">
              <FaLinkedin size={20} style={{ fill: 'gray' }}></FaLinkedin>
            </a>
          </div>
        </div>
    )
}
