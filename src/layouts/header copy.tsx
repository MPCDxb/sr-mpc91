import { GamesMenu } from '../constants/menu';
import { MenuOption } from '../models/menu';
import logo from './../assets/img/mpc91logo.png';

const Header = ({ currentRoute, sportsBalance, casinoBalance, chipBalance }: any) => {

    return (
        <>
            <nav className="App-header p-2 mx-auto ">
                {/* <div className="container px-4 mx-auto"> */}
                <div className="flex items-center justify-between relative space-x-3">
                    <a className="inline-block" href="#">
                        <img src={logo} alt="" width="116" />
                    </a>
                    {/* <button className="lg:hidden navbar-burger">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z" fill="#000"></path>
                                </svg>
                            </button> */}
                    <div>
                        <ul className="inline-flex divide-x divide-yellow-300 divide-opacity-20">
                            {GamesMenu.map((menu: MenuOption, index: number) => (
                                <li key={index}>
                                    <a href={menu.url} className='inline-block px-3 cursor-pointer text-xs font-semibold uppercase hover:text-yellow-400'>{menu.name}</a>
                                </li>
                            ))}
                            {/* <li className="mr-8"><a className="inline-block font-bold hover:text-gray-900" aria-current="page" href="#">Home</a></li>
                                <li className="mr-8"><a className="inline-block font-bold hover:text-gray-900" href="#">Products</a></li>
                                <li className="mr-8"><a className="inline-block font-bold hover:text-gray-900" href="#">Resources</a></li>
                                <li><a className="inline-block font-bold hover:text-gray-900" href="#">Pricing</a></li> */}
                        </ul>
                    </div>
                    {/* <div className=" ml-auto"><a className="inline-block mr-8 font-bold" href="#">Log In</a><a className="inline-block px-8 py-3 text-white font-bold bg-black hover:bg-gray-900" href="#">Sign Up</a></div> */}
                    {/* <div className="flex items-center space-x-2">
                        <a className="inline-flex text-sm px-2 py-1 font-semibold text-yellow-400 border border-yellow-400 rounded shadow transition duration-200 hover:bg-yellow-400 hover:text-gray-900" href="#">Log In</a>
                        <a className="inline-flex text-sm px-2 py-1 font-semibold text-gray-900 border border-yellow-400 rounded shadow transition duration-200 bg-yellow-400 hover:bg-yellow-500 " href="#">Sign Up</a>
                    </div> */}
                    {currentRoute.includes('/sports') &&
                        <div className='flex flex-col items-center space-x-2 space-y-1 cursor-pointer'>
                            <span className='w-full text-xs balance-text font-semibold'>
                                {sportsBalance}
                            </span>
                            <span className='h-px w-full bg-yellow-400 bg-opacity-30'></span>
                            <span className='w-full text-xs balance-text text-yellow-400'>
                                Sports Balance
                            </span>
                        </div>
                    }

                    {!currentRoute.includes('/sports') &&
                        <div className='flex flex-row items-center space-x-3'>
                            <div className='flex flex-col items-center space-x-2 space-y-1 cursor-pointer'>
                                <span className='w-full text-xs balance-text text-yellow-400'>
                                    Chip Balance
                                </span>
                                <span className='h-px w-full bg-yellow-400 bg-opacity-30'></span>
                                <span className='w-full text-xs balance-text font-semibold'>
                                    {chipBalance}
                                </span>

                            </div>

                            <div className='flex flex-col items-center space-x-2 space-y-1 cursor-pointer'>
                                <span className='w-full text-xs balance-text text-yellow-400'>
                                    Cash Balance
                                </span>
                                <span className='h-px w-full bg-yellow-400 bg-opacity-30'></span>
                                <span className='w-full text-xs balance-text font-semibold'>
                                    {casinoBalance}
                                </span>
                            </div>
                        </div>
                    }
                </div>

                {/* </div> */}
            </nav>






        </>
    )
}


export default Header; 