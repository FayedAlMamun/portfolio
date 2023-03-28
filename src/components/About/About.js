import React from 'react';
import img from '../../image/fyd.jpg';
import AddMessenger from '../AddMessenger/AddMessenger';
import FindMe from '../FindMe/FindMe';
import Modals from '../Home/Modals/Modals';
import Particles from '../ParticlesBg/Particle/Particle';
import './About.css';
const About = () => {
    return (

        <div className="home">        
            <div className="d-flex justify-content-center align-items-center home-main" >
                <div className=''>
                    <h1 className='font-size text-white text-center'>Fayed Al Mamun</h1>
                    <div className="text-center  ">
                    <img className='rounded-circle w-25'  src={img} alt="" />
                <p className='text-center text-white'>Love to learn new things. Passionate to solve real life (programming) problems. <br/> Comfortable with React js, Javascript,ES6.<br/> Learning new things in daily, drives me to be a quick learner.<br/> I love to take challenges & want to prove my qualities. Able to work as an independent and team environments. </p>
                    </div>
                    <FindMe />
                    <Modals />
                </div>
            </div>
            <AddMessenger/>
            <Particles/>
        </div>
    );
};

export default About;