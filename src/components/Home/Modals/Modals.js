import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
const Modals = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="d-flex justify-content-center mt-3">
        <div className="">
            <Button className="btn-outline-danger btn-dark" onClick={handleShow}>
                Send a Message
            </Button>
            <Modal  show={show} onHide={handleClose}>
               <div className="modals">
               <Modal.Header closeButton>
                    <Modal.Title className='text-white'>Message Me Anytime!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method="POST" data-netlify='true' className='forms'>
                        <input type="text" required name="name" placeholder='Your Name' id="name"/><br/><br/>
                        <input type="email" required name="email" placeholder='Your Email' id="email"/><br/><br/>
                        <textarea name="message" required placeholder='Type Your Message' id="message"  rows="7"></textarea><br/><br/>
                    <button className='btn btn-danger'>
                        Send Message
                    </button>
                    </form>
                </Modal.Body>
               </div>
            </Modal>
        </div>
        <a href="https://drive.google.com/uc?export=download&id=1TI9o7epBQSc9YuapK-wDwYHmAPDdC8FE">
            <Button className='btn-danger ml-4 btn'>Download Resume</Button>
        </a>
    </div>
    
    );
};

export default Modals;