import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedinIn, faGithubAlt, faFacebookF } from '@fortawesome/free-brands-svg-icons'
const FindMe = () => {
    return (
        <div className="d-flex justify-content-center mt-3 ">
        <a className='pr-3' href="https://www.facebook.com/fabicle.fayed.9/" target="_blank">
            <FontAwesomeIcon className='icon' icon={faFacebook} />
        </a>
        <a className='pr-3' href="https://www.linkedin.com/in/fayed-al-mamun-9265b01b9/" target="_blank">
            <FontAwesomeIcon className='icon' icon={faLinkedinIn} />
        </a>
        <a className='pr-3' href="https://github.com/FayedAlMamun/" target="_blank">
            <FontAwesomeIcon className='icon' icon={faGithubAlt} />
        </a>
    </div>
    );
};

export default FindMe;