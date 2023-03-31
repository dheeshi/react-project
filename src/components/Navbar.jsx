import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import Logo from '../assets/Logo.png';



const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex w-full justify-between  h-20 px-4 absolute z-10 '>

            <div className='flex justify-between w-[90%] rounded-lg shadow-2xl shadow-slate-800 items-center h-24 px-28  m-6 bg-[#f5f102]'>

                <img src={Logo} alt='logo' className='md:cursor-pointer  h-40' />
                <ul className='hidden md:flex '>

                    <li className='p-5'>
                        <a href='/'>Home</a>
                    </li>

                    <li className='p-5'>
                        <a href='/news'>News</a>
                    </li>

                    <li className='p-5'>
                        <a href='transfers'>Transfers</a>
                    </li>

                    <li className='p-5'>
                        <a href='leagues'>Leagues</a>
                    </li>

                    <li className='p-5'>
                        <a href='about'>About</a>
                    </li>

                </ul>


                <div onClick={handleNav} className="p-11 block md:hidden">
                    {<FontAwesomeIcon icon={faBars} className="h-7" />}
                </div>



                <ul className={nav ? 'fixed py-5 left-0 top-0 w-full h-full border-r bg-[#f5f102] ease-in-out duration-500 ' : "fixed left-[-100%]"}>

                    <div className='flex justify-center items-center'>
                        <img src={Logo} alt='logo' className='md:cursor-pointer m-5 h-40' />

                        <div onClick={handleNav} className="h-20 p-7 block md:hidden">
                            {<FontAwesomeIcon icon={faClose} className="h-5" />}
                        </div>

                    </div>


                    <li className='p-5'>
                        <a href='/'>Home</a>
                    </li>

                    <li className='p-5'>
                        <a href='/news'>News</a>
                    </li>

                    <li className='p-5'>
                        <a href='transfers'>Transfers</a>
                    </li>

                    <li className='p-5'>
                        <a href='leagues'>Leagues</a>
                    </li>

                    <li className='p-5'>
                        <a href='about'>About</a>
                    </li>

                </ul>

            </div>
        </div>

    )
}

export default Navbar

