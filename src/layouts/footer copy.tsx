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

const Footer = ({ isUserLogin, currentRoute, setCurrentRoute, sportsBalance, showCasinoBalance, casinoBalance, chipBalance }: any) => {

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
    const onClickBtnLogo = (isMouseDown: boolean) => {
        setBtnMouseDown(isMouseDown);
        //console.log('Mouse Down is: ', isMouseDown);
    }

    const navigation = {
        solutions: [
            { name: 'Dispute Resolution', href: 'https://mpc91.com/pages/dispute' },
            { name: 'Fairness', href: 'https://mpc91.com/pages/fairnessrng' },
            { name: 'Payout', href: 'https://mpc91.com/pages/payout' },
            { name: 'Registration', href: 'https://mpc91.com/pages/registration' },
        ],
        support: [
            { name: 'Responsible Gambling', href: 'https://mpc91.com/pages/responsiblegambling' },
            { name: 'Self Exclusion', href: 'https://mpc91.com/pages/selfexclusion' },
            { name: 'Guides', href: '#' },
            { name: 'API Status', href: '#' },
        ],
        company: [
            { name: 'About Us', href: '#' },
            { name: 'Contact Us', href: '#' },
            { name: 'Jobs', href: '#' },
            // { name: 'Press', href: '#' },
            { name: 'Partners', href: '#' },
        ],
        legal: [
            { name: 'Claim', href: '#' },
            { name: 'Privacy', href: 'https://mpc91.com/pages/privacy' },
            { name: 'Terms', href: 'https://mpc91.com/pages/tos' },
            { name: 'Anti Money Laundering', href: 'https://mpc91.com/pages/anti' },
        ],
        social: [
            {
                name: 'Facebook',
                href: '#',
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                name: 'Instagram',
                href: '#',
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                name: 'Twitter',
                href: '#',
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                ),
            }
        ],
    }

    return (
        <>
            <footer className="App-footer lg:hidden fixed bottom-0 left-0 right-0 w-full z-10">
                <ul className='flex items-center m-0 px-0 pb-2 list-none border-t-2 border-yellow-400'>
                    <li>
                        <a onClick={() => loadPage('')} className={`block cursor-pointer hover:text-yellow-500 ${!currentRoute && 'text-yellow-400'}`}>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
							</svg> */}
                            <FontAwesomeIcon icon={duotone('cards')} size='2x' />
                            <p>Casino</p>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => loadPage('/sports')} className={`block cursor-pointer hover:text-yellow-500 ${currentRoute.includes('/sports') && 'text-yellow-400'}`}>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
							</svg> */}
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
                        {/* <div onTouchStart={() => onClickBtnLogo(true)} onTouchEnd={() => onClickBtnLogo(false)} onTouchMove={() => onClickBtnLogo(false)} onMouseDown={() => onClickBtnLogo(true)} onMouseUp={() => onClickBtnLogo(false)} onMouseLeave={() => onClickBtnLogo(false)} className={`cursor-pointer p-2 rounded-full bg-gradient-to-t from-slate-500 to-slate-900 border-t-2 border-amber-400 shadow-md shadow-amber-300 w-20 h-20 text-center flex justify-center ${!btnMouseDown ? 'btn-shadow' : 'shadow-inner'}`}>
							<img src='mpc333logo.png' alt='MPC91'></img>
						</div> */}
                    </li>
                    {!isUserLogin ?
                        <>
                            <li>
                                <a onClick={() => loadPage('/login')} className={`block cursor-pointer hover:text-yellow-500 ${currentRoute.includes('/login') && 'text-yellow-400'}`}>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
									</svg> */}
                                    <FontAwesomeIcon icon={duotone('user')} className="" size='2x' />
                                    <p>Log In</p>
                                </a>

                            </li>
                            <li>
                                <a onClick={() => loadPage('/register')} className={`block cursor-pointer hover:text-yellow-500 ${currentRoute.includes('/register') && 'text-yellow-400'}`}>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
									</svg> */}
                                    <FontAwesomeIcon icon={duotone('arrow-right-to-bracket')} className="" size='2x' />
                                    <p>Sign Up</p>
                                </a>
                            </li>
                        </> :
                        <>
                            <li>
                                <a onClick={() => loadPage('/wallet')} className={`block cursor-pointer hover:text-yellow-500 ${currentRoute.includes('/wallet') && 'text-yellow-400'}`}>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" className='h-6 w-6 text-yellow-400' stroke="currentColor" strokeWidth="2">
									<path d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z" />
								</svg> */}
                                    <FontAwesomeIcon icon={duotone('wallet')} className="" size='2x' />
                                    <p>Wallet</p>
                                </a>
                            </li>
                            <li>
                                <a onClick={() => loadPage('/support')} className={`block cursor-pointer hover:text-yellow-500 ${currentRoute.includes('/support') && 'text-yellow-400'}`}>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" className='h-6 w-6 text-yellow-400' stroke="currentColor" strokeWidth="2">
									<path d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z" />
								</svg> */}
                                    <FontAwesomeIcon icon={duotone('headset')} className="" size='2x' />
                                    <p>Support</p>
                                </a>
                            </li>
                            <li className='!hidden'>
                                <div className='flex flex-col items-center justify-between w-full space-y-1 cursor-pointer pt-2.5'>
                                    {currentRoute.includes('/sports') &&
                                        <>
                                            <span className='w-full text-xs balance-text font-semibold'>
                                                {sportsBalance}
                                            </span>
                                            <span className='h-px w-full bg-yellow-400 bg-opacity-30'></span>
                                            <span className='w-full text-xs balance-text text-yellow-400'>
                                                Sports Balance
                                            </span>
                                        </>
                                    }

                                    {!currentRoute.includes('/sports') &&
                                        <>
                                            {showCasinoBalance ?
                                                <>
                                                    <span className='w-full text-xs balance-text font-semibold'>
                                                        {chipBalance}
                                                    </span>
                                                    <span className='h-px w-full bg-yellow-400 bg-opacity-30'></span>
                                                    <span className='w-full text-xs balance-text text-yellow-400'>
                                                        Chip Balance
                                                    </span>
                                                </>
                                                :
                                                <>
                                                    <span className='w-full text-xs balance-text font-semibold'>
                                                        {casinoBalance}
                                                    </span>
                                                    <span className='h-px w-full bg-yellow-400 bg-opacity-30'></span>
                                                    <span className='w-full text-xs balance-text text-yellow-400'>
                                                        Cash Balance
                                                    </span>
                                                </>
                                            }


                                            {/* <p className='w-full text-xs balance-text font-semibold'>
												{casinoBalance}
											</p>
											<p className='w-full text-xs balance-text text-yellow-400'>
												Cash Balance
											</p> */}

                                            {/* <p style={{ 'width': 'calc(100vw - 24rem)' }} className='change balance-text w-full text-xs text-gray-200 space-x-2 flex items-center justify-start'>
												<p className='text-yellow-400'>Cash</p>
												<p className='truncate'>{chipBalance}</p>
											</p>
											<p style={{ 'width': 'calc(100vw - 24rem)' }} className='change balance-text w-full text-xs text-gray-200 space-x-2 flex items-center justify-start'>
												<p className='text-yellow-400'>Bonus</p>
												<p className='truncate'>{casinoBalance}</p>
											</p> */}
                                            {/* <p className='change balance-text w-full text-xs text-gray-200 space-x-2 flex flex-col items-center divide-y divide-yellow-300 divide-opacity-20'>
												<p className='text-yellow-400'>Cash</p>
												<p className='truncate'>{chipBalance}</p>
											</p> */}
                                        </>
                                    }

                                    {/* {!currentRoute.includes('/sports') &&
									<>
										<p className='change w-1/5 balance-text absolute -top-0.5 text-xs bg-gradient-to-b from-yellow-200 to-yellow-600 rounded-bl-md px-1 py-0.5 text-gray-200'>
											{casinoBalanceText}
										</p>
										{/x* <p className='px-2 text-xs text-yellow-400 font-semibold border-l border-r border-b border-yellow-400 rounded-b-md'>
											{currentRoute.includes('/sports') ? sportsBalance : consinoBalance}
										</p> *x/}
										<p className='change w-1/5 balance-text absolute bottom-0 text-xs bg-gradient-to-t from-yellow-600 to-yellow-200 rounded-tl-md px-1 py-0.5 text-gray-200'>
											{chipBalanceText}
										</p>
									</>
								} */}
                                </div>
                            </li>
                        </>
                    }
                </ul>
            </footer>
            <MobileMenu btnShowMenu={btnShowMenu} setBtnShowMenu={setBtnShowMenu} />


            <footer className="bg-gray-900 text-white hidden lg:block">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-4">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="flex flex-col justify-between items-center md:order-2">
                            <div className='flex items-center space-x-4'>
                                <div className='flex items-center space-x-2'>
                                    <img src={rng} alt="" className='w-[3.43rem]' />
                                    <img src={gc} alt="" className='w-[4.375rem]' />
                                </div>
                                <img src={plus18} alt="" className='w-[7.5rem]' />
                                <img src={rfg} alt="" className='w-[6.875rem]' />
                            </div>

                            <img src={license} alt="" className='w-20' />

                            {/* <div className="flex space-x-6 md:order-2">
                                {navigation.social.map((item) => (
                                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-yellow-400">
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                ))}
                            </div> */}




                            {/* <h3 className="text-xs font-bold text-yellow-400 tracking-wider uppercase">
                                Subscribe to our newsletter
                            </h3>
                            <p className="mt-4 text-xs font-semibold text-gray-300">
                                The latest news, articles, and resources, sent to your inbox weekly.
                            </p>
                            <form className="mt-4 sm:flex sm:max-w-md">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    required
                                    className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                                    placeholder="Enter your email"
                                />
                                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                    <button type="submit" className="w-full text-gray-900 border border-yellow-400 rounded-md shadow transition duration-200 bg-yellow-400 hover:bg-yellow-500  py-2 px-4 flex items-center justify-center text-sm font-semibold">
                                        Subscribe
                                    </button>
                                </div>
                            </form> */}
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
                        {/* <div className='flex items-center space-x-4'>
                            <img src={appstore} alt="" />
                            <img src={googleplay} alt="" />
                        </div> */}
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