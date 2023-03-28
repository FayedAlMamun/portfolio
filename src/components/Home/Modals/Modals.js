import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Modals = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const submit=(ev)=>{
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
              form.reset();
              var div=document.getElementById('show')
              div.innerText='Message sent succesfully!'
              div.classList.add("hide")
            } 
            else{
                var error=document.getElementById('hide')
                error.innerText='Sorry!Something went Wrong!'
                error.classList.add("hide")
            }
          };
          xhr.send(data);
    }
    return (
        <div className="d-flex justify-content-center mt-3">
            <div className="">
                <Button className="btn-outline-danger btn-dark" onClick={handleShow}>
                    Send a Message
            </Button>
                <Modal show={show} onHide={handleClose}>
                    <div className="modals">
                        <Modal.Header closeButton>
                            <Modal.Title className='text-white'>Message Me Anytime!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={submit} action="https://formspree.io/f/mzbkgewg" method="POST" className='forms'>
                                <input type="text" required name="name" placeholder='Your Name' id="name" /><br /><br />
                                <input type="email" required name="email" placeholder='Your Email' id="email" /><br /><br />
                                <textarea name="message" required placeholder='Type Your Message' id="message" rows="7"></textarea><br /><br />
                                <button className='btn btn-danger'>
                                    Send Message
                                 </button>
                                 <div id='show' className='message' style={{ color: 'green' }}></div>
                                 <div id='hide' className='message' style={{ color: 'red' }}></div>
                                </form>
                        </Modal.Body>
                    </div>
                </Modal>
            </div>
            <a href="https://drive.google.com/uc?export=download&id=1U4UbgHAMP-pDwUgpXpbfN3TBumekREdS">
                <Button className='btn-danger ml-4 btn'>Download Resume</Button>
            </a>
        </div>

    );
};

export default Modals;