import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import './style.css'
import {Link} from 'react-router-dom'

const MyNavbar=({navItems})=>{
    return (
        <Navbar className="" sticky="top"  collapseOnSelect expand="lg" bg="light" variant="light">
        <div className="col-lg-1"/>
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <div className='col-lg-8'></div>
            <Nav className="justify-content-end">
            {navItems.map(navitem=>(
                <Nav.Link className="justify-content-end" key={navitem.name} >
                <Link className='.link' to={navitem.pathname}>{navitem.name}</Link>
                </Nav.Link>
            ))}          
            </Nav>                      
        </Navbar.Collapse>
        </Navbar>
    );
}
export default MyNavbar