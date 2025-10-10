import React from 'react';
import a from '../../assets/appstore.png';
import p from '../../assets/playstore.png';
import h from '../../assets/hero.png';
import { use } from 'react';
import { ThemeContext } from '../../App';
import { Link, useLoaderData } from 'react-router';
import DefaultApps from './DefaultApps/DefaultApps';

const Home = () => {

    const appsData = useLoaderData();
    const [theme] = use(ThemeContext);

    return (
        <div>
            <div className={`${theme === true && 'bg-[#F1F5E8]'} p-6 sm:p-20 pb-0 sm:pb-0`}>
                <h1 className={`text-center font-bold mb-4 ${theme === true && 'text-black'}`}>
                    We Build <br></br>
                    <span className='text-[#9F62F2]'>
                        Productive
                    </span> Apps
                </h1>
                <p className={`text-center ${theme === true && 'text-black'} mb-10`}>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    <br></br>
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className='flex justify-center gap-4'>
                    <a href="https://play.google.com">
                        <button className='btn flex gap-2.5'>
                            <img className='h-6' src={p} alt="Play Store" />
                            Google Play
                        </button>
                    </a>
                    <a href="https://www.apple.com/app-store">
                        <button className='btn flex gap-2.5'>
                            <img className='h-6' src={a} alt="App Store" />
                            App Store
                        </button>
                    </a>
                </div>
                <img className='mx-auto mt-10' src={h} alt="" />
            </div>
            <div className={`p-20 ${theme === true ? 'bg-linear-to-br from-[#632EE3] to-[#9F62F2]' : 'bg-linear-to-br from-[#642ee3ba] to-[#9e62f2be]'} text-white text-center`}>
                <h2 className='font-bold'>
                    Trusted by Millions, Built for You
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                    <div>
                        <h4>Total Downloads</h4>
                        <h1 className='font-extrabold'>29.5M</h1>
                        <h4>21% More Than Last Month</h4>
                    </div>
                    <div>
                        <h4>Total Reviews</h4>
                        <h1 className='font-extrabold'>906K</h1>
                        <h4>46% More Than Last Month</h4>
                    </div>
                    <div>
                        <h4>Active Apps</h4>
                        <h1 className='font-extrabold'>132+</h1>
                        <h4>31 More Will Launch</h4>
                    </div>
                </div>
            </div>
            <div className='mt-20 text-center space-y-4'>
                <h1 className='font-bold'>
                    Trending Apps
                </h1>
                <p>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 sm:p-20 my-10'>
                {
                    appsData.slice(0, 8).map(
                        appData => <DefaultApps key={appData.id} appData={appData}></DefaultApps>
                    )
                }
            </div>
            <Link to='/apps'>
                <button className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white mb-20 flex mx-auto'>
                    Show All
                </button>
            </Link>
        </div>
    );
};

export default Home;