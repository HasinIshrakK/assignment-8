import React, { useState } from 'react';
import downloads from '../../assets/icon-downloads.png';
import ratings from '../../assets/icon-ratings.png';
import reviews from '../../assets/icon-review.png';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import setToStorage from '../../Utility/DBM';
import AppError from '../Error/AppError';

const AppDetails = () => {

    const [isDisabled, setIsDisabled] = useState(false)
    const install = (id) => {
        setIsDisabled(true);
        setToStorage(id);
    }
    const { id } = useParams();
    const appsData = useLoaderData();
    const [appData] = appsData.filter(appData => appData.id == id)
    if (!appData) {
        return <AppError></AppError>
    }

    return (
        <div className='p-20'>
            <div className='flex gap-10 flex-col md:flex-row border-b-2 border-gray-200 pb-8'>
                <img className='md:w-1/5' src={appData.image} alt={appData.title} />
                <div className='flex-1'>
                    <h2 className='font-bold'>
                        {appData.title}
                    </h2>
                    <p className='mb-8 text-[#627382] border-b-2 border-gray-200 pb-8'>
                        Developed By <span className='text-[#632EE3]'>{appData.companyName}</span>
                    </p>
                    <div className='flex gap-6 flex-col sm:flex-row my-8'>
                        <div>
                            <img className='h-8 mb-1' src={downloads} alt="" />
                            <h4>
                                Downloads
                            </h4>
                            <h1 className="font-bold">
                                {appData.downloads}
                            </h1>
                        </div>
                        <div>
                            <img className='h-8 mb-1' src={ratings} alt="" />
                            <h4>
                                Average Ratings
                            </h4>
                            <h1 className="font-bold">
                                {appData.ratingAvg}
                            </h1>
                        </div>
                        <div>
                            <img className='h-8 mb-1' src={reviews} alt="" />
                            <h4>
                                Total Reviews
                            </h4>
                            <h1 className="font-bold">
                                {appData.reviews}
                            </h1>
                        </div>
                    </div>
                    <button disabled={isDisabled} onClick={() => { install(appData.id) }} className='btn bg-[#00D390] text-white'>
                        {
                            isDisabled ? 'Installed' : 'Install Now ( ' + appData.size +  ' MB)'
                        }
                    </button>
                    <p className=''></p>
                </div>
            </div>
            <div className='my-20'>
                <h3 className='font-bold mb-6'>
                    Ratings
                </h3>
                <ResponsiveContainer width='100%' height={300}>
                    <BarChart layout='vertical' width={150} height={40} data={appData.ratings}>
                        <XAxis type='number' />
                        <YAxis reversed={true} dataKey='name' type='category'></YAxis>
                        <Tooltip></Tooltip>
                        <defs>
                            <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#632EE3" />
                                <stop offset="100%" stopColor="#9F62F2" />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar activeBar={<Rectangle fill="indigo" stroke="blue" />} dataKey="count" fill="url(#barGradient)" radius={[0, 8, 8, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h3 className='font-bold mb-6'>
                    Description
                </h3>
                <p className='text-[#627382]'>
                    {appData.description}
                </p>
            </div>
        </div>
    );
};

export default AppDetails;