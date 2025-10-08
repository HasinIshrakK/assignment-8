import React, { use } from 'react';
import { ThemeContext } from '../../App';
import { useLoaderData } from 'react-router';
import DefaultApps from '../Home/DefaultApps/DefaultApps';

const Apps = () => {

    const appsData = useLoaderData();
    const [theme] = use(ThemeContext);


    return (
        <div className={`${theme === true && 'bg-[#F1F5E8]'} p-20 pb-0`}>
            <div className='text-center'>
                <h2>
                    Our All Applications
                </h2>
                <p>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>
            <div>
                <h3>
                    ({appsData.length}) Apps Found
                </h3>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10'>
                {
                    appsData.map(
                        appData => <DefaultApps appData={appData}></DefaultApps>
                    )
                }
            </div>
        </div>
    );
};

export default Apps;