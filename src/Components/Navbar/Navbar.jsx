import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router';
import img from '../../assets/githubLogo.png'
import img2 from '../../assets/logo.png'
import { use } from 'react';
import { ThemeContext } from '../../App';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {

    const [theme, setTheme] = use(ThemeContext)

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
                    <Link to='/' className="btn btn-ghost text-xl">
                        <img className='h-8 w-8 hidden sm:block' src={img2} alt="" />
                        <h3>
                            HERO.IO
                        </h3>
                    </Link>
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
                    <button onClick={themeToggle} className='flex'>
                        <Sun data-tooltip-delay-show={300} className={` sun
                            ${theme === true || 'hidden'}
                            `}></Sun>
                        <Moon data-tooltip-delay-show={300} className={` moon
                            ${theme === true && 'hidden'}
                            `} />
                        <Tooltip anchorSelect='.sun' content='Switch to Night Mode'></Tooltip>
                        <Tooltip anchorSelect='.moon' content='Switch to Day Mode'></Tooltip>
                    </button>

                    <div className="tooltip tooltip-bottom">
                        <div className="tooltip-content">
                            <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Just Click It!</div>
                        </div>
                        <button className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white'>
                            <img className='h-4 w-4' src={img} alt="Github" />
                            <a href='https://github.com/HasinIshrakK'>Contribute</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;