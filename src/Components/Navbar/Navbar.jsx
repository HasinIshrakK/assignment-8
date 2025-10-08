import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';
import img from '../../assets/githubLogo.png'

const Navbar = () => {

    const [theme, setTheme] = useState(true);

    const themeToggle = () => {
        document.documentElement.setAttribute('data-theme', theme === true ? 'dark' : 'light')
        setTheme(!theme)
    };

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/apps'>
                                    Apps
                                </Link>
                            </li>
                            <li>
                                <Link to='/installation'>
                                    Installation
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">HERO.IO</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/apps'>
                                Apps
                            </Link>
                        </li>
                        <li>
                            <Link to='/installation'>
                                Installation
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <button onClick={themeToggle} className='btn flex'>
                        <Sun className={`
                            ${theme===true || 'hidden'}
                            `}></Sun>
                        <Moon className={`
                            ${theme===true && 'hidden'}
                            `} />
                    </button>
                    <button className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white'>
                        <img className='h-6 w-6' src={img} alt="Github" />
                        <a href='https://github.com/HasinIshrakK'>Contribute</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
