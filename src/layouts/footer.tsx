import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, duotone } from '@fortawesome/fontawesome-svg-core/import.macro';
import MobileMenu from './mobileMenu';
import logo from './../assets/img/mpc91logoIcon.png';

import rng from './../assets/img/rng.png';
import gc from './../assets/img/gc.png';
import plus18 from './../assets/img/18plus.png';
import rfg from './../assets/img/GR-ORG_RFG.png';
import license from './../assets/img/license.png';

import appstore from './../assets/img/app-store-EN.svg';
import googleplay from './../assets/img/google-play-EN.svg';

import { navigation } from '../constants/footer';
import { Login } from '../services/login.service';
import { toggleChat } from '../services/chat.service';

const Footer = ({ isUserLogin, setIsUserLogin, currentRoute, setCurrentRoute }: any) => {

    const [btnMouseDown, setBtnMouseDown] = useState(false);
    const [btnShowMenu, setBtnShowMenu] = useState(false);

    const currentYear = () => {
        const dt = new Date();
        return dt.getFullYear();
    }

    const loadPage = (page: string) => {
        // const iframe: HTMLIFrameElement = document.getElementById("iframe-mpc91") as HTMLIFrameElement;
        // if (iframe) {
        // 	iframe.src = `https://mpc91.com${page}`;
        // }
        setCurrentRoute(page);
    }

    const loginUser = () => {
        Login();
        setIsUserLogin(true);
    }

    const onClickBtnLogo = (isMouseDown: boolean) => {
        setBtnMouseDown(isMouseDown);
        //console.log('Mouse Down is: ', isMouseDown);
    }

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         window.Tawk_API.onLoad = () => {
    //             window.Tawk_API.hideWidget();
    //         };
    //     }
    // }, []);

    return (
        <>
            <footer className="App-footer lg:hidden fixed bottom-0 left-0 right-0 w-full z-10">
                <ul className='flex items-center m-0 px-0 pb-2 list-none border-t-2 border-yellow-400'>
                    <li>
                        <a onClick={() => loadPage('')} className={`block cursor-pointer hover:text-yellow-500 ${!currentRoute && 'text-yellow-400'}`}>
                            <FontAwesomeIcon icon={duotone('cards')} size='2x' />
                            <p>Casino</p>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => loadPage('/sports')} className={`block cursor-pointer hover:text-yellow-500 ${currentRoute.includes('/sports') && 'text-yellow-400'}`}>
                            <FontAwesomeIcon icon={duotone('dice')} size='2x' />
                            <p>Sports</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            &nbsp;
                        </a>
                    </li>
                    <li className="absolute left-0 right-0 bottom-3 mx-auto my-0 w-1/5">
                        <div onClick={() => setBtnShowMenu(!btnShowMenu)} onTouchStart={() => onClickBtnLogo(true)} onTouchEnd={() => onClickBtnLogo(false)} onTouchMove={() => onClickBtnLogo(false)} onMouseDown={() => onClickBtnLogo(true)} onMouseUp={() => onClickBtnLogo(false)} onMouseLeave={() => onClickBtnLogo(false)} className={`glow cursor-pointer p-2 rounded-full bg-gradient-to-t from-gray-500 to-gray-900 border-b-2 border-yellow-400 shadow-md shadow-yellow-300 w-20 h-20 text-center flex justify-center ${!btnMouseDown ? 'btn-shadow' : 'shadow-inner'}`}>
                            <img src={logo} alt='MPC91'></img>
                        </div>
                    </li>
                    {!isUserLogin ?
                        <li>
                            <a onClick={() => { loadPage('/login'); loginUser(); }} className={`block cursor-pointer hover:text-yellow-500 ${currentRoute.includes('/login') && 'text-yellow-400'}`}>
                                <FontAwesomeIcon icon={duotone('user')} className="" size='2x' />
                                <p>Log In</p>
                            </a>
                        </li>
                        :
                        <li>
                            <a onClick={() => loadPage('/wallet')} className={`block cursor-pointer hover:text-yellow-500 ${currentRoute.includes('/wallet') && 'text-yellow-400'}`}>
                                <FontAwesomeIcon icon={duotone('wallet')} className="" size='2x' />
                                <p>Wallet</p>
                            </a>
                        </li>
                    }
                    <li>
                        <a onClick={() => { loadPage('/support'); toggleChat(); }} className={`block cursor-pointer hover:text-yellow-500 ${currentRoute.includes('/support') && 'text-yellow-400'}`}>
                            <FontAwesomeIcon icon={duotone('headset')} className="" size='2x' />
                            <p>Support</p>
                        </a>
                    </li>
                </ul>
            </footer>
            <MobileMenu btnShowMenu={btnShowMenu} setBtnShowMenu={setBtnShowMenu} />


            <footer className="bg-gray-900 text-white hidden lg:block">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-4">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="flex flex-row xl:flex-col justify-center xl:justify-between items-center md:order-2 space-x-20 xl:space-x-0">
                            <div className='flex items-center space-x-12 xl:space-x-4'>
                                <div className='flex items-center space-x-2'>
                                    <img src={rng} alt="" className='w-[3.43rem]' />
                                    <img src={gc} alt="" className='w-[4.375rem]' />
                                </div>
                                <img src={plus18} alt="" className='w-[7.5rem]' />
                                <img src={rfg} alt="" className='w-[6.875rem]' />
                            </div>
                            <img src={license} alt="" className='w-20' />
                        </div>
                        <div className="mt-8 xl:mt-0 grid grid-cols-2 gap-8 xl:col-span-2">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-xs font-bold text-yellow-400 tracking-wider uppercase">Solutions</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        {navigation.solutions.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm font-semibold text-gray-300 hover:text-white">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-xs font-bold text-yellow-400 tracking-wider uppercase">Support</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        {navigation.support.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm font-semibold text-gray-300 hover:text-white">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-xs font-bold text-yellow-400 tracking-wider uppercase">Company</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        {navigation.company.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm font-semibold text-gray-300 hover:text-white">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-xs font-bold text-yellow-400 tracking-wider uppercase">Legal</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        {navigation.legal.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm font-semibold text-gray-300 hover:text-white">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-4 md:flex md:items-center justify-between">
                        <p className="mt-8 text-sm font-semibold text-gray-400 md:mt-0">
                            Copyright &copy; {currentYear()} <b className='text-yellow-400'>MPC91</b> | All rights reserved.
                        </p>

                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-yellow-400">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )

}

export default Footer; 