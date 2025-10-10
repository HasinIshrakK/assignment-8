import React, { use, useState } from 'react';
import { ThemeContext } from '../../App';
import { Link, useLoaderData } from 'react-router';
import DefaultApps from '../Home/DefaultApps/DefaultApps';

const Apps = () => {

    const appsData = useLoaderData();
    const [theme] = use(ThemeContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const onChangeFunction = e => {
        e.preventDefault();
        const val = e.target.value;
        setSearchTerm(val);
        setIsSearching(true);
        setTimeout(() => {
            setIsSearching(false);
        }, 400);
    }

    const filteredApps = appsData.filter(
        appData => appData.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className={`${theme === true && 'bg-[#F1F5E8]'} p-6 sm:p-20`}>
            <div className='text-center'>
                <h2 className='font-bold'>
                    Our All Applications
                </h2>
                <p>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold'>
                    ({filteredApps.length}) Apps Found
                </h3>
                <form className='border p-2 rounded-lg'>
                    <input type="text" onChange={onChangeFunction} placeholder='Search Apps' defaultValue={searchTerm} />
                </form>
            </div>
            {isSearching && (
                <div className='flex justify-center'>
                    <span className="loading loading-spinner text-info text-[#632EE3]"></span>
                </div>)}
            {
                !isSearching && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10'>
                    {
                        filteredApps.map(
                            appData => <DefaultApps key={appData.id} appData={appData}></DefaultApps>
                        )
                    }
                </div>
            }
            {
                !isSearching && filteredApps.length === 0 && <div className='flex flex-col mx-auto'>
                    <h1 className='font-bold mb-4 text-center'>No Apps Found</h1>
                    <button onClick={() => window.location.reload()} className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white mb-20 flex mx-auto'>
                        Show All
                    </button>
                </div>
            }
        </div>
    );
};

export default Apps;