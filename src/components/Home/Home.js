import React from 'react';
import Typist from 'react-typist';
import './Home.css';
import Modals from './Modals/Modals';
import FindMe from '../FindMe/FindMe';
const Home = () => {
    return (

        <div className="home bg-dark">
            <div className="d-flex justify-content-center align-items-center home-main">
                <div className='' >
                
                    <h1 className='font-size text-white text-center'>Fayed Al Mamun</h1>
                    <Typist className='typist' cursor={{ 'hideWhenDone': true, 'hideWhenDoneDelay': 0 }}>
                        <span>Engineer</span>
                        <Typist.Backspace count={8} delay={1000} />
                        <span>Web Developer</span>
                        <Typist.Backspace count={13} delay={1000} />
                        <span>Programmer</span>
                        <Typist.Backspace count={10} delay={1000} />
                        <span>Web Developer | Engineer | Programmer</span>
                    </Typist>
                    <FindMe/>
                    <Modals />
                </div>
            </div>

        </div>
    );
};
export default Home;