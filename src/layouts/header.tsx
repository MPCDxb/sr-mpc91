import { Fragment, useEffect, useState } from 'react';
import { GamesMenu } from '../constants/menu';
import { MenuOption } from '../models/menu';
import logo from './../assets/img/mpc91logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, duotone, thin, light } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Menu, Transition } from '@headlessui/react';

import { Login, Logout } from './../services/login.service';
import { toggleChat } from './../services/chat.service';

const Header = ({ isUserLogin, setIsUserLogin, userName }: any) => {
    const [casinoBalance, setCasinoBalance] = useState(123.55);
    const [bonusBalance, setBonusBalance] = useState(45.55);
    const [sportsBalance, setSportsBalance] = useState(456.55);

    return (
        <nav className="App-header py-1 mx-auto shadow shadow-yellow-600">
            <div className="flex items-center justify-between relative space-x-3 px-2 w-full">
                <a className="inline-block" href="#">
                    <img src={logo} alt="" width="116" />
                </a>

                {!isUserLogin &&
                    <div className='flex items-center justify-end space-x-3'>
                        <button className="hidden lg:inline-flex text-sm px-2 py-1 font-semibold text-yellow-400 border border-yellow-400 rounded shadow transition duration-200 hover:bg-yellow-400 hover:text-gray-900" onClick={() => { Login(); setIsUserLogin(true); }}>Log In</button>
                        <a className="inline-flex text-sm px-2 py-1 font-semibold text-gray-900 border border-yellow-400 rounded shadow transition duration-200 bg-yellow-400 hover:bg-yellow-500 " href="#">Sign Up</a>
                    </div>
                }
                {isUserLogin &&

                    <div className='flex items-center space-x-5'>
                        <button onClick={() => { toggleChat(); }}
                            className='hidden lg:flex items-center space-x-2 text-yellow-400 hover:text-yellow-600'>
                            <FontAwesomeIcon icon={duotone('user-headset')} size='lg' />
                            <p className='text-sm font-semibold'>Support</p>
                        </button>

                        <div className='hidden md:flex items-center rounded-full bg-yellow-500 bg-opacity-30 shadow-lg text-yellow-500 py-1 divide-x divide-yellow-500 divide-opacity-30'>
                            <div className='flex items-center space-x-1 px-3'>
                                <p className='text-xs '>
                                    Casino
                                </p>
                                <p className='text-xs font-semibold text-yellow-300'>
                                    {casinoBalance}
                                </p>
                            </div>
                            <div className='flex items-center space-x-1 px-3'>
                                <p className='text-xs '>
                                    Bonus
                                </p>
                                <p className='text-xs font-semibold text-yellow-300'>
                                    {bonusBalance}
                                </p>
                            </div>
                            <div className='flex items-center space-x-1 px-3'>
                                <p className='text-xs '>
                                    Sports
                                </p>
                                <p className='text-xs font-semibold text-yellow-300'>
                                    {sportsBalance}
                                </p>
                            </div>
                        </div>
                        <button className='flex items-center text-yellow-500 hover:text-yellow-600 text-sm font-semibold hover:underline'>
                            Deposit
                        </button>
                        {/* <button className='flex items-center text-yellow-500'>
                            <FontAwesomeIcon icon={duotone('circle-user')} size='lg' />
                        </button> */}

                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center rounded-md pr-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    <FontAwesomeIcon icon={duotone('circle-user')} size='2x' />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="">
                                        <Menu.Item>
                                            <p className='w-full text-sm rounded-t-md font-semibold px-2 py-1 bg-yellow-500 text-gray-900'>{userName}</p>
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1 md:hidden">
                                        <Menu.Item>
                                            <div className='flex items-center justify-around text-gray-900 w-full'>
                                                <div className='flex flex-col items-center'>
                                                    <small className='text-xs font-semibold'>Casino</small>
                                                    <small className='text-sm font-semibold'>{casinoBalance}</small>
                                                </div>
                                                <p className='h-7 w-px bg-yellow-500 bg-opacity-50'></p>
                                                <div className='flex flex-col items-center'>
                                                    <small className='text-xs font-semibold'>Bonus</small>
                                                    <small className='text-sm font-semibold'>{bonusBalance}</small>
                                                </div>
                                            </div>
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1 md:hidden">
                                        <Menu.Item>
                                            <div className='flex items-center justify-around text-gray-900 w-full'>
                                                <div className='flex flex-col items-center'>
                                                    <small className='text-xs font-semibold'>Sports</small>
                                                    <small className='text-sm font-semibold'>{sportsBalance}</small>
                                                </div>
                                                {/* <p className='h-7 w-px bg-yellow-500 bg-opacity-50'></p>
                                                <div>
                                                    <small className='font-semibold'>Bonus</small>
                                                    <p className='text-sm'>{bonusBalance}</p>
                                                </div> */}
                                            </div>
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-yellow-500 text-white' : 'text-gray-900'
                                                        } flex w-full items-center justify-start rounded-md px-2 py-2`}>
                                                    <FontAwesomeIcon className="w-5 h-5 mr-2" icon={regular('sliders')} size="lg" />
                                                    <p className='text-sm font-semibold'>Account Settings</p>
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-yellow-500 text-white' : 'text-gray-900'
                                                        } flex w-full items-center justify-start rounded-md px-2 py-2`}
                                                >
                                                    <FontAwesomeIcon className="w-5 h-5 mr-2" icon={regular('money-bill-1')} size="lg" />
                                                    <p className='text-sm font-semibold'>Withdraw</p>
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-yellow-500 text-white' : 'text-gray-900'
                                                        } flex w-full items-center justify-start rounded-md px-2 py-2`}
                                                >
                                                    <FontAwesomeIcon className="w-5 h-5 mr-2" icon={regular('file-lines')} size="lg" />
                                                    <p className='text-sm font-semibold'>Account Statement</p>
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button onClick={() => { Logout(); setIsUserLogin(false); }}
                                                    className={`${active ? 'bg-yellow-500 text-white' : 'text-gray-900'
                                                        } flex w-full items-center justify-start rounded-md px-2 py-2`}
                                                >
                                                    <FontAwesomeIcon className="w-5 h-5 mr-2" icon={regular('right-from-bracket')} size="lg" />
                                                    <p className='text-sm font-semibold'>Logout</p>
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>


                    </div>


                    // <div className='flex flex-row items-center justify-center lg:justify-between w-full lg:w-auto space-x-20 lg:space-x-5'>
                    //     {/* <div className='flex items-center sm:space-x-7 space-x-3'> */}
                    //     <div >
                    //         <p className='w-full text-xs balance-text text-yellow-400'>
                    //             Casino Balance
                    //         </p>
                    //         <p className='w-full text-sm balance-text font-bold text-left'>
                    //             {casinoBalance}
                    //         </p>
                    //     </div>
                    //     <div >
                    //         <p className='w-full text-xs balance-text text-yellow-400'>
                    //             Bonus Balance
                    //         </p>
                    //         <p className='w-full text-sm balance-text font-bold text-left'>
                    //             {bonusBalance}
                    //         </p>
                    //     </div>
                    //     {/* </div> */}
                    //     <div>
                    //         <p className='w-full text-xs balance-text text-yellow-400'>
                    //             Sports Balance
                    //         </p>
                    //         <p className='w-full text-sm balance-text font-bold text-left'>
                    //             {sportsBalance}
                    //         </p>
                    //     </div>
                    // </div>
                }
            </div>
            <div className='hidden lg:block'>
                <ul className="flex items-center ml-28 divide-x divide-yellow-300 divide-opacity-20">
                    {GamesMenu.map((menu: MenuOption, index: number) => (
                        <li key={index}>
                            <a href={menu.url} className='inline-block px-3 cursor-pointer text-xs font-semibold uppercase hover:text-yellow-400'>{menu.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav >
    )
}


export default Header; 