import React, { use } from 'react';
import img from '../../assets/error-404.png'
import { Link } from 'react-router';
import { ThemeContext } from '../../App';

const ErrorPages = () => {

        const [theme] = use(ThemeContext);

    return (
        <div className={`${theme === true && 'bg-[#F1F5E8]'} flex flex-col items-center py-20 px-2`}>
            <img src={img} alt="404 Error" />
            <h1 className='mt-4 mb-2'>
                Oops, page not found!
            </h1>
            <h3 className='text-center'>
                The page you are looking for is not available.
            </h3>
            <Link to='/'>
                <button className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white mt-4'>
                    Go Home!
                </button>
            </Link>
        </div>
    );
};

export default ErrorPages;