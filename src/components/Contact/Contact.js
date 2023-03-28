import icon from "../../image/p.jpg";
import ParticlesBg from 'particles-bg';
import React from 'react';
import './contact.css'
const Contact = () => {
    const submit = (ev) => {
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
                var div = document.getElementById('show')
                div.innerText = 'Message sent succesfully!'
                div.classList.add("hide")
            }
            else {
                var error = document.getElementById('hide')
                error.innerText = 'Sorry!Something went Wrong!'
                error.classList.add("hide")
            }
        };
        xhr.send(data);
    }
    let config = {
        num: [4, 7],
        rps: .8,
        radius: [5, 40],
        life: [5, 7],
        v: [2, 3],
        tha: [-50, 50],
        alpha: [0.6, 0],
        scale: [.1, 0.15],
        body: icon,
        position: "all",
       // color: ["random", "#ff0000"],
        cross: "dead",
        random: 10
    };
    return (
        <div className='d-flex justify-content-center align-items-center' style={{
            height: "100vh"
        }}>
            <div>
                <form onSubmit={submit} action="https://formspree.io/f/mzbkgewg" method="POST" className='contact'>
                    <input type="text" required name="name" placeholder='Your Name' id="name" /><br /><br />
                    <input type="email" required name="email" placeholder='Your Email' id="email" /><br /><br />
                    <textarea name="message" required placeholder='Type Your Message' id="message" rows="7"></textarea><br /><br />
                    <button className='btn btn-danger'>
                        Send Message
                    </button>
                    <div id='show' className='message' style={{ color: 'green' }}></div>
                    <div id='hide' className='message' style={{ color: 'red' }}></div>
                </form>
            </div>
            <ParticlesBg type="custom" config={config} bg={true} />
        </div>
    );
};

export default Contact;