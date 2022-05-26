import { useEffect, useState } from 'react';
import Footer from './layouts/footer';
import Header from './layouts/header';
import './App.css';
import { IsUserLogin } from './services/login.service';

function App() {
	const [isUserLogin, setIsUserLogin] = useState(false);
	const [currentRoute, setCurrentRoute] = useState('');
	const userName: string = 'Soheb';

	useEffect(() => {
		// Update the document title using the browser API
		// const userLogin = localStorage.getItem('isUserLogin');
		// if (!userLogin) {
		// 	localStorage.setItem('isUserLogin', 'false');
		// } else {
		// 	setUserLogin(userLogin === 'true');
		// }

		setIsUserLogin(IsUserLogin());

		// // const iframe: HTMLIFrameElement = document.getElementById("iframe-mpc91") as HTMLIFrameElement;
		// // if (iframe) {
		// // 	console.log(iframe.contentWindow?.location.hostname);
		// // }

		// const inthandle1 = setInterval(() => {
		// 	casinoBalanceText === 'Casino Balance' ? setCasinoBalanceText(casinoBalance.toString()) : setCasinoBalanceText('Casino Balance');
		// }, 2500);

		// const inthandle2 = setInterval(() => {
		// 	chipBalanceText === 'Chip Balance' ? setChipBalanceText(chipBalance.toString()) : setChipBalanceText('Chip Balance');
		// }, 3000);

		// // return () => clearInterval(inthandle1);
		// return () => {
		// 	clearInterval(inthandle1);
		// 	clearInterval(inthandle2);
		// };
	}, [isUserLogin, IsUserLogin]);


	// useEffect(() => {
	// 	const inthandle1 = setInterval(() => {
	// 		setShowCasinoBalance(!showCasinoBalance);
	// 		//console.log('setShowCasinoBalance');
	// 	}, 3000);

	// 	if (currentRoute && inthandle1) {
	// 		clearInterval(inthandle1);
	// 	}

	// 	return () => clearInterval(inthandle1);
	// }, [setShowCasinoBalance, currentRoute, showCasinoBalance])


	// useEffect(() => {
	// 	const inthandle1 = setInterval(() => {
	// 		casinoBalanceText === 'Casino Balance' ? setCasinoBalanceText(casinoBalance.toString()) : setCasinoBalanceText('Casino Balance');
	// 	}, 2500);

	// 	return () => {
	// 		clearInterval(inthandle1);
	// 	};
	// }, [casinoBalanceText]);



	// useEffect(() => {
	// 	const inthandle2 = setInterval(() => {
	// 		chipBalanceText === 'Chip Balance' ? setChipBalanceText(chipBalance.toString()) : setChipBalanceText('Chip Balance');
	// 	}, 3000);

	// 	// return () => clearInterval(inthandle1);
	// 	return () => {
	// 		clearInterval(inthandle2);
	// 	};
	// }, [chipBalanceText]);


	return (
		<div className="App overflow-hidden">
			{/* <header className="App-header"></header> */}
			<Header isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin} userName={userName} />
			<main className='h-full w-screen mt-[4.625rem] lg:mt-[5rem]' >
				<iframe id="iframe-mpc91" title='MPC91.com' src='https://lobby.mpc91.com/' className={'w-screen iframe-height lg:h-screen'}></iframe>
			</main>
			<Footer isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin} currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
		</div >
	);
}

export default App;