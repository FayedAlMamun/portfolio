import React from 'react';

const Blogs = () => {
    const blogs=[
        {
            name:'Boost Js Tricky Things!',
            img:'blog1.png',
            des:'One can know the trciky things about js.Its very basic question answer section. Learn very basic and avoid simple mistake.',
            link:'https://fayed-al-mamun.medium.com/boost-javascript-tricky-things-24342cf118fb'
        },
        {
            name:'Introduction to React js!',
            img:'blog4.png',
            des:'Every REACT JS developer must know these things. What is raect how its actually works. Difference between react and others frameworks.',
            link:'https://fayed-al-mamun.medium.com/introduction-to-react-js-a11b9f9964b1'
        },
        {
            name:'ES6 and Try & Catch Method!',
            img:'blog3.png',
            des:'Differnce between var and let and const, what is try and catch method how it is work when one should use it, all these things are discussed here.',
            link:'https://fayed-al-mamun.medium.com/es6-and-try-catch-method-5dc7a6a48d18'
        },
        {
            name:'JavaScript Array and String!',
            img:'blog2.png',
            des:'Discussed about js and its basic things.Array , string and its various kinds of method are discussed here.',
            link:'https://fayed-al-mamun.medium.com/javascript-array-and-string-1aae6b1196da'
        },

    ]
    return (
        <div className="d-flex justify-content-center">
            <div className="row mt-5" style={{width:'90%'}}>
                {
                    blogs.map(blog => {
                        const img=require(`../../image/${blog.img}`).default
                        return [
                            <div className="col-12 col-sm-6 col-md-4 mt-5 ">
                                <img  className='card-img-top' height='200px' src={img} alt="" />
                                <div className="bg-dark text-white p-4 projects ">
                                <h6 className='text-center'>{blog.name}</h6>
                                <p>{blog.des}</p>
                                <div className="text-center">
                                <a className='text-white' href={blog.link}>
                                    <button className='btn btn-danger mt-4'>Visit--</button>
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

export default Blogs;