import React, { useState } from 'react';

import DashBoardHomePage from './DashBoardHomePage';
import NavBar from '../NavBar';

function DashBoradSliderBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menus = [
        { id: 1, name: "Home", link: "/", icons: "home" },
        { id: 2, name: "My Properties", link: "/myProprties", icons: "dashboard_customize" },
        { id: 3, name: "Profile", link: "/", icons: "person " },
       
        { id: 4, name: "Submission", link: "/submit", icons: "add" },
        { id: 5, name: "Logout", link: "/", icons: "logout" },
        {}
    ];

    return (
        <div className='flex  bg-[#390255]  md:h-screen '>
            <nav className={`bg-[#390255] ${isOpen ? "w-40" : "w-20"} sm:w-20 md:w-72 h-screen   `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between">
                        <div className="mt-10">
                            {/* <a href="#" className="text-white font-bold text-xl">Logo</a> */}
                        </div>
                        <div className="block sm:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-white hover:text-gray-300 focus:outline-none focus:text-white"
                            >
                               <span className="material-symbols-outlined">
menu
</span>
                            </button>
                        </div>
                        <div className="hidden sm:block ">
                            <div className=" flex flex-col justify-center items-center text-[#FFF848] mt-10  ">
                                {menus.map((menu, index) => (
                                    <a key={index} href={menu.link} className="text-[#FFF848]  py-2 px-2 rounded-md text-sm font-medium  hover:bg-[#FFF848]  hover:text-[#390255] flex items-center">
                                        {menu.icons && <span className="material-symbols-outlined  p-2 text-2xl">{menu.icons}</span>}
                                        <span className=' items-center text-lg'>{menu.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="sm:hidden lg:h-screen">
                        <div className="px-2 pt-2 pb-3 ">
                            {menus.map((menu, index) => (
                                <a key={index} href={menu.link} className="text-[#FFF848] block px-3 py-2 rounded-md text-base font-base">
                                    {menu.icons && <span className="material-symbols-outlined text-lg">{menu.icons}</span>}
                                    <span className='p-2'>{menu.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            <div className='p-p-7 text-2xl  font-semibold flex-1  bg-purple-100'>
                <NavBar />
               
                <DashBoardHomePage />
            </div>
        </div>
    );
}

export default DashBoradSliderBar;
