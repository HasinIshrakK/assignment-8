import React from 'react';
import downloads from '../../../assets/icon-downloads.png';
import ratings from '../../../assets/icon-ratings.png';
import { Link } from 'react-router';

const DefaultApps = ({ appData }) => {
    return (
        <Link to={`/apps/${appData.id}`}>
            <div className='p-4 border rounded-2xl'>
                <img className='rounded-lg h-64 mx-auto' src={appData.image} alt="" />
                <h3 className='my-4'>
                    {appData.title}
                </h3>
                <div className='flex justify-between items-center'>
                    <div className='btn flex gap-1.5 items-center'>
                        <img className='h-4' src={downloads} alt="Downloads" />
                        <h4 className='text-[#00D390]'>
                            {appData.downloads} M
                        </h4>
                    </div>
                    <div className='btn flex gap-1.5 items-center text-[#FF8811]'>
                        <img className='h-4' src={ratings} alt="Ratings" />
                        <h4>
                            {appData.ratingAvg}
                        </h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DefaultApps;