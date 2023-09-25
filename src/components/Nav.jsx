import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    function showMenu() {
        setMobileMenu(prevMobileMenu => !prevMobileMenu)
    }

    function hideMenu() {
        setMobileMenu(false)
    }

    return (
        <>
            <header className="padding-x py-8 absolute z-10 w-full">
                {/* <nav className="flex justify-between items-center max-container">
                <a href="">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="max-lg:block md:hidden">
                    <a href="" id='hamburger-button'>
                    <img src={hamburger} alt="Hamburger"
                        width={25}
                        height={25}
                    />
                    </a>
                </div>

            </nav> */}

                <header className="sticky top-0 z-10">
                    <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                        <div>
                            <a href="">
                                <img
                                    src={headerLogo}
                                    alt="Logo"
                                    width={130}
                                    height={29}
                                />
                            </a>
                        </div>
                        {/* <button id="hamburger-button" className="text-3xl md:hidden cursor-pointer">&#9776;
                    </button> */}
                        <div className="max-lg:block md:hidden">
                            <button onClick={showMenu} id='hamburger-button'>
                                <img src={hamburger} alt="Hamburger"
                                    width={25}
                                    height={25}
                                />
                            </button>
                        </div>

                        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href}
                                        className="font-montserrat leading-normal text-lg text-slate-gray">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                </header>
            </header>

            <section id="mobile-menu" className={`fixed bg-white top-0  z-20  w-full text-5xl flex-col origin-top animate-open-menu  ${!mobileMenu && 'hidden'} `}>
                <button onClick={hideMenu} className="text-8xl self-end px-6 text-black text-align-end">
                    &times;
                </button>

                <nav className="min-h-screen items-center py-8 mt-20">
                    <ul className="flex-1 flex flex-col justify-center items-center gap-16">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href}
                                    onClick={hideMenu}
                                    className="font-montserrat leading-normal text-2xl text-black block">
                                {item.label}
                            </a>
                            </li>
                        ))}
                </ul>
            </nav>
        </section >
        </>
    )
}

// const initApp = () => {
//     const hamburgerBtn = document.getElementById('hamburger-button')
//     const mobileMenu = document.getElementById('mobile-menu')

//     const toggleMenu = () => {
//         mobileMenu.classList.toggle('hidden')
//         mobileMenu.classList.toggle('flex')

//     }
//     hamburgerBtn.addEventListener('click', toggleMenu)
//     mobileMenu.addEventListener('click', toggleMenu)

// }

// document.addEventListener('DOMContentLoaded', initApp)


export default Nav 
