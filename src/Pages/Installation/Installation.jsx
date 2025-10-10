import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { ThemeContext } from '../../App';
import InstalledApps from './InstalledApps/InstalledApps';
import { getStorage } from "../../Utility/DBM.js";

const Installation = () => {

    const appsData = useLoaderData();
    const [theme] = use(ThemeContext);
    const [i, setI] = useState([]);
    const [sort, setSort] = useState("");

    const onSort = (type) => {
        setSort(type)
        if (type === "(High-Low)") {
            const s = [...i].sort((a, b) => b.downloads - a.downloads);
            setI(s);
        } else {
            const s = [...i].sort((a, b) => a.downloads - b.downloads);
            setI(s);
        }
    }

    useEffect(
        () => {
            const storage = getStorage();
            const installed = appsData.filter(app => storage.includes(app.id));
            setI(installed);
        }, [appsData]
    )

    return (
        <div className={`${theme === true && 'bg-[#F1F5E8]'} flex flex-col items-center py-20 px-2`}>
            <div>
                <h1 className='mt-4 mb-2 font-bold text-center'>
                    Your Installed Apps
                </h1>
                <p className='text-center'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className='flex justify-between items-center w-full p-6 sm:px-20'>
                <div>
                    <h3 className='font-bold'>
                        {i.length} Apps Found
                    </h3>
                </div>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1"> {sort ? 'Sorted By Downloads: ' + sort : "Sort By Downloads"}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => onSort("(High-Low)")}>High-Low</a></li>
                        <li><a onClick={() => onSort("(Low-High)")}>Low-High</a></li>
                    </ul>
                </div>
            </div>
            <div className={`w-full`}>
                {
                    i.map(
                        ins => <InstalledApps appsData={appsData} key={ins.id} setI={setI} ins={ins}></InstalledApps>
                    )
                }
            </div>
            <Link to='/apps/'>
                {
                    i.length === 0 && <div className='flex flex-col mx-auto'>
                        <h1 className='font-bold mb-4 text-center'>No Installed Apps Found</h1>
                        <button className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white mb-20 flex mx-auto'>
                            Show All Apps
                        </button>
                    </div>
                }
            </Link>
        </div>
    );
};

export default Installation;