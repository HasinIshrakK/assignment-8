import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { ThemeContext } from '../../App';
import InstalledApps from './InstalledApps/InstalledApps';
import { getStorage } from "../../Utility/DBM.js";

const Installation = () => {

    const appsData = useLoaderData();
    const [theme] = use(ThemeContext);
    const [i, setI] =useState([])
    useEffect(
        () => {
            const storage = getStorage();
            const convSTR = storage.map(id=>parseInt(id));
            const installed = appsData.filter(app=>convSTR.includes(app.id));
            setI(installed);
        }, [appsData]
    )

    return (
        <div className={`${theme === true && 'bg-[#F1F5E8]'} flex flex-col items-center py-20 px-2 text-center`}>
            <div>
                <h1 className='mt-4 mb-2 font-bold'>
                    Your Installed Apps
                </h1>
                <p className='text-center'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div>
                <h3 className='font-bold'>
                    {i.length} Apps Found
                </h3>
            </div>
            <div className={`w-full`}>
                {
                    i.map(
                        ins => <InstalledApps ins={ins}></InstalledApps>
                    )
                }
            </div>
            <Link to='/'>
                <button className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white mt-4'>
                    Go Home!
                </button>
            </Link>
        </div>
    );
};

export default Installation;