import './navbar.css';
import logo from './lomdei_logo.png';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const TopNavbar = ()=>{

    const [navClass, setNavClass] = useState("");

    const handleScroll = () => {
        if(window.scrollY>75 && navClass === ""){
            setNavClass("nav-shrink")
        } else if(window.scrollY<=75 && navClass === "nav-shrink"){
            setNavClass(null)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    })


    return(
        <Navbar className={navClass} bg="light" expand="xl">
            <Container id="nav-container">
            <Navbar.Brand href="/">
              <img src={logo} alt="Lomdei Logo" id='navbar-logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="About Lomdei">
                        <NavDropdown.Item href="/lomdei/about-lomdei">About Lomdei</NavDropdown.Item>
                        <NavDropdown.Item href="/lomdei/news">Lomdei News</NavDropdown.Item>
                        <NavDropdown.Item href="/lomdei/gallery">Gallery</NavDropdown.Item>
                        <NavDropdown.Item href="/lomdei/grants">Title Dollars</NavDropdown.Item>
                        <NavDropdown.Item href="/lomdei/news">Schools Using Lomdei Services</NavDropdown.Item>
                        <NavDropdown.Item href="/lomdei/our-team">Our Team</NavDropdown.Item>
                        <NavDropdown.Item href="/lomdei/contact">Contact Us</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Lomdei Learning Platform">
                        <NavDropdown.Item href="/platform/about-platform">About the Learning Platform</NavDropdown.Item>
                        <NavDropdown.Item href="/platform/benefits">Benefits of the Learning Platform</NavDropdown.Item>
                        <NavDropdown.Item href="/platform/features">Features of the Learning Platform</NavDropdown.Item>
                        <NavDropdown.Item href="/platform/kosher-devices">Use of the Learning Platform on Kosher Devices</NavDropdown.Item>
                        <NavDropdown.Item href="/platform/services">Lomdei Platform Services</NavDropdown.Item>
                        <NavDropdown.Item href="/platform/video-tutorials">Video Tutorials</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Lomdei BPL Program">
                        <NavDropdown.Item href="/bpl/advantage">Lomdei's BPL Advantage</NavDropdown.Item>
                        <NavDropdown.Item href="/bpl/bpl-program">Lomdei's PD Program</NavDropdown.Item>
                        <NavDropdown.Item href="/bpl/benefits">Benefits of BPL</NavDropdown.Item>
                        <NavDropdown.Item href="/bpl/examples-resources">Examples and Resources for BPL</NavDropdown.Item>
                        <NavDropdown.Item href="https://sites.google.com/view/thebplclassroom/home">Lomdei Learning Lab</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="https://thumbprintapp.org/webapp2/index.html" id="login">Log in to Learning Platform</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default TopNavbar;