import React, { use } from 'react';
import downloads from '../../../assets/icon-downloads.png';
import ratings from '../../../assets/icon-ratings.png';
import { ThemeContext } from '../../../App';
import { getStorage, removeFromStorage } from '../../../Utility/DBM';

const InstalledApps = ({ ins, setI }) => {

    const [theme] = use(ThemeContext);
    const handle = () => {
        removeFromStorage(ins.id);
        setI(getStorage())
    }

    return (
        <div className={`${theme === true ? 'bg-white' : 'bg-gray-700'} mx-6 sm:mx-20 rounded-2xl mt-8 mb-4`}>
            <div className='sm:flex justify-between items-center p-4'>
                <div className='md:flex gap-4 my-2'>
                    <div>
                        <img className='rounded-md h-20' src={ins.image} alt="" />
                    </div>
                    <div>
                        <div>
                            <h3 className='text-left'>
                                {ins.title}
                            </h3>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div className='flex gap-2 items-center'>
                                <img className='h-4' src={downloads} alt="" />
                                <p>
                                    {ins.downloads}
                                </p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img className='h-4' src={ratings} alt="" />
                                <p>
                                    {ins.ratingAvg}
                                </p>
                            </div>
                            <div>
                                {ins.size} MB
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => handle()} className='btn bg-[#00D390] text-white'>
                        Uninstall
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;