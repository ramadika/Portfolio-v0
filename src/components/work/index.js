// Dependencies
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImgProject1 from 'assets/images/Aplikasi WEb.jpg'
import ImgProject2 from 'assets/images/applUIUX.jpg'
import ImgProject3 from 'assets/images/HomepageRizkyRamadika.png'
// Internals
import 'components/work/index.css'

export default function index() {
    return (
        <div>
            <Container>
                <Row className="headWork">
                    <h1>Some of my work</h1>
                    <h4>A snapshot of recent work is available<a href="#sectionWork"> here</a>. Check out more work over on <a href="https://github.com/ramadika">Github&#8599;</a></h4>
                </Row>
                <Row className="project1" id="sectionWork">
                    <a href="/"><img src={ImgProject1} alt="Project1"></img></a>
                    <h4>Find.</h4>
                    <ul>
                        <li>Product Owner</li>
                    </ul>
                    {/* <h6>Product Owner</h6> */}
                </Row>
                <Row>
                    <Col className="project2">
                        <a href="/"><img src={ImgProject2} alt="Project2"></img></a>
                        <h4>APPL</h4>
                        <ul>
                            <li>UX Researcher</li>
                        </ul>
                    </Col>
                    <Col className="project3">
                        <a href="/"><img src={ImgProject3} alt="Project3"></img></a>
                        <h4>Arnawa Project</h4>
                        <ul>
                            <li>UI/UX Designer</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
