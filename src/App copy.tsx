import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, duotone } from '@fortawesome/fontawesome-svg-core/import.macro';

import './App.css';

interface Menu {
	name: string;
	url: string;
}

function App() {
	const userName: string = 'Soheb';

	const lstGames: Menu[] = [
		{
			name: 'All Live Games',
			url: 'https://mpc91.com/casino?page_id=4'
		},
		{
			name: 'New Games',
			url: 'https://mpc91.com/casino?page_id=5'
		},
		{
			name: 'Ezugi Games',
			url: 'https://mpc91.com/casino?page_id=1'
		},
		{
			name: 'Evolution Games',
			url: 'https://mpc91.com/casino?page_id=2'
		},
		{
			name: 'From Casino',
			url: 'https://mpc91.com/casino?page_id=6'
		},
		{
			name: 'Slots',
			url: 'https://mpc91.com/casino?page_id=7'
		},
		{
			name: 'Promotions',
			url: 'https://mpc91.com/user_bonuses'
		}
	];

	const lstMore: Menu[] = [
		{
			name: 'About Us',
			url: ''
		},
		{
			name: 'Contact Us',
			url: 'javascript:;'
		},
		{
			name: 'Anti Money Laundering',
			url: 'https://mpc91.com/pages/anti'
		},
		{
			name: 'Dispute Resolution',
			url: 'https://mpc91.com/pages/dispute'
		},
		{
			name: 'Fairness',
			url: 'https://mpc91.com/pages/fairnessrng'
		},
		{
			name: 'Payout',
			url: 'https://mpc91.com/pages/payout'
		},
		{
			name: 'Privacy',
			url: 'https://mpc91.com/pages/privacy'
		},
		{
			name: 'Registration',
			url: 'https://mpc91.com/pages/registration'
		},
		{
			name: 'Responsible Gambling',
			url: 'https://mpc91.com/pages/responsiblegambling'
		},
		{
			name: 'Self Exclusion',
			url: 'https://mpc91.com/pages/selfexclusion'
		},
		{
			name: 'Terms Of Service',
			url: 'https://mpc91.com/pages/tos'
		}
	];

	const [btnMouseDown, setBtnMouseDown] = useState(false);
	const [btnShowMenu, setBtnShowMenu] = useState(false);
	const [isUserLogin, setUserLogin] = useState(false);
	const [currentRoute, setCurrentRoute] = useState('');

	const [casinoBalance, setCasinoBalance] = useState(123.55);
	const [casinoBalanceText, setCasinoBalanceText] = useState('Casino Balance');

	const [chipBalance, setChipBalance] = useState(45.55);
	const [chipBalanceText, setChipBalanceText] = useState('Chip Balance');


	const [sportsBalance, setSportsBalance] = useState(456.55);



	useEffect(() => {
		// Update the document title using the browser API
		const userLogin = localStorage.getItem('isUserLogin');
		if (!userLogin) {
			localStorage.setItem('isUserLogin', 'false');
		} else {
			setUserLogin(userLogin === 'true');
		}

		// const iframe: HTMLIFrameElement = document.getElementById("iframe-mpc91") as HTMLIFrameElement;
		// if (iframe) {
		// 	console.log(iframe.contentWindow?.location.hostname);
		// }

		const inthandle1 = setInterval(() => {
			casinoBalanceText === 'Casino Balance' ? setCasinoBalanceText(casinoBalance.toString()) : setCasinoBalanceText('Casino Balance');
		}, 2500);

		const inthandle2 = setInterval(() => {
			chipBalanceText === 'Chip Balance' ? setChipBalanceText(chipBalance.toString()) : setChipBalanceText('Chip Balance');
		}, 3000);

		// return () => clearInterval(inthandle1);
		return () => {
			clearInterval(inthandle1);
			clearInterval(inthandle2);
		};
	}, [casinoBalanceText]);


	useEffect(() => {
		const inthandle1 = setInterval(() => {
			casinoBalanceText === 'Casino Balance' ? setCasinoBalanceText(casinoBalance.toString()) : setCasinoBalanceText('Casino Balance');
		}, 2500);

		return () => {
			clearInterval(inthandle1);
		};
	}, [casinoBalanceText]);



	useEffect(() => {
		const inthandle2 = setInterval(() => {
			chipBalanceText === 'Chip Balance' ? setChipBalanceText(chipBalance.toString()) : setChipBalanceText('Chip Balance');
		}, 3000);

		// return () => clearInterval(inthandle1);
		return () => {
			clearInterval(inthandle2);
		};
	}, [chipBalanceText]);

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

	return (
		<div className="App overflow-hidden">
			<header className="App-header">

			</header>
			<main className='h-full w-screen' >
				<iframe id="iframe-mpc91" title='MPC91.com' src='https://lobby.mpc91.com/' className={'w-screen iframe-height lg:h-screen'}></iframe>
			</main>
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
							<img src='mpc333logo.png' alt='MPC91'></img>
						</div>
						{/* <div onTouchStart={() => onClickBtnLogo(true)} onTouchEnd={() => onClickBtnLogo(false)} onTouchMove={() => onClickBtnLogo(false)} onMouseDown={() => onClickBtnLogo(true)} onMouseUp={() => onClickBtnLogo(false)} onMouseLeave={() => onClickBtnLogo(false)} className={`cursor-pointer p-2 rounded-full bg-gradient-to-t from-slate-500 to-slate-900 border-t-2 border-amber-400 shadow-md shadow-amber-300 w-20 h-20 text-center flex justify-center ${!btnMouseDown ? 'btn-shadow' : 'shadow-inner'}`}>
							<img src='mpc333logo.png' alt='MPC91'></img>
						</div> */}
					</li>
					{!isUserLogin ?
						<>
							<li>
								<a onClick={() => loadPage('/register')} className={`block cursor-pointer hover:text-yellow-500 ${currentRoute.includes('/register') && 'text-yellow-400'}`}>
									{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
									</svg> */}
									<FontAwesomeIcon icon={duotone('arrow-right-to-bracket')} className="" size='2x' />
									<p>Sign Up</p>
								</a>
							</li>
							<li>
								<a onClick={() => loadPage('/login')} className={`block cursor-pointer hover:text-yellow-500 ${currentRoute.includes('/login') && 'text-yellow-400'}`}>
									{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
									</svg> */}
									<FontAwesomeIcon icon={duotone('user')} className="" size='2x' />
									<p>Sign In</p>
								</a>
							</li>
						</> :
						<>
							<li className='!basis-2/5'>
								<div style={{ 'width': 'calc(100vw - 24rem)' }} className='flex justify-start pl-2 pr-1 cursor-pointer hover:text-yellow-500 space-x-4 rounded-b-md absolute right-1 bottom-2'>
									<a onClick={() => loadPage('/wallet')} className={` ${currentRoute.includes('/wallet') && 'text-yellow-400'}`}>
										{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" className='h-6 w-6 text-yellow-400' stroke="currentColor" strokeWidth="2">
										<path d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z" />
									</svg> */}
										<FontAwesomeIcon icon={duotone('wallet')} className="" size='2x' />
										<p>Wallet</p>
									</a>
									{/* </li><li> */}
									<div className='flex flex-col items-center justify-center w-full'>
										{currentRoute.includes('/sports') &&
											<>
												<p className='text-xs text-yellow-400 font-semibold'>
													{sportsBalance}
												</p>
												<p className='text-xs text-yellow-400'>
													Sports Balance
												</p>
											</>
										}

										{!currentRoute.includes('/sports') &&
											<>
												{/* <p style={{ 'width': 'calc(100vw - 24rem)' }} className='change balance-text w-full text-xs text-gray-200 space-x-2 flex items-center justify-start'>
													<p className='text-yellow-400'>Cash</p>
													<p className='truncate'>{chipBalance}</p>
												</p>
												<p style={{ 'width': 'calc(100vw - 24rem)' }} className='change balance-text w-full text-xs text-gray-200 space-x-2 flex items-center justify-start'>
													<p className='text-yellow-400'>Bonus</p>
													<p className='truncate'>{casinoBalance}</p>
												</p> */}
												<p className='change balance-text w-full text-xs text-gray-200 space-x-2 flex flex-col items-center divide-y divide-yellow-300 divide-opacity-20'>
													<p className='text-yellow-400'>Cash</p>
													<p className='truncate'>{chipBalance}</p>
												</p>
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

								</div>

							</li>
						</>
					}
				</ul>
			</footer>


			<Transition
				show={btnShowMenu}
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div className='block lg:hidden fixed inset-0 w-screen bg-gray-300'>
					<div className='flex items-center justify-between pl-6 pr-4 py-4'>
						<h1 className='text-sm font-semibold'>Hi, {userName}</h1>
						<button onClick={() => { setBtnShowMenu(false) }} className='absolute top-1 right-1 btn-shadow bg-gradient-to-t from-gray-500 to-gray-900 w-7 h-7 cursor-pointer text-sm border-2 border-yellow-400 font-bold float-right rounded-full bg-yellow-400 text-yellow-400'>X</button>

					</div>
					<div className='flex flex-col justify-end space-y-4 mx-4'>
						<ul role="list" className="divide-y divide-gray-300 divide-opacity-50 text-left rounded-lg bg-gray-50 overflow-y-scroll shadow-md" style={{ 'height': 'calc(100vh - 28.5rem)' }}>
							{lstMore.map((menu: Menu, index: number) => (
								<li key={index}>
									<a href={menu.url} className='block px-5 py-3 cursor-pointer text-xs font-semibold uppercase hover:text-yellow-600'>{menu.name}</a>
								</li>
							))}
						</ul>
						<ul role="list" className="divide-y divide-gray-300 divide-opacity-50 text-left rounded-lg bg-gray-50 overflow-y-auto shadow">
							{lstGames.map((menu: Menu, index: number) => (
								<li key={index}>
									<a href={menu.url} className='block px-5 py-3 cursor-pointer text-xs font-semibold uppercase hover:text-yellow-600'>{menu.name}</a>
								</li>
							))}
						</ul>
					</div>

					{/* <p>ALL LIVE GAMES</p>
				<p>NEW GAMES</p>
				<p>EZUGI GAMES</p>
				<p>EVOLUTION GAMES</p>
				<p>FROM CASINO</p>
				<p>SLOTS</p>
				<p>PROMOTIONS</p> */}
				</div>
			</Transition>
		</div >
	);
}

export default App;
