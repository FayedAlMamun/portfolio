import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
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
            <Navbar.Collapse  id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className='text-white mr-3' to='/home'> Home</Link>
                    <Link className='text-white mr-3' to='/project'>Projects</Link>
                    <Link className='text-white mr-3' to='/blog'>Blogs</Link>
                    <Link className='text-white mr-3' to='/about'>About</Link>
                    <a className='text-white mr-3' href="https://drive.google.com/file/d/1TI9o7epBQSc9YuapK-wDwYHmAPDdC8FE/view?usp=sharing">
                        <button className="btn btn-outline-danger btn-dark mr-3">
                            Resume
                        </button>
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navsbar;