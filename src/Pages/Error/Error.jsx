import React from 'react';
import img from '../../assets/error-404.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col items-center my-20 mx-2'>
            <img src={img} alt="404 Error" />
            <h1 className='mt-4 mb-2'>
                Oops! Something went wrong.
            </h1>
            <h3 className='text-center'>
                Try going home
            </h3>
            <Link to='/'>
                <button className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white mt-4'>
                    Go Home!
                </button>
            </Link>
        </div>
    );
};

export default Error;