import React, { use } from 'react';
import img from '../../assets/App-Error.png'
import { Link } from 'react-router';
import { ThemeContext } from '../../App';

const AppError = () => {

        const [theme] = use(ThemeContext);

    return (
        <div className={`${theme === true && 'bg-[#F1F5E8]'} flex flex-col items-center py-20 px-2`}>
            <img src={img} alt="404 Error" />
            <h1 className='mt-4 mb-2'>
                OOPS!! APP NOT FOUND
            </h1>
            <h3 className='text-center'>
                The App you are requesting is not found on our system. Please try another apps
            </h3>
            <Link to='/apps/'>
                <button className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white mt-4'>
                    Go Back To All Apps!
                </button>
            </Link>
        </div>
    );
};

export default AppError;