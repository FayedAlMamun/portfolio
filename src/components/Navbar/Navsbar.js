import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Navsbar = () => {
    return (
        <Navbar bg="dark" expand="lg"style={{
            position:'relative',
            top:'0',
            right:'0'
        }}>
            <Navbar.Brand className='text-white' href="#home">Fayed Al Mamun</Navbar.Brand>
            <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className=''  id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className='text-white mt-2 mr-5' to='/home'> Home</Link>
                    <Link className='text-white mt-2 mr-5' to='/project'>Projects</Link>
                    <Link className='text-white mt-2 mr-5' to='/blog'>Blogs</Link>
                    <Link className='text-white mt-2 mr-5' to='/contact'>Contact</Link>
                    <Link className='text-white mt-2 mr-5' to='/about'>About</Link>
                    <a className='text-white mt-2 mr-5' href="https://drive.google.com/file/d/1U4UbgHAMP-pDwUgpXpbfN3TBumekREdS/view?usp=sharing">
                        <button className="btn btn-outline-danger btn-dark">
                            Resume
                        </button>
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navsbar;