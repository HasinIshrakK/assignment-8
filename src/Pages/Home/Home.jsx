import React from 'react';
import a from '../../assets/appstore.png';
import p from '../../assets/playstore.png';
import h from '../../assets/hero.png';

const Home = () => {
    return (
        <div>
            <div className='bg-[#F1F5E8] p-20 pb-0'>
                <h1 className='text-center font-bold mb-4 text-black'>
                    We Build <br></br>
                    <span className='text-[#9F62F2]'>
                        Productive
                    </span> Apps
                </h1>
                <p className='text-center text-black mb-10'>
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
            <div className='p-20 bg-linear-to-b from-[#632EE3] to-[#9F62F2] text-white text-center'>
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
        </div>
    );
};

export default Home;