import React from 'react';
import About from '../About/About';
import './Projects.css';
const Projects = () => {
    const project = [
        {
            name: 'Creative Agency',
            img: "agency.png",
            pic:'https://i.ibb.co/RNdGXfm/agency.png',
            des: 'A full stack application.In random user panel,one can resigter and see his/her registered services.In Admin panel one can see all the registered services,one can add new services.',
            tech: 'React,Node js,MongoDb',
            github: 'https://github.com/FayedAlMamun/creative-agency-client',
            link: 'https://godfathers-creative-agency.web.app'
        },
        {
            name: 'Volunteer Network',
            img: 'volunteer.png',
            des: 'A full stack application.In random user panel,one can resigter and see his/her participate in various work.In Admin panel one can see all the participation,one can add new works.',
            tech: 'React,Node js,MongoDb',
            github: 'https://github.com/FayedAlMamun/volunteer-network-client',
            link: 'https://godfather-s-volunteers.web.app/'
        },
        {
            name: 'Hot Onion',
            img: 'hot.png',
            des: 'A  client side application.One can order his/her favourite foods.One can see his/her cart.One can descrease or increase quantity.One can see his/her total expense.',
            tech: 'React,Javascript,Bootstrap',
            github: 'https://github.com/FayedAlMamun/hot-onion',
            link: 'https://hot-godfather-s-resturent.web.app'
        },
        {
            name: 'Travel Guru',
            img: 'travel.png',
            des: 'A client side application.One can see details of various travelling places.They can book hotel.',
            tech: 'React,Javascript,Bootstrap',
            github: 'https://github.com/FayedAlMamun/travel-guru',
            link: 'https://xd-travel-guru.web.app'
        },
        {
            name: 'Hard Rock',
            img: 'rock.png',
            des: 'A client side application.One can Search for any song.And he/she can see the lyrics of that song',
            tech: 'React,Javascript,Bootstrap',
            github: 'https://github.com/FayedAlMamun/hard-rock',
            link: 'fayedalmamun.github.io/hard-rock/'
        },
        {
            name: 'Social Buddy',
            img: 'social.png',
            des: 'A client side application.One can add freiend.See ones post and comments ',
            tech: 'React,Node js,MongoDb',
            github: 'https://github.com/FayedAlMamun/creative-agency-client',
            link: 'https://godfathers-creative-agency.web.app'
        },
    ]
    return (
        <div className="d-flex justify-content-center">
            <div className="row mt-5" style={{width:'90%'}}>
                {
                    project.map(project => {
                        const img=require(`../../image/${project.img}`).default
                        return [
                            <div className="col-12 col-sm-6 col-md-4 mt-5 ">
                                <img  className='card-img-top' height='200px' src={img} alt="" />
                                <div className="bg-dark text-white p-4 projects ">
                                <h6 className='text-center'>{project.name}</h6>
                                <p>{project.des}</p>
                                <div className="text-center">
                                <a className='text-white ' href={project.github}>
                                    <button className='btn btn-outline-danger btn-dark'>Github</button>
                                </a><br/>
                                <a className='text-white' href={project.link}>
                                    <button className='btn btn-danger mt-4'>Vist Website</button>
                                </a>
                                </div>
                                </div>
                            </div>
                        ]
                    })
                }
            </div>
        </div>
    );
};

export default Projects;