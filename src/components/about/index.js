// Dependencies
import React from 'react'
// import { NavLink } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImgPrfl from 'assets/images/me.png'
// Internals
import "assets/css/bootstrap.css";
import 'components/about/index.css'

export default function index() {
    return (
        <div>
            <Row className="about">
                <Col>
                    <img src={ImgPrfl} alt="PicOfMe" className="model"></img>
                </Col>
                <Col className="text-left">
                    {/* <h1>About Me</h1> */}
                    {/* <h6>Rizky Ramadika Trisaputra is a Web Developer</h6> */}
                    <h5>Rizky is someone who has work and project experiences to design and developing product (web-based) where every detail matters.</h5>
                    <h6>Rizky is currently living in South Sumatra, Indonesia and studied in Telkom University Bandung, West Java.</h6>
                    <Col>
                        {/* <NavLink to="/">More About Rizky &#8595;</NavLink> */}
                        <a href="#sectionValue">More About Rizky &#8595;</a>
                    </Col>
                    <Col className="resume">
                        <a href="resume/Resume.pdf" download>View Resume &#8594;</a>
                    </Col>
                    {/* <NavLink className="resume" to="/">View Resume</NavLink> */}
                </Col>
            </Row>
            <Row className="quote text-center" id="sectionValue">
                <h2>"Eventually everything connects – people, ideas, objects. The quality of the connections is the key to quality per se."</h2>
                <h6>Charles Eames</h6>
            </Row>
            <Row className="value text-left">
                <Col>
                    <h3>Education</h3>
                    <h6><b>2015-2019</b></h6>
                    <h5>Bachelor Of Computer Science in School of Computing at Telkom University, Bandung/Indonesia</h5>
                    <h6 className="mt-3"><b>2012-2015</b></h6>
                    <h5>Student at Senior High School 17 Palembang, Indonesia.</h5>
                </Col>
                <Col>
                    <h3>Accomplishments</h3>
                    <h6><b>Honor & Award</b></h6>
                    <h4>The Agile Project Management Academy</h4>
                    <h5><b>Oct 2020 - Certificate of Completion</b></h5>
                    <h2 className="descHonorORg">Has successfully completed "Learn the Truth About Agile versus Waterfall"</h2>
                    
                    <h4>School of Computing Telkom University</h4>
                    <h5><b>Sep 2018 - Internet of Things Assistant</b></h5>
                    <h2 className="descHonorORg">Responsible for helping participants directly to achieve the desired goals</h2>
                    
                    <h4>Institut Teknologi Sepuluh Nopember, Surabaya</h4>
                    <h5><b>Aug 2017 - YES SUMMIT ASEAN 2017 Participant</b></h5>
                    <h2 className="descHonorORg">Expected to be able to develop knowledge, creativity, and critical thinking, in line with the theme of the conference “ASEAN Connectivity”</h2>
                    
                    <h6 className="mt-3"><b>Organizations</b></h6>
                    <h4>FIFA Telkom University</h4>
                    <h5><b>Aug 2017 - Aug 2019 Administrator</b></h5>
                    <h2 className="descHonorORg">Responsible for community needs in equipment and permissions</h2>
                    
                    <h4>IKMASS Telkom University</h4>
                    <h5><b>Aug 2015 - Present Participant</b></h5>
                    <h2 className="descHonorORg">Establish friendship with fellow students from South Sumatra and to introduce South Sumatra culture, culinary, and tourism</h2>
                </Col>
                <Col>
                    <h3>Skillset</h3>
                    <h6><b>Development</b></h6>
                    <h5>C++, Java, PHP, HTML, CSS, Javascript, ReactJS, AngularJS, Git Versioning</h5>
                    <h6 className="mt-3"><b>Database</b></h6>
                    <h5>Oracle, SQL</h5>
                    <h6 className="mt-3"><b>Design</b></h6>
                    <h5>Figma, Adobe Photoshop</h5>
                    <h6 className="mt-3"><b>Interpersonal Skill</b></h6>
                    <h5>Listening, Communication, Analytical Thinking, Teamwork, Self Learning</h5>
                </Col>
            </Row>
            <Row className="value">
                <Col className="valueEx">
                    <h3>Experience</h3>
                    <h4>PT. Phiraka Sinergi Indonesia</h4>
                    <h5><b>Web Developer</b></h5>
                    <h1>Bandung, West Java. Indonesia</h1>
                    <h2 className="descHonorORg">Develop and maintenance product according to user requirements</h2>
                    
                    <h4>Telkom Digital Service Division</h4>
                    <h5><b>Internship</b></h5>
                    <h1>Bandung, West Java. Indonesia</h1>
                    <h2 className="descHonorORg">Help researchers done the research</h2>
                </Col>
                <Col className="valueTr">
                    <h3>Training</h3>
                    <h5><b>Sep 2018</b></h5>
                    <h2 className="descHonorORg">One-day training of Internet of Things</h2>
                    <h5><b>Jan 2019</b></h5>
                    <h2 className="descHonorORg">One-day training of “How to write Journal and Paper“</h2>
                </Col>
            </Row>
            <Row className="contact">
                <Col>
                    <h1>I'm always up for adventure and new opportunities. Feel free to say hello to me via <b>ramadika1050@gmail.com</b></h1>
                    <a href="https://www.linkedin.com/in/rizkyramadika/">LinkedIn</a>
                    <a href="https://twitter.com/akidamarykzir">Twitter</a>
                    <a href="https://www.instagram.com/rtrizky/">Instagram</a>
                    <a href="https://github.com/ramadika">Github</a>
                </Col>
            </Row>
        </div>
    )
}
