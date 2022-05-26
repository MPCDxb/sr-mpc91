import { Transition } from '@headlessui/react';
import { GamesMenu, OtherMenu } from '../constants/menu';
import { MenuOption } from '../models/menu';

import rng from './../assets/img/rng.png';
import gc from './../assets/img/gc.png';
import plus18 from './../assets/img/18plus.png';
import rfg from './../assets/img/GR-ORG_RFG.png';
import license from './../assets/img/license.png';


const MobileMenu = ({ btnShowMenu, setBtnShowMenu }: any) => {
    //const userName: string = 'Soheb';

    return (
        <Transition
            show={btnShowMenu}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className='z-10 block lg:hidden fixed inset-0 w-screen bg-gray-300 overflow-y-auto space-y-4'>
                {/* style={{ 'height': 'calc(100vh - 8rem)' }}> */}
                <div className='flex items-center justify-between pl-6 pr-4'>
                    {/* <h1 className='text-sm font-semibold'>Hi, {userName}</h1> */}
                    <button onClick={() => { setBtnShowMenu(false) }} className='fixed top-1.5 right-1.5 btn-shadow bg-gradient-to-t from-gray-500 to-gray-900 w-7 h-7 cursor-pointer text-sm border-2 border-yellow-400 font-bold float-right rounded-full bg-yellow-400 text-yellow-400'>X</button>

                </div>
                <div className='flex flex-col justify-end space-y-4 mx-11'>
                    <ul role="list" className="divide-y divide-gray-300 divide-opacity-50 text-left rounded-lg bg-gray-50 overflow-y-scroll overflow-x-hidden shadow-md" style={{ 'height': 'calc(100vh - 28.5rem)' }}>
                        {OtherMenu.map((menu: MenuOption, index: number) => (
                            <li key={index}>
                                <a href={menu.url} className='block px-5 py-3 transition hover:translate-x-1 cursor-pointer text-xs font-semibold uppercase hover:text-yellow-600'>{menu.name}</a>
                            </li>
                        ))}
                    </ul>
                    <ul role="list" className="divide-y divide-gray-300 divide-opacity-50 text-left rounded-lg bg-gray-50 overflow-y-auto  overflow-x-hidden shadow-md">
                        {GamesMenu.map((menu: MenuOption, index: number) => (
                            <li key={index}>
                                <a href={menu.url} className='block px-5 py-3 transition hover:translate-x-1 cursor-pointer text-xs font-semibold uppercase hover:text-yellow-600'>{menu.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-col items-center justify-center space-x-6 px-3 py-8 bg-gray-900'>
                    <div className='flex items-center justify-around w-full space-x-8 px-4'>
                        <img src={plus18} alt="" className='w-[7.5rem]' />
                        <img src={rfg} alt="" className='w-[6.875rem]' />
                    </div>
                    <div className='flex items-center justify-center w-full space-x-5 px-2'>
                        <div className='flex items-center space-x-3'>
                            <img src={rng} alt="" className='w-[3.43rem]' />
                            <img src={gc} alt="" className='w-[4.375rem]' />
                        </div>
                        <img src={license} alt="" className='w-16' />
                    </div>
                </div>
            </div>

        </Transition>
    )
}

export default MobileMenu; 